/** @jsxImportSource @emotion/react */
'use client';

import { Inter } from 'next/font/google';

/* ---------------------------------------------------------------------- */

const inter = Inter({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
});

/* ---------------------------------------------------------------------- */

type Props = {
  children: React.ReactNode;
};

export default function StylesWrapper({ children }: Props) {
  return <div css={{ fontFamily: inter.style.fontFamily }}>{children}</div>;
}
