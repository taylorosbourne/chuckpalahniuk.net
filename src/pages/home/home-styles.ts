import styled from 'styled-components';

export const HeadImageContainer = styled.section`
  width: 100vw;
  margin: 0px 0;
  padding: 0;
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

export const CardContainer = styled.div`
  transform: scale(0.98);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media(max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    * {
      min-width: 88%;
      margin: 10px auto;
    }
    a {
      text-align: center;
    }
  }
`;

export const Card = styled.div<{imgUrl: string}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: ${props => `url('${props.imgUrl}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 32.5%;
  height: 500px;
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    border: 0;
    background: rgb(105,128,221);
    color: #fff;
    padding: 10px 20px;
    font-size: 2.35rem;
    font-family: 'Bebas Neue', cursive;
    cursor: pointer;
    :hover {
      background: rgb(85,108,201);
    }
  }
`;

export const Mark = styled.mark<{fontSize: string, mobileFontSize: string}>`
  margin: 5px 25px;
  padding: 10px 22px;
  font-size: ${props => props.fontSize};
  max-width: 60%;
  color: #fff;
  border-left: 8px solid rgb(105,128,221);
  background: rgba(28,30,36,0.75);
  @media(max-width: 900px) {
    font-size: ${props => props.mobileFontSize};
  }
`;

export const BannerHeader = styled.header`
  position: absolute;
  top: 5px;
  left: 0px;
  margin: 10px -10px;
  text-align: center;
  padding: 10px;
  background-color: rgb(28,30,36);
  border-right: 8px solid rgb(105,128,221);
  color: white;
  width: 50%;
  height: 50px;
  font-size: 3rem;
  :before, :after {
    content:'';
    border-top: 10px solid rgb(105,128,221);
    position: absolute;
    bottom: -10px;
  }
  :before {
    border-left: 10px solid transparent;
    left: 0;
  }
`;