import styled from 'styled-components';

export const Button = styled.button`
  margin: 0 5px 0 0;
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
  @media(max-width: 600px) {
    margin: 5px 0px 0px 0px;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 46%;
  margin: 10px 0;
  img {
    -webkit-box-shadow: 0 8px 6px -6px rgb(28,30,36);
	     -moz-box-shadow: 0 8px 6px -6px rgb(28,30,36);
	          box-shadow: 0 8px 6px -6px rgb(28,30,36);
  }
  @media(max-width: 1100px) {
    max-width: 98%;
    flex-direction: column;
    img  {
      margin-bottom: 15px;
    }
  }
  @media(max-width: 600px) {
    img  {
      max-width: 98%;
      min-width: 98%;
    }
  }
`;
