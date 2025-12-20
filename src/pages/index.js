/**
 * ============================================
 * PAGES INDEX & ROUTING
 * ============================================
 *
 * Central export for pages and simple routing helpers.
 *
 * ROUTING STRATEGY:
 * This is a single-page application with path-based navigation.
 * The URL path (e.g., /about) syncs with the current page state.
 * This enables browser back/forward navigation while maintaining
 * the SPA experience.
 *
 * SEO NOTE:
 * Path-based URLs are properly crawled by search engines.
 * Combined with:
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
import ResourcesPage from './Resources';
import KilimanjaroPage from './Kilimanjaro';

/**
 * Valid page IDs mapped to their components
 * Used for routing and validation
 */
export const PAGE_MAP = {
  home: HomePage,
  about: AboutPage,
  coaching: CoachingPage,
  contact: ContactPage,
  resources: ResourcesPage,
  'kilimanjaro-training-plan': KilimanjaroPage,
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
 * Gets page ID from URL path
 * Returns default page if path is invalid or root
 *
 * @returns {string} Valid page ID
 */
export const getPageFromPath = () => {
  if (typeof window === 'undefined') return DEFAULT_PAGE;

  const path = window.location.pathname.slice(1); // Remove leading /
  return isValidPage(path) ? path : DEFAULT_PAGE;
};

/**
 * Sets URL path to page ID
 * Uses replaceState to avoid polluting history for initial load
 *
 * @param {string} pageId - Page ID to set
 * @param {boolean} [replace=false] - Use replaceState instead of pushState
 */
export const setPathForPage = (pageId, replace = false) => {
  if (typeof window === 'undefined') return;

  const newPath = pageId === DEFAULT_PAGE ? '/' : `/${pageId}`;

  if (replace) {
    // Replace current history entry (used for initial load)
    window.history.replaceState(null, '', newPath);
  } else {
    // Push new history entry (used for navigation)
    window.history.pushState(null, '', newPath);
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
export { HomePage, AboutPage, CoachingPage, ContactPage, ResourcesPage, KilimanjaroPage };
