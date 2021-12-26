import React from 'react';
import { AboutElement } from './about.style';
import { SocialIcons } from '../SocialIcons/social-icons.component';
import Avatar from '../../assets/eu.jpg';

export const About = () => {
  return (
    <>
      <AboutElement>
        <figure>
          <img
            src={Avatar}
            alt="Foto do Danilo"
          />
        </figure>
        <h1>Danilo Mello</h1>

        <h2>Desenvolvedor Front-end</h2>

        <p>
          Desenvolvedor Front-end focado em React, com pouco conhecimento em Back-end com Node. Atualmente trabalhando na <a href="https://agenciar8.com.br" target="_blank" rel="noopener noreferrer" title="Site Agência R8">@agenciaR8</a>, e desenvolvendo um sistema para <a href="https://gabaritalab.com.br" target="_blank" rel="noopener noreferrer" title="Site Gabaritalab">@gabaritalab</a>.
        </p>

        <p>
          Estudando Node e Typescript na <a href="https://www.rocketseat.com.br/" target="_blank" rel="noopener noreferrer" title="Site da Rocketseat">@rocketseat</a>.
        </p>

        <p>
          <strong>Algumas tecnologias que utilizo:</strong>
        </p>
        <ul>
          <li>
            <span>▸ </span>Javascript (ES6+)
          </li>
          <li>
            <span>▸ </span>HTML & (S)CSS
          </li>
          <li>
            <span>▸ </span>React & Node
          </li>
          <li>
            <span>▸ </span>Wordpress & PHP
          </li>
        </ul>
      </AboutElement>
      <SocialIcons />
    </>
  );
};
