// types
import { TranEnterType, TranExitType } from '../types';

/* ---------------------------------------------------------------------- */

export const varTranEnter = (props?: TranEnterType) => {
  const duration = props?.durationIn || 0.6;
  const ease = props?.easeIn || [0.43, 0.13, 0.23, 0.96];

  return { duration, ease };
};

export const varTranExit = (props?: TranExitType) => {
  const duration = props?.durationOut || 0.4;
  const ease = props?.easeOut || [0.43, 0.13, 0.23, 0.96];

  return { duration, ease };
};
