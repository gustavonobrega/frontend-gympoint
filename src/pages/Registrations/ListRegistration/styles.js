import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1380px;
  margin: 34px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
      color: #444;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 36px;
      width: 142px;
      border-radius: 4px;
      background-color: #ee4d64;
      color: #fff;
      font-weight: bold;
      padding: 0 8px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#ee4d64')};
      }
    }
  }
`;

export const Table = styled.table`
  margin: 24px auto;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  thead th {
    text-align: left;
    font-size: 16px;
    color: #444;

    &:nth-child(2) {
      text-align: center;
    }

    &:nth-child(3) {
      text-align: center;
    }

    &:nth-child(4) {
      text-align: center;
    }

    &:nth-child(5) {
      text-align: center;
    }
  }

  tbody td {
    padding: 20px 0 16px;
    font-size: 16px;
    color: #666;
    border-bottom: 1px solid #eee;

    &:nth-child(1) {
      width: 313px;
    }

    &:nth-child(2) {
      width: 190px;
      text-align: center;
    }

    &:nth-child(3) {
      text-align: center;
    }

    &:nth-child(4) {
      text-align: center;
    }

    &:nth-child(5) {
      text-align: center;
    }

    &:last-child {
      text-align: right;
    }

    button {
      font-size: 15px;
      background: none;
      border: 0;

      &:first-child {
        color: #4d85ee;
        margin-right: 23px;
      }

      &:last-child {
        color: #de3b3b;
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
