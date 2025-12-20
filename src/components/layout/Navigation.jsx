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
import ThemeIcons from '../ui/ThemeIcons';

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
              <ThemeIcons.light color="currentColor" size={18} />
            ) : (
              <ThemeIcons.dark color="currentColor" size={18} />
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
                    <ThemeIcons.dark color="var(--color-primary)" size={12} />
                  ) : (
                    <ThemeIcons.light color="#d97706" size={12} />
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
