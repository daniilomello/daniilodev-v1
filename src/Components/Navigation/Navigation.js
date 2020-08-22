import React from 'react';
import { Nav, NavItem } from './Style';

export const Navigation = () => {
  return (
    <Nav>
      <NavItem to="/projects">
        <h6>Veja Meus</h6>
        <h1>Artigos</h1>
        <p>Artigos que escrevi sobre desenvolvimento e mais.</p>
      </NavItem>
      <NavItem to="/projects">
        <h6>Veja Meus</h6>
        <h1>Projetos</h1>
        <p>Veja os projetos que eu desenvolvi ou participei.</p>
      </NavItem>
      <NavItem to="/process">
        <h6>Entenda meu</h6>
        <h1>Processo</h1>
        <p>Saiba como é meu processo de desenvolvimento e design.</p>
      </NavItem>
      <NavItem to="/contact">
        <h6>Fale comigo</h6>
        <h1>Contato</h1>
        <p>Posso te ajudar de alguma forma?</p>
      </NavItem>
      <NavItem to="/resume">
        <h6>Veja Meu</h6>
        <h1>Currículo</h1>
        <p>Saiba mais sobre minha carreira até aqui.</p>
      </NavItem>
    </Nav>
  );
};
