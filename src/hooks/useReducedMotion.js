/**
 * ============================================
 * useReducedMotion HOOK
 * ============================================
 *
 * Detects user's reduced motion preference.
 *
 * ACCESSIBILITY:
 * This hook is critical for users with vestibular disorders,
 * motion sensitivity, or other conditions affected by animations.
 * When true, all animations should be disabled or minimized.
 *
 * USAGE:
 * - Check before applying any animation
 * - Pass down as prop to avoid multiple listeners
 * - Used by animation components to conditionally render
 *
 * @module useReducedMotion
 * ============================================
 */

import { useState, useEffect } from 'react';

/**
 * Hook to detect prefers-reduced-motion media query
 *
 * @returns {boolean} True if user prefers reduced motion
 *
 * @example
 * const prefersReducedMotion = useReducedMotion();
 *
 * const animationStyle = {
 *   transition: prefersReducedMotion ? 'none' : 'all 0.3s ease'
 * };
 */
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handler = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    // Listen for changes (user might toggle in system settings)
    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  return prefersReducedMotion;
};

export default useReducedMotion;
