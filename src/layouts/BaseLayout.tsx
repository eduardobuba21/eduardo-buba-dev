/** @jsxImportSource @emotion/react */
'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

/* ---------------------------------------------------------------------- */

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div
      css={{
        display: 'flex',
        height: '100vh',
        maxHeight: 'stretch',
        position: 'relative',
        flexDirection: 'column',
      }}
    >
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}
