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
        minHeight: '100vh',
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
