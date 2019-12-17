import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import { formatPrice } from '~/util/format';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Table } from './styles';

export default function ListPlan() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlan() {
      try {
        const response = await api.get('/plans');

        const data = response.data.map(plan => ({
          ...plan,
          priceFormatted: formatPrice(plan.price),
          durationFormatted: `${plan.duration} ${
            plan.duration > 1 ? 'Meses' : 'Mês'
          }`,
        }));

        setPlans(data);
      } catch (err) {
        toast.error('Não foi possível carregar os planos');
      }
    }
    loadPlan();
  }, []);

  async function handlePlanDelete({ id }) {
    if (window.confirm('Tem certeza que dessa remover este plano ?'))
      try {
        await api.delete(`/plans/${id}`);

        setPlans(plans.filter(plan => plan.id !== id));
        toast.success('Plano removido com sucesso!');
      } catch (err) {
        toast.error('Erro ao deletar o plano');
      }
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando planos</strong>

        <button type="button" onClick={() => history.push('/plans/new')}>
          <MdAdd size={20} color="#fff" />
          CADASTRAR
        </button>
      </header>

      <Table>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/ MÊS</th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id}>
              <td>{plan.title}</td>
              <td>{plan.durationFormatted}</td>
              <td>{plan.priceFormatted}</td>
              <td>
                <button
                  type="button"
                  onClick={() => history.push(`/plans/${plan.id}`)}
                >
                  editar
                </button>
                <button type="button" onClick={() => handlePlanDelete(plan)}>
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
