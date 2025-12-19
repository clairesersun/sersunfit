/**
 * ============================================
 * OrganicShape COMPONENT
 * ============================================
 *
 * Decorative SVG blob shapes for visual interest.
 * Has subtle parallax animation on scroll.
 *
 * VARIANTS:
 * 1 - Soft rounded blob
 * 2 - Wavy organic shape
 * 3 - Irregular natural form
 *
 * ACCESSIBILITY:
 * - aria-hidden="true" (decorative only)
 * - pointer-events: none
 *
 * @module OrganicShape
 * ============================================
 */

import React from 'react';
import useParallax from '../../hooks/useParallax';
import useReducedMotion from '../../hooks/useReducedMotion';
import useIsMobile from '../../hooks/useIsMobile';

/**
 * SVG path data for different shape variants
 */
const PATHS = {
  1: 'M45.3,-52.9C59.9,-42.4,73.8,-28.5,78.1,-11.8C82.4,4.9,77.2,24.3,66.1,38.3C55,52.3,38.1,60.8,20.3,66.4C2.5,72,-16.2,74.6,-32.4,68.8C-48.6,63,-62.3,48.8,-70.4,31.6C-78.5,14.4,-81,-5.8,-75.2,-23.1C-69.4,-40.4,-55.3,-54.8,-39.5,-65C-23.7,-75.2,-6.2,-81.2,8.1,-90.5C22.4,-99.8,30.7,-63.4,45.3,-52.9Z',
  2: 'M39.5,-47.1C52.9,-36.6,66.8,-25.8,71.7,-11.4C76.6,3,72.4,21,63.1,35.1C53.8,49.2,39.4,59.4,23.5,65.2C7.6,71,-9.8,72.4,-25.4,67.1C-41,61.8,-54.8,49.8,-63.8,34.5C-72.8,19.2,-77,0.6,-73.5,-16.2C-70,-33,-58.8,-48,-44.5,-58.3C-30.2,-68.6,-12.8,-74.2,1.4,-75.9C15.6,-77.6,26.1,-57.6,39.5,-47.1Z',
  3: 'M44.1,-51.5C57.3,-41.9,68,-27.4,71.8,-11C75.6,5.4,72.4,23.7,62.8,37.5C53.2,51.3,37.2,60.6,20.1,66.1C3,71.6,-15.2,73.3,-30.8,67.3C-46.4,61.3,-59.4,47.6,-67.1,31.1C-74.8,14.6,-77.2,-4.7,-71.8,-21.4C-66.4,-38.1,-53.2,-52.2,-38.3,-61.4C-23.4,-70.6,-6.8,-74.9,6.8,-83C20.4,-91.1,30.9,-61.1,44.1,-51.5Z',
};

/**
 * OrganicShape - Decorative animated SVG shape
 *
 * Props:
 * @param {1|2|3} [variant=1] - Shape variant to render
 * @param {Object} [style] - Position and size styles
 * @param {boolean} isDarkMode - Current theme mode
 * @param {string} primaryColor - Theme primary color for fill
 *
 * @example
 * <OrganicShape
 *   variant={1}
 *   isDarkMode={isDarkMode}
 *   primaryColor={theme.primary}
 *   style={{
 *     width: '400px',
 *     height: '400px',
 *     top: '-10%',
 *     right: '-5%'
 *   }}
 * />
 */
const OrganicShape = ({
  variant = 1,
  style = {},
  isDarkMode,
  primaryColor,
}) => {
  const { ref, offset } = useParallax(0.1);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  const path = PATHS[variant] || PATHS[1];

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      style={{
        position: 'absolute',
        opacity: isDarkMode ? 0.03 : 0.04,
        pointerEvents: 'none',
        transform: shouldAnimate
          ? `translateY(${offset * 0.5}px) rotate(${offset * 0.02}deg)`
          : 'none',
        transition: 'transform 0.1s linear',
        ...style,
      }}
      aria-hidden="true"
    >
      <path
        d={path}
        transform="translate(100 100)"
        fill={primaryColor}
      />
    </svg>
  );
};

export default OrganicShape;
