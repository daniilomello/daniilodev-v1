import React from 'react';
import { Nav, NavItem, NavItemA } from './navigation.style';

export const Navigation = () => {
  return (
    <Nav>
      <NavItem to="/projects">
        <h6>Veja Meus</h6>
        <h1>Projetos</h1>
        <p>Veja os projetos que eu desenvolvi ou participei.</p>
      </NavItem>

      <NavItemA
        href="https://blog.daniilo.dev/"
        title="Blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h6>Meus Artigos</h6>
        <h1>Blog</h1>
        <p>As vezes eu escrevo algumas coisas</p>
      </NavItemA>
      
      <NavItemA
        href="https://api.whatsapp.com/send?phone=5534984424459"
        title="Fale comigo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h6>Fale comigo</h6>
        <h1>Contato</h1>
        <p>Posso te ajudar de alguma forma?</p>
      </NavItemA>
    </Nav>
  );
};
