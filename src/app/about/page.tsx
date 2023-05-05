'use client';

import Image from 'next/image';
import { mq } from '@/utils/theme';
import styled from '@emotion/styled';
import { motion, MotionContainer, mVariants } from '@/components/motion';

/* ---------------------------------------------------------------------- */

const CAREER: {
  jobTitle: string;
  company: string;
  companyUrl?: string;
  start: string;
  end?: string;
  location: string;
}[] = [
  {
    jobTitle: 'Desenvolvedor web',
    company: 'tex4',
    companyUrl: 'https://tex4.com',
    start: 'Dez 2022',
    location: 'Piên, PR',
  },
  {
    jobTitle: 'Desenvolvedor',
    company: 'Autônomo',
    start: 'Mai 2022',
    end: 'Nov 2022',
    location: 'Piên, PR',
  },
  {
    jobTitle: 'Suporte técnico',
    company: 'Szmigel',
    companyUrl: 'https://szmigel.com.br',
    start: 'Fev 2021',
    end: 'Abr 2022',
    location: 'Piên, PR',
  },
  {
    jobTitle: 'Designer',
    company: 'Autônomo',
    start: 'Dez 2019',
    end: 'Jan 2021',
    location: 'Piên, PR',
  },
  {
    jobTitle: 'Estagiário',
    company: 'CooperStandard',
    companyUrl: 'https://cooperstandard.com',
    start: 'Fev 2019',
    end: 'Nov 2019',
    location: 'Rio Negrinho, SC',
  },
  {
    jobTitle: 'Aprendiz',
    company: 'Arauco',
    companyUrl: 'https://arauco.cl',
    start: 'Jun 2018',
    end: 'Fev 2019',
    location: 'Piên, PR',
  },
];

/* ---------------------------------------------------------------------- */

export default function About() {
  return (
    <Container>
      <PostContent>
        <PostContainer>
          <PostMain selectionColor="#9580ff">
            <MotionContainer>
              <motion.div variants={mVariants.varFade().in}>
                <GradientTitle primaryColor="#9580ff" secondaryColor="#ff80bf">
                  Sobre.
                </GradientTitle>
              </motion.div>

              <IntroContainer>
                <Section>
                  <motion.div variants={mVariants.varFade().inUp}>
                    <ProfileImg
                      alt="Eduardo"
                      src="/profile.jpg"
                      height="336"
                      width="336"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
                      priority
                    />
                  </motion.div>
                </Section>

                <Section>
                  <MotionContainer>
                    <motion.div variants={mVariants.varFade().inUp}>
                      <Paragraph isFirst>
                        <strong>Meu nome é Eduardo Buba</strong>, tenho 22 anos,
                        sou de Piên-PR e formado em Sistemas de Informação na{' '}
                        <strong>UDESC</strong>.
                      </Paragraph>
                    </motion.div>

                    <motion.div variants={mVariants.varFade().inUp}>
                      <Paragraph>
                        Tive oportunidade de ser <strong>aprendiz</strong> de
                        informática industrial em uma moveleira,{' '}
                        <strong>estagiário</strong> de TI em uma multinacional
                        automotiva, e <strong>técnico</strong> de suporte a
                        sistemas e infraestrutura de rede.
                      </Paragraph>
                    </motion.div>

                    <motion.div variants={mVariants.varFade().inUp}>
                      <Paragraph>
                        Durante a universade acabei me apegando a programação de{' '}
                        <strong>aplicações web e mobile</strong>, que foi o
                        caminho que resolvi seguir desde então.
                      </Paragraph>
                    </motion.div>
                  </MotionContainer>
                </Section>
              </IntroContainer>

              <motion.div variants={mVariants.varFade().inUp}>
                <h2>Experiência</h2>
              </motion.div>

              <motion.div variants={mVariants.varFade().inUp}>
                <MotionContainer>
                  {CAREER.map((item, index) => (
                    <motion.div key={index} variants={mVariants.varFade().inUp}>
                      <div style={{ marginTop: 20, marginBottom: 40 }}>
                        <h3>{item.jobTitle}</h3>

                        <p style={{ margin: 0 }}>
                          <a href={item.companyUrl} target="_blank">
                            {item.company}
                          </a>
                          <span> • {item.location}</span>
                        </p>

                        <p style={{ margin: 0 }}>
                          <span>{item.start}</span>
                          <span> – </span>
                          <span>{'end' in item ? item.end : 'Presente'}</span>
                          {/* <span> • </span> */}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </MotionContainer>
              </motion.div>
            </MotionContainer>
          </PostMain>
        </PostContainer>
      </PostContent>
    </Container>
  );
}

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

const IntroContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mq[1]} {
    flex-direction: row;
  }
`;

const navHeightMobile = '110px';
const navHeightDesktop = '60px';

const PostMain = styled('main', {
  shouldForwardProp: (prop) => !['selectionColor'].includes(prop),
})<{ selectionColor: string }>`
  flex: 1 1;
  overflow: hidden;
  padding: ${navHeightMobile} 0;
  ${mq[1]} {
    padding: ${navHeightDesktop} 0;
  }
  & ::selection {
    color: #000000;
    -webkit-text-fill-color: #000000;
    background: ${(p) => p.selectionColor};
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

const ProfileImg = styled(Image)`
  border-radius: var(--border-radius);
  height: auto;
  max-width: 100%;
`;

const Section = styled('div')`
  width: auto;
  margin-top: 0px;
  ${mq[1]} {
    width: 48%;
  }
`;

const Paragraph = styled('p', {
  shouldForwardProp: (prop) => !['isFirst'].includes(prop),
})<{ isFirst?: boolean }>`
  & strong {
    font-weight: lighter;
  }
  margin-top: ${(p) => (p.isFirst ? '10px' : '0')};
  ${mq[1]} {
    margin-top: 0;
    margin-bottom: 15px;
  }
`;
