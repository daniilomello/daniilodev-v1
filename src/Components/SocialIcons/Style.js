import styled from 'styled-components';

export const IconsWrapper = styled.nav`
  margin: 2rem auto;
  width: 25rem;
  position: fixed;
  left: 1.5rem;
  top: 32.3rem;
  display: flex;
  justify-content: space-between;
  transform: rotate(-90deg);
  transform-origin: left;
  transition: 0.5s ease;
  opacity: 0.1;
  &:hover {
    transition: 0.5s ease;
    opacity: 1;
  }
`;

export const IconsList = styled.ul`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const IconsItem = styled.li`
  font-size: 1rem;
  display: flex;
  align-items: center;
  span {
    display: block;
    width: 70px;
    height: 1px;
    background: #ccd6f6;
    margin-right: 1rem;
  }
  a {
    font-size: 0.8rem;
    color: #ccd6f6;
    transition: 0.5s ease;
    text-decoration: none;
    letter-spacing: 0.1rem;
    transform: translateY(0);
    svg {
      width: 1.5rem;
      height: 1.5rem;
      transform: rotate(90deg);
    }
    &:hover {
      color: #64ffda;
      transition: 0.5s ease;
      transform: translateY(5px);
    }
  }
`;
