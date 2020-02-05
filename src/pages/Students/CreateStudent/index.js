import React from 'react';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Header } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  age: Yup.number()
    .typeError('Valor inválido')
    .required('Idade é obrigatório'),
  weight: Yup.number()
    .typeError('Valor inválido')
    .required('Peso é obrigatório'),
  height: Yup.number()
    .typeError('Valor inválido')
    .required('Altura é obrigatório'),
});

export default function CreateStudent() {
  async function handleSubmit(data) {
    try {
      await api.post('students', data);

      toast.success('Cadastro realizado com sucesso!');

      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro ao realizar o cadastro, verifique os dados novamente');
    }
  }

  return (
    <Container>
      <Header>
        <strong>Cadastro de aluno</strong>

        <div>
          <button type="button" onClick={() => history.push('/dashboard')}>
            <MdKeyboardArrowLeft fontSize={20} color="#fff" />
            VOLTAR
          </button>
          <button type="submit" form="form">
            <MdDone fontSize={20} color="#fff" />
            SALVAR
          </button>
        </div>
      </Header>

      <Form onSubmit={handleSubmit} id="form" schema={schema}>
        <strong>NOME COMPLETO</strong>
        <Input name="name" type="text" placeholder="Gustavo Nobrega" />
        <strong>ENDEREÇO DE E-MAIL</strong>
        <Input name="email" type="email" placeholder="exemplo@gmail.com" />
        <div>
          <div>
            <strong>IDADE</strong>
            <Input name="age" type="number" />
          </div>
          <div>
            <strong>PESO (em kg)</strong>
            <Input name="weight" type="number" step="0.01" />
          </div>
          <div>
            <strong>ALTURA</strong>
            <Input name="height" type="number" step="0.01" />
          </div>
        </div>
      </Form>
    </Container>
  );
}
