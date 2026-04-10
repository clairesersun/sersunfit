import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { THEME } from '../styles/theme';
import CONFIG from '../config/config';
import { createStyles } from './styles';
import { fetchPostBySlug } from '../content/blogPosts';
import { updatePageMeta } from '../utils/seo';

import {
  RevealOnScroll,
  ParallaxSection,
} from '../components/animation';

import { Divider, OrganicShape, Button } from '../components/ui';

/**
 * Detect whether content is HTML or Markdown.
 * If it contains common HTML tags, treat as HTML.
 */
const isHTML = (str) => /<(p|h[1-6]|div|ul|ol|li|br|img|a|span|strong|em)\b/i.test(str);

const BlogPostPage = ({ theme, isDarkMode, onNavigate }) => {
  const s = createStyles(theme);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Extract slug from URL: /blog/{slug}
  const slug = typeof window !== 'undefined'
    ? window.location.pathname.replace(/^\/blog\//, '').replace(/\/+$/, '')
    : '';

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    fetchPostBySlug(slug).then((result) => {
      setPost(result);
      setLoading(false);

      if (result) {
        updatePageMeta({
          title: `${result.title} | Claire Sersun Fitness`,
          description: result.excerpt,
          canonical: `${CONFIG.urls.site}/blog/${result.slug}`,
        });
      }
    });
  }, [slug]);

  // Shared prose styles for both markdown and HTML content
  const proseStyle = {
    fontFamily: THEME.fonts.body,
    fontSize: '1.125rem',
    lineHeight: 1.9,
    color: theme.textSecondary,
    maxWidth: THEME.maxWidth.narrow,
    margin: '0 auto',
  };

  if (loading) {
    return (
      <main id="main-content" style={{ paddingTop: '10rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <div style={{ height: '0.75rem', width: '120px', background: isDarkMode ? '#2d352d' : '#e8e5e1', borderRadius: '4px', marginBottom: '1rem' }} />
          <div style={{ height: '2.5rem', width: '80%', background: isDarkMode ? '#2d352d' : '#e8e5e1', borderRadius: '4px', marginBottom: '2rem' }} />
          <div style={{ height: '1rem', width: '100%', background: isDarkMode ? '#2d352d' : '#e8e5e1', borderRadius: '4px', marginBottom: '0.75rem' }} />
          <div style={{ height: '1rem', width: '90%', background: isDarkMode ? '#2d352d' : '#e8e5e1', borderRadius: '4px', marginBottom: '0.75rem' }} />
          <div style={{ height: '1rem', width: '95%', background: isDarkMode ? '#2d352d' : '#e8e5e1', borderRadius: '4px' }} />
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main id="main-content" style={{ paddingTop: '10rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ ...s.heroHeading, fontSize: '2rem' }}>Post not found</h1>
          <p style={{ ...s.body, marginBottom: '2rem' }}>
            This post may have been removed or the link may be incorrect.
          </p>
          <Button theme={theme} onClick={() => onNavigate('blog')}>
            Back to Blog
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content">
      {/* ===== HERO ===== */}
      <ParallaxSection
        className="hero-gradient texture-overlay"
        style={{
          width: '100%',
          paddingTop: '10rem',
          paddingBottom: '4rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        <OrganicShape
          variant={3}
          isDarkMode={isDarkMode}
          primaryColor={theme.primary}
          style={{
            width: '300px',
            height: '300px',
            top: '-10%',
            right: '-10%',
            transform: 'rotate(15deg)',
          }}
        />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span style={s.label}>{post.date}</span>
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
          </RevealOnScroll>
          <h1 style={{ ...s.heroHeading, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            {post.title}
          </h1>
          <Divider theme={theme} />
        </div>
      </ParallaxSection>

      {/* ===== BODY ===== */}
      <section style={{ width: '100%', padding: '3rem 1.5rem 5rem' }}>
        <div className="blog-prose" style={proseStyle}>
          {isHTML(post.content) ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h2 style={{ ...s.h2, marginTop: '2.5rem' }}>{children}</h2>,
                h2: ({ children }) => <h2 style={{ ...s.h2, marginTop: '2.5rem' }}>{children}</h2>,
                h3: ({ children }) => <h3 style={{ ...s.h3, marginTop: '2rem' }}>{children}</h3>,
                p: ({ children }) => <p style={{ marginBottom: '1.5rem' }}>{children}</p>,
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary, textDecoration: 'underline' }}>
                    {children}
                  </a>
                ),
                ul: ({ children }) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>{children}</ul>,
                ol: ({ children }) => <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>{children}</ol>,
                li: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote
                    style={{
                      borderLeft: `3px solid ${theme.primary}`,
                      paddingLeft: '1.5rem',
                      margin: '2rem 0',
                      fontStyle: 'italic',
                      color: theme.textMuted,
                    }}
                  >
                    {children}
                  </blockquote>
                ),
                strong: ({ children }) => <strong style={{ color: theme.text }}>{children}</strong>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          )}
        </div>

        {/* ===== SOURCES ===== */}
        {post.sources && post.sources.length > 0 && (
          <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '3rem auto 0', borderTop: `1px solid ${theme.border}`, paddingTop: '2rem' }}>
            <h3 style={{ ...s.h3, fontSize: '1.25rem' }}>References</h3>
            <ol style={{ paddingLeft: '1.5rem' }}>
              {post.sources.map((source, i) => (
                <li key={i} style={{ ...s.body, marginBottom: '0.5rem' }}>
                  {source.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.primary, textDecoration: 'underline' }}
                    >
                      {source.title || source.url}
                    </a>
                  ) : (
                    <span>{source.title || JSON.stringify(source)}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* ===== BACK LINK ===== */}
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '3rem auto 0', textAlign: 'center' }}>
          <Button theme={theme} onClick={() => onNavigate('blog')}>
            Back to Blog
          </Button>
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage;
