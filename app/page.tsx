'use client';

import Image from 'next/image';
import { mq } from '@/utils/theme';
import styled from 'styled-components';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
const inter = Inter({ subsets: ['latin'] });

/* ---------------------------------------------------------------------- */

export default function Home() {
  return (
    <Wrapper>
      <Navbar />

      <Container>
        <PostContent>
          <PostContainer>
            <ImgBase>
              <ProfileImg
                src="/profile.jpg"
                height={250}
                width={250}
                alt="Imagem de perfil"
                priority
              />
            </ImgBase>

            <div>
              <h1>Eduardo Buba</h1>
              <p>
                <strong>Sou desenvolvedor web fullstack,</strong>
                <br />e mobile nos tempos livres.
              </p>
            </div>
          </PostContainer>
        </PostContent>
      </Container>

      <Footer />
    </Wrapper>
  );
}

/* ---------------------------------------------------------------------- */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  font-family: ${inter.style.fontFamily};
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  margin: 0 auto;
  ${mq[1]} {
    width: 800px;
  }
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

const ImgBase = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 251px;
  height: 251px;
  padding: 25px 10px;
  margin-left: 16px;
  transform: translateZ(0);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0px 2px 8px -1px #0000001a;
  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
  }
  /* conic gradient animation */
  &::before {
    animation: 6s rotate linear infinite;
    width: 200%;
    height: 200%;
    background: var(--tile-border);
  }
  /* inner square */
  &::after {
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius);
    background: linear-gradient(
      to bottom right,
      rgba(var(--tile-start-rgb), 1),
      rgba(var(--tile-end-rgb), 1)
    );
    background-clip: content-box;
  }
`;
