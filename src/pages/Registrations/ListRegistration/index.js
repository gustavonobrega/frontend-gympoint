import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import { MdAdd, MdCheckCircle } from 'react-icons/md';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Table, Footer, NoContent } from './styles';

export default function ListRegistration() {
  const [registrations, setRegistrations] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    async function loadRegistrations() {
      try {
        const { data } = await api.get('/registrations', {
          params: { page },
        });

        const dataRegistrations = data.registrations.map(registration => ({
          ...registration,
          dateFormattedBegin: format(
            parseISO(registration.start_date),
            "dd 'de' MMMM 'de' yyyy",
            { locale: pt }
          ),
          dateFormattedEnd: format(
            parseISO(registration.end_date),
            "dd 'de' MMMM 'de' yyyy",
            { locale: pt }
          ),
        }));

        setTotalPage(data.lastPage);
        setRegistrations(dataRegistrations);
      } catch (err) {
        toast.error('Não foi possível carregar as matrículas');
      }
    }
    loadRegistrations();
  }, [page]);

  async function handleRegristationDelete({ id }) {
    if (window.confirm('Tem certeza que dessa remover esta matrícula ?'))
      try {
        await api.delete(`/registrations/${id}`);

        setRegistrations(
          registrations.filter(registration => registration.id !== id)
        );
        toast.success('Matrícula removida com sucesso!');
      } catch (err) {
        toast.error('Erro ao deletar a matrícula');
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
        <strong>Matrículas</strong>

        <button
          type="button"
          onClick={() => history.push('/registrations/new')}
        >
          <MdAdd size={20} color="#fff" />
          CADASTRAR
        </button>
      </header>
      {registrations.length ? (
        <Table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration.id}>
                <td>{registration.student.name}</td>
                <td>{registration.plan.title}</td>
                <td>{registration.dateFormattedBegin}</td>
                <td>{registration.dateFormattedEnd}</td>
                <td>
                  {registration.active ? (
                    <MdCheckCircle size={20} color="#42cb59" />
                  ) : (
                    <MdCheckCircle size={20} color="#dddddd" />
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      history.push(`/registrations/${registration.id}`)
                    }
                  >
                    editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRegristationDelete(registration)}
                  >
                    apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <NoContent>
          <strong>Nenhuma matrícula encontrada</strong>
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
