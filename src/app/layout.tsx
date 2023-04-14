import '@/globals.css';
import { Metadata } from 'next';
import EmotionStyleRegistry from '@/emotion';
import BaseLayout from '@/layouts/BaseLayout';
import StylesWrapper from '@/components/StylesWrapper';

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
          <StylesWrapper>
            <BaseLayout>{children}</BaseLayout>
          </StylesWrapper>
        </EmotionStyleRegistry>
      </body>
    </html>
  );
}
