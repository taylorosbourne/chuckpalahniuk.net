import styled from 'styled-components';

export const Logo = styled.div`
  width: 96%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
  }
  a#header {
      color: #fff;
  }
  a {
    text-decoration: none;
    h1 {
      font-size: 2.5rem;
      font-weight: 300;
      cursor: pointer;
      padding-bottom: 15px;
    }
  }
`;
