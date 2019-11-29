import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  height: 448px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  img {
    margin-top: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    strong {
      text-align: left;
      padding: 0 32px;
      font-weight: bold;
      color: #444;
      margin-top: 10px;
    }

    input {
      border-radius: 4px;
      border: solid 1px #ddd;
      height: 45px;
      margin: 5px 30px;
      padding: 0 15px;
      font-size: 16px;
    }

    span {
      color: #ee4d64;
      margin-top: 5px;
      font-weight: bold;
    }

    button {
      height: 45px;
      margin: 10px 30px;
      border-radius: 4px;
      background-color: #ee4d64;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#ee4d64')};
      }
    }
  }
`;
