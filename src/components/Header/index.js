import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { SignOut } from '~/store/modules/auth/actions';

import { Container, Content } from './styles';

import logo from '~/assets/logo-header.svg';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(SignOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />

          <ul>
            <li>
              <Link to="/dashboard">ALUNOS</Link>
            </li>
            <li>
              <Link to="/plans">PLANOS</Link>
            </li>
            <li>
              <Link to="/">MATRÍCULAS</Link>
            </li>
            <li>
              <Link to="/">PEDIDOS DE AUXÍLIO</Link>
            </li>
          </ul>
        </nav>

        <aside>
          <strong>{profile.name}</strong>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
