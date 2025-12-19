/**
 * ============================================
 * Card COMPONENT
 * ============================================
 *
 * Content card with reveal animation.
 * Used for feature lists, audience items, etc.
 *
 * @module Card
 * ============================================
 */

import React from 'react';
import { THEME } from '../../styles/theme';
import CONFIG from '../../config/config';
import RevealOnScroll from '../animation/RevealOnScroll';

/**
 * Card - Animated content card
 *
 * Props:
 * @param {React.ReactNode} children - Card content
 * @param {Object} theme - Active theme object
 * @param {Object} [style] - Additional inline styles
 * @param {number} [index=0] - Index for stagger animation delay
 *
 * @example
 * <Card theme={theme} index={2}>
 *   <h3>Feature Title</h3>
 *   <p>Feature description</p>
 * </Card>
 */
const Card = ({ children, theme, style = {}, index = 0 }) => (
  <RevealOnScroll
    animation="slideUp"
    delay={index * CONFIG.animation.staggerDelay}
  >
    <div
      style={{
        backgroundColor: theme.bgSecondary,
        padding: '2.5rem',
        borderRadius: THEME.borderRadius.lg,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ...style,
      }}
    >
      {children}
    </div>
  </RevealOnScroll>
);

export default Card;
