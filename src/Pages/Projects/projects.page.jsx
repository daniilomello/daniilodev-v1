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
            company="-"
            tech="React · Styled-Components"
            linkgit="https://github.com/daniilomello"
            linksite="https://daniilo.dev"
          />
          <ProjectItem
            name="Website Agência R8"
            company="Agência R8"
            tech="Front-end · Wordpress"
            linksite="http://agenciar8.com.br/novo/"
          />
          <ProjectItem
            name="Website To be Comunição"
            company="To be Comunição"
            tech="Front-end · Wordpress"
            linksite="https://tobe.ppg.br/"
          />
          <ProjectItem
            name="APP Uberlândia"
            company="Agência R8"
            tech="Front-end · Wordpress"
            linksite="https://appuberlandia.com.br/"
          />
          <ProjectItem
            name="Educadora FM"
            company="To be Comunição"
            tech="Front-end · Wordpress"
            linksite="https://educadora909.com.br/"
          />
          <ProjectItem
            name="Studio Gláucia"
            company="Agência R8"
            tech="Front-end · Woocommerce"
            linksite="https://studioglauciaxavier.com.br/"
          />
          <ProjectItem
            name="Paranaíba FM"
            company="To be Comunição"
            tech="Front-end · Wordpress"
            linksite="https://paranaibafm.com.br/"
          />
          <ProjectItem
            name="Joint Bee"
            company="Agência R8"
            tech="Front-end · Wordpress"
            linksite="https://www.jointbee.com/"
          />          
          <ProjectItem
            name="Palácio Motel"
            company="To be Comunição"
            tech="Front-end · Wordpress"
            linksite="http://palaciomotel.com.br/"
          />
        </tbody>
      </table>
    </ProjectsPage>
  );
};
