/**
 * ============================================
 * Writing PAGE COMPONENT
 * ============================================
 *
 * Blog/Writing page with post list or empty state.
 * Only accessible when BLOG_POSTS has content.
 *
 * SEO STRATEGY:
 * This page is the long-term SEO foundation.
 * Each blog post should target specific search queries.
 *
 * @module WritingPage
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

import { Card, Divider, OrganicShape } from '../components/ui';

/**
 * WritingPage - Blog posts and writing
 *
 * Props:
 * @param {Object} theme - Active theme object
 * @param {boolean} isDarkMode - Current theme mode
 * @param {boolean} prefersReducedMotion - User's motion preference
 */
const WritingPage = ({ theme, isDarkMode, prefersReducedMotion }) => {
  const s = createStyles(theme);
  const c = CONTENT.writing;

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

      {/* ===== POSTS OR EMPTY STATE ===== */}
      <section style={{ width: '100%', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          {!hasBlogContent() ? (
            // Empty state - no posts yet
            <RevealOnScroll animation="fade">
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <p style={s.body}>
                  {c.emptyState.message}{' '}
                  <a
                    href={CONFIG.urls.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.primary }}
                  >
                    {c.emptyState.linkText}
                  </a>
                  .
                </p>
              </div>
            </RevealOnScroll>
          ) : (
            // Post list
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {BLOG_POSTS.map((post, i) => (
                <Card key={post.id} theme={theme} index={i}>
                  <span style={{ ...s.label, color: theme.textMuted }}>{post.date}</span>
                  <h2
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
                  </h2>
                  <p style={s.body}>{post.excerpt}</p>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default WritingPage;
