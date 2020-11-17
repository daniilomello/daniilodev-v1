import styled from 'styled-components'

const Link = styled.a`
  color: ${props => props.corTexto || "white"};
  text-decoration: none;
  position: relative;
  display: inline-block;
  font-size: 18px;
  z-index: 5;
  padding: 0 5px;
  &::after {
    content: '';
    width: 100%;
    height: 3px;
    background: #64FFDA;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: translateY(28px);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #0a192f;
    &::after {
      height: 30px;
      transform: translateY(0);
      transition: all 0.3s ease;
    }
  }
`

export default Link