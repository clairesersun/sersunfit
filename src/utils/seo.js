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
  keywords,
  canonical,
  ogImage = 'https://clairesersunfitness.com/images/Headshot.webp',
}) => {
  // Update document title
  document.title = title;

  // Update or create meta description
  updateMetaTag('name', 'description', description);

  // Update or create meta keywords (if provided)
  if (keywords) {
    updateMetaTag('name', 'keywords', keywords);
  }

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
      'Personalized strength training and sustainable fitness coaching for women. Build lasting capability, confidence, and independence in your body. Serving women of all ages, including those over 60 and neurodivergent individuals.',
    keywords:
      'fitness coach, strength training, women\'s fitness, online coaching, personal trainer, workout plan, neurodivergent fitness, fitness over 60',
    canonical: 'https://clairesersunfitness.com',
    ogImage: 'https://clairesersunfitness.com/images/Headshot.webp',
  },
  about: {
    title: 'About Claire Sersun | ACE Certified Personal Trainer',
    description:
      'Meet Claire Sersun, ACE Certified Personal Trainer with over a decade of movement education experience. Specializing in strength training for women of all ages.',
    keywords: 'Claire Sersun, personal trainer, ACE certified, Pilates instructor, yoga teacher',
    canonical: 'https://clairesersunfitness.com/about',
    ogImage: 'https://clairesersunfitness.com/images/Headshot.webp',
  },
  coaching: {
    title: 'Capable Body Coaching | 12-Week Strength Program | Claire Sersun Fitness',
    description:
      'Build strength, confidence, and tools you keep for life. 12-week personalized coaching with custom workouts, nutrition guidance, weekly check-ins, and 24/7 support. Learn skills for independent training.',
    keywords: 'capable body coaching, coaching program, online training, personalized workouts, strength coaching, independent fitness',
    canonical: 'https://clairesersunfitness.com/coaching',
    ogImage: 'https://clairesersunfitness.com/images/Headshot.webp',
  },
  contact: {
    title: 'Contact Claire Sersun | Online Fitness Coach',
    description:
      'Get in touch with Claire Sersun for coaching inquiries. Apply for personalized strength training or connect on Instagram.',
    keywords: 'contact, coaching inquiries, personal trainer contact',
    canonical: 'https://clairesersunfitness.com/contact',
    ogImage: 'https://clairesersunfitness.com/images/Headshot.webp',
  },
  resources: {
    title: 'Fitness Resources & Training Guides | Claire Sersun Fitness',
    description:
      'Training guides, digital products, and helpful resources to support your fitness journey. Expert-designed programs for strength and capability.',
    keywords: 'fitness resources, training guides, workout programs, digital fitness products',
    canonical: 'https://clairesersunfitness.com/resources',
    ogImage: 'https://clairesersunfitness.com/images/Headshot.webp',
  },
  'kilimanjaro-training-plan': {
    title: 'Kilimanjaro Training Plan: 6-Month Strength-First Blueprint for Hikers | $17',
    description:
      'Train for Kilimanjaro with confidence. Strength training, hiking conditioning, and breathwork designed for busy women. 6-month + 12-week plans. Instant PDF access.',
    keywords:
      'kilimanjaro training plan, how to train for kilimanjaro, mount kilimanjaro training, kilimanjaro preparation guide, hiking training program, kilimanjaro workout plan',
    canonical: 'https://clairesersunfitness.com/kilimanjaro-training-plan',
    ogImage: 'https://clairesersunfitness.com/images/Kilimanjaro.webp',
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
