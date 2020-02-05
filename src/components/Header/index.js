import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
              <NavLink to="/dashboard">ALUNOS</NavLink>
            </li>
            <li>
              <NavLink to="/plans">PLANOS</NavLink>
            </li>
            <li>
              <NavLink to="/registrations">MATRÍCULAS</NavLink>
            </li>
            <li>
              <NavLink to="/helporders">PEDIDOS DE AUXÍLIO</NavLink>
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
