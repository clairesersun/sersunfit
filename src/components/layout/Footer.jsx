/**
 * ============================================
 * Footer COMPONENT
 * ============================================
 *
 * Site footer with brand info, navigation, and social links.
 *
 * STRUCTURE:
 * - Brand name and tagline
 * - Navigation links
 * - Social/connect links
 * - Copyright notice
 *
 * @module Footer
 * ============================================
 */

import React from 'react';
import { THEME } from '../../styles/theme';
import CONTENT from '../../content/siteContent';
import CONFIG from '../../config/config';
import { hasBlogContent } from '../../content/blogPosts';
import RevealOnScroll from '../animation/RevealOnScroll';

/**
 * Footer - Site footer component
 *
 * Props:
 * @param {Function} onNavigate - Navigation callback
 * @param {Object} theme - Active theme object
 */
const Footer = ({ onNavigate, theme }) => {
  const year = new Date().getFullYear();
  const c = CONTENT.footer;

  // Filter nav items for footer
  const visibleNavItems = CONTENT.navigation.items.filter(
    (item) => !item.requiresBlogContent || hasBlogContent()
  );

  return (
    <footer
      className="texture-overlay"
      style={{
        backgroundColor: theme.bgSecondary,
        borderTop: `1px solid ${theme.border}`,
        padding: '4rem 1.5rem 2rem',
        position: 'relative',
      }}
    >
      <RevealOnScroll animation="fade">
        <div
          style={{
            maxWidth: THEME.maxWidth.full,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Brand column */}
          <div>
            <p
              style={{
                fontFamily: THEME.fonts.display,
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: theme.text,
              }}
            >
              {c.brand.name}
            </p>
            <p
              style={{
                fontFamily: THEME.fonts.body,
                fontSize: '0.875rem',
                color: theme.textSecondary,
                lineHeight: 1.7,
              }}
            >
              {c.brand.tagline}
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p
              style={{
                fontFamily: THEME.fonts.ui,
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: theme.primary,
                marginBottom: '1rem',
              }}
            >
              {c.navigation.label}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {visibleNavItems.map((item) => (
                <button
                  key={item.id}
                  style={{
                    fontFamily: THEME.fonts.ui,
                    fontSize: '0.875rem',
                    color: theme.textSecondary,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                  }}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect column */}
          <div>
            <p
              style={{
                fontFamily: THEME.fonts.ui,
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: theme.primary,
                marginBottom: '1rem',
              }}
            >
              {c.connect.label}
            </p>
            <a
              href={CONFIG.urls.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: THEME.fonts.ui,
                fontSize: '0.875rem',
                color: theme.textSecondary,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              {c.connect.instagramLabel}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            maxWidth: THEME.maxWidth.full,
            margin: '3rem auto 0',
            paddingTop: '2rem',
            borderTop: `1px solid ${theme.border}`,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: THEME.fonts.body,
              fontSize: '0.75rem',
              color: theme.textMuted,
            }}
          >
            {c.copyright.replace('{year}', year)}
          </p>
        </div>
      </RevealOnScroll>
    </footer>
  );
};

export default Footer;
