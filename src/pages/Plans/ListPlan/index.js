import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import { formatPrice } from '~/util/format';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Table, Footer, NoContent } from './styles';

export default function ListPlan() {
  const [plans, setPlans] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    async function loadPlan() {
      try {
        const { data } = await api.get('/plans', {
          params: { page },
        });

        const dataPlans = data.plans.map(plan => ({
          ...plan,
          priceFormatted: formatPrice(plan.price),
          durationFormatted: `${plan.duration} ${
            plan.duration > 1 ? 'Meses' : 'Mês'
          }`,
        }));

        setTotalPage(data.lastPage);
        setPlans(dataPlans);
      } catch (err) {
        toast.error('Não foi possível carregar os planos');
      }
    }
    loadPlan();
  }, [page]);

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

  function handlePreviousPage() {
    setPage(page - 1);
  }

  function handleNextPage() {
    setPage(page + 1);
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

      {plans.length ? (
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
      ) : (
        <NoContent>
          <strong>Nenhum plano encontrado</strong>
        </NoContent>
      )}
      <Footer>
        <button
          disabled={page === 1}
          type="button"
          onClick={handlePreviousPage}
        >
          Anterior
        </button>
        <button
          disabled={page === totalPage}
          type="button"
          onClick={handleNextPage}
        >
          Próximo
        </button>
      </Footer>
    </Container>
  );
}
