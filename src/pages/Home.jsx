/**
 * ============================================
 * Home PAGE COMPONENT
 * ============================================
 *
 * Landing page with hero, audience, transformation,
 * approach, program, and CTA sections.
 *
 * SECTIONS:
 * 1. Hero - Full viewport intro with parallax
 * 2. Audience - "Who this is for" cards
 * 3. Transformation - Benefits of coaching
 * 4. Approach - Three pillars methodology
 * 5. Program - What's included
 * 6. About Preview - Coach introduction
 * 7. Final CTA - Application prompt
 * 8. Closing - Motivational message
 *
 * @module HomePage
 * ============================================
 */

import React from 'react';
import { THEME } from '../styles/theme';
import CONFIG from '../config/config';
import CONTENT from '../content/siteContent';
import { createStyles } from './styles';

// Animation components
import {
  RevealOnScroll,
  AnimatedText,
  ParallaxSection,
  ImageReveal,
} from '../components/animation';

// UI components
import {
  Button,
  Card,
  Divider,
  OrganicShape,
  ApproachIcons,
} from '../components/ui';

/**
 * HomePage - Main landing page
 *
 * Props:
 * @param {Object} theme - Active theme object
 * @param {boolean} isDarkMode - Current theme mode
 * @param {boolean} prefersReducedMotion - User's motion preference
 * @param {Function} onNavigate - Navigation callback
 */
