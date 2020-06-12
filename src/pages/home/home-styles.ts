import styled from 'styled-components';

export const HeadImageContainer = styled.section`
  width: 100vw;
  margin: 10px 0;
  padding: 0;
  animation: 1.5s fadeIn ease-in;
  filter: grayscale(50%);
  @keyframes fadeIn {
    0% {opacity: 0.25};
    100% {opacity: 1};
  }
  div cite {
    font-size: 2rem;
    padding: 10px 22px;
    color: rgb(105,128,221);
  }
`;