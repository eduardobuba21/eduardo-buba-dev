'use client';

import { mq } from '@/utils/theme';
import styled from 'styled-components';
import { Icon, GitHub, Instagram, Linkedin, Mail } from 'react-feather';

/* ---------------------------------------------------------------------- */

type LinkItem = {
  title: string;
  url: string;
  icon: Icon;
};

const links: LinkItem[] = [
  {
    title: 'email',
    url: 'mailto:eduardobuba21@gmail.com',
    icon: Mail,
  },
  {
    title: 'github',
    url: 'https://github.com/eduardobuba21',
    icon: GitHub,
  },
  {
    title: 'linkedin',
    url: 'https://linkedin.com/in/eduardobuba21',
    icon: Linkedin,
  },
  {
    title: 'instagram',
    url: 'https://instagram.com/eduardobuba21/',
    icon: Instagram,
  },
];

/* ---------------------------------------------------------------------- */

export default function Footer() {
  return (
    <Container>
      {links.map((link: LinkItem, index: number) => {
        const Icon = link.icon;

        return (
          <Anchor
            key={index}
            href={link.url}
            target={link.url.startsWith('https://') ? '_blank' : undefined}
          >
            <Title>{link.title}</Title>
            <IconWrapper>
              <Icon />
            </IconWrapper>
          </Anchor>
        );
      })}
    </Container>
  );
}

/* ---------------------------------------------------------------------- */

const Container = styled.div`
  background: var(--colors-background);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const IconWrapper = styled.i`
  color: var(--colors-text-primary);
  opacity: 1;
  margin-left: 5px;
  margin-top: 1px;
  & svg {
    height: 20px;
  }
  ${mq[1]} {
    opacity: 0;
    & svg {
      height: 16px;
    }
  }
`;

const Anchor = styled.a`
  color: var(--colors-text-secondary);
  display: flex;
  font-size: 15px;
  border: 0;
  margin-left: 20px;
  text-decoration: none;
  transition: color var(--duration) ease-in-out;
  &:hover,
  &:focus {
    color: var(--colors-text-primary);
    opacity: 1;
  }
  &:hover ${IconWrapper} {
    transition: opacity var(--duration) ease-in-out;
    opacity: 1;
  }
  &:first-child {
    margin: 0;
  }
`;

const Title = styled.span`
  display: none;
  ${mq[1]} {
    display: block;
  }
`;
