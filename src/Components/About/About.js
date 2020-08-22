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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          natus vitae qui illo nisi a sunt expedita blanditiis beatae repellat
          eius sapiente quidem ipsam dignissimos, exercitationem ab eligendi
          placeat sit fugiat. Ea quasi atque ipsa ab sit enim eius autem
          molestias, unde at nisi, laudantium quis quo provident, asperiores
          consequatur!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ipsa pariatur ratione sit molestiae quisquam aliquid id ad quas quos.
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
