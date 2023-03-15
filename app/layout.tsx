import './globals.css';
import StyledComponentsRegistry from './lib/registry';

/* ---------------------------------------------------------------------- */

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

      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
