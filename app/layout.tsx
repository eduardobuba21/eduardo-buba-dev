import './globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Wrapper from '@/components/Wrapper';
import EmotionStyleRegistry from './emotion';

/* ---------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Eduardo Buba',
  description: 'Site pessoal',
};

/* ---------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head></head>

      <body>
        <EmotionStyleRegistry>
          <Wrapper>
            <Navbar />

            {children}

            <Footer />
          </Wrapper>
        </EmotionStyleRegistry>
      </body>
    </html>
  );
}
