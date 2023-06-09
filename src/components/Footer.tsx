/** @jsxImportSource @emotion/react */
'use client';

import { mq } from '@/utils/theme';
import styled from '@emotion/styled';
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
    <FooterContainer>
      {links.map((link: LinkItem, index: number) => {
        const Icon = link.icon;

        return (
          <FooterItem
            key={index}
            href={link.url}
            aria-label={link.title}
            target={link.url.startsWith('https://') ? '_blank' : undefined}
          >
            <FooterItemTitle>{link.title}</FooterItemTitle>

            <FooterItemIconWrapper id="footer-item-icon-wrapper">
              <Icon />
            </FooterItemIconWrapper>
          </FooterItem>
        );
      })}
    </FooterContainer>
  );
}

/* ---------------------------------------------------------------------- */

const FooterContainer = styled('div')({
  display: 'flex',
  padding: '20px 0',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--colors-background)',
});

const FooterItem = styled('a')({
  border: '0',
  display: 'flex',
  fontSize: '15px',
  marginLeft: '20px',
  textDecoration: 'none',
  color: 'var(--colors-text-secondary)',
  transition: 'color var(--duration) ease-in-out',
  '&:hover, &:focus': {
    opacity: '1',
    color: 'var(--colors-text-primary)',
  },
  '&:hover #footer-item-icon-wrapper': {
    opacity: '1',
  },
  '&:first-child': {
    margin: '0',
  },
});

const FooterItemTitle = styled('span')({
  display: 'none',
  [mq[1]]: {
    display: 'block',
  },
});

const FooterItemIconWrapper = styled('i')({
  opacity: '1',
  marginTop: '1px',
  marginLeft: '5px',
  color: 'var(--colors-text-primary)',
  transition: 'opacity var(--duration) ease-in-out',
  '& svg': {
    height: '20px',
  },
  [mq[1]]: {
    opacity: '0',
    '& svg': {
      height: '16px',
    },
  },
});
