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
  h1 {
    font-size: 2.5rem;
    font-weight: 300;
  }
`;
