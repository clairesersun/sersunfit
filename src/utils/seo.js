/**
 * ============================================
 * SEO UTILITIES
 * ============================================
 *
 * Utilities for dynamically updating page meta tags
 * for better SEO on single-page applications.
 *
 * This enables each page/route to have unique:
 * - Title
 * - Description
 * - Keywords
 * - Canonical URL
 * - Open Graph tags
 * - Twitter Card tags
 *
 * @module seo
 * ============================================
 */

/**
 * Updates document title and meta tags for SEO
 *
 * @param {Object} seo - SEO configuration object
 * @param {string} seo.title - Page title
 * @param {string} seo.description - Meta description
 * @param {string} [seo.keywords] - Meta keywords (optional)
 * @param {string} [seo.canonical] - Canonical URL (optional)
 * @param {string} [seo.ogImage] - Open Graph image URL (optional)
 */
export const updatePageMeta = ({
  title,
  description,
  canonical,
  ogImage = 'https://www.clairesersunfitness.com/images/Headshot.webp',
}) => {
  // Update document title
  document.title = title;

  // Update or create meta description
  updateMetaTag('name', 'description', description);

  // NOTE: meta keywords intentionally not emitted — ignored by all major
  // search engines. The `keywords` field in PAGE_SEO is kept only as internal
  // documentation of each page's target terms.

  // Update canonical URL (if provided)
  if (canonical) {
    updateLinkTag('canonical', canonical);
  }

  // Update Open Graph tags
  updateMetaTag('property', 'og:title', title);
  updateMetaTag('property', 'og:description', description);
  updateMetaTag('property', 'og:url', canonical || window.location.href);
  updateMetaTag('property', 'og:image', ogImage);

  // Update Twitter Card tags
  updateMetaTag('name', 'twitter:title', title);
  updateMetaTag('name', 'twitter:description', description);
  updateMetaTag('name', 'twitter:image', ogImage);
};

/**
 * Inject (or replace) a JSON-LD structured-data script in <head>.
 * Pass a plain object or JSON string. Call with a falsy value to clear.
 *
 * @param {Object|string|null} schema - schema.org JSON-LD
 * @param {string} [id] - element id, so it can be replaced/removed
 */
