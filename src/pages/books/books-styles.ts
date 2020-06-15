import styled from 'styled-components';

export const Button = styled.button`
  margin: 0 5px;
  font-size: 1.15rem;
  text-align: center;
  background: rgb(61,65,77);
  padding: 10px 20px;
  border: 0;
  border-left: 3px solid rgb(105,128,221);
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Bebas Neue', sans-serif;
  @media(max-width: 1100px) {
    margin: 5px 0;
  }
`;

export const LatestContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 auto;
  @media(max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    div {
      min-width: 98%;
      max-width: 98%;
    }
  }
  @media(max-width: 600px) {
    div {
      flex-direction: column;
    }
    img {
      margin-bottom: 15px;
      min-width: 98%;
      max-width: 98%;
    }
  }
`;

export const TabContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media(max-width: 1100px) {
    flex-wrap: wrap;
  }
`;

export const Tab = styled.button<{isActive: boolean}>`
  font-size: 2rem;
  padding: 10px 20px;
  background: ${props => props.isActive ? 'rgb(28,30,36)' : 'none'};
  color: #fff;
  border: 0;
  border-left: ${props => props.isActive ? '5px solid rgb(105,128,221)' : '5px solid rgb(61,65,77)'};
  font-family: 'Bebas Neue', sans-serif;
  cursor: pointer;
  :hover {
    color: rgb(105,128,221);
  }
  :focus {
    outline: none;
    border-left: 5px solid rgb(105,128,221);
    background: rgb(28,30,36);
  }
`;

export const BookCardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  @media(max-width: 1100px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
