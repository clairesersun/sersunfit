# Claire Sersun Fitness Website

A premium, accessible, mobile-first fitness coaching website built with React (Create React App).

---

## Quick Start

```bash
npm install
npm start
```

---

## Environment Variables

The following environment variables can be set in a `.env` file at the project root:

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_APPLICATION_URL` | Fillout coaching application URL | `https://clairesersunfitness.fillout.com/coaching` |
| `REACT_APP_INSTAGRAM_URL` | Instagram profile URL | `https://www.instagram.com/sersunfit/` |
| `REACT_APP_SITE_URL` | Base site URL for SEO | `https://clairesersunfitness.com` |

Example `.env` file:

```env
REACT_APP_APPLICATION_URL=https://clairesersunfitness.fillout.com/coaching
REACT_APP_INSTAGRAM_URL=https://www.instagram.com/sersunfit/
REACT_APP_SITE_URL=https://clairesersunfitness.com
```

---

## Project Structure

```
src/
├── App.jsx                    # Main orchestrator (theme + routing + layout)
├── index.js                   # React entry point
├── config/
│   └── config.js              # URLs, assets, animation settings
├── content/
│   ├── siteContent.js         # All page copy and content
│   └── blogPosts.js           # Blog posts data + helpers
├── styles/
│   ├── main.css               # Main stylesheet (imports all CSS)
│   ├── variables.css          # CSS custom properties (design tokens)
│   ├── base.css               # Resets and foundational styles
│   ├── typography.css         # Font styles
│   ├── utilities.css          # Utility classes
│   └── theme.js               # JS theme object (colors, fonts, spacing)
├── hooks/
│   ├── index.js               # Hook exports
│   ├── useTheme.js            # Dark/light mode management
│   ├── useReducedMotion.js    # Accessibility: motion preference
│   ├── useIsMobile.js         # Mobile viewport detection
│   ├── useScrollAnimation.js  # Intersection Observer for reveals
│   ├── useParallax.js         # Parallax scroll effect
│   └── useScrollProgress.js   # Page scroll progress
├── components/
│   ├── index.js               # Component exports
│   ├── animation/
│   │   ├── index.js           # Animation component exports
│   │   ├── RevealOnScroll.jsx # Scroll-triggered reveal wrapper
│   │   ├── AnimatedText.jsx   # Word-by-word text animation
│   │   ├── ParallaxSection.jsx# Section with parallax background
│   │   ├── ScrollProgress.jsx # Fixed scroll progress bar
│   │   ├── ScrollProgress.css # Scroll progress styles
│   │   └── ImageReveal.jsx    # Image zoom reveal effect
│   ├── ui/
│   │   ├── index.js           # UI component exports
│   │   ├── Button.jsx         # Primary/secondary buttons
│   │   ├── Button.css         # Button styles
│   │   ├── Card.jsx           # Content cards with animation
│   │   ├── Card.css           # Card styles
│   │   ├── Divider.jsx        # Decorative horizontal rule
│   │   ├── OrganicShape.jsx   # Decorative SVG blobs
│   │   └── ApproachIcons.jsx  # Custom SVG icons
│   └── layout/
│       ├── index.js           # Layout component exports
│       ├── Navigation.jsx     # Header with responsive menu
│       ├── Navigation.css     # Navigation styles
│       ├── Footer.jsx         # Site footer
│       └── Footer.css         # Footer styles
└── pages/
    ├── index.js               # Page routing helpers + exports
    ├── styles.js              # Shared typography styles
    ├── Home.jsx               # Landing page
    ├── About.jsx              # Bio and philosophy
    ├── Coaching.jsx           # Program details + application
    ├── Contact.jsx            # Contact information
    └── Writing.jsx            # Blog posts (SEO foundation)
```

---

## Features

### Accessibility (WCAG 2.2 AA)

- Skip link for keyboard navigation
- Minimum 44px touch targets
- Focus-visible outlines
- Reduced motion support (`prefers-reduced-motion`)
- Semantic HTML and ARIA labels

### Dark/Light Mode

- Default: Dark mode
- Respects system preference (`prefers-color-scheme`)
- Persists user choice to `localStorage`
- Toggle in navigation

### Scroll Animations (Desktop Only)

- Reveal animations on scroll
- Parallax background effects
- Word-by-word text reveals
- Image zoom effects
- All animations disabled on mobile and for reduced-motion preference

### Navigation

- Hash-based routing (`#about`, `#coaching`, etc.)
- Browser back/forward support
- Smooth scroll to top on navigation
- Conditional "Writing" nav item (only shows when blog posts exist)

### SEO

- Structured data (JSON-LD) in `public/index.html`
- Open Graph and Twitter Card meta tags
- `public/sitemap.xml`
- Hash-based URLs (note: hash fragments are not indexed separately by search engines)

---

## Adding Blog Posts

Edit `src/content/blogPosts.js` and add posts to the `BLOG_POSTS` array:

```javascript
const BLOG_POSTS = [
  {
    id: 'your-post-slug',
    title: 'Your Post Title',
    date: 'January 2025',
    excerpt: 'A brief preview...',
    content: 'Full post content...',
    tags: ['strength-training', 'mindset'],
  },
];
```

The "Writing" nav item will automatically appear when posts are added.

---

## Website Creation Process

This project documents a deliberate, human-in-the-loop approach to building a production-ready website using AI as a collaborator — not a replacement for design or engineering judgment.

The goal was to create a clear, accessible, scalable foundation while dramatically reducing time to first version.

### Step 1 — Prompt Architecture (ChatGPT)

