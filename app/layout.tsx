import './globals.css';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';

/* ---------------------------------------------------------------------- */

const roboto = Roboto({ weight: ['300', '500', '700'], subsets: ['latin'] });

export const metadata = {
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

      <body style={{ fontFamily: roboto.style.fontFamily }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
