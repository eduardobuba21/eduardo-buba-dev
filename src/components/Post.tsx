/** @jsxImportSource @emotion/react */
'use client';

import { mq } from '@/utils/theme';
import styled from '@emotion/styled';

/* ---------------------------------------------------------------------- */

const navHeightMobile = '110px';
const navHeightDesktop = '60px';

/* ---------------------------------------------------------------------- */

export const Container = styled('div')`
  flex: 1;
  display: flex;
  margin: 0 auto;
  align-items: start;
  ${mq[1]} {
    width: 800px;
  }
`;

export const PostContent = styled('div')`
  z-index: 1;
  height: 100%;
  padding: 20px 0;
  font-size: 16px;
  line-height: 32px;
  position: relative;
`;

export const PostContainer = styled('div')`
  gap: 40px;
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 760px;
  align-items: center;
`;

export const PostMain = styled('main', {
  shouldForwardProp: (prop) => !['selectionColor'].includes(prop),
})<{ selectionColor: string }>`
  flex: 1 1;
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

export const GradientTitle = styled('h1', {
  shouldForwardProp: (prop) =>
    !['primaryColor', 'secondaryColor'].includes(prop),
})<{ primaryColor: string; secondaryColor: string }>`
  display: inline-block;
  background-size: 100%;
  background-clip: text;
  -moz-background-clip: text;
  box-decoration-break: clone;
  -webkit-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;

  background-image: linear-gradient(
    90deg,
    ${(p) => p.primaryColor},
    ${(p) => p.secondaryColor}
  );
`;
