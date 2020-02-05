import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { parseISO, addMonths } from 'date-fns';
import { toast } from 'react-toastify';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import MyDatePicker from '~/components/MyDatePicker';
import MyCurrencyInput from '~/components/CurrencyInput';

import { Container, Header, StudentPicker, PlanPicker } from './styles';

const schema = Yup.object().shape({
  student: Yup.mixed().required('Aluno é obrigatório'),
  plan: Yup.mixed().required('Plano é obrigatório'),
  start_date: Yup.date()
    .typeError('Data inválida')
    .required('Data de início é obrigatório'),
});

export default function FormRegistration({ match }) {
  const { id } = match.params;

  const [registration, setRegistration] = useState({});
  const [plans, setPlans] = useState([]);
  const [students, setStudents] = useState([]);

  function getPlans() {
    return api.get('plans');
  }

  function getStudents() {
    return api.get('students');
  }

  function getRegistrations() {
    return api.get(`registrations/${id}`);
  }

  useEffect(() => {
    async function loadPage() {
      if (id) {
        const myPlans = getPlans();
        const myRegistrations = getRegistrations();
        const MyStudents = getStudents();

        const plansData = (await myPlans).data;
        const registrationsData = (await myRegistrations).data;
        const studentsData = (await MyStudents).data;

        setPlans(plansData.plans);
        setStudents(studentsData.students);
        setRegistration({
          ...registrationsData,
          start_date: parseISO(registrationsData.start_date),
          end_date: parseISO(registrationsData.end_date),
        });
      } else {
        const myPlans = getPlans();
        const MyStudents = getStudents();

        const plansData = (await myPlans).data;
        const studentsData = (await MyStudents).data;

        setPlans(plansData.plans);
        setStudents(studentsData.students);
      }
    }

    loadPage();
  }, []); //eslint-disable-line

  function handleStartDate(newDate) {
    setRegistration({
      ...registration,
      start_date: newDate,
      end_date: registration.plan
        ? addMonths(newDate, registration.plan.duration)
        : null,
    });
  }

  function handlePlanChange(newPlan) {
    setRegistration({
      ...registration,
      plan: newPlan,
      end_date: registration.start_date
        ? addMonths(registration.start_date, newPlan.duration)
        : null,
      price: newPlan.price * newPlan.duration,
    });
  }

  function handleStudentChange(newStudent) {
    setRegistration({
      ...registration,
      student: newStudent,
    });
  }

  async function handleSubmit(data) {
    if (id) {
      const apiData = {
        ...data,
        student_id: data.student.id,
        plan_id: data.plan.id,
        date: data.start_date,
      };

      try {
        await api.put(`/registrations/${id}`, apiData);

        toast.success('Matrícula editada com sucesso!');

        history.push('/registrations');
      } catch (err) {
        toast.error(
          'Erro ao editar esta matrícula, verifique os dados novamente!'
        );
      }
    } else {
      try {
        const apiData = {
          ...data,
          student_id: data.student.id,
          plan_id: data.plan.id,
          date: data.start_date,
        };
        await api.post(`/registrations`, apiData);

        toast.success('Matrícula criada com sucesso!');

        history.push('/registrations');
      } catch (err) {
        toast.error(
          'Erro ao criar nova matrícula, verifique os dados novamente!'
        );
      }
    }
  }

  return (
    <Container>
      <Header>
        <strong>{id ? 'Editar matrícula' : 'Cadastrar matrícula'}</strong>

        <div>
          <button type="button" onClick={() => history.push('/registrations')}>
            <MdKeyboardArrowLeft size={20} color="#fff" />
            VOLTAR
          </button>
          <button type="submit" form="form">
            <MdDone size={20} color="#fff" />
            SALVAR
          </button>
        </div>
      </Header>

      <Form
        initialData={registration}
        onSubmit={handleSubmit}
        schema={schema}
        id="form"
      >
        <strong>ALUNO</strong>
        <StudentPicker
          name="student"
          options={students}
          onChange={handleStudentChange}
          placeholder="Buscar aluno"
        />

        <div>
          <div>
            <strong>PLANO</strong>
            <PlanPicker
              name="plan"
              options={plans}
              onChange={handlePlanChange}
              placeholder="Selecione o plano"
            />
          </div>
          <div>
            <strong>DATA DE INÍCO</strong>
            <MyDatePicker name="start_date" onChange={handleStartDate} />
          </div>
          <div>
            <strong>DATA DE TÉRMINO</strong>
            <MyDatePicker name="end_date" disabled />
          </div>
          <div>
            <strong>VALOR FINAL</strong>
            <MyCurrencyInput name="price" prefix="R$ " disabled />
          </div>
        </div>
      </Form>
    </Container>
  );
}

FormRegistration.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
