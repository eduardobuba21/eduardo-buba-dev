'use client';

import Image from 'next/image';
import { mq } from '@/utils/theme';
import styled from '@emotion/styled';
import { motion, MotionContainer, mVariants } from '@/components/motion';
import {
  PostMain,
  Container,
  PostContent,
  PostContainer,
  GradientTitle,
} from '@/components/Post';

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
    company: 'BPlus',
    companyUrl: 'https://bplus.com.br',
    start: 'Jul 2023',
    location: 'São Bento do Sul, SC',
  },
  {
    jobTitle: 'Desenvolvedor web',
    company: 'Autônomo',
    start: 'Mai 2022',
    end: 'Jun 2023',
    location: 'Piên, PR',
  },
  {
    jobTitle: 'Suporte técnico',
    company: 'Szmigel',
    companyUrl: 'http://szmigel.com.br',
    start: 'Fev 2021',
    end: 'Abr 2022',
    location: 'Piên, PR',
  },
  {
    jobTitle: 'Estagiário',
    company: 'CooperStandard',
    companyUrl: 'https://cooperstandard.com',
    start: 'Fev 2019',
    end: 'Nov 2019',
    location: 'São Bento do Sul, SC',
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
          <PostMain selectionColor="#FF4D4D">
            <MotionContainer>
              <motion.div variants={mVariants.varFade().in}>
                <GradientTitle primaryColor="#FF4D4D" secondaryColor="#F9CB28">
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
                        sou de Piên-PR e sou formado em Sistemas de Informação
                        na <strong>UDESC</strong>.
                      </Paragraph>
                    </motion.div>

                    <motion.div variants={mVariants.varFade().inUp}>
                      <Paragraph>
                        Já tive a oportunidade de ser <strong>aprendiz</strong>{' '}
                        de informática industrial, <strong>estagiário</strong>{' '}
                        de TI, e <strong>técnico</strong> de suporte a sistemas
                        e infraestrutura de rede.
                      </Paragraph>
                    </motion.div>

                    <motion.div variants={mVariants.varFade().inUp}>
                      <Paragraph>
                        Durante a universade acabei me apegando a programação{' '}
                        <strong>web e mobile</strong>, e aqui estou ;)
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
                          {item.companyUrl ? (
                            <a href={item.companyUrl} target="_blank">
                              {item.company}
                            </a>
                          ) : (
                            <span>{item.company}</span>
                          )}

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

const IntroContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mq[1]} {
    flex-direction: row;
  }
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
  margin-bottom: 15px;
  ${mq[1]} {
    margin-top: 0;
  }
`;
