/**
 * ============================================
 * ApproachIcons COMPONENT
 * ============================================
 *
 * Custom SVG icons for the approach/pillars section.
 *
 * ICONS:
 * - somatic: Concentric circles (body awareness)
 * - strength: Mountain/growth symbol
 * - accountability: Connected circles (partnership)
 *
 * @module ApproachIcons
 * ============================================
 */

import React from 'react';

/**
 * Icon component map for approach pillars
 * Each icon receives a color prop for the stroke/fill
 *
 * @example
 * const Icon = ApproachIcons['somatic'];
 * <Icon color={theme.primary} />
 */
const ApproachIcons = {
  somatic: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <circle cx="16" cy="16" r="8" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="16" cy="16" r="3" fill={color} />
      <path
        d="M16 2v4M16 26v4M2 16h4M26 16h4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  ),

  strength: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 24c0-8 8-14 8-14s8 6 8 14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 26c0-5 4-9 4-9s4 4 4 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="16" cy="8" r="3" stroke={color} strokeWidth="1.5" />
      <line
        x1="16"
        y1="11"
        x2="16"
        y2="14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  accountability: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M6 16c0-5.5 4.5-10 10-10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M26 16c0 5.5-4.5 10-10 10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="10" cy="10" r="3" stroke={color} strokeWidth="1.5" />
      <circle cx="22" cy="22" r="3" stroke={color} strokeWidth="1.5" />
      <path
        d="M12 12l8 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
    </svg>
  ),
};

export default ApproachIcons;
