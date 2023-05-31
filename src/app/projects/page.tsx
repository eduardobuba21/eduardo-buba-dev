'use client';

import { useState } from 'react';
import { mq } from '@/utils/theme';
import styled from '@emotion/styled';
import useResponsive from '@/hooks/useResponsive';
import { Icon, Database, DollarSign } from 'react-feather';
import {
  PostMain,
  Container,
  PostContent,
  PostContainer,
  GradientTitle,
} from '@/components/Post';
import {
  motion,
  mVariants,
  AnimatePresence,
  MotionContainer,
} from '@/components/motion';

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
  const [hovered, setHovered] = useState<number | string>('');

  const { isMobile } = useResponsive();

  return (
    <Container>
      <PostContent>
        <PostContainer>
          <PostMain selectionColor="#007CF0">
            <MotionContainer>
              <motion.div variants={mVariants.varFade().in}>
                <GradientTitle primaryColor="#007CF0" secondaryColor="#00DFD8">
                  Projetos.
                </GradientTitle>
              </motion.div>

              <motion.div variants={mVariants.varFade().inUp}>
                <p>
                  Aqui você pode acompanhar alguns de meus projetos que chegaram
                  a ser publicados, sejam simples conceitos ou ideias de renda
                  extra (pode ser que alguns tenham sido desativados).
                </p>
              </motion.div>

              <motion.div variants={mVariants.varFade().inUp}>
                <h2>Destaque</h2>
              </motion.div>

              <motion.div variants={mVariants.varFade().inUp} layout>
                <FeaturedProjects>
                  {projects.map((item, index) => {
                    const { title, description, url, icon: Icon } = item;
                    const isHovered = hovered === index;

                    return (
                      <Project key={title} href={url} target="_blank">
                        <AnimContainer
                          {...(!isMobile && {
                            onHoverStart: () => setHovered(index),
                            onHoverEnd: () => setHovered(''),
                          })}
                          {...(isMobile && {
                            onTouchStart: () => setHovered(index),
                            onTouchEnd: () => setHovered(''),
                          })}
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

                          <Body>
                            <Icon height={20} />
                            <Title>{title}</Title>
                            <Description>{description}</Description>
                          </Body>
                        </AnimContainer>
                      </Project>
                    );
                  })}
                </FeaturedProjects>
              </motion.div>
            </MotionContainer>
          </PostMain>
        </PostContainer>
      </PostContent>
    </Container>
  );
}

/* ---------------------------------------------------------------------- */

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

const FeaturedProjects = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 0 0;
  flex-direction: column;
  ${mq[1]} {
    flex-direction: row;
    margin: 10px 0 0 -20px;
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
