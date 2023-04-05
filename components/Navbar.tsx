'use client';

import Link from 'next/link';
import { useState } from 'react';
import { mq } from '@/utils/theme';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

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
    <Header>
      <HeaderItem>
        <LogoLink href="/">B</LogoLink>
      </HeaderItem>

      <Nav>
        <List>
          {paths.map((item) => {
            const { path, label } = item;
            const isHovered = hovered === path;

            return (
              <li key={path}>
                <AnchorLink href={path}>
                  <NavContainer
                    onHoverStart={() => setHovered(path)}
                    onHoverEnd={() => setHovered('')}
                    style={
                      pathname === path
                        ? {
                            color: 'var(--colors-text-primary)',
                            // '&::after': { opacity: 1 },
                          }
                        : {}
                    }
                  >
                    <AnimatePresence>
                      {isHovered && (
                        <NavHovered
                          layoutId="nav"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>

                    {label}
                  </NavContainer>
                </AnchorLink>
              </li>
            );
          })}
        </List>
      </Nav>

      <HeaderItem />
    </Header>
  );
}

/* ---------------------------------------------------------------------- */

const Header = styled.header`
  display: flex;
  align-items: center;
  color: white;
  font-size: 12px;
  min-height: 59px;
  width: 100%;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  z-index: 3;
  margin-top: 13px;
  ${mq[1]} {
    margin-top: 0;
  }
`;

const HeaderItem = styled.div`
  flex: 1 1 0px;
  display: flex;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--border-radius);
  color: white;
  height: 40px;
  padding: 0 10px;
  transition: background var(--duration) ease-in-out;
  &:hover {
    background: var(--colors-hover);
  }
  //
  font-weight: 700;
  font-size: 26px;
  text-decoration: none;
  margin-left: 12px;
`;

const Nav = styled.nav`
  text-align: center;
  flex: 1;
  order: 2;
  flex-basis: 100%;
  ${mq[1]} {
    order: 0;
    flex-basis: initial;
  }
  ${mq[2]} {
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-flex;
  position: relative;
  top: 5px;
  ${mq[1]} {
    justify-content: space-around;
  }
`;

const AnchorLink = styled(Link)`
  border: 0;
  position: relative;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const NavContainer = styled(motion.span)`
  color: var(--colors-text-secondary);
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1.2px;
  padding: 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: color var(--duration) ease-in-out;
  &:hover {
    color: var(--colors-text-primary);
  }
  &::after {
    content: '';
    position: absolute;
    margin: 0px auto;
    top: 18px;
    left: 0px;
    right: 0px;
    height: 1px;
    width: 20px;
    background: rgb(255, 255, 255);
    opacity: 0;
    transition: opacity var(--duration) ease-in-out;
  }
`;

const NavHovered = styled(motion.span)`
  position: absolute;
  top: -13px;
  left: 0;
  right: 0;
  background: var(--colors-hover);
  padding: 20px;
  border-radius: var(--border-radius);
  z-index: -1;
`;
