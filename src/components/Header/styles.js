import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border: solid 1px #ddd;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid #ddd;
    }

    ul {
      display: flex;
      font-size: 15px;
      font-weight: bold;
      color: #999;

      li {
        margin-right: 20px;

        a {
          color: #999;
        }

        a:active {
          color: #444;
        }
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: right;

    strong {
      color: #666;
    }

    button {
      background: none;
      border: 0;
      margin-top: 4px;
      color: #de3b3b;
    }
  }
`;
