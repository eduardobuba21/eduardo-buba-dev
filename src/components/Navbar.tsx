/** @jsxImportSource @emotion/react */
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { mq } from '@/utils/theme';
import styled from '@emotion/styled';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from '@/components/motion';

/* ---------------------------------------------------------------------- */

type PathItem = {
  path: string;
  label: string;
};

const paths: PathItem[] = [
  { path: 'about', label: 'Sobre' },
  { path: 'projects', label: 'Projetos' },
];

/* ---------------------------------------------------------------------- */

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState('');

  return (
    <NavbarContainer>
      <NavbarCornerItem>
        <LogoLink href="/">B</LogoLink>
      </NavbarCornerItem>

      <NavbarNav>
        <NavbarNavList>
          {paths.map((item) => {
            const { path, label } = item;
            const isHovered = hovered === path;

            return (
              <li key={path}>
                <NavbarNavItem href={path}>
                  <NavbarNavItemContent
                    onHoverStart={() => setHovered(path)}
                    onHoverEnd={() => setHovered('')}
                    css={{
                      ...(pathname.includes(path) && {
                        color: 'var(--colors-text-primary)',
                        '&::after': { opacity: 1 },
                      }),
                    }}
                  >
                    <AnimatePresence>
                      {isHovered && (
                        <NavbarNavItemHovered
                          layoutId="nav"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>

                    {label}
                  </NavbarNavItemContent>
                </NavbarNavItem>
              </li>
            );
          })}
        </NavbarNavList>
      </NavbarNav>

      <NavbarCornerItem />
    </NavbarContainer>
  );
}

/* ---------------------------------------------------------------------- */

const NavbarContainer = styled('header')({
  top: '0',
  zIndex: '3',
  width: '100%',
  color: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  fontSize: '12px',
  minHeight: '59px',
  marginTop: '13px',
  position: 'absolute',
  alignItems: 'center',
  [mq[1]]: {
    marginTop: '0',
  },
});

const NavbarCornerItem = styled('div')({
  flex: '1 1 0px',
  display: 'flex',
});

const LogoLink = styled(Link)({
  color: 'white',
  border: 'none',
  height: '40px',
  display: 'flex',
  padding: '0 10px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--border-radius)',
  transition: 'background var(--duration) ease-in-out',
  '&:hover': {
    background: 'var(--colors-hover)',
  },
  //
  fontSize: '26px',
  fontWeight: '700',
  marginLeft: '12px',
  textDecoration: 'none',
});

//

const NavbarNav = styled('nav')({
  textAlign: 'center',
  flex: '1',
  order: '2',
  flexBasis: '100%',
  [mq[1]]: {
    order: 0,
    flexBasis: 'initial',
  },
  [mq[2]]: {
    overflowX: 'scroll',
    overflowY: 'hidden',
  },
});

const NavbarNavList = styled('ul')({
  top: '5px',
  margin: '0',
  padding: '0',
  listStyle: 'none',
  position: 'relative',
  display: 'inline-flex',
  [mq[1]]: {
    justifyContent: 'space-around',
  },
});

const NavbarNavItem = styled(Link)({
  border: '0',
  position: 'relative',
  '&:hover, &:focus': {
    opacity: '1',
  },
});

const NavbarNavItemContent = styled(motion.span)({
  padding: '20px',
  fontSize: '12px',
  cursor: 'pointer',
  fontWeight: '500',
  letterSpacing: '1.2px',
  textDecoration: 'none',
  display: 'inline-block',
  textTransform: 'uppercase',
  color: 'var(--colors-text-secondary)',
  transition: 'color var(--duration) ease-in-out',
  '&:hover': {
    color: 'var(--colors-text-primary)',
  },
  '&::after': {
    top: '18px',
    left: '0px',
    right: '0px',
    opacity: '0',
    content: "''",
    width: '20px',
    height: '1px',
    margin: '0px auto',
    position: 'absolute',
    background: 'rgb(255, 255, 255)',
    transition: 'opacity var(--duration) ease-in-out',
  },
});

const NavbarNavItemHovered = styled(motion.span)({
  left: '0',
  right: '0',
  top: '-13px',
  zIndex: '-1',
  padding: '20px',
  position: 'absolute',
  background: 'var(--colors-hover)',
  borderRadius: 'var(--border-radius)',
});
