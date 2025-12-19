/**
 * ============================================
 * RevealOnScroll COMPONENT
 * ============================================
 *
 * Wrapper component that animates children when they enter viewport.
 *
 * ANIMATIONS AVAILABLE:
 * - fade: Simple opacity fade in
 * - slideUp/slideDown: Vertical slide with fade
 * - slideLeft/slideRight: Horizontal slide with fade
 * - scale: Scale up with fade
 * - blur: Blur to clear with slight movement
 * - rotateIn: Slight rotation with slide
 *
 * ACCESSIBILITY:
 * - Automatically disabled for prefers-reduced-motion
 * - Disabled on mobile for performance
 *
 * @module RevealOnScroll
 * ============================================
 */

import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useReducedMotion from '../../hooks/useReducedMotion';
import useIsMobile from '../../hooks/useIsMobile';

/**
 * Animation state definitions
 * Each animation has hidden (initial) and visible (final) states
 */
const ANIMATIONS = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, transform: 'translateY(60px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  },
  slideDown: {
    hidden: { opacity: 0, transform: 'translateY(-60px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  },
  slideLeft: {
    hidden: { opacity: 0, transform: 'translateX(60px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  slideRight: {
    hidden: { opacity: 0, transform: 'translateX(-60px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  scale: {
    hidden: { opacity: 0, transform: 'scale(0.9)' },
    visible: { opacity: 1, transform: 'scale(1)' },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' },
    visible: { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' },
  },
  rotateIn: {
    hidden: { opacity: 0, transform: 'rotate(-5deg) translateY(30px)' },
    visible: { opacity: 1, transform: 'rotate(0deg) translateY(0)' },
  },
};

/**
 * RevealOnScroll - Animates children when entering viewport
 *
 * Props:
 * @param {React.ReactNode} children - Content to reveal
 * @param {string} [animation='slideUp'] - Animation type
 * @param {number} [delay=0] - Delay before animation starts (ms)
 * @param {number} [duration=0.8] - Animation duration (seconds)
 * @param {number} [threshold] - IntersectionObserver threshold
 * @param {string} [className] - Additional CSS classes
 * @param {Object} [style] - Additional inline styles
 *
 * @example
 * <RevealOnScroll animation="slideUp" delay={200}>
 *   <h2>This slides up when scrolled into view</h2>
 * </RevealOnScroll>
 */
const RevealOnScroll = ({
  children,
  animation = 'slideUp',
  delay = 0,
  duration = 0.8,
  threshold,
  className = '',
  style = {},
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const anim = ANIMATIONS[animation] || ANIMATIONS.slideUp;
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(shouldAnimate ? (isVisible ? anim.visible : anim.hidden) : {}),
        transition: shouldAnimate
          ? `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          : 'none',
        willChange: shouldAnimate ? 'transform, opacity' : 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
