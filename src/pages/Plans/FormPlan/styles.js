import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 34px auto;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 24px auto;
    background: #fff;
    padding: 10px 30px 30px 30px;
    border-radius: 4px;

    strong {
      color: #444;
      margin-top: 20px;
    }

    input {
      height: 45px;
      border: solid 1px #ddd;
      border-radius: 4px;
      margin-top: 8px;

      &:disabled {
        background: #f5f5f5;
      }
    }

    & > div {
      display: flex;

      & > div {
        display: flex;
        flex: 1;
        flex-direction: column;
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
      justify-content: space-around;
      padding: 0 8px;
      height: 36px;
      width: 112px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      transition: background 0.2s;

      &:first-child {
        background: #ccc;
        margin-right: 16px;

        &:hover {
          background: ${darken(0.06, '#ccc')};
        }
      }

      &:last-child {
        background: #ee4d64;

        &:hover {
          background: ${darken(0.06, '#ee4d64')};
        }
      }
    }
  }
`;
