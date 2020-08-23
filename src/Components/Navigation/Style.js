import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  padding-top: 1rem;
`;
export const NavItem = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 1.3rem 1.5rem;
  background: #182a45;
  border-radius: 5px;
  margin-bottom: 2rem;
  border: 1px solid transparent;
  transform: translateY(0);
  transition: 0.5s ease;

  h6 {
    font-size: 0.5625rem;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    color: #64ffda;
    font-weight: 100;
  }
  h1 {
    color: #ccd6f6;
    font-size: 1.5rem;
    margin: 0.4rem 0;
    font-weight: 500;
  }
  p {
    color: #66708d;
    font-size: 0.875rem;
    font-weight: 500;
  }
  &:hover {
    box-shadow: 0 0 20px 6px rgb(100 255 218 / 0.05);
    border: 1px solid #64ffda;
    transition: 0.5s ease;
    transform: translateY(-10px);
    h6,
    p {
      opacity: 0.2;
    }
  }
`;

export const NavItemA = styled.a`
  text-decoration: none;
  display: block;
  padding: 1.3rem 1.5rem;
  background: #182a45;
  border-radius: 5px;
  margin-bottom: 2rem;
  border: 1px solid transparent;
  transform: translateY(0);
  transition: 0.5s ease;

  h6 {
    font-size: 0.5625rem;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    color: #64ffda;
    font-weight: 100;
  }
  h1 {
    color: #ccd6f6;
    font-size: 1.5rem;
    margin: 0.4rem 0;
    font-weight: 500;
  }
  p {
    color: #66708d;
    font-size: 0.875rem;
    font-weight: 500;
  }
  &:hover {
    box-shadow: 0 0 20px 6px rgb(100 255 218 / 0.05);
    border: 1px solid #64ffda;
    transition: 0.5s ease;
    transform: translateY(-10px);
    h6,
    p {
      opacity: 0.2;
    }
  }
`;
