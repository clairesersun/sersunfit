/**
 * ============================================
 * SHARED STYLES UTILITY
 * ============================================
 *
 * Creates consistent typography styles based on theme.
 * Used across all page components.
 *
 * @module createStyles
 * ============================================
 */

import { THEME } from '../styles/theme';

/**
 * Creates typography style objects based on active theme
 *
 * @param {Object} theme - Active theme with color values
 * @returns {Object} Style objects for typography elements
 */
export const createStyles = (theme) => ({
  label: {
    fontFamily: THEME.fonts.ui,
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: theme.primary,
    marginBottom: '1rem',
    display: 'block',
  },
  heroHeading: {
    fontFamily: THEME.fonts.display,
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: 300,
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
    color: theme.text,
  },
  h2: {
    fontFamily: THEME.fonts.display,
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    marginBottom: '1.5rem',
    color: theme.text,
  },
  h3: {
    fontFamily: THEME.fonts.display,
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 500,
    lineHeight: 1.3,
    marginBottom: '1rem',
    color: theme.text,
  },
  bodyLarge: {
    fontFamily: THEME.fonts.body,
    fontSize: '1.125rem',
    lineHeight: 1.8,
    color: theme.textSecondary,
  },
  body: {
    fontFamily: THEME.fonts.body,
    fontSize: '1rem',
    lineHeight: 1.8,
    color: theme.textSecondary,
  },
});

export default createStyles;
