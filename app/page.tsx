'use client';

import { mq } from '@/utils/theme';
import styled from 'styled-components';
import { motion, MotionContainer, mVariants } from '@/components/motion';

/* ---------------------------------------------------------------------- */

export default function Home() {
  return (
    <Container>
      <PostContent>
        <MotionContainer>
          <motion.div variants={mVariants.varFade().in}>
            <PostContainer>
              <div>
                <motion.div variants={mVariants.varFade().inUp}>
                  <NameTypography>Eduardo Buba</NameTypography>
                </motion.div>

                <motion.div variants={mVariants.varFade().inUp}>
                  <p>
                    <strong>Sou desenvolvedor web fullstack</strong>
                    <br />e mobile nos tempos livres.
                  </p>
                </motion.div>
              </div>
            </PostContainer>
          </motion.div>
        </MotionContainer>
      </PostContent>
    </Container>
  );
}

/* ---------------------------------------------------------------------- */

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
  &::before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }
  &::after {
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
    z-index: -1;
  }
  &::before,
  &::after {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  }
`;

const NameTypography = styled.h1`
  filter: invert(0) drop-shadow(0 0 0.3rem #ffffff30);
`;
