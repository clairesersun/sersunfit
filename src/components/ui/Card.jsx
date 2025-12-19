/**
 * ============================================
 * Card COMPONENT
 * ============================================
 *
 * Content card with reveal animation.
 * Used for feature lists, audience items, etc.
 * Uses BEM methodology for styling.
 *
 * @module Card
 * ============================================
 */

import React from 'react';
import CONFIG from '../../config/config';
import RevealOnScroll from '../animation/RevealOnScroll';

/**
 * Card - Animated content card
 *
 * Props:
 * @param {React.ReactNode} children - Card content
 * @param {number} [index=0] - Index for stagger animation delay
 *
 * @example
 * <Card index={2}>
 *   <h3>Feature Title</h3>
 *   <p>Feature description</p>
 * </Card>
 */
const Card = ({ children, index = 0 }) => (
  <RevealOnScroll
    animation="slideUp"
    delay={index * CONFIG.animation.staggerDelay}
  >
    <div className="card">
      {children}
    </div>
  </RevealOnScroll>
);

export default Card;
