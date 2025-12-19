/**
 * ============================================
 * Contact PAGE COMPONENT
 * ============================================
 *
 * Contact page with coaching inquiry, social,
 * and general contact information.
 *
 * @module ContactPage
 * ============================================
 */

import React from 'react';
import { THEME } from '../styles/theme';
import CONFIG from '../config/config';
import CONTENT from '../content/siteContent';
import { createStyles } from './styles';

import {
  RevealOnScroll,
  AnimatedText,
  ParallaxSection,
} from '../components/animation';

import { Button, Divider, OrganicShape } from '../components/ui';

/**
 * ContactPage - Contact information and links
 *
 * Props:
 * @param {Object} theme - Active theme object
 * @param {boolean} isDarkMode - Current theme mode
 * @param {boolean} prefersReducedMotion - User's motion preference
 */
const ContactPage = ({ theme, isDarkMode, prefersReducedMotion }) => {
  const s = createStyles(theme);
  const c = CONTENT.contact;

  return (
    <main id="main-content">
      {/* ===== HERO ===== */}
      <ParallaxSection
        className="hero-gradient texture-overlay"
        style={{
          width: '100%',
          paddingTop: '10rem',
          paddingBottom: '5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        <OrganicShape
          variant={1}
          isDarkMode={isDarkMode}
          primaryColor={theme.primary}
          style={{
            width: '350px',
            height: '350px',
            top: '-10%',
            right: '-10%',
            transform: 'rotate(30deg)',
          }}
        />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade">
            <span style={s.label}>{c.hero.label}</span>
          </RevealOnScroll>
          <h1 style={s.heroHeading}>
            <AnimatedText stagger={100}>{c.hero.headline}</AnimatedText>
          </h1>
          <RevealOnScroll animation="slideUp" delay={300}>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.hero.description}</p>
          </RevealOnScroll>
          <Divider theme={theme} />
        </div>
      </ParallaxSection>

      {/* ===== CONTACT SECTIONS ===== */}
      <section style={{ width: '100%', padding: '2rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Coaching inquiries */}
            <RevealOnScroll animation="slideUp">
              <h2 style={s.h3}>{c.sections.coaching.headline}</h2>
              <p style={{ ...s.body, marginBottom: '1.5rem' }}>
                {c.sections.coaching.description}
              </p>
              <Button
                variant="primary"
                href={CONFIG.urls.application}
                theme={theme}
                prefersReducedMotion={prefersReducedMotion}
              >
                {c.sections.coaching.cta}
              </Button>
            </RevealOnScroll>

            {/* Social/Instagram */}
            <RevealOnScroll animation="slideUp" delay={150}>
              <h2 style={s.h3}>{c.sections.social.headline}</h2>
              <p style={{ ...s.body, marginBottom: '1.5rem' }}>
                {c.sections.social.description}
              </p>
              <Button
                variant="secondary"
                href={CONFIG.urls.instagram}
                theme={theme}
                prefersReducedMotion={prefersReducedMotion}
              >
                <svg
                  width="20"
                  height="20"
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
                {c.sections.social.handle}
              </Button>
            </RevealOnScroll>

            {/* General inquiries */}
            <RevealOnScroll animation="slideUp" delay={300}>
              <h2 style={s.h3}>{c.sections.general.headline}</h2>
              <p style={s.body}>{c.sections.general.description}</p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== CLOSING QUOTE ===== */}
      <section
        className="texture-overlay"
        style={{
          backgroundColor: theme.bgSecondary,
          padding: '4rem 1.5rem',
          position: 'relative',
        }}
      >
        <RevealOnScroll animation="blur">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ ...s.bodyLarge, fontStyle: 'italic', color: theme.textMuted }}>
              "{c.closing.quote}"
            </p>
            <p style={{ ...s.body, marginTop: '1rem' }}>{c.closing.message}</p>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
};

export default ContactPage;
