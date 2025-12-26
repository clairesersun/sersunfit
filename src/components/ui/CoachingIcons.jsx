/**
 * ============================================
 * CoachingIcons COMPONENT
 * ============================================
 *
 * Custom SVG icons for the coaching page "What's Included" section.
 *
 * ICONS:
 * - programming: Dumbbell/clipboard (personalized workouts)
 * - nutrition: Apple/plate (nutritional guidance)
 * - checkin: Calendar/checkmark (weekly check-ins)
 * - community: Connected people (community access)
 * - support: Message bubble (ongoing support)
 * - education: Book/lightbulb (movement education)
 *
 * @module CoachingIcons
 * ============================================
 */

import React from 'react';

/**
 * Icon component map for coaching features
 * Each icon receives a color prop for the stroke/fill
 *
 * @example
 * const Icon = CoachingIcons['programming'];
 * <Icon color={theme.primary} />
 */
const CoachingIcons = {
  programming: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Clipboard base */}
      <rect
        x="6"
        y="4"
        width="20"
        height="24"
        rx="2"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Dumbbell */}
      <circle cx="12" cy="16" r="2" fill={color} />
      <circle cx="20" cy="16" r="2" fill={color} />
      <line
        x1="14"
        y1="16"
        x2="18"
        y2="16"
        stroke={color}
        strokeWidth="1.5"
      />
      {/* Checklist lines */}
      <line
        x1="10"
        y1="10"
        x2="22"
        y2="10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      <line
        x1="10"
        y1="22"
        x2="18"
        y2="22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  ),

  nutrition: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Apple body */}
      <path
        d="M16 8c-4 0-7 3-7 7 0 5 3 9 7 9s7-4 7-9c0-4-3-7-7-7z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Leaf */}
      <path
        d="M16 8c0-2 1.5-3 3-3 1 0 2 1 2 2.5 0 1.5-1 2.5-2 2.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Inner detail */}
      <circle cx="16" cy="15" r="1.5" fill={color} opacity="0.4" />
    </svg>
  ),

  checkin: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Calendar */}
      <rect
        x="4"
        y="6"
        width="24"
        height="22"
        rx="2"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <line
        x1="4"
        y1="12"
        x2="28"
        y2="12"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Checkmark */}
      <polyline
        points="11 18 14 21 21 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top tabs */}
      <line
        x1="10"
        y1="4"
        x2="10"
        y2="8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <line
        x1="22"
        y1="4"
        x2="22"
        y2="8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  ),

  community: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Three connected people */}
      {/* Person 1 - left */}
      <circle cx="10" cy="10" r="3" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <path
        d="M5 22c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Person 2 - center */}
      <circle cx="20" cy="10" r="3" stroke={color} strokeWidth="1.5" />
      <path
        d="M15 22c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Connection line */}
      <path
        d="M13 12c1 1 4 1 5 0"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
        opacity="0.4"
      />
    </svg>
  ),

  support: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Message bubble */}
      <path
        d="M6 10c0-2 1.5-4 4-4h12c2.5 0 4 2 4 4v10c0 2-1.5 4-4 4h-8l-6 4v-4c-1.5 0-2-1.5-2-3V10z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Heart symbol inside */}
      <path
        d="M16 18s-4-2-4-5c0-1.5 1-2.5 2-2.5 1 0 2 1 2 2.5 0-1.5 1-2.5 2-2.5 1 0 2 1 2 2.5 0 3-4 5-4 5z"
        fill={color}
        opacity="0.5"
      />
    </svg>
  ),

  education: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Book base */}
      <rect
        x="7"
        y="6"
        width="18"
        height="20"
        rx="1.5"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Book spine */}
      <line
        x1="16"
        y1="6"
        x2="16"
        y2="26"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.3"
      />
      {/* Lightbulb - represents understanding */}
      <circle cx="16" cy="14" r="3.5" stroke={color} strokeWidth="1.5" />
      <path
        d="M14 17.5c0 1 0.5 2 2 2s2-1 2-2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Light rays */}
      <line
        x1="16"
        y1="8"
        x2="16"
        y2="6.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="20"
        y1="10"
        x2="21"
        y2="9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="12"
        y1="10"
        x2="11"
        y2="9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  ),
};

export default CoachingIcons;
