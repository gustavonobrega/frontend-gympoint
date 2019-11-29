import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { Container, Table, NoContent } from './styles';

export default function Dashboard() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudent] = useState([]);

  useEffect(() => {
    async function loadStudent() {
      try {
        const response = await api.get('students', {
          params: { queryName: studentName },
        });

        setStudent(response.data);
      } catch (err) {
        toast.error('Não foi possível carregar os alunos');
      }
    }
    loadStudent();
  });

  function handleChangeStudent(e) {
    setStudentName(e.target.value);
  }

  async function handleDelete({ id }) {
    if (window.confirm('Tem certeza que deseja deletar este aluno ?'))
      try {
        await api.delete(`/students/${id}`);

        toast.success('Aluno removido com sucesso!');
      } catch (err) {
        toast.error('Erro ao remover o aluno');
      }
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando alunos</strong>

        <div>
          <Link to="/students/new">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </Link>
          <input
            name="studentName"
            type="text"
            placeholder="Buscar aluno"
            onChange={handleChangeStudent}
          />
        </div>
      </header>

      {students.length ? (
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => history.push(`/students/${student.id}`)}
                  >
                    editar
                  </button>
                  <button type="button" onClick={() => handleDelete(student)}>
                    apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <NoContent>
          <strong>Nenhum aluno encontrado</strong>
        </NoContent>
      )}
    </Container>
  );
}
