/**
 * ============================================
 * KILIMANJARO TRAINING BLUEPRINT PAGE
 * ============================================
 *
 * SEO-optimized landing page for Kilimanjaro Training Blueprint
 * digital product.
 *
 * TARGET KEYWORDS:
 * - kilimanjaro training plan
 * - how to train for kilimanjaro
 * - mount kilimanjaro training
 * - kilimanjaro preparation guide
 *
 * @module KilimanjaroPage
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

import { Button, Card, Divider, OrganicShape, KilimanjaroIcons } from '../components/ui';

/**
 * KilimanjaroPage - Digital product landing page
 *
 * Props:
 * @param {Object} theme - Active theme object
 * @param {boolean} isDarkMode - Current theme mode
 * @param {boolean} prefersReducedMotion - User's motion preference
 * @param {Function} onNavigate - Navigation callback
 */
const KilimanjaroPage = ({ theme, isDarkMode, prefersReducedMotion, onNavigate }) => {
  const s = createStyles(theme);
  const c = CONTENT.kilimanjaro;

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
            width: '400px',
            height: '400px',
            top: '-5%',
            right: '-10%',
            transform: 'rotate(-15deg)',
          }}
        />
        <div style={{ maxWidth: THEME.maxWidth.full, margin: '0 auto', width: '100%' }}>
          <RevealOnScroll animation="fade">
            <span style={s.label}>{c.hero.label}</span>
          </RevealOnScroll>
          <h1 style={s.heroHeading}>
            <AnimatedText stagger={80}>{c.hero.headline}</AnimatedText>
          </h1>
          <RevealOnScroll animation="slideUp" delay={400}>
            <p style={s.bodyLarge}>{c.hero.description}</p>
          </RevealOnScroll>

          {/* Feature checkmarks */}
          <RevealOnScroll animation="slideUp" delay={600}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                margin: '2rem 0',
              }}
            >
              {c.hero.features.map((feature, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: theme.text,
                  }}
                >
                  <span style={{ color: theme.primary, fontSize: '1.25rem' }}>✔</span>
                  <span style={{ fontSize: '1.125rem' }}>{feature}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Price and CTA */}
          <RevealOnScroll animation="slideUp" delay={800}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '1.5rem',
                marginTop: '2.5rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 600,
                    color: theme.primary,
                    fontFamily: THEME.fonts.display,
                  }}
                >
                  {c.hero.price}
                </div>
                <div style={{ color: theme.textMuted, marginTop: '0.25rem' }}>
                  {c.hero.priceNote}
                </div>
              </div>
              <Button
                variant="primary"
                size="large"
                onClick={() => window.open(c.hero.ctaUrl, '_blank')}
                theme={theme}
              >
                {c.hero.cta}
              </Button>
            </div>
          </RevealOnScroll>

          <Divider theme={theme} style={{ marginTop: '3rem' }} />
        </div>
      </ParallaxSection>

      {/* ===== AUTHORITY SECTION ===== */}
      <section style={{ width: '100%', padding: '6rem 1.5rem' }}>
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
          <RevealOnScroll animation="slideRight">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ImageReveal
                src={CONFIG.assets.kilimanjaro}
                alt="Claire Sersun on Kilimanjaro"
                style={{ width: '100%', maxWidth: '450px', aspectRatio: '4/5' }}
              />
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll animation="slideLeft" delay={200}>
              <h2 style={s.sectionHeading}>{c.authority.headline}</h2>
              <p style={{ ...s.bodyLarge, marginTop: '1rem' }}>
                {c.authority.description}
              </p>
              <div style={{ marginTop: '2rem' }}>
                <p
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: theme.text,
                    fontFamily: THEME.fonts.display,
                  }}
                >
                  {c.authority.emphasis}
                </p>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: theme.textMuted,
                    marginTop: '0.5rem',
                  }}
                >
                  {c.authority.subtext}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>


      {/* ===== PROBLEM SECTION ===== */}
      <section
        className="texture-overlay"
        style={{
          width: '100%',
          padding: '6rem 1.5rem',
          backgroundColor: theme.bgSecondary,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade">
            <h2 style={s.sectionHeading}>{c.problem.headline}</h2>
            <p style={{ ...s.bodyLarge, marginTop: '1.5rem' }}>{c.problem.intro}</p>
          </RevealOnScroll>

          <RevealOnScroll animation="slideUp" delay={200}>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {c.problem.issues.map((issue, i) => (
                <li
                  key={i}
                  style={{
                    padding: '1rem 1.5rem',
                    backgroundColor: theme.background,
                    borderRadius: THEME.borderRadius.md,
                    fontSize: '1.125rem',
                    color: theme.text,
                  }}
                >
                  {issue}
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll animation="slideUp" delay={400}>
            <p
              style={{
                ...s.bodyLarge,
                marginTop: '2rem',
                fontWeight: 500,
                color: theme.primary,
              }}
            >
              {c.problem.solution}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== WHAT'S INSIDE SECTION ===== */}
      <section style={{ width: '100%', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.full, margin: '0 auto' }}>
          <RevealOnScroll animation="fade">
            <h2 style={{ ...s.sectionHeading, textAlign: 'center' }}>
              {c.inside.headline}
            </h2>
            <p
              style={{
                ...s.bodyLarge,
                textAlign: 'center',
                marginTop: '1rem',
                color: theme.textMuted,
              }}
            >
              {c.inside.intro}
            </p>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '3rem',
            }}
          >
            {c.inside.features.map((feature, i) => {
              const Icon = KilimanjaroIcons[feature.id];
              return (
                <Card key={feature.id} theme={theme} index={i}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: THEME.borderRadius.full,
                      backgroundColor: theme.primary + '15',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    {Icon && <Icon color={theme.primary} />}
                  </div>
                  <h3
                    style={{
                      fontFamily: THEME.fonts.display,
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      color: theme.text,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ ...s.body, color: theme.textMuted }}>
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== AUDIENCE SECTION ===== */}
      <section
        className="texture-overlay"
        style={{
          width: '100%',
          padding: '6rem 1.5rem',
          backgroundColor: theme.bgSecondary,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade">
            <h2 style={s.sectionHeading}>{c.audience.headline}</h2>
            <p style={{ ...s.bodyLarge, marginTop: '1.5rem' }}>{c.audience.intro}</p>
          </RevealOnScroll>

          <RevealOnScroll animation="slideUp" delay={200}>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {c.audience.criteria.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <span style={{ color: theme.primary, fontSize: '1.5rem', flexShrink: 0 }}>
                    ✓
                  </span>
                  <span style={{ fontSize: '1.125rem', color: theme.text, paddingTop: '0.25rem' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll animation="slideUp" delay={400}>
            <div
              style={{
                marginTop: '2.5rem',
                padding: '1.5rem',
                borderLeft: `4px solid ${theme.primary}`,
                backgroundColor: theme.background,
                borderRadius: THEME.borderRadius.md,
              }}
            >
              <p style={{ ...s.body, color: theme.textMuted }}>
                {c.audience.note}{' '}
                <span style={{ color: theme.text, fontWeight: 500 }}>
                  {c.audience.noteEmphasis}
                </span>
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== WHAT IT'S NOT SECTION ===== */}
      <section style={{ width: '100%', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade">
            <div style={{ textAlign: 'center' }}>
              <h2 style={s.sectionHeading}>{c.notFor.headline}</h2>
              <p style={{ ...s.bodyLarge, marginTop: '1.5rem' }}>
                {c.notFor.description}
              </p>
              <p
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: theme.primary,
                  marginTop: '1rem',
                  fontFamily: THEME.fonts.display,
                }}
              >
                {c.notFor.emphasis}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section
        className="texture-overlay"
        style={{
          width: '100%',
          padding: '6rem 1.5rem',
          backgroundColor: theme.bgSecondary,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade">
            <div style={{ textAlign: 'center' }}>
              <h2 style={s.sectionHeading}>{c.finalCta.headline}</h2>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 600,
                  color: theme.primary,
                  fontFamily: THEME.fonts.display,
                  marginTop: '1.5rem',
                }}
              >
                {c.finalCta.price}
              </div>
              <div style={{ color: theme.textMuted, marginTop: '0.5rem', fontSize: '1.125rem' }}>
                {c.finalCta.priceNote}
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => window.open(c.finalCta.ctaUrl, '_blank')}
                  theme={theme}
                >
                  {c.finalCta.cta}
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
};

export default KilimanjaroPage;
