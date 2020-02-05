import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Header } from './styles';

import CurrencyInput from '~/components/CurrencyInput';

const schema = Yup.object().shape({
  title: Yup.string().required('Título é obrigatório'),
  duration: Yup.number()
    .typeError('Valor inválido')
    .required('Duração é obrigatório'),
  price: Yup.number()
    .typeError('Valor inválido')
    .required('Preço é obrigatório'),
});

export default function FormPlan({ match }) {
  const { id } = match.params;

  const [plan, setPlan] = useState({});

  useEffect(() => {
    async function loadPlan() {
      try {
        const { data } = await api.get(`plans/${id}`);

        setPlan({
          ...data,
          total: data.duration * data.price,
        });
      } catch (err) {
        toast.error('Plano não encontrado!');
      }
    }
    if (id) {
      loadPlan();
    }
  }, [id]);

  async function handleSubmit(data) {
    if (id) {
      try {
        await api.put(`/plans/${id}`, data);
        toast.success('Plano editado com sucesso!');

        history.push('/plans');
      } catch (err) {
        toast.error('Erro ao editar este plano, verifique os dados novamente!');
      }
    } else {
      try {
        await api.post('/plans', data);

        toast.success('Plano criado com sucesso!');

        history.push('/plans');
      } catch (err) {
        toast.error('Erro ao criar novo plano, verifique os dados novamente!');
      }
    }
  }

  function handleDuration(newDuration) {
    setPlan({
      ...plan,
      duration: newDuration,
      total: plan.price * newDuration,
    });
  }

  function handlePrice(newPrice) {
    setPlan({
      ...plan,
      price: newPrice,
      total: plan.duration * newPrice,
    });
  }

  return (
    <Container>
      <Header>
        <strong>{id ? 'Edição de plano' : 'Cadastro de plano'}</strong>

        <div>
          <button type="button" onClick={() => history.push('/plans')}>
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
        onSubmit={handleSubmit}
        initialData={plan}
        schema={schema}
        id="form"
      >
        <strong>TÍTULO DO PLANO</strong>
        <Input name="title" type="text" />

        <div>
          <div>
            <strong>DURAÇÃO (em meses)</strong>
            <Input
              name="duration"
              type="number"
              onChange={e => handleDuration(e.target.value)}
            />
          </div>
          <div>
            <strong>PREÇO MENSAL</strong>
            <CurrencyInput name="price" prefix="R$ " onChange={handlePrice} />
          </div>
          <div>
            <strong>PREÇO TOTAL</strong>
            <CurrencyInput name="total" prefix="R$ " disabled />
          </div>
        </div>
      </Form>
    </Container>
  );
}

FormPlan.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
