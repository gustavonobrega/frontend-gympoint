import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 34px auto;

  form {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    height: 307px;
    background: #fff;
    padding: 10px 30px 30px 30px;
    border-radius: 4px;

    strong {
      color: #444;
      margin-top: 20px;
    }

    input {
      height: 45px;
      padding: 0 15px;
      margin-top: 8px;
      border: solid 1px #ddd;
      border-radius: 4px;
      font-size: 16px;
    }

    & > div {
      display: flex;

      & > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-right: 16px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
    color: #444;
  }

  div {
    display: flex;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      height: 36px;
      padding: 0 16px;
      transition: background 0.2s;

      &:first-child {
        background: #ccc;

        &:hover {
          background: ${darken(0.06, '#ccc')};
        }
      }

      &:last-child {
        background: #ee4d64;
        margin-left: 16px;

        &:hover {
          background: ${darken(0.06, '#ee4d64')};
        }
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;