export const setJsonLd = (schema, id = 'blog-jsonld') => {
  if (typeof document === 'undefined') return;
  removeJsonLd(id);
  if (!schema) return;
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.text = typeof schema === 'string' ? schema : JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Remove a previously injected JSON-LD script by id.
 * @param {string} [id]
 */
export const removeJsonLd = (id = 'blog-jsonld') => {
  if (typeof document === 'undefined') return;
  const el = document.getElementById(id);
  if (el) el.remove();
};

/**
 * Helper function to update or create a meta tag
 *
 * @param {string} attribute - Attribute name ('name' or 'property')
 * @param {string} attributeValue - Attribute value (e.g., 'description', 'og:title')
 * @param {string} content - Content value
 */
const updateMetaTag = (attribute, attributeValue, content) => {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);

  if (element) {
    // Update existing tag
    element.setAttribute('content', content);
  } else {
    // Create new tag
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

/**
 * Helper function to update or create a link tag
 *
 * @param {string} rel - Link relationship (e.g., 'canonical')
 * @param {string} href - URL
 */
const updateLinkTag = (rel, href) => {
  let element = document.querySelector(`link[rel="${rel}"]`);

  if (element) {
    // Update existing tag
    element.setAttribute('href', href);
  } else {
    // Create new tag
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    element.setAttribute('href', href);
    document.head.appendChild(element);
  }
};

/**
 * Page-specific SEO configurations
 * Maps page IDs to their SEO data
 */
export const PAGE_SEO = {
  home: {
    title: 'Claire Sersun Fitness | Online Strength Coaching for Women',
    description:
      'Personalized strength training and sustainable fitness coaching for women. Build lasting capability, confidence, and independence in your body. Serving women of all ages, including those over 40 and neurodivergent individuals.',
    keywords:
      'fitness coach, strength training, women\'s fitness, online coaching, personal trainer, workout plan, neurodivergent fitness, fitness over 40',
    canonical: 'https://www.clairesersunfitness.com',
    ogImage: 'https://www.clairesersunfitness.com/images/Headshot.webp',
  },
  about: {
    title: 'About Claire Sersun | ACE Certified Personal Trainer',
    description:
      'Meet Claire Sersun, ACE Certified Personal Trainer with over a decade of movement education experience. Specializing in strength training for women of all ages.',
    keywords: 'Claire Sersun, personal trainer, ACE certified, Pilates instructor, yoga teacher',
    canonical: 'https://www.clairesersunfitness.com/about',
    ogImage: 'https://www.clairesersunfitness.com/images/Headshot.webp',
  },
  coaching: {
    title: 'Capable Body Coaching | 12-Week Strength Program | Claire Sersun Fitness',
    description:
      'Build strength, confidence, and tools you keep for life. 12-week personalized coaching with custom workouts, nutrition guidance, weekly check-ins, and 24/7 support. Learn skills for independent training.',
    keywords: 'capable body coaching, coaching program, online training, personalized workouts, strength coaching, independent fitness',
    canonical: 'https://www.clairesersunfitness.com/coaching',
    ogImage: 'https://www.clairesersunfitness.com/images/Headshot.webp',
  },
  contact: {
    title: 'Contact Claire Sersun | Online Fitness Coach',
    description:
      'Get in touch with Claire Sersun for coaching inquiries. Apply for personalized strength training or connect on Instagram.',
    keywords: 'contact, coaching inquiries, personal trainer contact',
    canonical: 'https://www.clairesersunfitness.com/contact',
    ogImage: 'https://www.clairesersunfitness.com/images/Headshot.webp',
  },
  resources: {
    title: 'Fitness Resources & Training Guides | Claire Sersun Fitness',
    description:
      'Training guides, digital products, and helpful resources to support your fitness journey. Expert-designed programs for strength and capability.',
    keywords: 'fitness resources, training guides, workout programs, digital fitness products',
    canonical: 'https://www.clairesersunfitness.com/resources',
    ogImage: 'https://www.clairesersunfitness.com/images/Headshot.webp',
  },
  blog: {
    title: 'Blog | Claire Sersun Fitness',
    description:
      'Thoughts on strength training, movement, and building a capable life. Evidence-based articles for women ready to get stronger.',
    keywords: 'fitness blog, strength training articles, women fitness tips, movement education',
    canonical: 'https://www.clairesersunfitness.com/blog',
    ogImage: 'https://www.clairesersunfitness.com/images/Headshot.webp',
  },
  'kilimanjaro-training-plan': {
    title: 'Kilimanjaro Training Plan: 6-Month Strength-First Blueprint for Hikers | $17',
    description:
      'Train for Kilimanjaro with confidence. Strength training, hiking conditioning, and breathwork designed for busy women. 6-month + 12-week plans. Instant PDF access.',
    keywords:
      'kilimanjaro training plan, how to train for kilimanjaro, mount kilimanjaro training, kilimanjaro preparation guide, hiking training program, kilimanjaro workout plan',
    canonical: 'https://www.clairesersunfitness.com/kilimanjaro-training-plan',
    ogImage: 'https://www.clairesersunfitness.com/images/Kilimanjaro.webp',
  },
  corporate: {
    title: 'Corporate Wellness & Executive Fitness Programs | Claire Sersun Fitness',
    description:
      'Strength and wellness programs for teams and executives. Boost energy, focus, and resilience with personalized coaching built for demanding schedules.',
    keywords: 'corporate wellness, executive fitness, workplace wellness, team fitness program, executive coaching',
    canonical: 'https://www.clairesersunfitness.com/corporate',
    ogImage: 'https://www.clairesersunfitness.com/images/Headshot.webp',
  },
  privacy: {
    title: 'Privacy Policy | Claire Sersun Fitness',
    description:
      'How Claire Sersun Fitness collects, uses, and protects your personal information.',
    keywords: 'privacy policy, data protection',
    canonical: 'https://www.clairesersunfitness.com/privacy',
    ogImage: 'https://www.clairesersunfitness.com/images/Headshot.webp',
  },
};

/**
 * Updates page meta tags based on current page ID
 *
 * @param {string} pageId - Current page ID
 */
export const updateSEOForPage = (pageId) => {
  const seoConfig = PAGE_SEO[pageId] || PAGE_SEO.home;
  updatePageMeta(seoConfig);
};
