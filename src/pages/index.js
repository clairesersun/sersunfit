/**
 * ============================================
 * PAGES INDEX & ROUTING
 * ============================================
 *
 * Central export for pages and simple routing helpers.
 *
 * ROUTING STRATEGY:
 * This is a single-page application with hash-based navigation.
 * The URL hash (e.g., #about) syncs with the current page state.
 * This enables browser back/forward navigation while maintaining
 * the SPA experience.
 *
 * SEO NOTE:
 * Hash fragments are not crawled as separate pages by most search engines.
 * The main SEO strategy relies on:
 * - Rich structured data in index.html
 * - Blog posts (when added) as the primary SEO drivers
 * - Strong social sharing meta tags
 *
 * @module pages
 * ============================================
 */

import React from 'react';

// Page components
import HomePage from './Home';
import AboutPage from './About';
import CoachingPage from './Coaching';
import ContactPage from './Contact';
import WritingPage from './Writing';

/**
 * Valid page IDs mapped to their components
 * Used for routing and validation
 */
export const PAGE_MAP = {
  home: HomePage,
  about: AboutPage,
  coaching: CoachingPage,
  contact: ContactPage,
  writing: WritingPage,
};

/**
 * List of valid page IDs
 */
export const VALID_PAGES = Object.keys(PAGE_MAP);

/**
 * Default page when no hash or invalid hash
 */
export const DEFAULT_PAGE = 'home';

/**
 * Validates a page ID
 *
 * @param {string} pageId - Page ID to validate
 * @returns {boolean} True if valid page ID
 */
export const isValidPage = (pageId) => VALID_PAGES.includes(pageId);

/**
 * Gets page ID from URL hash
 * Returns default page if hash is invalid or empty
 *
 * @returns {string} Valid page ID
 */
export const getPageFromHash = () => {
  if (typeof window === 'undefined') return DEFAULT_PAGE;

  const hash = window.location.hash.slice(1); // Remove #
  return isValidPage(hash) ? hash : DEFAULT_PAGE;
};

/**
 * Sets URL hash to page ID
 * Uses replaceState to avoid polluting history for initial load
 *
 * @param {string} pageId - Page ID to set
 * @param {boolean} [replace=false] - Use replaceState instead of pushState
 */
export const setHashForPage = (pageId, replace = false) => {
  if (typeof window === 'undefined') return;

  const newHash = pageId === DEFAULT_PAGE ? '' : `#${pageId}`;

  if (replace) {
    // Replace current history entry (used for initial load)
    window.history.replaceState(null, '', newHash || window.location.pathname);
  } else {
    // Push new history entry (used for navigation)
    window.history.pushState(null, '', newHash || window.location.pathname);
  }
};

/**
 * Renders the appropriate page component based on page ID
 *
 * @param {string} pageId - Current page ID
 * @param {Object} props - Props to pass to page component
 * @returns {React.Element} Rendered page component
 */
export const renderPage = (pageId, props) => {
  const PageComponent = PAGE_MAP[pageId] || PAGE_MAP[DEFAULT_PAGE];
  return <PageComponent {...props} />;
};

// Re-export page components
export { HomePage, AboutPage, CoachingPage, ContactPage, WritingPage };
