'use client';

import { mq } from '@/utils/theme';
import styled from '@emotion/styled';
import { PostContainer, PostContent } from '@/components/Post';
import { motion, MotionContainer, mVariants } from '@/components/motion';

/* ---------------------------------------------------------------------- */

export default function Home() {
  return (
    <Container>
      <PostContent>
        <MotionContainer>
          <motion.div variants={mVariants.varFade().in}>
            <PostContainerColored>
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
            </PostContainerColored>
          </motion.div>
        </MotionContainer>
      </PostContent>
    </Container>
  );
}

/* ---------------------------------------------------------------------- */

const Container = styled('div')`
  flex: 1;
  display: flex;
  margin: 0 auto;
  align-items: center;
  ${mq[1]} {
    width: 800px;
  }
`;

const PostContainerColored = styled(PostContainer)`
  &::before {
    width: 480px;
    height: 360px;
    border-radius: 50%;
    margin-left: -400px;
    background: var(--secondary-glow);
  }
  &::after {
    z-index: -1;
    width: 240px;
    height: 180px;
    background: var(--primary-glow);
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

const NameTypography = styled('h1')`
  filter: invert(0) drop-shadow(0 0 0.3rem #ffffff30);
`;
