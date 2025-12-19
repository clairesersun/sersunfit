/**
 * ============================================
 * CLAIRE SERSUN FITNESS - MAIN APP
 * ============================================
 *
 * This is the main application orchestrator.
 * It handles:
 * - Theme management (dark/light mode)
 * - Global styles injection
 * - Navigation state with URL hash syncing
 * - Rendering current page
 *
 * ARCHITECTURE:
 * - App.jsx is the single entry point
 * - All content/config/themes are imported from modules
 * - Pages are rendered based on state
 * - Hash-based routing enables back/forward navigation
 *
 * ACCESSIBILITY:
 * - Skip link for keyboard navigation
 * - Reduced motion support
 * - Focus management on navigation
 *
 * SEO:
 * - Hash-based URLs sync with navigation
 * - Structured data in index.html
 * - Meta tags for social sharing
 *
 * @version 4.0 - Refactored modular architecture
 * ============================================
 */

import React, { useState, useEffect, useCallback } from 'react';

// Styles
import './styles/main.css';

// Hooks
import { useTheme, useReducedMotion, useIsMobile } from './hooks';

// Components
import { Navigation, Footer } from './components/layout';
import { ScrollProgress } from './components/animation';

// Pages & Routing
import {
  renderPage,
  getPageFromHash,
  setHashForPage,
  isValidPage,
  DEFAULT_PAGE,
} from './pages';

/**
 * Main Application Component
 *
 * Responsibilities:
 * - Initialize theme from localStorage/system preference
 * - Manage current page state
 * - Sync URL hash with page state
 * - Inject global styles
 * - Render navigation, current page, and footer
 */
export default function App() {
  // Theme management hook
  const { isDarkMode, toggleTheme, theme } = useTheme();

  // Accessibility preferences
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Whether animations should be enabled
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  /**
   * Update data-theme attribute when theme changes
   * This enables CSS custom properties to switch themes
   */
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    );
  }, [isDarkMode]);

  /**
   * Initialize current page from URL hash
   * Falls back to DEFAULT_PAGE if hash is invalid
   */
  const [currentPage, setCurrentPage] = useState(() => getPageFromHash());

  /**
   * Handle browser back/forward navigation and initial hash sync
   * Updates page state when hash changes externally
   */
  useEffect(() => {
    // Sync initial hash with state (replaces, doesn't push history)
    setHashForPage(getPageFromHash(), true);

    const handleHashChange = () => {
      const pageFromHash = getPageFromHash();
      setCurrentPage(pageFromHash);
    };

    // Listen for hash changes (back/forward buttons)
    window.addEventListener('hashchange', handleHashChange);

    // Also handle popstate for complete history support
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  /**
   * Navigate to a new page
   * Updates state, URL hash, and scrolls to top
   *
   * @param {string} page - Page ID to navigate to
   */
  const navigate = useCallback(
    (page) => {
      // Validate page ID
      if (!isValidPage(page)) {
        console.warn(`Invalid page: ${page}`);
        page = DEFAULT_PAGE;
      }

      // Update state
      setCurrentPage(page);

      // Update URL hash (pushes to history)
      setHashForPage(page);

      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    },
    [prefersReducedMotion]
  );

  /**
   * Props passed to all page components
   * Avoids prop drilling of common values
   */
  const pageProps = {
    theme,
    isDarkMode,
    prefersReducedMotion,
    onNavigate: navigate,
  };

  return (
    <>
      {/* Scroll progress bar (desktop only, respects reduced motion) */}
      <ScrollProgress />

      {/* Skip link for keyboard navigation (WCAG 2.2) */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Main navigation */}
      <Navigation
        currentPage={currentPage}
        onNavigate={navigate}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Current page content */}
      {renderPage(currentPage, pageProps)}

      {/* Footer */}
      <Footer onNavigate={navigate} />
    </>
  );
}
