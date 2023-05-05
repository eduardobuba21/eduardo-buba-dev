'use client';

import { useState } from 'react';
import { mq } from '@/utils/theme';
import styled from '@emotion/styled';
import { Icon, Database, DollarSign } from 'react-feather';
import { motion, AnimatePresence } from '@/components/motion';

/* ---------------------------------------------------------------------- */

type ProjectItem = {
  title: string;
  description: string;
  url: string;
  icon: Icon;
};

const projects: ProjectItem[] = [
  {
    title: 'OndeFoi?',
    description: 'Finanças pessoais',
    url: 'https://play.google.com/store/apps/details?id=com.ebuba.finances',
    icon: DollarSign,
  },
  {
    title: 'buba erp',
    description: 'Gestão de vendas',
    url: 'https://www.buba.dev/',
    icon: Database,
  },
];

/* ---------------------------------------------------------------------- */

export default function Projects() {
  return (
    <Container>
      <PostContent>
        <PostContainer>
          <PostMain selectionColor="#80ffea">
            <GradientTitle primaryColor="#80ffea" secondaryColor="#8aff80">
              Projetos.
            </GradientTitle>

            <p>
              Aqui você pode acompanhar alguns de meus projetos que chegaram a
              ser publicados, sejam simples conceitos ou ideias de
              empreendimentos (pode ser que alguns tenham sido desativados).
            </p>

            <h2>Destaque</h2>
            <FeaturedProjects>
              {projects.map((item, index) => {
                const { title, description, url, icon: Icon } = item;
                return (
                  <Project key={index} href={url} target="_blank">
                    <Animation index={index}>
                      <Body>
                        <Icon height={20} />
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                      </Body>
                    </Animation>
                  </Project>
                );
              })}
            </FeaturedProjects>
          </PostMain>
        </PostContainer>
      </PostContent>
    </Container>
  );
}

/* ---------------------------------------------------------------------- */

function Animation({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState<number | string>('');
  const isHovered = hovered === index;

  return (
    <AnimContainer
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered('')}
    >
      <AnimatePresence>
        {isHovered && (
          <AnimHovered
            layoutId="featuredProjects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {children}
    </AnimContainer>
  );
}

const AnimContainer = styled(motion.span)`
  width: 100%;
  padding: 20px;
  position: relative;
`;

const AnimHovered = styled(motion.span)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  position: absolute;
  background: var(--colors-hover);
  border-radius: var(--border-radius);
`;

/* ---------------------------------------------------------------------- */

const Container = styled('div')`
  flex: 1;
  display: flex;
  margin: 0 auto;
  align-items: start;
  ${mq[1]} {
    width: 800px;
  }
`;

const navHeightMobile = '110px';
const navHeightDesktop = '60px';

const PostMain = styled('main', {
  shouldForwardProp: (prop) => !['selectionColor'].includes(prop),
})<{ selectionColor: string }>`
  flex: 1 1;
  /* overflow: hidden; */
  padding: ${navHeightMobile} 0;
  ${mq[1]} {
    padding: ${navHeightDesktop} 0;
  }
  & ::selection {
    background: ${(p) => p.selectionColor};
    color: #000000;
    -webkit-text-fill-color: #000000;
  }
`;

const GradientTitle = styled('h1', {
  shouldForwardProp: (prop) =>
    !['primaryColor', 'secondaryColor'].includes(prop),
})<{ primaryColor: string; secondaryColor: string }>`
  background-size: 100%;
  background-clip: text;
  -moz-background-clip: text;
  box-decoration-break: clone;
  -webkit-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;

  background-image: linear-gradient(
    135deg,
    ${(p) => p.primaryColor} 0%,
    ${(p) => p.secondaryColor} 100%
  );
`;

const PostContent = styled('div')`
  z-index: 1;
  height: 100%;
  padding: 20px 0;
  font-size: 16px;
  line-height: 32px;
  position: relative;
`;

const PostContainer = styled('div')`
  gap: 40px;
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 760px;
  align-items: center;
`;

const FeaturedProjects = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 0 -20px;
  flex-direction: column;
  ${mq[1]} {
    flex-direction: row;
  }
`;

const Project = styled('a')`
  border: 0;
  width: auto;
  display: flex;
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: opacity $duration ease-in-out;
  &:hover {
    opacity: 1;
  }
  ${mq[1]} {
    width: 180;
  }
`;

const Body = styled('div')`
  flex: 1 1 auto;
`;

const Title = styled('p')`
  margin: 0;
  font-size: 18px;
  color: var(--colors-text-primary);
`;

const Description = styled('p')`
  margin: 0;
  line-height: 24px;
  color: var(--colors-text-secondary);
`;
