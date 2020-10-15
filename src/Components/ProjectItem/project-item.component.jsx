import React from 'react';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Link as ExternalLink } from '@styled-icons/entypo/Link';

export const ProjectItem = ({ name, company, tech, linkgit, linksite }) => {
  return (
    <tr>
      <td className="name">{name}</td>
      <td className="company hide-mobile">{company}</td>
      <td className="tech hide-mobile">
        <span>{tech}</span>
      </td>
      <td className="links">
        {linkgit ? (
          <span>
            <a
              href={linkgit}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </span>
        ) : ''}
        
        {linksite ? (
          <span>
            <a
              href={linksite}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink />
            </a>
          </span>
        ) : ''}
      </td>
    </tr>
  )
}
