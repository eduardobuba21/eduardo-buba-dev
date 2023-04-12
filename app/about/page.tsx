'use client';

import Image from 'next/image';
import { mq } from '@/utils/theme';
import styled from 'styled-components';

/* ---------------------------------------------------------------------- */

export default function About() {
  return (
    <Container>
      <PostContent>
        <PostContainer>
          <PostMain selectionColor="#b248d5">
            <GradientTitle primaryColor="#b248d5" secondaryColor="#9146e7">
              Sobre.
            </GradientTitle>

            <ImgBase>
              <ProfileImg
                alt="Eduardo"
                src="/profile.jpg"
                height="250"
                width="250"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
                priority
              />
            </ImgBase>
          </PostMain>
        </PostContainer>
      </PostContent>
    </Container>
  );
}

/* ---------------------------------------------------------------------- */

const Container = styled.div`
  align-items: start;
  display: flex;
  flex: 1;
  margin: 0 auto;
  ${mq[1]} {
    width: 800px;
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
