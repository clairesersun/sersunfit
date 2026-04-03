/**
 * ============================================
 * BLOG POSTS MODULE
 * ============================================
 *
 * Async blog post queries backed by Supabase.
 * Only reads published posts — the site never writes data.
 *
 * Supabase table: blog_posts
 * Required columns: id, title, slug, keyword, body,
 *   meta_description, sources, status, created_at
 *
 * ============================================
 */

import { supabase } from '../utils/supabase';

/**
 * Format a Supabase row into the shape components expect.
 */
const formatPost = (row) => ({
  id: row.slug,
  slug: row.slug,
  title: row.title,
  date: new Date(row.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
  excerpt: row.meta_description || '',
  content: row.body || '',
  keyword: row.keyword || '',
  tags: [row.keyword].filter(Boolean),
  sources: (() => {
    if (!row.sources) return [];
    if (Array.isArray(row.sources)) return row.sources;
    try { return JSON.parse(row.sources); } catch { return []; }
  })(),
  created_at: row.created_at,
});

/**
 * Fetch all published blog posts, newest first.
 * @returns {Promise<Array<Object>>}
 */
export const fetchBlogPosts = async () => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, keyword, body, meta_description, sources, created_at')
    .eq('status', 'Published')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  return (data || []).map(formatPost);
};

/**
 * Fetch a single published post by slug.
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
export const fetchPostBySlug = async (slug) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'Published')
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data ? formatPost(data) : null;
};
