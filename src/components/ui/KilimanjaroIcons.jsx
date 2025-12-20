/**
 * ============================================
 * KilimanjaroIcons COMPONENT
 * ============================================
 *
 * Custom SVG icons for Kilimanjaro training blueprint features.
 *
 * ICONS:
 * - timeline: Calendar/steps (training timeline)
 * - joint: Shield/knee (joint protection)
 * - endurance: Lungs/heart (build endurance)
 * - breathwork: Wind/meditation (breathwork practices)
 * - notrails: Stairs/treadmill (indoor options)
 * - taper: Rest/moon (tapering protocol)
 *
 * @module KilimanjaroIcons
 * ============================================
 */

import React from 'react';

/**
 * Icon component map for Kilimanjaro training features
 * Each icon receives a color prop for the stroke/fill
 *
 * @example
 * const Icon = KilimanjaroIcons['timeline'];
 * <Icon color={theme.primary} />
 */
const KilimanjaroIcons = {
  timeline: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Ascending steps */}
      <path
        d="M4 24h6v-6h6v-6h6v-6h6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Progress dots */}
      <circle cx="7" cy="21" r="1.5" fill={color} opacity="0.6" />
      <circle cx="13" cy="15" r="1.5" fill={color} opacity="0.6" />
      <circle cx="19" cy="9" r="1.5" fill={color} opacity="0.6" />
      <circle cx="25" cy="3" r="1.5" fill={color} />
      {/* Timeline arrow */}
      <path
        d="M25 3l2 2m-2-2l-2 2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  joint: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Shield shape */}
      <path
        d="M16 4s-6 2-6 6v6c0 6 6 10 6 10s6-4 6-10v-6c0-4-6-6-6-6z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Knee/joint symbol inside */}
      <circle cx="16" cy="14" r="3" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <path
        d="M14 17l-2 3m4-3l2 3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  ),

  endurance: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Heart with pulse */}
      <path
        d="M16 26s-8-6-8-12c0-3 2-5 4-5 2 0 3 1 4 3 1-2 2-3 4-3 2 0 4 2 4 5 0 6-8 12-8 12z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pulse line */}
      <path
        d="M4 16h5l2-4 2 8 2-4h5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />
    </svg>
  ),

  breathwork: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Meditation figure */}
      <circle cx="16" cy="8" r="3" stroke={color} strokeWidth="1.5" />
      {/* Body in sitting position */}
      <path
        d="M16 11v6m-4 4c0-2 2-4 4-4s4 2 4 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Breath waves */}
      <path
        d="M6 14c2 0 2-2 4-2s2 2 4 2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M18 14c2 0 2-2 4-2s2 2 4 2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  ),

  notrails: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Stairs/steps */}
      <path
        d="M6 26h4v-4h4v-4h4v-4h4v-4h4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Indoor/building indicator */}
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="2"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.3"
      />
      {/* Movement arrow */}
      <path
        d="M24 8l2-2m0 0l-2-2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  ),

  taper: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Moon/rest symbol */}
      <path
        d="M20 6c-4 0-7 3-7 7s3 7 7 7c-5 0-9-4-9-9s4-9 9-9v4z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Descending graph showing taper */}
      <path
        d="M6 20l3-3 3 1 3-4 3 2 3-1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      {/* Stars */}
      <circle cx="10" cy="10" r="1" fill={color} opacity="0.4" />
      <circle cx="14" cy="7" r="1" fill={color} opacity="0.4" />
    </svg>
  ),
};

export default KilimanjaroIcons;
