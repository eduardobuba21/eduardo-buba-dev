import './globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Wrapper from '@/components/Wrapper';
import StyledComponentsRegistry from './lib/registry';

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
        <StyledComponentsRegistry>
          <Wrapper>
            <Navbar />

            {children}

            <Footer />
          </Wrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
