/**
 * ============================================
 * Divider COMPONENT
 * ============================================
 *
 * Decorative horizontal divider with reveal animation.
 * Uses primary brand color.
 *
 * @module Divider
 * ============================================
 */

import React from 'react';
import RevealOnScroll from '../animation/RevealOnScroll';

/**
 * Divider - Animated horizontal rule
 *
 * Props:
 * @param {Object} theme - Active theme object with primary color
 *
 * @example
 * <Divider theme={theme} />
 */
const Divider = ({ theme }) => (
  <RevealOnScroll animation="scale" duration={0.6}>
    <div
      style={{
        width: '60px',
        height: '2px',
        backgroundColor: theme.primary,
        margin: '3rem 0',
        borderRadius: '1px',
      }}
      role="separator"
      aria-hidden="true"
    />
  </RevealOnScroll>
);

export default Divider;
