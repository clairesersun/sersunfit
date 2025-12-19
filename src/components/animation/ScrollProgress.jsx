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
import { THEME } from '../../styles/theme';

/**
 * ScrollProgress - Fixed scroll progress bar
 *
 * Props:
 * @param {Object} theme - Active theme object with primary color
 *
 * @example
 * <ScrollProgress theme={theme} />
 */
const ScrollProgress = ({ theme }) => {
  const progress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Hide progress bar for reduced motion or mobile
  if (prefersReducedMotion || isMobile) {
    return null;
  }

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress * 100}%`,
        height: '3px',
        backgroundColor: theme.primary,
        zIndex: THEME.zIndex.scrollProgress,
        transition: 'width 0.1s linear',
      }}
    />
  );
};

export default ScrollProgress;
