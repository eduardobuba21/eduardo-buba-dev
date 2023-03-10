'use client';

import styled from 'styled-components';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

/* ---------------------------------------------------------------------- */

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <PostContent>
          <PostContainer>
            <div>
              <h1>Eduardo Buba</h1>
              <p>
                <strong>Founder and CEO</strong>
                Descricao
              </p>
            </div>
          </PostContainer>
        </PostContent>
      </Container>
    </Wrapper>
  );
}

/* ---------------------------------------------------------------------- */

const breakpoints = [600, 900, 1200, 1536];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

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
  margin: 0 auto;
  ${mq[1]} {
    width: 800px;
  }
`;

const PostContent = styled.div`
  font-size: 16px;
  line-height: 32px;
  /* color: ; */
  /* background: ; */
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 20px 0;
`;

const PostContainer = styled.div`
  margin: 0 auto;
  max-width: 760px;
  padding: 0 20px;
`;
