import React from 'react';
import { AboutElement } from './Style';
import { SocialIcons } from '../SocialIcons/SocialIcons';

export const About = () => {
  return (
    <>
      <AboutElement>
        <figure>
          <img
            src="https://scontent.fudi2-1.fna.fbcdn.net/v/t1.0-9/60325014_150888739376533_981352116775813120_o.jpg?_nc_cat=103&_nc_sid=174925&_nc_ohc=4S5dff8MN7IAX-GyYOo&_nc_ht=scontent.fudi2-1.fna&oh=fec1ccfd22d3ccf4349d6fb76011f597&oe=5F67FF74"
            alt="Avatar"
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
