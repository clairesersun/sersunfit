/**
 * ============================================
 * CORPORATE ONE-PAGER PAGE COMPONENT
 * ============================================
 *
 * Hidden landing page for B2B prospects.
 * Accessible only via direct URL /corporate.
 * Not included in site navigation.
 *
 * @module CorporatePage
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
 * CorporatePage - Executive fitness program one-pager for B2B prospects
 *
 * Props:
 * @param {Object} theme - Active theme object
 * @param {boolean} isDarkMode - Current theme mode
 * @param {boolean} prefersReducedMotion - User's motion preference
 */
const CorporatePage = ({ theme, isDarkMode, prefersReducedMotion }) => {
  const s = createStyles(theme);
  const c = CONTENT.corporate;

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
          <RevealOnScroll animation="slideUp" delay={300}>
            <p
              style={{
                fontFamily: THEME.fonts.body,
                fontSize: 'clamp(1.125rem, 2.5vw, 1.35rem)',
                lineHeight: 1.8,
                color: theme.textSecondary,
                fontStyle: 'italic',
                borderLeft: `3px solid ${theme.primary}`,
                paddingLeft: '1.5rem',
                marginBottom: '2.5rem',
                maxWidth: '640px',
              }}
            >
              {c.hero.description}
            </p>
          </RevealOnScroll>
          <Divider theme={theme} />
        </div>
      </ParallaxSection>

      {/* ===== WHAT'S INCLUDED + INVESTMENT (side by side on desktop) ===== */}
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
        <div
          style={{
            maxWidth: THEME.maxWidth.full,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* What's Included */}
          <div>
            <RevealOnScroll animation="slideUp">
              <h2 style={s.h2}>{c.includes.headline}</h2>
            </RevealOnScroll>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginTop: '1.5rem',
              }}
            >
              {c.includes.items.map((item, i) => (
                <RevealOnScroll key={item.id} animation="slideRight" delay={i * 100}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        color: theme.primary,
                        fontSize: '1.25rem',
                        lineHeight: 1.6,
                        flexShrink: 0,
                      }}
                    >
                      &#x2713;
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: THEME.fonts.ui,
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: theme.text,
                          marginBottom: '0.25rem',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ ...s.body, fontSize: '0.95rem' }}>{item.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
          <div>
            <RevealOnScroll animation="slideUp">
              <h2 style={s.h2}>{c.pricing.headline}</h2>
            </RevealOnScroll>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                marginTop: '1.5rem',
              }}
            >
              {c.pricing.tiers.map((tier, i) => (
                <RevealOnScroll key={i} animation="slideLeft" delay={i * 150}>
                  <div
                    style={{
                      padding: '1.5rem',
                      borderRadius: THEME.borderRadius.lg,
                      border: tier.featured
                        ? `2px solid ${theme.primary}`
                        : `1px solid ${theme.border}`,
                      backgroundColor: tier.featured
                        ? theme.primary + '0a'
                        : theme.bg,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: THEME.fonts.ui,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: theme.primary,
                        display: 'block',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {tier.name}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                      <span
                        style={{
                          fontFamily: THEME.fonts.display,
                          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                          fontWeight: 500,
                          color: theme.text,
                          lineHeight: 1.1,
                        }}
                      >
                        {tier.price}
                      </span>
                      <span
                        style={{
                          fontFamily: THEME.fonts.ui,
                          fontSize: '1rem',
                          color: theme.textSecondary,
                        }}
                      >
                        {tier.unit}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: THEME.fonts.ui,
                        fontSize: '0.85rem',
                        color: theme.textMuted,
                        marginTop: '0.35rem',
                      }}
                    >
                      or {tier.paidInFull}
                      {tier.savings && (
                        <span style={{ color: theme.primary }}> · {tier.savings}</span>
                      )}
                    </p>
                    <p
                      style={{
                        fontFamily: THEME.fonts.body,
                        fontSize: '0.9rem',
                        color: theme.textSecondary,
                        marginTop: '0.5rem',
                      }}
                    >
                      {tier.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <h2 style={s.h2}>{c.process.headline}</h2>
          </RevealOnScroll>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '2rem',
            }}
          >
            {c.process.steps.map((step, i) => (
              <RevealOnScroll key={i} animation="slideUp" delay={i * 150}>
                <div style={{ textAlign: 'center' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '44px',
                      height: '44px',
                      borderRadius: THEME.borderRadius.full,
                      backgroundColor: theme.primary,
                      color: theme.primaryText,
                      fontFamily: THEME.fonts.ui,
                      fontSize: '1rem',
                      fontWeight: 600,
                      marginBottom: '1rem',
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: THEME.fonts.display,
                      fontSize: '1.35rem',
                      fontWeight: 500,
                      color: theme.text,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ ...s.body, fontSize: '0.95rem' }}>{step.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        className="texture-overlay"
        style={{
          backgroundColor: theme.bgSecondary,
          padding: '4rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: THEME.maxWidth.full, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <h2
              style={{
                ...s.label,
                fontSize: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              {c.testimonials.headline}
            </h2>
          </RevealOnScroll>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {c.testimonials.items.map((testimonial, i) => (
              <RevealOnScroll key={i} animation="slideUp" delay={i * 150}>
                <div
                  style={{
                    padding: '1.75rem',
                    borderRadius: THEME.borderRadius.lg,
                    borderLeft: `3px solid ${theme.primary}20`,
                    backgroundColor: theme.bg,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <p
                    style={{
                      fontFamily: THEME.fonts.body,
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      color: theme.textSecondary,
                      fontStyle: 'italic',
                      marginBottom: '1.25rem',
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p
                    style={{
                      fontFamily: THEME.fonts.ui,
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: theme.text,
                    }}
                  >
                    &mdash; {testimonial.author}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FOOTER ===== */}
      <section
        className="cta-glow"
        style={{
          width: '100%',
          padding: '5rem 1.5rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: THEME.maxWidth.narrow,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div style={{ flex: '1 1 300px' }}>
            <RevealOnScroll animation="slideUp">
              <h2
                style={{
                  fontFamily: THEME.fonts.display,
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: theme.text,
                  marginBottom: '1.5rem',
                  lineHeight: 1.3,
                }}
              >
                {c.cta.headline}
              </h2>
              <Button
                variant="primary"
                href={CONFIG.urls.discoveryCall}
                theme={theme}
                prefersReducedMotion={prefersReducedMotion}
              >
                {c.cta.buttonText}
              </Button>
            </RevealOnScroll>
          </div>
          <div style={{ flex: '1 1 200px', textAlign: 'right' }}>
            <RevealOnScroll animation="fade" delay={200}>
              <p
                style={{
                  fontFamily: THEME.fonts.ui,
                  fontSize: '0.85rem',
                  color: theme.textMuted,
                  lineHeight: 1.8,
                }}
              >
                {c.cta.details.join(' · ')}
              </p>
              <p
                style={{
                  fontFamily: THEME.fonts.ui,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: theme.text,
                  marginTop: '0.5rem',
                }}
              >
                {c.footer.email}
              </p>
              <p
                style={{
                  fontFamily: THEME.fonts.body,
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  color: theme.textMuted,
                  marginTop: '0.25rem',
                }}
              >
                {c.footer.title}
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CorporatePage;
