/**
 * ============================================
 * GLOBAL STYLES MODULE
 * ============================================
 *
 * Generates global CSS styles as a template string.
 * Injected via <style> tag in App.jsx.
 *
 * STYLE ORGANIZATION:
 * 1. Reset & base styles
 * 2. Texture overlays (decorative grain effect)
 * 3. Gradient backgrounds
 * 4. Focus states (accessibility)
 * 5. Responsive navigation
 * 6. Reduced motion support
 * 7. Skip link (accessibility)
 * 8. Interactive animations (desktop only)
 *
 * @module globalStyles
 * ============================================
 */

import { THEME } from './theme';

/**
 * Generates global CSS styles based on theme and user preferences
 *
 * @param {Object} options - Style generation options
 * @param {Object} options.theme - Active theme object with color values
 * @param {boolean} options.isDarkMode - Whether dark mode is active
 * @param {boolean} options.prefersReducedMotion - User prefers reduced motion
 * @param {boolean} options.shouldAnimate - Whether animations should be enabled
 * @returns {string} CSS styles as template string
 *
 * @example
 * const styles = getGlobalStyles({
 *   theme: activeTheme,
 *   isDarkMode: true,
 *   prefersReducedMotion: false,
 *   shouldAnimate: true
 * });
 */
export const getGlobalStyles = ({ theme, isDarkMode, prefersReducedMotion, shouldAnimate }) => `
  /* ============================================
   * FONT IMPORT
   * Google Fonts loaded via CSS @import as backup
   * Primary loading happens via <link> in index.html
   * ============================================ */
  @import url('${THEME.fontUrl}');

  /* ============================================
   * CSS RESET & BASE STYLES
   * Normalize cross-browser rendering
   * ============================================ */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    /* Smooth scrolling disabled for reduced motion preference */
    scroll-behavior: ${prefersReducedMotion ? 'auto' : 'smooth'};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* ============================================
   * TEXTURE OVERLAY
   * Subtle grain texture for visual depth
   * Uses inline SVG to avoid external asset load
   * ============================================ */
  .texture-overlay {
    position: relative;
  }

  .texture-overlay::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: ${isDarkMode ? '0.015' : '0.025'};
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    z-index: 1;
  }

  .texture-overlay > * {
    position: relative;
    z-index: 2;
  }

  /* ============================================
   * HERO GRADIENT
   * Decorative gradient background for hero sections
   * ============================================ */
  .hero-gradient {
    position: relative;
  }

  .hero-gradient::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background: radial-gradient(
        ellipse at 80% 20%,
        ${isDarkMode ? 'rgba(74, 124, 89, 0.08)' : 'rgba(74, 124, 89, 0.06)'} 0%,
        transparent 50%
      ),
      radial-gradient(
        ellipse at 60% 80%,
        ${isDarkMode ? 'rgba(107, 155, 122, 0.05)' : 'rgba(107, 155, 122, 0.04)'} 0%,
        transparent 40%
      );
    pointer-events: none;
    z-index: 0;
  }

  .hero-gradient > * {
    position: relative;
    z-index: 1;
  }

  /* ============================================
   * CTA GLOW
   * Subtle radial glow behind call-to-action sections
   * ============================================ */
  .cta-glow {
    position: relative;
  }

  .cta-glow::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(
      ellipse at center,
      ${isDarkMode ? 'rgba(74, 124, 89, 0.08)' : 'rgba(74, 124, 89, 0.06)'} 0%,
      transparent 60%
    );
    pointer-events: none;
    z-index: 0;
  }

  .cta-glow > * {
    position: relative;
    z-index: 1;
  }

  /* ============================================
   * FOCUS STATES (ACCESSIBILITY)
   * WCAG 2.2 AA compliant focus indicators
   * Using :focus-visible for keyboard-only focus
   * ============================================ */
  button:focus-visible,
  a:focus-visible {
    outline: ${THEME.focus.width} solid ${theme.primary};
    outline-offset: ${THEME.focus.offset};
  }

  :focus {
    outline: none;
  }

  :focus-visible {
    outline: ${THEME.focus.width} solid ${theme.primary};
    outline-offset: ${THEME.focus.offset};
  }

  /* ============================================
   * HOVER STATES
   * Subtle opacity change on interactive elements
   * ============================================ */
  button:hover,
  a:hover {
    opacity: 0.9;
  }

  /* ============================================
   * RESPONSIVE NAVIGATION
   * Desktop: horizontal nav, hide mobile button
   * Mobile: hide nav items, show hamburger
   * ============================================ */
  @media (max-width: 768px) {
    .desktop-nav {
      display: none !important;
    }
    .mobile-menu-btn {
      display: block !important;
    }
  }

  @media (min-width: 769px) {
    .mobile-menu-btn {
      display: none !important;
    }
    .mobile-menu {
      display: none !important;
    }
  }

  /* ============================================
   * REDUCED MOTION (ACCESSIBILITY)
   * Disable animations for users who prefer reduced motion
   * Critical for vestibular disorders and motion sensitivity
   * ============================================ */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* ============================================
   * SKIP LINK (ACCESSIBILITY)
   * Hidden link that appears on focus for keyboard users
   * Allows skipping navigation to main content
   * ============================================ */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: ${theme.primary};
    color: white;
    padding: 8px 16px;
    z-index: ${THEME.zIndex.skipLink};
    text-decoration: none;
    font-family: ${THEME.fonts.ui};
    border-radius: ${THEME.borderRadius.md};
  }

  .skip-link:focus {
    top: 10px;
    left: 10px;
  }

  /* ============================================
   * SCROLL INDICATOR ANIMATION
   * Used for scroll progress visual feedback
   * ============================================ */
  @keyframes scrollPulse {
    0%, 100% {
      opacity: 1;
      transform: scaleY(1);
    }
    50% {
      opacity: 0.5;
      transform: scaleY(0.8);
    }
  }

  /* ============================================
   * CARD HOVER EFFECT (DESKTOP ONLY)
   * Lift effect on hover for card components
   * Only enabled when animations are allowed
   * ============================================ */
  ${shouldAnimate ? `
  @media (min-width: 769px) {
    [style*="backgroundColor"][style*="padding: 2.5rem"]:hover {
      transform: translateY(-4px) !important;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
    }
  }
  ` : ''}
`;

export default getGlobalStyles;
