'use client';

import { useState } from 'react';
import { mq } from '@/utils/theme';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from '@/components/motion';

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
              produção, sejam simples conceitos ou ideias de empreendimentos
              (pode ser que alguns tenham sido deletados).
            </p>

            <h2>Destaque</h2>
            <FeaturedProjects>
              <Project href={''} target="_blank">
                <Animation index={0}>
                  <Body>
                    <Title>OndeFoi?</Title>
                    <Description>Finanças pessoais</Description>
                  </Body>
                </Animation>
              </Project>

              <Project href={''} target="_blank">
                <Animation index={1}>
                  <Body>
                    <Title>buba erp</Title>
                    <Description>Gestão de vendas</Description>
                  </Body>
                </Animation>
              </Project>
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
  position: relative;
  width: 100%;
  padding: 20px;
`;

const AnimHovered = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--colors-hover);
  border-radius: var(--border-radius);
  z-index: -1;
`;

/* ---------------------------------------------------------------------- */

const Container = styled.div`
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
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  box-decoration-break: clone;

  background-image: linear-gradient(
    135deg,
    ${(p) => p.primaryColor} 0%,
    ${(p) => p.secondaryColor} 100%
  );
`;

const PostContent = styled.div`
  font-size: 16px;
  line-height: 32px;
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 20px 0;
`;

const PostContainer = styled.div`
  margin: 0 auto;
  max-width: 760px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 40px;
`;

const FeaturedProjects = styled.div`
  margin: 10px 0 0 -20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  ${mq[1]} {
    flex-direction: row;
  }
`;

const Project = styled.a`
  display: flex;
  transition: opacity $duration ease-in-out;
  border: 0;
  border-radius: var(--border-radius);
  text-decoration: none;
  width: auto;
  &:hover {
    opacity: 1;
  }
  ${mq[1]} {
    width: 180;
  }
`;

const Body = styled.div`
  flex: 1 1 auto;
`;

const Title = styled.p`
  color: var(--colors-text-primary);
  margin: 0;
  font-size: 18px;
`;

const Description = styled.p`
  margin: 0;
  color: var(--colors-text-secondary);
  line-height: 24px;
`;
