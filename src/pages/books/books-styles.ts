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