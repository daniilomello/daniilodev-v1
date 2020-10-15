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
          Programador morando em Uberlândia MG. No momento estou trabalhando na
          Agência R8 como desenvolvedor Front-end mas às vezes me pego no
          back-end também, mas o que mais gosto de fazer é o Front, codar uma UI
          e ver ela funcionando. Idealmente, adoro trabalhar em todas as etapas
          da construção - desde os primeiros esboços, design, implementação até
          o produto final.
        </p>

        <p>
          Atualmente, minha principal área de foco tem sido Wordpress & React,
          mas sei um pouquinho sobre UI & UX Design também.
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
            <span>▸ </span>React
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
