/**
 * ============================================
 * Navigation COMPONENT
 * ============================================
 *
 * Main navigation header with responsive mobile menu.
 * Uses BEM methodology for styling.
 *
 * FEATURES:
 * - Fixed position with blur backdrop
 * - Desktop horizontal nav
 * - Mobile hamburger menu
 * - Theme toggle (dark/light mode)
 * - Conditional blog nav item
 * - Scroll-aware background opacity
 *
 * ACCESSIBILITY:
 * - Semantic nav element with aria-label
 * - aria-expanded for mobile menu
 * - aria-current for active page
 * - Minimum touch targets (44px)
 *
 * @module Navigation
 * ============================================
 */

import React, { useState, useEffect } from 'react';
import CONTENT from '../../content/siteContent';
import { hasBlogContent } from '../../content/blogPosts';

/**
 * Navigation - Main site header and navigation
 *
 * Props:
 * @param {string} currentPage - Active page ID
 * @param {Function} onNavigate - Navigation callback
 * @param {boolean} isDarkMode - Current theme mode
 * @param {Function} onToggleTheme - Theme toggle callback
 */
const Navigation = ({
  currentPage,
  onNavigate,
  isDarkMode,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter nav items (hide Writing if no blog content)
  const visibleNavItems = CONTENT.navigation.items.filter(
    (item) => !item.requiresBlogContent || hasBlogContent()
  );

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav__container">
        {/* Logo/Home button */}
        <button
          className="nav__logo"
          onClick={() => handleNavClick('home')}
          aria-label={`${CONTENT.navigation.logo} - Home`}
        >
          {CONTENT.navigation.logo}
        </button>

        {/* Desktop navigation */}
        <div className="nav__menu">
          {visibleNavItems.map((item) => (
            <button
              key={item.id}
              className={`nav__link ${currentPage === item.id ? 'nav__link--active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              aria-current={currentPage === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            className="nav__theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="nav__mobile-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="nav__mobile-menu">
          {visibleNavItems.map((item) => (
            <button
              key={item.id}
              className={`nav__link ${currentPage === item.id ? 'nav__link--active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}

          {/* Mobile theme toggle */}
          <div className="nav__mobile-theme">
            <button
              onClick={onToggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="nav__mobile-theme-btn"
            >
              <span className="nav__mobile-theme-label">
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
              <div className="nav__toggle-switch">
                <div className="nav__toggle-knob">
                  {isDarkMode ? (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  ) : (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d97706"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
