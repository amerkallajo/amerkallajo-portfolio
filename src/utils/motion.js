/**
 * Framer Motion Variants & Presets
 * =================================
 * 
 * TODO: Implement animation variants based on docs/ANIMATION_PLAN.md
 * 
 * This file defines reusable animation variants for Framer Motion
 * to ensure consistent animations across all components.
 */

// ================================
// Page Transition Variants
// ================================

/**
 * TODO: Implement page transition animations
 * 
 * Page transitions should:
 * - Exit: fade out + slight scale down (0.3s, ease-in)
 * - Enter: fade in + slide up from below (0.4s, ease-out)
 */
export const pageVariants = {
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

// ================================
// Stagger Children Variants
// ================================

/**
 * TODO: Use for staggered animations of lists/grids
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
};

// ================================
// Hero Animation Variants
// ================================

/**
 * TODO: Use for hero section entry animations
 */
export const heroVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

export const heroTitleVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
};

// ================================
// Button Variants
// ================================

/**
 * TODO: Use for button hover/tap animations
 */
export const buttonVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// ================================
// Fade Variants
// ================================

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// ================================
// Utility Functions
// ================================

/**
 * Creates a delay for staggered animations
 * @param {number} index - Item index
 * @param {number} staggerDelay - Delay between items (default 0.1s)
 */
export const getStaggerDelay = (index, staggerDelay = 0.1) => ({
  transition: {
    delay: index * staggerDelay,
  },
});

