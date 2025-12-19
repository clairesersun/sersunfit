/**
 * ============================================
 * About PAGE COMPONENT
 * ============================================
 *
 * About page with bio, background, certifications,
 * and coaching philosophy.
 *
 * @module AboutPage
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
  ImageReveal,
} from '../components/animation';

import { Button, Divider, OrganicShape } from '../components/ui';

/**
 * AboutPage - Coach bio and philosophy
 *
 * Props:
 * @param {Object} theme - Active theme object
 * @param {boolean} isDarkMode - Current theme mode
 * @param {boolean} prefersReducedMotion - User's motion preference
 */
const AboutPage = ({ theme, isDarkMode, prefersReducedMotion }) => {
  const s = createStyles(theme);
  const c = CONTENT.about;

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
            width: '400px',
            height: '400px',
            top: '-20%',
            right: '-10%',
            transform: 'rotate(25deg)',
          }}
        />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade">
            <span style={s.label}>{c.hero.label}</span>
          </RevealOnScroll>
          <h1 style={s.heroHeading}>
            <AnimatedText stagger={100}>{c.hero.headline}</AnimatedText>
          </h1>
          <Divider theme={theme} />
        </div>
      </ParallaxSection>

      {/* ===== BIO SECTION ===== */}
      <section
        className="texture-overlay"
        style={{
          width: '100%',
          backgroundColor: theme.bgSecondary,
          padding: '4rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <OrganicShape
          variant={3}
          isDarkMode={isDarkMode}
          primaryColor={theme.primary}
          style={{
            width: '350px',
            height: '350px',
            bottom: '10%',
            left: '-5%',
            transform: 'rotate(-30deg)',
          }}
        />
        <div
          style={{
            maxWidth: THEME.maxWidth.wide,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          <RevealOnScroll animation="slideRight">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ImageReveal
                src={CONFIG.assets.headshot}
                alt="Claire Sersun"
                style={{ width: '100%', maxWidth: '400px', aspectRatio: '4/5' }}
              />
            </div>
          </RevealOnScroll>
          <div>
            <RevealOnScroll animation="slideLeft" delay={200}>
              <h2 style={{ ...s.h2, marginTop: 0 }}>{c.bio.headline}</h2>
            </RevealOnScroll>
            {c.bio.paragraphs.map((p, i) => (
              <RevealOnScroll key={i} animation="slideUp" delay={300 + i * 100}>
                <p style={{ ...s.bodyLarge, marginBottom: '1.5rem' }}>{p}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BACKGROUND SECTION ===== */}
      <section style={{ width: '100%', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <h2 style={s.h2}>{c.background.headline}</h2>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.background.description}</p>
            <h3 style={{ ...s.h3, marginTop: '2.5rem' }}>{c.background.certificationsHeadline}</h3>
          </RevealOnScroll>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '1.5rem',
            }}
          >
            {c.background.certifications.map((cert, i) => (
              <RevealOnScroll key={i} animation="slideLeft" delay={i * 60}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: theme.primary,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <span style={s.body}>{cert}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY SECTION ===== */}
      <section
        className="texture-overlay"
        style={{
          backgroundColor: theme.bgSecondary,
          padding: '4rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <OrganicShape
          variant={2}
          isDarkMode={isDarkMode}
          primaryColor={theme.primary}
          style={{
            width: '380px',
            height: '380px',
            top: '5%',
            right: '5%',
            transform: 'rotate(45deg)',
          }}
        />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <h2 style={s.h2}>{c.philosophy.headline}</h2>
          </RevealOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {c.philosophy.principles.map((p, i) => (
              <RevealOnScroll key={i} animation="slideRight" delay={i * 150}>
                <h3 style={{ ...s.h3, color: theme.primary }}>{p.title}</h3>
                <p style={s.bodyLarge}>{p.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        className="cta-glow"
        style={{
          width: '100%',
          padding: '5rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="scale">
            <h2 style={s.h2}>{c.cta.headline}</h2>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.cta.description}</p>
            <Button
              variant="primary"
              href={CONFIG.urls.application}
              theme={theme}
              prefersReducedMotion={prefersReducedMotion}
            >
              {c.cta.buttonText}
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
