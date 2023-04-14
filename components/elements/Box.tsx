/** @jsxImportSource @emotion/react */
'use client';

import { Theme, Interpolation } from '@emotion/react';

/* ---------------------------------------------------------------------- */

type DefaultProps = {
  css?: Interpolation<Theme>;
  children?: React.ReactNode;
};

//

type Props_Div = DefaultProps & {
  component?: 'div';
} & React.HTMLAttributes<HTMLDivElement>;

type Props_A = DefaultProps & {
  component: 'a';
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

/* ---------------------------------------------------------------------- */

export type BoxProps = Props_Div | Props_A;

export default function Box({ css, children, ...rest }: BoxProps) {
  if ('component' in rest && rest.component === 'a') {
    return (
      <a css={css} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <div css={css} {...rest}>
      {children}
    </div>
  );
}
