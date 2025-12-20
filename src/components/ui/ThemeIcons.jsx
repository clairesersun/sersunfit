/**
 * ============================================
 * ThemeIcons COMPONENT
 * ============================================
 *
 * Custom SVG icons for theme toggle (dark/light mode).
 *
 * ICONS:
 * - light: Open eye (awake, aware, light mode)
 * - dark: Closed eye (resting, dark mode)
 *
 * DESIGN RATIONALE:
 * - Matches site's somatic awareness and body-mind connection theme
 * - Organic, hand-drawn style consistent with other site icons
 * - Eye metaphor represents awareness and presence
 *
 * @module ThemeIcons
 * ============================================
 */

import React from 'react';

/**
 * Icon component map for theme toggle
 * Each icon receives a color prop for the stroke/fill
 *
 * @example
 * const Icon = ThemeIcons.light;
 * <Icon color={theme.primary} />
 */
const ThemeIcons = {
  // Open eye for light mode (awake, aware)
  light: ({ color, size = 18 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* Eye outline - organic shape */}
      <path
        d="M2 16c0 0 6-8 14-8s14 8 14 8-6 8-14 8-14-8-14-8z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Iris */}
      <circle
        cx="16"
        cy="16"
        r="4.5"
        stroke={color}
        strokeWidth="1.8"
      />
      {/* Pupil */}
      <circle
        cx="16"
        cy="16"
        r="2"
        fill={color}
      />
      {/* Light reflection - adds life */}
      <circle
        cx="17.5"
        cy="14.5"
        r="1"
        fill={color}
        opacity="0.4"
      />
      {/* Lashes on top lid - following the upper curve */}
      <path
        d="M8 11l-1-2M12 9l-0.5-2.5M16 8l0-3M20 9l0.5-2.5M24 11l1-2"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  ),

  // Closed eye for dark mode (resting, peaceful)
  dark: ({ color, size = 18 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* Closed eyelid - gentle curve */}
      <path
        d="M4 16c0 0 5 6 12 6s12-6 12-6"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lower lid suggestion */}
      <path
        d="M6 17c0 0 4 4 10 4s10-4 10-4"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.3"
      />
      {/* Lashes on closed lid - aligned with the curve, extending downward */}
      <path
        d="M6 18l-1 2.5M10 20l-0.5 2.5M16 22l0 3M22 20l0.5 2.5M26 18l1 2.5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Subtle sleep lines - restful state */}
      <path
        d="M23 18c1 0.5 2 1 2 1M25 20c1 0.5 1.5 1 1.5 1"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  ),
};

export default ThemeIcons;
