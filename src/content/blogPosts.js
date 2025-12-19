/**
 * ============================================
 * BLOG POSTS MODULE
 * ============================================
 *
 * Blog post data and related utilities.
 *
 * SEO STRATEGY:
 * Blog posts are the long-term SEO drivers for this site.
 * Each post should target specific search queries that ideal
 * clients might use to find fitness help.
 *
 * CONTENT GUIDELINES:
 * - Focus on evergreen topics (strength training, mobility, mindset)
 * - Target long-tail keywords relevant to target audience
 * - Include practical, actionable advice
 * - Maintain brand voice: calm, confident, supportive
 *
 * ============================================
 */

/**
 * Blog posts array
 *
 * When adding posts, include:
 * - id: unique string identifier (used for URLs when implemented)
 * - title: post headline (include target keywords)
 * - date: publication date string
 * - excerpt: 1-2 sentence preview
 * - content: full post content (can be markdown or HTML)
 * - tags: array of topic tags for filtering
 *
 * @type {Array<Object>}
 *
 * @example Post template (uncomment to add first post):
 * {
 *   id: 'strength-training-over-60',
 *   title: 'Why Strength Training After 60 Is Non-Negotiable',
 *   date: 'January 2025',
 *   excerpt: 'The research is clear: strength training is the single best thing you can do for longevity, independence, and quality of life after 60.',
 *   content: `
 *     Full post content goes here...
 *   `,
 *   tags: ['strength-training', 'aging', 'longevity'],
 * }
 */
const BLOG_POSTS = [
  // Example post structure (uncomment and modify to add posts):
  // {
  //   id: 'first-post-slug',
  //   title: 'Post Title Here',
  //   date: 'January 2025',
  //   excerpt: 'A brief preview of what this post covers...',
  //   content: 'Full post content...',
  //   tags: ['tag1', 'tag2'],
  // },
];

/**
 * Check if there are any published blog posts
 * Used to conditionally show/hide Writing nav item
 *
 * @returns {boolean} True if blog has at least one post
 */
export const hasBlogContent = () => BLOG_POSTS && BLOG_POSTS.length > 0;

/**
 * Get a blog post by its slug/id
 *
 * @param {string} id - The post's unique identifier
 * @returns {Object|undefined} The post object or undefined if not found
 */
export const getPostById = (id) => BLOG_POSTS.find((post) => post.id === id);

/**
 * Get posts filtered by tag
 *
 * @param {string} tag - The tag to filter by
 * @returns {Array<Object>} Array of matching posts
 */
export const getPostsByTag = (tag) =>
  BLOG_POSTS.filter((post) => post.tags?.includes(tag));

export default BLOG_POSTS;
