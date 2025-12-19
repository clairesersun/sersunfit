/**
 * ============================================
 * ParallaxSection COMPONENT
 * ============================================
 *
 * Section wrapper with parallax background effect.
 * Creates depth by moving background at different rate than scroll.
 *
 * STRUCTURE:
 * - Outer container (positioned, overflow hidden)
 * - Background layer (parallax-animated)
 * - Content layer (static, above background)
 *
 * ACCESSIBILITY:
 * - Disabled for prefers-reduced-motion
 * - Disabled on mobile for performance
 *
 * @module ParallaxSection
 * ============================================
 */

import React from 'react';
import useParallax from '../../hooks/useParallax';
import useReducedMotion from '../../hooks/useReducedMotion';
import useIsMobile from '../../hooks/useIsMobile';

/**
 * ParallaxSection - Section with parallax scroll effect
 *
 * Props:
 * @param {React.ReactNode} children - Section content
 * @param {number} [speed=0.3] - Parallax speed multiplier (0-1)
 * @param {Object} [style] - Additional container styles
 * @param {string} [className] - Additional CSS classes
 *
 * @example
 * <ParallaxSection speed={0.2} className="hero-gradient">
 *   <h1>Hero Content</h1>
 * </ParallaxSection>
 */
const ParallaxSection = ({
  children,
  speed = 0.3,
  style = {},
  className = '',
}) => {
  const { ref, offset } = useParallax(speed);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Parallax background layer */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: 0,
          right: 0,
          bottom: '-20%',
          transform: shouldAnimate ? `translateY(${offset}px)` : 'none',
          willChange: shouldAnimate ? 'transform' : 'auto',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Content layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