const HomePage = ({ theme, isDarkMode, prefersReducedMotion, onNavigate }) => {
  const s = createStyles(theme);
  const c = CONTENT.home;

  return (
    <main id="main-content">
      {/* ===== HERO SECTION ===== */}
      <ParallaxSection
        speed={0.2}
        className="hero-gradient texture-overlay"
        style={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '8rem',
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
            width: '500px',
            height: '500px',
            top: '-10%',
            right: '-5%',
            transform: 'rotate(-15deg)',
          }}
        />
        <OrganicShape
          variant={2}
          isDarkMode={isDarkMode}
          primaryColor={theme.primary}
          style={{
            width: '300px',
            height: '300px',
            bottom: '10%',
            left: '-5%',
            transform: 'rotate(45deg)',
          }}
        />

        <div style={{ maxWidth: THEME.maxWidth.full, margin: '0 auto', width: '100%' }}>
          <RevealOnScroll animation="fade" delay={0}>
            <span style={s.label}>{c.hero.label}</span>
          </RevealOnScroll>

          <h1 style={s.heroHeading}>
            <AnimatedText delay={100} stagger={80}>
              {c.hero.headline}
            </AnimatedText>
            <br />
            <AnimatedText delay={400} stagger={80} style={{ color: theme.primary }}>
              {c.hero.headlineAccent}
            </AnimatedText>
          </h1>

          <RevealOnScroll animation="slideUp" delay={600}>
            <p style={{ ...s.bodyLarge, maxWidth: '600px', marginBottom: '2.5rem' }}>
              {c.hero.description}
            </p>
          </RevealOnScroll>

          <RevealOnScroll animation="slideUp" delay={800}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                href={CONFIG.urls.application}
                theme={theme}
                prefersReducedMotion={prefersReducedMotion}
              >
                {c.hero.primaryCta}
              </Button>
              <Button
                variant="secondary"
                onClick={() => onNavigate('about')}
                theme={theme}
                prefersReducedMotion={prefersReducedMotion}
              >
                {c.hero.secondaryCta}
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </ParallaxSection>

      {/* ===== AUDIENCE SECTION ===== */}
      <section
        className="texture-overlay"
        style={{
          width: '100%',
          backgroundColor: theme.bgSecondary,
          padding: '6rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <OrganicShape
          variant={3}
          isDarkMode={isDarkMode}
          primaryColor={theme.primary}
          style={{
            width: '400px',
            height: '400px',
            top: '5%',
            right: '10%',
            transform: 'rotate(30deg)',
          }}
        />

        <div style={{ maxWidth: THEME.maxWidth.full, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <span style={s.label}>{c.audience.label}</span>
            <h2 style={s.h2}>{c.audience.headline}</h2>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '2.5rem',
            }}
          >
            {c.audience.items.map((item, i) => (
              <Card key={i} theme={theme} index={i}>
                <h3 style={{ ...s.h3, fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={s.body}>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRANSFORMATION SECTION ===== */}
      <section style={{ width: '100%', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <span style={s.label}>{c.transformation.label}</span>
          </RevealOnScroll>

          <RevealOnScroll animation="slideUp" delay={100}>
            <h2 style={s.h2}>
              {c.transformation.headline}
              <br />
              <span style={{ color: theme.primary }}>{c.transformation.headlineAccent}</span>
            </h2>
          </RevealOnScroll>

          <Divider theme={theme} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {c.transformation.benefits.map((b, i) => (
              <RevealOnScroll key={i} animation="slideLeft" delay={i * 150}>
                <h3 style={{ ...s.h3, color: theme.primary }}>{b.title}</h3>
                <p style={s.bodyLarge}>{b.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPROACH SECTION ===== */}
      <section
        className="texture-overlay"
        style={{
          width: '100%',
          backgroundColor: theme.bgSecondary,
          padding: '6rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <OrganicShape
          variant={1}
          isDarkMode={isDarkMode}
          primaryColor={theme.primary}
          style={{
            width: '350px',
            height: '350px',
            bottom: '0%',
            left: '5%',
            transform: 'rotate(-20deg)',
          }}
        />

        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <span style={s.label}>{c.approach.label}</span>
            <h2 style={s.h2}>{c.approach.headline}</h2>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.approach.description}</p>
          </RevealOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {c.approach.pillars.map((p, i) => {
              const Icon = ApproachIcons[p.id];
              return (
                <RevealOnScroll key={p.id} animation="slideRight" delay={i * 150}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: THEME.borderRadius.full,
                        backgroundColor: theme.primary + '15',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {Icon && <Icon color={theme.primary} />}
                    </div>
                    <div style={{ flex: 1, minWidth: '250px' }}>
                      <h3 style={{ ...s.h3, fontSize: '1.25rem' }}>{p.title}</h3>
                      <p style={s.body}>{p.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROGRAM SECTION ===== */}
      <section style={{ width: '100%', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <span style={s.label}>{c.program.label}</span>
            <h2 style={s.h2}>{c.program.headline}</h2>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.program.description}</p>
          </RevealOnScroll>

          <RevealOnScroll animation="scale" delay={200}>
            <div
              style={{
                backgroundColor: theme.bgSecondary,
                padding: '2.5rem',
                borderLeft: `3px solid ${theme.primary}`,
                borderRadius: `0 ${THEME.borderRadius.lg} ${THEME.borderRadius.lg} 0`,
              }}
            >
              <h3 style={{ ...s.h3, marginBottom: '1.5rem' }}>What's included:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {c.program.features.map((f, i) => (
                  <RevealOnScroll key={i} animation="slideLeft" delay={300 + i * 80}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={theme.primary}
                        strokeWidth="2"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={s.body}>{f}</span>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="slideUp" delay={600}>
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Button
                variant="primary"
                href={CONFIG.urls.application}
                theme={theme}
                prefersReducedMotion={prefersReducedMotion}
              >
                {c.program.cta}
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW SECTION ===== */}
      <section
        className="texture-overlay"
        style={{
          width: '100%',
          backgroundColor: theme.bgSecondary,
          padding: '6rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <OrganicShape
          variant={2}
          isDarkMode={isDarkMode}
          primaryColor={theme.primary}
          style={{
            width: '450px',
            height: '450px',
            top: '-15%',
            left: '60%',
            transform: 'rotate(60deg)',
          }}
        />

        <div
          style={{
            maxWidth: THEME.maxWidth.wide,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <RevealOnScroll animation="slideRight">
              <span style={s.label}>{c.aboutPreview.label}</span>
              <h2 style={s.h2}>{c.aboutPreview.headline}</h2>
              <p style={{ ...s.bodyLarge, marginBottom: '1.5rem' }}>
                {c.aboutPreview.description}
              </p>
              <p style={{ ...s.body, marginBottom: '2rem' }}>{c.aboutPreview.additionalText}</p>
              <Button
                variant="secondary"
                onClick={() => onNavigate('about')}
                theme={theme}
                prefersReducedMotion={prefersReducedMotion}
              >
                {c.aboutPreview.cta}
              </Button>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="slideLeft" delay={200}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ImageReveal
                src={CONFIG.assets.headshot}
                alt="Claire Sersun, fitness coach"
                style={{ width: '100%', maxWidth: '350px', aspectRatio: '4/5' }}
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section
        className="cta-glow"
        style={{
          width: '100%',
          padding: '6rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="scale">
            <h2 style={s.h2}>{c.finalCta.headline}</h2>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.finalCta.description}</p>
            <Button
              variant="primary"
              href={CONFIG.urls.application}
              theme={theme}
              prefersReducedMotion={prefersReducedMotion}
            >
              {c.finalCta.cta}
            </Button>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CLOSING SECTION ===== */}
      <section
        className="texture-overlay"
        style={{
          backgroundColor: theme.bgSecondary,
          padding: '4rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <RevealOnScroll animation="blur">
          <p
            style={{
              ...s.bodyLarge,
              maxWidth: '600px',
              margin: '0 auto',
              fontStyle: 'italic',
              color: theme.textMuted,
            }}
          >
            {c.closing.message}
          </p>
        </RevealOnScroll>
      </section>
    </main>
  );
};

export default HomePage;
