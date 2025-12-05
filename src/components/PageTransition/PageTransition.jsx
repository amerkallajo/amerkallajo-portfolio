/**
 * PageTransition Component
 * =========================
 * 
 * Animated wrapper for page content.
 * Handles enter/exit animations during route changes.
 * 
 * TODO: Implement the following:
 * - Framer Motion animation wrapper
 * - Fade + slide up on enter
 * - Fade + scale down on exit
 * - Configurable animation duration
 * 
 * See:
 * - docs/ANIMATION_PLAN.md for transition specs
 * - docs/ROUTING_PLAN.md for transition timing
 */

import { motion } from 'framer-motion';
// import { pageVariants } from '../../utils/motion';
import styles from './PageTransition.module.css';

// Default animation variants
const defaultVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.0, 0.0, 0.2, 1], // ease-out
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.4, 0.0, 1, 1], // ease-in
    },
  },
};

function PageTransition({ children, variants = defaultVariants }) {
  return (
    <motion.div
      className={styles.pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;

