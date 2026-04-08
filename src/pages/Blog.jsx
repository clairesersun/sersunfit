import React from 'react';
import { THEME } from '../styles/theme';
import { createStyles } from './styles';
import useBlogPosts from '../hooks/useBlogPosts';

import {
  RevealOnScroll,
  AnimatedText,
  ParallaxSection,
} from '../components/animation';

import { Card, Divider, OrganicShape } from '../components/ui';

const BlogPage = ({ theme, isDarkMode, prefersReducedMotion, onNavigate }) => {
  const s = createStyles(theme);
  const { posts, loading } = useBlogPosts();

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
            <span style={s.label}>Blog</span>
          </RevealOnScroll>
          <h1 style={s.heroHeading}>
            <AnimatedText stagger={80}>Thoughts on strength, movement, and building a capable life</AnimatedText>
          </h1>
          <Divider theme={theme} />
        </div>
      </ParallaxSection>

      {/* ===== POSTS ===== */}
      <section style={{ width: '100%', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          {loading ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    background: isDarkMode ? '#242a24' : '#f0eeeb',
                    borderRadius: '12px',
                    padding: '2rem',
                  }}
                >
                  <div
                    style={{
                      height: '0.75rem',
                      width: '120px',
                      background: isDarkMode ? '#2d352d' : '#e8e5e1',
                      borderRadius: '4px',
                      marginBottom: '0.75rem',
                    }}
                  />
                  <div
                    style={{
                      height: '1.5rem',
                      width: '80%',
                      background: isDarkMode ? '#2d352d' : '#e8e5e1',
                      borderRadius: '4px',
                      marginBottom: '1rem',
                    }}
                  />
                  <div
                    style={{
                      height: '1rem',
                      width: '100%',
                      background: isDarkMode ? '#2d352d' : '#e8e5e1',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <RevealOnScroll animation="fade">
              <p style={{ ...s.body, textAlign: 'center' }}>
                No published posts yet. Check back soon.
              </p>
            </RevealOnScroll>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {posts.map((post, i) => (
                <Card key={post.slug} theme={theme} index={i}>
                  <button
                    onClick={() => onNavigate(`blog/${post.slug}`)}
                    style={{
                      all: 'unset',
                      cursor: 'pointer',
                      display: 'block',
                      width: '100%',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      <span style={{ ...s.label, color: theme.textMuted, marginBottom: 0 }}>{post.date}</span>
                      {post.keyword && (
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            padding: '0.25rem 0.6rem',
                            background: theme.bgTertiary || (isDarkMode ? '#2d352d' : '#e8e5e1'),
                            border: `1px solid ${theme.border}`,
                            borderRadius: '4px',
                            color: theme.textMuted,
                          }}
                        >
                          {post.keyword}
                        </span>
                      )}
                    </div>
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
                  </button>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
