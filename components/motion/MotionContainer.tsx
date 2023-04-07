// framer motion
import { motion, MotionProps } from 'framer-motion';
// variants
import { varContainer } from './variants';

/* ---------------------------------------------------------------------- */

type Props = MotionProps;

export default function MotionContainer({ children, ...other }: Props) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varContainer()}
      {...other}
    >
      {children}
    </motion.div>
  );
}
