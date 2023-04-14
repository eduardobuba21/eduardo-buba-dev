'use client';

import styled from '@emotion/styled';
import { Roboto } from 'next/font/google';

/* ---------------------------------------------------------------------- */

const roboto = Roboto({ weight: ['300', '500', '700'], subsets: ['latin'] });

/* ---------------------------------------------------------------------- */

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  return (
    <StylesProvider>
      <Container>{children}</Container>
    </StylesProvider>
  );
}

/* ---------------------------------------------------------------------- */

const StylesProvider = styled.div`
  font-family: ${roboto.style.fontFamily};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;
