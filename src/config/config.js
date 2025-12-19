/**
 * ============================================
 * CONFIGURATION MODULE
 * ============================================
 *
 * Central configuration for URLs, assets, and animation settings.
 *
 * ENVIRONMENT VARIABLES:
 * These can be overridden by setting environment variables in .env:
 *   - REACT_APP_APPLICATION_URL  - Fillout coaching application URL
 *   - REACT_APP_INSTAGRAM_URL    - Instagram profile URL
 *   - REACT_APP_SITE_URL         - Base site URL for SEO
 *
 * Default values are provided for development and fallback.
 * ============================================
 */

const CONFIG = {
  /**
   * External and internal URLs
   * @type {Object}
   */
  urls: {
    /** Fillout coaching application form URL */
    application: process.env.REACT_APP_APPLICATION_URL || 'https://clairesersunfitness.fillout.com/coaching',
    /** Instagram profile URL */
    instagram: process.env.REACT_APP_INSTAGRAM_URL || 'https://www.instagram.com/sersunfit/',
    /** Base site URL for SEO and canonical links */
    site: process.env.REACT_APP_SITE_URL || 'https://clairesersunfitness.com',
  },

  /**
   * Site metadata for branding and SEO
   * @type {Object}
   */
  meta: {
    siteName: 'Claire Sersun Fitness',
    tagline: 'You are capable of more than you think',
    author: 'Claire Sersun',
  },

  /**
   * Static asset paths
   * @type {Object}
   */
  assets: {
    headshot: '/assets/headshot.webp',
  },

  /**
   * Animation configuration
   * Controls behavior of scroll animations
   * @type {Object}
   */
  animation: {
    /** Breakpoint below which animations are disabled (mobile) */
    mobileBreakpoint: 768,
    /** Intersection Observer threshold for triggering animations (0-1) */
    revealThreshold: 0.15,
    /** Stagger delay between animated items in milliseconds */
    staggerDelay: 100,
  },
};

export default CONFIG;
