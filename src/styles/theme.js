/**
 * ============================================
 * THEME MODULE
 * ============================================
 *
 * Design tokens and theme configuration.
 * Supports dark and light color schemes.
 *
 * USAGE:
 *   import { THEME } from '../styles/theme';
 *
 *   // Access color schemes
 *   const colors = isDarkMode ? THEME.colors.dark : THEME.colors.light;
 *
 *   // Access typography
 *   fontFamily: THEME.fonts.display
 *
 * ============================================
 */

export const THEME = {
  /**
   * Color schemes for dark and light modes
   * Each scheme provides consistent semantic color names
   */
  colors: {
    dark: {
      bg: '#1a1f1a',
      bgSecondary: '#242a24',
      bgTertiary: '#2d352d',
      text: '#ebe9e6',
      textSecondary: '#c0bdb8', // AAA compliant (9.5:1)
      textMuted: '#b8b4ae', // AAA compliant (7.4:1 on bgSecondary, 8.6:1 on bg)
      primary: '#7fc794', // Lighter green for AAA on dark bg (7.6:1)
      primaryHover: '#8fd7a4',
      primaryText: '#0a0d0a', // Darker text for AAA on primary button (7.5:1)
      primaryMuted: '#6a9178', // Muted primary for large decorative text (4.7:1, AAA for 48px+)
      border: '#3a423a',
    },
    light: {
      bg: '#faf9f7',
      bgSecondary: '#f0eeeb',
      bgTertiary: '#e8e5e1',
      text: '#1a1f1a',
      textSecondary: '#3d3a36', // AAA compliant (11.5:1)
      textMuted: '#4d4945', // AAA compliant (7.9:1 on bgSecondary, 8.6:1 on bg)
      primary: '#2d5637', // Darker for better contrast
      primaryHover: '#3d6b4a',
      primaryText: '#f5f3f0', // Light text on primary button (12.1:1)
      primaryMuted: '#587561', // Muted primary for large decorative text (4.7:1, AAA for 48px+)
      border: '#d8d5d0',
    },
  },

  /**
   * Typography font stacks
   */
  fonts: {
    /** Display/heading font - elegant serif */
    display: '"Cormorant Garamond", Georgia, serif',
    /** Body text font - readable serif */
    body: '"Source Serif 4", Georgia, serif',
    /** UI elements font - clean sans-serif */
    ui: '"DM Sans", system-ui, sans-serif',
  },

  /**
   * Google Fonts URL for preloading
   */
  fontUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@400;500;600&family=Source+Serif+4:wght@400;500&display=swap',

  /**
   * Maximum width constraints for layout containers
   */
  maxWidth: {
    narrow: '800px',
    wide: '1000px',
    full: '1200px',
  },

  /**
   * Transition timing values
   */
  transition: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },

  /**
   * Border radius values
   */
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '20px',
    full: '9999px',
  },

  /**
   * Focus state styling for accessibility
   */
  focus: {
    width: '3px',
    offset: '3px',
  },

  /**
   * Minimum touch target size for accessibility (WCAG 2.2)
   */
  touchTarget: '44px',

  /**
   * Z-index layers
   */
  zIndex: {
    nav: 1000,
    scrollProgress: 10001,
    skipLink: 10001,
  },
};

/**
 * Creates a merged theme object with the active color scheme
 *
 * @param {boolean} isDarkMode - Whether dark mode is active
 * @returns {Object} Merged theme with active colors at top level
 *
 * @example
 * const theme = createTheme(true);
 * console.log(theme.bg); // '#1a1f1a' (dark mode bg)
 */
export const createTheme = (isDarkMode) => ({
  ...THEME,
  ...(isDarkMode ? THEME.colors.dark : THEME.colors.light),
});

export default THEME;
