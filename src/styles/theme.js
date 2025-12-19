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
      text: '#e8e6e3',
      textSecondary: '#a8a5a0',
      textMuted: '#7a7872',
      primary: '#4a7c59',
      primaryHover: '#5a8c69',
      border: '#3a423a',
    },
    light: {
      bg: '#faf9f7',
      bgSecondary: '#f0eeeb',
      bgTertiary: '#e8e5e1',
      text: '#1a1f1a',
      textSecondary: '#5a5854',
      textMuted: '#8a8680',
      primary: '#3d6b4a',
      primaryHover: '#4d7b5a',
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
