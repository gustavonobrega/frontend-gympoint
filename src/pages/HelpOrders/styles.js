import styled from 'styled-components';
import Modal from 'react-modal';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 34px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: right;

    strong {
      font-size: 24px;
      color: #444444;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  background: #ffffff;
  border-radius: 4px;
  padding: 30px;
  margin-top: 24px;
  font-size: 16px;

  thead th {
    text-align: left;
    color: #444444;
  }

  tbody td {
    padding: 20px 0;
    color: #666666;
    border-bottom: 1px solid #eee;

    &:last-child {
      text-align: right;
    }

    button {
      border: 0;
      color: #4d85ee;
      font-size: 15px;
    }
  }
`;

export const AnswerModal = styled(Modal)`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 30px;
  border-radius: 4px;

  span {
    strong {
      color: #444;
    }

    p {
      margin-top: 8px;
      font-size: 16px;
      color: #666;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    strong {
      color: #444;
    }

    textarea {
      margin-top: 8px;
      height: 127px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 13px;
      font-size: 16px;
      resize: none;
    }

    span {
      margin: 5px 3px 0;
      color: #dc143c;
    }

    button {
      margin-top: 21px;
      border: 0;
      background: #ee4d64;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      height: 45px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#ee4d64')};
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 20px;

  button {
    height: 35px;
    padding: 0 16px;
    margin: 0 10px;
    border-radius: 4px;
    color: #ee4d64;
    font-weight: bold;

    &:hover {
      background: #ee4d64;
      color: #ffffff;
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;
      background: #fff;
      color: #ee4d64;
    }
  }
`;

export const NoContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 50px;

  strong {
    font-size: 18px;
    color: #444;
  }
`;
