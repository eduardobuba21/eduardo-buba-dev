'use client';

import { useState } from 'react';
import { mq } from '@/utils/theme';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

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
      {/* <Link href="/" passHref>
        <ButtonLogo>B</ButtonLogo>
      </Link> */}

      <Nav>
        <List>
          {paths.map((item) => {
            const { path, label } = item;
            const isHovered = hovered === path;

            return (
              <li key={path}>
                {/* <Link href={path} passHref> */}
                <Anchor>
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
                </Anchor>
                {/* </Link> */}
              </li>
            );
          })}
        </List>
      </Nav>
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

const ButtonHeader = styled.div`
  appearance: none;
  background: transparent;
  border: none;
  border-radius: var(--border-radius);
  color: white;
  cursor: pointer;
  height: 34px;
  padding: 0 10px;
  transition: background var(--duration) ease-in-out;
  &:focus {
    background: var(--colors-hover);
  }
`;

const ButtonLogo = styled(ButtonHeader)`
  font-weight: 700;
  font-size: 32px;
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

const Anchor = styled.a`
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
