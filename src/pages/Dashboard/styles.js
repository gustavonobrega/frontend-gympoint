import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  margin: 34px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
      color: #444;
    }

    div {
      display: flex;

      a {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 36px;
        padding: 0 16px;
        border-radius: 4px;
        background: #ee4d64;
        font-weight: bold;
        color: #fff;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.05, '#ee4d64')};
        }

        svg {
          margin-right: 8px;
        }
      }

      input {
        width: 237px;
        margin-left: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding-left: 20px;
      }
    }
  }
`;

export const Table = styled.table`
  margin-top: 24px;
  width: 100%;
  border-radius: 4px;
  background: #fff;
  padding: 30px;
  font-size: 16px;

  thead th {
    text-align: left;
    color: #444;
    line-height: 20px;

    &:nth-child(3) {
      text-align: center;
    }
  }

  tbody td {
    border-bottom: 1px solid #eee;
    padding: 16px 0;
    color: #666;

    &:nth-child(1) {
      width: 400px;
    }

    &:nth-child(3) {
      text-align: center;
    }

    &:last-child {
      width: 250px;
      text-align: right;
    }

    button {
      background: none;
      border: 0;
      font-size: 16px;

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
