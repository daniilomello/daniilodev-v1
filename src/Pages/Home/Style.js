import styled from 'styled-components';

export const HomePage = styled.main`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
  overflow: hidden;
  @media (max-width: 62.5rem) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;
