import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectItem } from '../../Components/ProjectItem/project-item.component';
import { ProjectsPage } from './projects.style';

export const Projects = () => {
  return (
    <ProjectsPage>
      <nav>
        <Link to="/">
          <span>←</span> Voltar
        </Link>
      </nav>

      <header>
        <h1>Projetos</h1>
        <p>Lista de projetos que eu criei ou participei.</p>
      </header>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th className="hide-mobile">Feito na</th>
            <th className="hide-mobile">Tecnologias</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <ProjectItem
            name="Site Pessoal"
            company="Freelancer"
            tech="React · Styled-Components · Netlify"
            linkgit="https://github.com/daniilomello"
            linksite="https://daniilo.dev"
          />
          <ProjectItem
            name="Dogs Social"
            company="Freelancer"
            tech="React · Fetch API · Styled-Components · Wordpress API  · Netlify"
            linkgit="https://github.com/daniilomello"
            linksite="https://dogs.daniilo.dev/"
          />
          <ProjectItem
            name="Smartbrain"
            company="Freelancer"
            tech="React · Express · Clarifai API · PostgreSQL · Heroku · Netlify"
            linkgit="https://github.com/daniilomello"
            linksite="https://smartbrain.daniilo.dev/"
          />
          <ProjectItem
            name="Website Agência R8"
            company="Agência R8"
            tech="PHP · JS · Wordpress"
            linksite="http://agenciar8.com.br/"
          />
          <ProjectItem
            name="Website To be Comunição"
            company="To be Comunição"
            tech="PHP · JS · Wordpress"
            linksite="https://tobe.ppg.br/"
          />
        </tbody>
      </table>
    </ProjectsPage>
  );
};
