import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
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
      color: #fff;
      padding: 0 8px;
      font-weight: bold;
      background-color: #ee4d64;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#ee4d64')};
      }
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  margin: 24px auto;
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  thead th {
    text-align: left;
    color: #444;
    font-size: 16px;

    &:nth-child(2) {
      text-align: center;
    }

    &:nth-child(3) {
      text-align: center;
    }
  }

  tbody td {
    color: #666;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    padding: 20px 0;

    &:nth-child(1) {
      width: 300px;
    }

    &:nth-child(2) {
      width: 240px;
      text-align: center;
    }

    &:nth-child(3) {
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
