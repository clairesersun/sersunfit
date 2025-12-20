/**
 * ============================================
 * Coaching PAGE COMPONENT
 * ============================================
 *
 * Coaching program details with what's included,
 * process steps, and embedded application form.
 *
 * @module CoachingPage
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

import { Button, Card, Divider, OrganicShape, CoachingIcons } from '../components/ui';

/**
 * CoachingPage - Program details and application
 *
 * Props:
 * @param {Object} theme - Active theme object
 * @param {boolean} isDarkMode - Current theme mode
 * @param {boolean} prefersReducedMotion - User's motion preference
 */
const CoachingPage = ({ theme, isDarkMode, prefersReducedMotion }) => {
  const s = createStyles(theme);
  const c = CONTENT.coaching;

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
          variant={2}
          isDarkMode={isDarkMode}
          primaryColor={theme.primary}
          style={{
            width: '450px',
            height: '450px',
            top: '-15%',
            right: '-15%',
            transform: 'rotate(-10deg)',
          }}
        />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade">
            <span style={s.label}>{c.hero.label}</span>
          </RevealOnScroll>
          <h1 style={s.heroHeading}>
            <AnimatedText stagger={80}>{c.hero.headline}</AnimatedText>
          </h1>
          <RevealOnScroll animation="slideUp" delay={400}>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.hero.description}</p>
          </RevealOnScroll>
          <Divider theme={theme} />
        </div>
      </ParallaxSection>

      {/* ===== WHAT'S INCLUDED ===== */}
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
          variant={1}
          isDarkMode={isDarkMode}
          primaryColor={theme.primary}
          style={{
            width: '320px',
            height: '320px',
            bottom: '5%',
            left: '3%',
            transform: 'rotate(20deg)',
          }}
        />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <h2 style={s.h2}>{c.includes.headline}</h2>
          </RevealOnScroll>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              marginTop: '2rem',
            }}
          >
            {c.includes.items.map((item, i) => {
              const Icon = CoachingIcons[item.id];
              return (
                <RevealOnScroll key={item.id} animation="slideRight" delay={i * 150}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      alignItems: 'flex-start',
                      padding: '1.5rem',
                      backgroundColor: theme.background,
                      borderRadius: THEME.borderRadius.lg,
                      border: `1px solid ${theme.primary}15`,
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
                      <h3 style={{ ...s.h3, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                        {item.title}
                      </h3>
                      <p style={s.body}>{item.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <h2 style={s.h2}>{c.process.headline}</h2>
          </RevealOnScroll>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              marginTop: '2rem',
            }}
          >
            {c.process.steps.map((step, i) => (
              <RevealOnScroll key={i} animation="slideRight" delay={i * 150}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontFamily: THEME.fonts.display,
                      fontSize: '3rem',
                      color: theme.primaryMuted,
                      lineHeight: 1,
                      minWidth: '70px',
                    }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 style={{ ...s.h3, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                      {step.title}
                    </h3>
                    <p style={s.body}>{step.description}</p>
                  </div>
                </div>
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
            <p style={{ ...s.bodyLarge, marginBottom: '1rem' }}>{c.cta.description}</p>
            <p style={{ ...s.body, marginBottom: '2.5rem', color: theme.textMuted }}>
              {c.cta.note}
            </p>
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

      {/* ===== APPLICATION EMBED ===== */}
      <section
        className="texture-overlay"
        style={{
          backgroundColor: theme.bgSecondary,
          padding: '4rem 1.5rem',
          position: 'relative',
        }}
      >
        <div
          style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto', textAlign: 'center' }}
        >
          <RevealOnScroll animation="slideUp">
            <h2 style={{ ...s.h2, marginBottom: '1rem' }}>{c.applicationEmbed.headline}</h2>
            <p style={{ ...s.body, marginBottom: '2rem' }}>
              {c.applicationEmbed.description}{' '}
              <a
                href={CONFIG.urls.application}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.primary, textDecoration: 'underline' }}
              >
                {c.applicationEmbed.linkText}
              </a>
              .
            </p>
            {/* Fillout embed with fallback */}
            <div
              style={{
                backgroundColor: theme.bg,
                borderRadius: THEME.borderRadius.lg,
                overflow: 'hidden',
                minHeight: '600px',
              }}
            >
              <iframe
                src={CONFIG.urls.application}
                title="Coaching Application"
                style={{ width: '100%', height: '600px', border: 'none' }}
                loading="lazy"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
};

export default CoachingPage;
