/**
 * ============================================
 * PhilosophyIcons COMPONENT
 * ============================================
 *
 * Custom SVG icons for About page philosophy section.
 *
 * ICONS:
 * - capability: Trophy/mountain (capability over aesthetics)
 * - understanding: Brain/book (understanding over obedience)
 * - sustainability: Plant/cycle (sustainability over intensity)
 *
 * @module PhilosophyIcons
 * ============================================
 */

import React from 'react';

/**
 * Icon component map for philosophy principles
 * Each icon receives a color prop for the stroke/fill
 *
 * @example
 * const Icon = PhilosophyIcons['capability'];
 * <Icon color={theme.primary} />
 */
const PhilosophyIcons = {
  capability: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Mountain peaks */}
      <path
        d="M4 24l6-12 4 6 6-14 8 20h-24z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Peak accent */}
      <path
        d="M20 4l2 5 3 1-2 3v3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      {/* Flag at summit */}
      <circle cx="20" cy="4" r="1.5" fill={color} />
    </svg>
  ),

  understanding: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Brain outline */}
      <path
        d="M12 6c-3 0-5 2-5 5 0 1 0 2 1 3-1 1-1 2-1 3 0 3 2 5 5 5h8c3 0 5-2 5-5 0-1 0-2-1-3 1-1 1-2 1-3 0-3-2-5-5-5-1-2-2-3-4-3s-3 1-4 3z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner neural pathways */}
      <path
        d="M16 10v6m-3-2l6 0"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Light bulb moment */}
      <circle cx="16" cy="16" r="2" stroke={color} strokeWidth="1.5" opacity="0.4" />
    </svg>
  ),

  sustainability: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Growing plant */}
      <path
        d="M16 26v-16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M16 14c-3-3-6-2-6 2 0 0 3-1 6-2z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      <path
        d="M16 10c3-3 6-2 6 2 0 0-3-1-6-2z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Circular growth cycle */}
      <path
        d="M8 24c2 2 6 2 8 0"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M24 24c-2 2-6 2-8 0"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  ),
};

export default PhilosophyIcons;
