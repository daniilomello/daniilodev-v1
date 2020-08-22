import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Link as ExternalLink } from '@styled-icons/entypo/Link';
import { ProjectsPage } from './Style';

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
          <tr>
            <td className="name">Personal Website</td>
            <td className="company hide-mobile"> — </td>
            <td className="tech hide-mobile">
              <span>
                React<span className="separator">·</span>
              </span>
              <span>Styled-Components</span>
            </td>
            <td className="links">
              <span>
                <a
                  href="https://github.com/daniilomello"
                  title="Personal Website github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </span>

              <span>
                <a
                  href="https://daniilo.dev"
                  title="Personal Website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink />
                </a>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </ProjectsPage>
  );
};
