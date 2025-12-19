/**
 * ============================================
 * Navigation COMPONENT
 * ============================================
 *
 * Main navigation header with responsive mobile menu.
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
import { THEME } from '../../styles/theme';
import CONTENT from '../../content/siteContent';
import { hasBlogContent } from '../../content/blogPosts';
import useIsMobile from '../../hooks/useIsMobile';

/**
 * Navigation - Main site header and navigation
 *
 * Props:
 * @param {string} currentPage - Active page ID
 * @param {Function} onNavigate - Navigation callback
 * @param {Object} theme - Active theme object
 * @param {boolean} isDarkMode - Current theme mode
 * @param {Function} onToggleTheme - Theme toggle callback
 * @param {boolean} prefersReducedMotion - User's motion preference
 */
const Navigation = ({
  currentPage,
  onNavigate,
  theme,
  isDarkMode,
  onToggleTheme,
  prefersReducedMotion,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

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

  const navLinkStyle = (isActive) => ({
    fontFamily: THEME.fonts.ui,
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: isActive ? theme.primary : theme.textSecondary,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 0',
    transition: prefersReducedMotion ? 'none' : 'color 0.3s ease',
    position: 'relative',
  });

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: THEME.zIndex.nav,
        backgroundColor: scrolled
          ? isDarkMode
            ? 'rgba(26, 31, 26, 0.98)'
            : 'rgba(250, 249, 247, 0.98)'
          : isDarkMode
          ? 'rgba(26, 31, 26, 0.8)'
          : 'rgba(250, 249, 247, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? `1px solid ${theme.border}`
          : '1px solid transparent',
        transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        style={{
          maxWidth: THEME.maxWidth.full,
          margin: '0 auto',
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo/Home button */}
        <button
          style={{
            fontFamily: THEME.fonts.display,
            fontSize: '1.25rem',
            fontWeight: 600,
            letterSpacing: '0.02em',
            color: theme.text,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            transition: prefersReducedMotion ? 'none' : 'transform 0.3s ease',
          }}
          onClick={() => handleNavClick('home')}
          aria-label={`${CONTENT.navigation.logo} - Home`}
        >
          {CONTENT.navigation.logo}
        </button>

        {/* Desktop navigation */}
        <div
          className="desktop-nav"
          style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
        >
          {visibleNavItems.map((item) => (
            <button
              key={item.id}
              style={navLinkStyle(currentPage === item.id)}
              onClick={() => handleNavClick(item.id)}
              aria-current={currentPage === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            style={{
              background: 'none',
              border: `1px solid ${theme.border}`,
              borderRadius: THEME.borderRadius.full,
              width: '2.5rem',
              height: '2.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.textSecondary,
              transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
            }}
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
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: theme.text,
            cursor: 'pointer',
            padding: '0.5rem',
            minWidth: THEME.touchTarget,
            minHeight: THEME.touchTarget,
          }}
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
        <div
          id="mobile-menu"
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: '65px',
            left: 0,
            right: 0,
            backgroundColor: theme.bg,
            borderBottom: `1px solid ${theme.border}`,
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {visibleNavItems.map((item) => (
            <button
              key={item.id}
              style={navLinkStyle(currentPage === item.id)}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}

          {/* Mobile theme toggle */}
          <div
            style={{
              marginTop: '1rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${theme.border}`,
            }}
          >
            <button
              onClick={onToggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0.75rem 1rem',
                backgroundColor: theme.bgTertiary,
                border: 'none',
                borderRadius: THEME.borderRadius.md,
                cursor: 'pointer',
                minHeight: THEME.touchTarget,
              }}
            >
              <span
                style={{
                  fontFamily: THEME.fonts.ui,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: theme.textSecondary,
                }}
              >
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
              <div
                style={{
                  width: '48px',
                  height: '26px',
                  backgroundColor: isDarkMode ? theme.primary : theme.border,
                  borderRadius: '13px',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    backgroundColor: '#fafafa',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: isDarkMode ? 'translateX(22px)' : 'translateX(0)',
                    transition: prefersReducedMotion ? 'none' : 'transform 0.3s ease',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  }}
                >
                  {isDarkMode ? (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={theme.primary}
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
