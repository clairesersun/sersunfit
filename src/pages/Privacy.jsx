/**
 * ============================================
 * Privacy Policy PAGE COMPONENT
 * ============================================
 *
 * Privacy policy page required for Pinterest API app.
 * Not shown in navigation — accessible via direct link only.
 *
 * @module PrivacyPage
 * ============================================
 */

import React from 'react';
import { THEME } from '../styles/theme';
import CONTENT from '../content/siteContent';
import { createStyles } from './styles';

import {
  RevealOnScroll,
  AnimatedText,
  ParallaxSection,
} from '../components/animation';

import { Divider, OrganicShape } from '../components/ui';

/**
 * PrivacyPage - Privacy Policy
 *
 * Props:
 * @param {Object} theme - Active theme object
 * @param {boolean} isDarkMode - Current theme mode
 */
const PrivacyPage = ({ theme, isDarkMode }) => {
  const s = createStyles(theme);
  const c = CONTENT.privacy;

  const sectionStyle = {
    marginBottom: '2.5rem',
  };

  const listStyle = {
    ...s.body,
    paddingLeft: '1.5rem',
    marginTop: '0.5rem',
  };

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

      {/* ===== POLICY CONTENT ===== */}
      <section style={{ width: '100%', padding: '2rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          {c.sections.map((section, index) => (
            <RevealOnScroll key={index} animation="slideUp" delay={index * 50}>
              <div style={sectionStyle}>
                <h2 style={s.h3}>{section.title}</h2>
                {section.paragraphs && section.paragraphs.map((p, i) => (
                  <p key={i} style={{ ...s.body, marginBottom: '1rem' }}>{p}</p>
                ))}
                {section.items && (
                  <ul style={listStyle}>
                    {section.items.map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
