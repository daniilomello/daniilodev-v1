import styled from 'styled-components';

export const AboutElement = styled.div`
  position: relative;
  figure {
    width: 9.375rem;
    height: 9.375rem;
    border-radius: 9.375rem;
    overflow: hidden;
    margin-bottom: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  h1 {
    font-size: 2rem;
    margin: 0.2rem 0;
    font-weight: 600;
    color: #ccd6f6;
  }
  h2,
  p,
  li {
    font-size: 1.125rem;
    font-weight: 400;
  }
  h2 {
    margin-bottom: 0.8rem;
    font-weight: 500;
    color: #ccd6f6;
  }

  p {
    margin: 0.5rem 0;
    color: #66708d;
    strong {
      display: block;
      font-weight: 500;
      color: #ccd6f6;
      margin-top: 1.5rem;
    }
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    li {
      margin-bottom: 0.8rem;
      color: #66708d;
      span {
        color: #64ffda;
      }
    }
  }
`;
