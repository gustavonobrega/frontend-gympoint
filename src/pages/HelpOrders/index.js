import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Form, Textarea } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';

import { Container, Table, AnswerModal, Footer, NoContent } from './styles';

const schema = Yup.object().shape({
  answer: Yup.string().required('Campo obrigatório'),
});

export default function HelpOrders() {
  const [helpOrders, setHelpOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    async function loadHelpOrders() {
      try {
        const { data } = await api.get('/help-orders', {
          params: { page },
        });

        setTotalPage(data.lastPage);
        setHelpOrders(data.helpOrder);
      } catch (err) {
        toast.error('Não foi possível carregar os pedidos de auxílio');
      }
    }
    loadHelpOrders();
  }, [page]);

  function openModal() {
    setModalIsOpen(true);
  }

  function handleAnswer(helpOrder) {
    setSelectedOrder(helpOrder);
    openModal();
  }

  async function hanldeSubmitAnswer(data) {
    try {
      await api.put(`help-orders/${selectedOrder.id}/answer`, data);

      toast.success('Pedido de ajuda respondido com sucesso!');

      setHelpOrders(
        helpOrders.filter(helpOrder => helpOrder.id !== selectedOrder.id)
      );

      setModalIsOpen(false);
    } catch (err) {
      toast.error('Não foi possível responder este pedido de ajuda');
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
      <AnswerModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <span>
          <strong>PERGUNTE AO ALUNO</strong>
          <p>{selectedOrder && selectedOrder.question}</p>
        </span>
        <Form onSubmit={hanldeSubmitAnswer} schema={schema}>
          <strong>SUA RESPOSTA</strong>
          <Textarea
            name="answer"
            type="text"
            placeholder="Sua resposta..."
            onChange={e =>
              setSelectedOrder({
                ...selectedOrder,
                answer: e.target.value,
              })
            }
          />

          <button type="submit">Responder aluno</button>
        </Form>
      </AnswerModal>

      <header>
        <strong>Pedidos de auxílio</strong>
      </header>

      {helpOrders.length ? (
        <Table>
          <thead>
            <tr>
              <th>ALUNO</th>
            </tr>
          </thead>
          <tbody>
            {helpOrders.map(helpOrder => (
              <tr key={helpOrder.id}>
                <td>{helpOrder.student.name}</td>
                <td>
                  <button type="button" onClick={() => handleAnswer(helpOrder)}>
                    responder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <NoContent>
          <strong>Nenhum Pedido de auxílio encontrado</strong>
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
