'use client';

import Image from 'next/image';
import { mq } from '@/utils/theme';
import styled from 'styled-components';

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
            <GradientTitle primaryColor="#9580ff" secondaryColor="#ff80bf">
              Sobre.
            </GradientTitle>

            <IntroContainer>
              <Section>
                <ProfileImg
                  alt="Eduardo"
                  src="/profile.jpg"
                  height="336"
                  width="336"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
                  priority
                />
              </Section>

              <Section>
                {/* TODO: margin top on mobile */}
                <Paragraph>
                  <strong>Meu nome é Eduardo Buba</strong>, tenho 22 anos, sou
                  de Piên-PR e formado em Sistemas de Informação na{' '}
                  <strong>UDESC</strong>.
                </Paragraph>

                <Paragraph>
                  Tive oportunidade de ser <strong>aprendiz</strong> de
                  informática industrial em uma moveleira,{' '}
                  <strong>estagiário</strong> de TI em uma multinacional
                  automotiva, e <strong>técnico</strong> de suporte a sistemas e
                  infraestrutura de rede.
                </Paragraph>

                <Paragraph>
                  Durante a universade acabei me apegando a programação de{' '}
                  <strong>aplicações web e mobile</strong>, que foi o caminho
                  que resolvi seguir desde então.
                </Paragraph>
              </Section>
            </IntroContainer>

            <h2>Carreira</h2>

            {CAREER.map((item, index) => (
              <div key={index} style={{ marginTop: 20, marginBottom: 40 }}>
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
            ))}
          </PostMain>
        </PostContainer>
      </PostContent>
    </Container>
  );
}

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

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mq[1]} {
    flex-direction: row;
  }
`;

const navHeightMobile = '110px';
const navHeightDesktop = '60px';

const PostMain = styled.main.withConfig({
  shouldForwardProp: (prop) => !['selectionColor'].includes(prop),
})<{ selectionColor: string }>`
  flex: 1 1;
  overflow: hidden;
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

const GradientTitle = styled.h1.withConfig({
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

const ProfileImg = styled(Image)`
  border-radius: var(--border-radius);
`;

const Section = styled.div`
  margin-top: 0px;
  width: auto;
  ${mq[1]} {
    width: 48%;
  }
`;

const Paragraph = styled.p`
  & strong {
    font-weight: lighter;
  }
  ${mq[1]} {
    margin-bottom: 15px;
  }
`;
