/**
 * ============================================
 * ImageReveal COMPONENT
 * ============================================
 *
 * Image component with scale/reveal animation on scroll.
 * Image starts zoomed in and scales to normal size.
 *
 * ACCESSIBILITY:
 * - Requires alt text for screen readers
 * - Disabled for reduced motion preference
 * - Uses lazy loading for performance
 *
 * @module ImageReveal
 * ============================================
 */

import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useReducedMotion from '../../hooks/useReducedMotion';
import useIsMobile from '../../hooks/useIsMobile';
import { THEME } from '../../styles/theme';

/**
 * ImageReveal - Animated image reveal on scroll
 *
 * Props:
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility (required)
 * @param {Object} [style] - Additional container styles
 *
 * @example
 * <ImageReveal
 *   src="/assets/headshot.webp"
 *   alt="Claire Sersun, fitness coach"
 *   style={{ maxWidth: '350px', aspectRatio: '4/5' }}
 * />
 */
const ImageReveal = ({ src, alt, style = {} }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <div
      ref={ref}
      style={{
        overflow: 'hidden',
        borderRadius: THEME.borderRadius.md,
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: shouldAnimate
            ? isVisible ? 'scale(1)' : 'scale(1.2)'
            : 'scale(1)',
          opacity: shouldAnimate ? (isVisible ? 1 : 0) : 1,
          transition: shouldAnimate
            ? 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
            : 'none',
        }}
        loading="lazy"
      />
    </div>
  );
};

export default ImageReveal;