I began by using ChatGPT to help me construct a single, comprehensive prompt for Claude.

Rather than starting from scratch, I referenced an existing conversation I had already been having about website creation and refinement. I liked how structured and detailed that conversation was, so I used it as the starting point.

**Initial instruction to ChatGPT:**

> Go back to the beginning of this conversation where I mentioned a fitness business.
> I want to now use Claude AI to build me a fitness business page.
> I want a massive prompt like i did before.
> Look at best practices for the end of 2025 / beginning of 2026 for business websites, specifically personal trainers in the fitness industry.
> Ask me questions one at a time to help me build the site and define brand colors.

**What this approach enabled:**

- ChatGPT asked one question at a time, starting with core business details
- For open-ended questions, I requested at least 10 distinct options so I could:
  - Choose one
  - Combine several
  - Or create my own hybrid
- After every response, ChatGPT summarized what it understood and how that decision would show up in the site
- This created a tight feedback loop where I could immediately course-correct if something felt off

### Step 2 — Prompt Refinement (ChatGPT)

Once the initial Claude prompt existed, I iterated on it heavily.

**Key refinements included:**

- Feeding in my professional bio with the instruction that it should be used as background signal, not verbatim
- Adding all certifications
- Introducing a Blog / Writing section as a future-facing SEO foundation
- Explicitly adding SEO and GEO (Generative Engine Optimization) requirements

At this point, the prompt had become a true spec document, not just an instruction.

### Step 3 — Claude Specification (Verbatim)

The following is the exact prompt used with Claude.
It is included verbatim for transparency and reproducibility.

<details>
<summary>🔒 Claude Prompt (click to expand)</summary>

```
You are building a fitness coaching website FROM SCRATCH.

There is no existing website.
The only existing assets are:
• Instagram presence
• A Fillout application form: https://clairesersunfitness.fillout.com/coaching

The goal is to design and structure a premium, accessible, mobile-first fitness website that will serve as the primary business home for the brand AND maximize long-term discoverability via SEO and GEO.

━━━━━━━━━━━━━━━━━━
BUSINESS CONTEXT
━━━━━━━━━━━━━━━━━━

Business name: Claire Sersun Fitness
Delivery: Online, worldwide
Primary CTA: Apply for coaching (high-trust, personal process)
Secondary goals: Long-term discoverability across all relevant search queries
Application tool: Existing Fillout form (embed if possible, with fallback link)

This is a NEW BUILD, not an iteration.

━━━━━━━━━━━━━━━━━━
CORE GOALS
━━━━━━━━━━━━━━━━━━

• Create a premium, calm, confidence-building fitness website
• Prioritize clarity, emotional safety, and motivation
• Avoid hype, influencer fitness tropes, and salesy language
• Position Claire as a confident coach and authority
• Emphasize long-term capability, independence, and embodied strength
• Be discoverable for ALL ways an ideal client might describe their problem

Visitors should feel:
→ Safe
→ Seen
→ Motivated

Core belief to lead with:
“You are capable of more than you think.”

━━━━━━━━━━━━━━━━━━
AUDIENCE
━━━━━━━━━━━━━━━━━━

• Women across life stages (including 60+)
• Neurodivergent women
• Women intimidated by gyms or unsure what to do
• Active women who want more than Pilates/Yoga
• Hikers, travelers, women training for real life
• Grandmothers focused on independence and longevity

━━━━━━━━━━━━━━━━━━
SITE STRUCTURE
━━━━━━━━━━━━━━━━━━

Pages to build:
• Home
• About
• Coaching / Program Overview + Application (combined)
• Blog / Writing (SEO + GEO focused)
• Contact

Navigation behavior:
• Blog appears only if posts exist
• Hidden otherwise
• Blog URLs remain indexable

Explicitly exclude:
• Ecommerce-style layouts
• Multiple offers
• Testimonials (for now)
• Sales funnels disguised as content

━━━━━━━━━━━━━━━━━━
DESIGN INSPIRATION
━━━━━━━━━━━━━━━━━━

• Girls Gone Strong — https://www.girlsgonestrong.com/
• Equinox (Pilates) — https://www.equinox.com/pilates
• ATX Pilates — https://www.atxpilates.com/about

Design principles:
• Calm authority
• Clear hierarchy
• Motion that supports comprehension
• Never overwhelming
• Never salesy

━━━━━━━━━━━━━━━━━━
DELIVERABLE
━━━━━━━━━━━━━━━━━━

Build a premium, accessible, mobile-first fitness website with strong SEO and GEO foundations that allows ideal clients to discover Claire Sersun Fitness no matter how they describe their problem — and feel confident applying when they arrive.

The site should feel like a grounded, intelligent coach walking beside someone who is ready to change.
```

</details>

### Step 4 — Refinement & Engineering Review (Claude)

After reviewing the initial output, I iterated with Claude to:

- Correct onboarding and application flow assumptions
- Resolve light/dark mode inconsistencies
- Improve CSS structure and scalability
- Add motion only when `prefers-reduced-motion` is off
- Review the project as a senior developer
- Ensure accessibility, SEO, and GEO best practices
- Prepare the project for GitHub Pages or Vercel deployment

### Step 5 — Deploy
Once the site met functional, visual, and accessibility standards, it was ready for deployment.

Time to upload to GitHub 🪩

---

## Closing Thoughts

AI is a powerful tool when used intentionally and responsibly.

This entire process took less than one day, compared to the one to two weeks it would typically take using a traditional workflow.

Here’s to continued exploration — and using tools thoughtfully.