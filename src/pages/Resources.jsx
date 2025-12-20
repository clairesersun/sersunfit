/**
 * ============================================
 * Resources PAGE COMPONENT
 * ============================================
 *
 * Resources page with training guides, blog posts, and digital products.
 * Only accessible when BLOG_POSTS has content.
 *
 * SEO STRATEGY:
 * This page is the long-term SEO foundation.
 * Each resource should target specific search queries.
 *
 * @module ResourcesPage
 * ============================================
 */

import React from 'react';
import { THEME } from '../styles/theme';
import CONFIG from '../config/config';
import CONTENT from '../content/siteContent';
import BLOG_POSTS, { hasBlogContent } from '../content/blogPosts';
import { createStyles } from './styles';

import {
  RevealOnScroll,
  AnimatedText,
  ParallaxSection,
} from '../components/animation';

import { Card, Divider, OrganicShape, Button } from '../components/ui';

/**
 * ResourcesPage - Training guides, blog posts, and digital products
 *
 * Props:
 * @param {Object} theme - Active theme object
 * @param {boolean} isDarkMode - Current theme mode
 * @param {boolean} prefersReducedMotion - User's motion preference
 * @param {Function} onNavigate - Navigation callback
 */
const ResourcesPage = ({ theme, isDarkMode, prefersReducedMotion, onNavigate }) => {
  const s = createStyles(theme);
  const c = CONTENT.resources;

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
          variant={3}
          isDarkMode={isDarkMode}
          primaryColor={theme.primary}
          style={{
            width: '350px',
            height: '350px',
            top: '-10%',
            right: '-10%',
            transform: 'rotate(15deg)',
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
            <p style={s.bodyLarge}>{c.hero.description}</p>
          </RevealOnScroll>
          <Divider theme={theme} />
        </div>
      </ParallaxSection>

      {/* ===== FEATURED PRODUCTS ===== */}
      {c.featuredProducts && c.featuredProducts.products.length > 0 && (
        <section
          className="texture-overlay"
          style={{
            width: '100%',
            padding: '5rem 1.5rem',
            backgroundColor: theme.bgSecondary,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
            <RevealOnScroll animation="fade">
              <h2 style={{ ...s.sectionHeading, marginBottom: '2rem' }}>
                {c.featuredProducts.headline}
              </h2>
            </RevealOnScroll>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {c.featuredProducts.products.map((product, i) => (
                <RevealOnScroll key={product.id} animation="slideUp" delay={i * 100}>
                  <div
                    style={{
                      background: isDarkMode ? '#1a1f1a' : '#ffffff',
                      padding: '2rem',
                      borderRadius: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{ ...s.label, color: theme.primary }}>Featured Guide</span>
                      <span style={{ fontFamily: THEME.fonts.display, fontSize: '1.25rem', fontWeight: 600, color: theme.primary }}>
                        {product.price}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: THEME.fonts.display,
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        color: theme.text,
                        marginTop: '0.75rem',
                        marginBottom: '1rem',
                      }}
                    >
                      {product.title}
                    </h3>
                    <p style={{ ...s.body, marginBottom: '1.5rem' }}>{product.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {product.features.map((feature, j) => (
                        <span
                          key={j}
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            padding: '0.35rem 0.75rem',
                            background: theme.backgroundAlt,
                            border: `1px solid ${theme.border}`,
                            borderRadius: '4px',
                            color: theme.textMuted,
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button theme={theme} onClick={() => onNavigate('kilimanjaro-training-plan')}>
                      {product.cta}
                    </Button>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== BLOG POSTS (if any) ===== */}
      {hasBlogContent() && (
        <section style={{ width: '100%', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
            <RevealOnScroll animation="fade">
              <h2 style={{ ...s.sectionHeading, marginBottom: '2rem' }}>Articles</h2>
            </RevealOnScroll>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {BLOG_POSTS.map((post, i) => (
                <Card key={post.id} theme={theme} index={i}>
                  <span style={{ ...s.label, color: theme.textMuted }}>{post.date}</span>
                  <h3
                    style={{
                      fontFamily: THEME.fonts.display,
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      color: theme.text,
                      marginTop: '0.5rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={s.body}>{post.excerpt}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== INSTAGRAM SECTION ===== */}
      <section
        className="texture-overlay"
        style={{
          width: '100%',
          padding: '5rem 1.5rem',
          backgroundColor: hasBlogContent() ? theme.bgSecondary : 'transparent',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          {/* Header row with handle and follow button */}
          <RevealOnScroll animation="fade">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <h2
                style={{
                  fontFamily: THEME.fonts.display,
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: theme.text,
                  margin: 0,
                }}
              >
                @sersunfit
              </h2>
              <a
                href={CONFIG.urls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button theme={theme}>Follow on Instagram</Button>
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="slideUp" delay={100}>
            {/* Container clips the top header, allows scroll for posts */}
            <div
              style={{
                overflow: 'hidden',
                borderRadius: '8px',
                position: 'relative',
              }}
            >
              <iframe
                src="https://www.instagram.com/sersunfit/embed"
                title="Instagram Feed"
                scrolling="yes"
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none',
                  background: 'transparent',
                  marginTop: '-160px', // Hide the profile header
                  marginBottom: '-60px', // Hide the bottom footer
                }}
                allowtransparency="true"
                loading="lazy"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
