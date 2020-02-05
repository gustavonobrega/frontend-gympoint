import styled from 'styled-components';
import { darken } from 'polished';
import MySelect from '~/components/MySelect';

export const Container = styled.div`
  max-width: 900px;
  margin: 34px auto;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 24px auto;
    padding: 10px 30px 30px 30px;
    background: #fff;
    border-radius: 4px;

    strong {
      margin-top: 20px;
      font-size: 16px;
      color: #444444;
    }

    input {
      padding: 0 13px;
      height: 45px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-top: 8px;

      &:disabled {
        background: #f5f5f5;
      }

      ::placeholder {
        font-size: 16px;
      }
    }

    span {
      margin: 5px 3px 0;
      color: #dc143c;
    }

    & > div {
      display: flex;

      & > div {
        display: flex;
        flex: 1;
        flex-direction: column;

        &:first-child {
          margin-right: 16px;
        }

        &:last-child {
          margin-right: 16px;
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
      border-radius: 4px;
      width: 112px;
      height: 36px;
      padding: 0 8px;
      font-weight: bold;
      color: #fff;
      transition: background 0.2s;

      &:first-child {
        background: #cccccc;
        margin-right: 16px;

        &:hover {
          background: ${darken(0.06, '#cccccc')};
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

export const StudentPicker = styled(MySelect)`
  margin-top: 8px;
  font-size: 16px;

  .react-select__control {
    max-height: 45px;
    display: flex;
    align-items: initial;
    .react-select__value-container {
      padding-right: 730px;
      input {
        height: auto;
      }
    }
  }
`;

export const PlanPicker = styled(MySelect)`
  margin-top: 8px;
  font-size: 16px;
  .react-select__control {
    border: 1px solid #dddddd;
    .react-select__value-container {
      height: 43px;
    }
  }
`;
