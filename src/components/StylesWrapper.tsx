/** @jsxImportSource @emotion/react */
'use client';

import { Roboto } from 'next/font/google';

/* ---------------------------------------------------------------------- */

const roboto = Roboto({ weight: ['300', '500', '700'], subsets: ['latin'] });

/* ---------------------------------------------------------------------- */

type Props = {
  children: React.ReactNode;
};

export default function StylesWrapper({ children }: Props) {
  return (
    <div
      css={{
        fontFamily: roboto.style.fontFamily,
      }}
    >
      {children}
    </div>
  );
}
