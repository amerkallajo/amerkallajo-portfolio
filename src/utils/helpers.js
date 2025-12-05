/**
 * Utility Helper Functions
 * ========================
 * 
 * TODO: Add helper functions as needed during implementation
 * 
 * This file contains utility functions used throughout
 * the application.
 */

// ================================
// Class Name Utilities
// ================================

/**
 * Combines class names, filtering out falsy values
 * TODO: Consider using 'clsx' or 'classnames' package for more features
 * 
 * @param  {...string} classes - Class names to combine
 * @returns {string} Combined class string
 * 
 * @example
 * cn('base', isActive && 'active', isDisabled && 'disabled')
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// ================================
// Scroll Utilities
// ================================

/**
 * Scrolls to top of page
 * TODO: Use on page transitions
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

/**
 * Locks body scroll (for modals, etc.)
 * TODO: Implement if needed for lightbox/modal
 */
export function lockScroll() {
  document.body.style.overflow = 'hidden';
}

export function unlockScroll() {
  document.body.style.overflow = '';
}

// ================================
// Media Query Helpers
// ================================

/**
 * Checks if user prefers reduced motion
 * TODO: Use to conditionally disable animations
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Checks if device is mobile (by screen width)
 * TODO: Use for responsive adjustments
 */
export function isMobile() {
  return window.matchMedia('(max-width: 768px)').matches;
}

// ================================
// Performance Utilities
// ================================

/**
 * Debounce function
 * TODO: Use for resize handlers, scroll handlers, etc.
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function
 * TODO: Use for high-frequency events like scroll
 */
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ================================
// Placeholder Functions
// ================================

// TODO: Add any additional helpers as needed during implementation
// Examples:
// - formatPhoneNumber(number)
// - generateWhatsAppLink(number, message)
// - preloadImage(src)
// - getRandomInRange(min, max) - for background animations

