/**
 * ============================================
 * ScrollProgress COMPONENT
 * ============================================
 *
 * Fixed progress bar showing page scroll position.
 * Appears at top of viewport.
 *
 * ACCESSIBILITY:
 * - Hidden for reduced motion preference
 * - Hidden on mobile for cleaner UI
 *
 * @module ScrollProgress
 * ============================================
 */

import React from 'react';
import useScrollProgress from '../../hooks/useScrollProgress';
import useReducedMotion from '../../hooks/useReducedMotion';
import useIsMobile from '../../hooks/useIsMobile';

/**
 * ScrollProgress - Fixed scroll progress bar
 *
 * @example
 * <ScrollProgress />
 */
const ScrollProgress = () => {
  const progress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Hide progress bar for reduced motion or mobile
  if (prefersReducedMotion || isMobile) {
    return null;
  }

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      style={{
        width: `${progress * 100}%`,
      }}
    />
  );
};

export default ScrollProgress;
