/**
 * ============================================
 * AnimatedText COMPONENT
 * ============================================
 *
 * Text component that reveals word by word on scroll.
 * Creates a typewriter-like effect with staggered word animations.
 *
 * ACCESSIBILITY:
 * - Falls back to static text for reduced motion
 * - Disabled on mobile for performance
 *
 * @module AnimatedText
 * ============================================
 */

import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useReducedMotion from '../../hooks/useReducedMotion';
import useIsMobile from '../../hooks/useIsMobile';

/**
 * AnimatedText - Word-by-word reveal animation
 *
 * Props:
 * @param {string} children - Text content (must be a string)
 * @param {React.ElementType} [as='span'] - HTML element to render
 * @param {number} [delay=0] - Delay before animation starts (ms)
 * @param {number} [stagger=50] - Delay between each word (ms)
 * @param {string} [animation='slideUp'] - Currently only slideUp supported
 * @param {Object} [style] - Additional inline styles
 *
 * @example
 * <AnimatedText as="h1" delay={200} stagger={80}>
 *   You are capable of more than you think
 * </AnimatedText>
 */
const AnimatedText = ({
  children,
  as: Component = 'span',
  delay = 0,
  stagger = 50,
  animation = 'slideUp',
  style = {},
}) => {
  const { ref, isVisible } = useScrollAnimation();
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  // If animations disabled or content is not a string, render static
  if (!shouldAnimate || typeof children !== 'string') {
    return <Component style={style}>{children}</Component>;
  }

  const words = children.split(' ');

  return (
    <Component ref={ref} style={{ ...style, display: 'inline' }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: '0.3em',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
              opacity: isVisible ? 1 : 0,
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * stagger}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};

export default AnimatedText;
