'use client';

import { mq } from '@/utils/theme';
import styled from 'styled-components';

/* ---------------------------------------------------------------------- */

export default function Projects() {
  return (
    <Container>
      <PostContent>
        <PostContainer>
          <div>
            <h1>Projetos</h1>
          </div>
        </PostContainer>
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
`;
