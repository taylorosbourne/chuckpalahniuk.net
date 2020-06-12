import styled from 'styled-components';

export const BannerImage = styled.img`
  width: 100%;
  border-radius: 5px;
  filter: grayscale(80%);
  transition: 0.8s ease;
  border-left: 8px solid rgb(105,128,221);
  border-bottom: 8px solid rgb(105,128,221);
  :hover {
    filter: grayscale(0%);
  }
`;

export const ChuckQuote = styled.blockquote`
  border-radius: 5px;
  color: rgb(242,242,242);
  background: rgb(105,128,221);
  padding: 5px;
  position: absolute;
  top: -5vw;
  right: -6vw;
  font-size: 1.75rem;
  width: 300px;
  p {
    margin: 0;
    padding: 0;
  }
  cite {
  display: block;
  margin-top: 1.65rem;
  font-size: 1rem;
  text-align: right;
}
`;
