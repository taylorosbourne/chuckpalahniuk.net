import styled from 'styled-components';

export const BannerImage = styled.img`
  width: 100%;
  border-radius: 5px;
  filter: grayscale(80%);
  transition: 0.3s ease;
  :hover {
    filter: grayscale(0%);
  }
`;
