/**
 * ============================================
 * Footer COMPONENT
 * ============================================
 *
 * Site footer with brand info, navigation, and social links.
 * Uses BEM methodology for styling.
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
import CONTENT from '../../content/siteContent';
import CONFIG from '../../config/config';
import { hasBlogContent } from '../../content/blogPosts';
import RevealOnScroll from '../animation/RevealOnScroll';

/**
 * Footer - Site footer component
 *
 * Props:
 * @param {Function} onNavigate - Navigation callback
 */
const Footer = ({ onNavigate }) => {
  const year = new Date().getFullYear();
  const c = CONTENT.footer;

  // Filter nav items for footer
  const visibleNavItems = CONTENT.navigation.items.filter(
    (item) => !item.requiresBlogContent || hasBlogContent()
  );

  return (
    <footer className="footer texture-overlay">
      <RevealOnScroll animation="fade">
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__column">
            <p className="footer__brand-name">
              {c.brand.name}
            </p>
            <p className="footer__brand-tagline">
              {c.brand.tagline}
            </p>
          </div>

          {/* Navigation column */}
          <div className="footer__column">
            <p className="footer__section-title">
              {c.navigation.label}
            </p>
            <div className="footer__nav-list">
              {visibleNavItems.map((item) => (
                <button
                  key={item.id}
                  className="footer__nav-link"
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect column */}
          <div className="footer__column">
            <p className="footer__section-title">
              {c.connect.label}
            </p>
            <a
              href={CONFIG.urls.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
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
        <div className="footer__copyright-container">
          <p className="footer__copyright">
            {c.copyright.replace('{year}', year)}
          </p>
        </div>
      </RevealOnScroll>
    </footer>
  );
};

export default Footer;
