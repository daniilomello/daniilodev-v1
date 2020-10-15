import React from 'react';
import { IconsWrapper, IconsList, IconsItem } from './social-icons.style';
import links from './content';
import Icons from './Icons';

export const SocialIcons = () => {
  return (
    <IconsWrapper>
      <IconsList>
        {links.map((link, i) => {
          const Icon = Icons[link.label];
          return (
            <IconsItem key={i}>
              <a
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            </IconsItem>
          );
        })}
      </IconsList>

      <IconsList>
        <IconsItem>
          <span>&nbsp;</span>
          <a
            href="mailto:danilodemellow@gmail.com"
            title="danilodemellow@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            danilodemellow@gmail.com
          </a>
        </IconsItem>
      </IconsList>
    </IconsWrapper>
  );
};
