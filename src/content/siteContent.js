/**
 * ============================================
 * SITE CONTENT MODULE
 * ============================================
 *
 * All site copy and content in one place.
 * Organized by page/section for easy updates.
 *
 * CONTENT STRATEGY:
 * - Keep copy conversational but professional
 * - Emphasize capability over aesthetics
 * - Focus on transformation, not quick fixes
 * - Support neurodivergent and 60+ audiences explicitly
 *
 * ============================================
 */

const CONTENT = {
  /**
   * Navigation configuration
   * Items with requiresBlogContent: true are conditionally shown
   */
  navigation: {
    logo: 'Claire Sersun Fitness',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'coaching', label: 'Coaching' },
      { id: 'contact', label: 'Contact' },
      { id: 'writing', label: 'Writing', requiresBlogContent: true },
    ],
  },

  /**
   * Home page content
   * Main landing page with hero, audience, transformation, approach sections
   */
  home: {
    hero: {
      label: 'Online Fitness Coaching',
      headline: 'You are capable of',
      headlineAccent: 'more than you think',
      description: 'Personalized strength training and sustainable fitness coaching for women ready to build lasting capability, confidence, and independence in their bodies.',
      primaryCta: 'Apply for Coaching',
      secondaryCta: 'Learn More',
    },
    audience: {
      label: 'Who This Is For',
      headline: 'Coaching for women across all life stages',
      items: [
        {
          title: "If you're unsure where to start",
          description: "You want to get stronger but feel overwhelmed by conflicting fitness advice. You're not sure what exercises are right for your body or goals.",
        },
        {
          title: 'If gyms feel intimidating',
          description: "You've tried gym memberships before but never felt confident navigating the equipment or building a program that actually works for you.",
        },
        {
          title: 'If you want more than yoga or Pilates',
          description: 'You love movement but know you need strength training to support the life you want to live—hiking, traveling, playing with grandkids, staying independent.',
        },
        {
          title: "If you're neurodivergent",
          description: "Traditional fitness approaches haven't worked for your brain. You need structure that's flexible, accountability that's supportive, not punishing.",
        },
        {
          title: "If you're over 60",
          description: 'You want to maintain your independence, prevent falls, stay active with the people you love, and feel capable in your own body for decades to come.',
        },
        {
          title: 'If you want lasting change',
          description: "You're tired of quick fixes and restrictive programs. You want to build strength and habits that become part of who you are, not another thing to maintain.",
        },
      ],
    },
    transformation: {
      label: 'What Changes',
      headline: "This isn't about following a program.",
      headlineAccent: "It's about becoming capable.",
      benefits: [
        {
          title: "You'll trust your body again",
          description: "Instead of second-guessing every movement, you'll develop intuition about what your body needs. You'll know how to adapt when life gets busy, when you're traveling, when things change.",
        },
        {
          title: "You'll move through life differently",
          description: 'Carrying groceries, climbing stairs, keeping up with kids or grandkids, exploring new places—these become easier, more natural. Your strength serves your actual life.',
        },
        {
          title: "You'll have skills, not just habits",
          description: "When our work together ends, you won't need me to maintain what you've built. You'll understand your body, your movement patterns, and how to keep progressing on your own.",
        },
      ],
    },
    approach: {
      label: 'My Approach',
      headline: 'Strength that starts from within',
      description: 'I blend evidence-based strength training with somatic awareness—because lasting change happens when your body and mind work together, not against each other.',
      pillars: [
        {
          id: 'somatic',
          title: 'Somatic Foundation',
          description: 'We start with body awareness. Understanding how you move, where you hold tension, and how to work with your nervous system—not override it.',
        },
        {
          id: 'strength',
          title: 'Progressive Strength',
          description: 'Structured, periodized training that meets you where you are and builds systematically. No random workouts—everything has purpose and progression.',
        },
        {
          id: 'accountability',
          title: 'Real Accountability',
          description: 'Weekly check-ins and ongoing support that adapts to your life. Not pressure or guilt—genuine partnership in your process.',
        },
      ],
    },
    program: {
      label: 'The Program',
      headline: '12 weeks of guided transformation',
      description: 'A comprehensive coaching container designed to build lasting strength, sustainable habits, and the knowledge to continue progressing independently.',
      features: [
        'Personalized workout programming delivered via mobile app',
        'Nutritional guidance tailored to your goals and lifestyle',
        'Weekly check-ins to assess progress and adjust your program',
        'Access to private community of like-minded women',
        '24/7 text support for questions and accountability',
        'Movement education so you understand the "why"',
      ],
      cta: 'Apply for Coaching',
    },
    aboutPreview: {
      label: 'Your Coach',
      headline: "Hi, I'm Claire",
      description: "I'm an ACE Certified Personal Trainer with over a decade of movement education experience. My background spans dance, Pilates, yoga, and somatic practices—all of which inform how I approach strength training today.",
      additionalText: 'I believe everyone deserves to feel capable in their body. My work focuses on building that capability through progressive, sustainable training that honors where you are while challenging you to grow.',
      cta: 'More About Me',
    },
    finalCta: {
      headline: 'Ready to begin?',
      description: "The application is simple and takes about 5 minutes. It helps me understand where you are and what you're looking for—no commitment required.",
      cta: 'Apply for Coaching',
    },
    closing: {
      message: "Wherever you are in your fitness journey, know this: you don't have to figure it out alone, and you don't have to be ready to be perfect. You just have to be willing to start.",
    },
  },

  /**
   * About page content
   * Bio, background, certifications, and coaching philosophy
   */
  about: {
    hero: {
      label: 'About',
      headline: 'Building strength that lasts',
    },
    bio: {
      headline: "Hi, I'm Claire",
      paragraphs: [
        "I've spent over a decade studying how bodies move, adapt, and grow stronger. My path started in dance and kinesiology, expanded through Pilates and yoga certification, and ultimately led me to evidence-based strength training.",
        "What sets my approach apart is the integration of somatic awareness with progressive strength training. I don't just tell you what exercises to do—I help you understand your body from the inside out, building the kind of body knowledge that stays with you long after our work together ends.",
        "I work primarily with women across all life stages, with particular expertise in supporting neurodivergent clients, women over 60, and anyone who's felt intimidated or excluded by traditional fitness spaces.",
      ],
    },
    background: {
      headline: 'My background',
      description: 'My training blends academic depth with practical application. I hold degrees in both Dance/Kinesiology and Mass Communication (Web Design), bringing a unique perspective to how movement is taught and communicated.',
      certificationsHeadline: 'Certifications & Training',
      certifications: [
        'ACE Certified Personal Trainer',
        '500-Hour Comprehensive Pilates Instructor',
        '200-Hour Registered Yoga Teacher',
        'Moving For Life Certified Instructor',
        'Certified BodyMind Dancing Teacher',
        'Bridging The Gap Movement Method™',
        'Somatic-based movement training',
        'Specialized training for aging populations and cancer survivors',
      ],
    },
    philosophy: {
      headline: 'My philosophy',
      principles: [
        {
          title: 'Capability over aesthetics',
          description: "I believe the purpose of training is to make your life better—not to achieve a certain look. When you focus on what your body can do, the confidence follows naturally.",
        },
        {
          title: 'Understanding over obedience',
          description: "I don't want clients who depend on me forever. I want to teach you enough about your own body that you can make informed decisions about your training for the rest of your life.",
        },
        {
          title: 'Sustainability over intensity',
          description: "The best program is the one you can stick with. I design training that fits into real life—not training that requires you to reorganize your entire existence around the gym.",
        },
      ],
    },
    cta: {
      headline: 'Ready to work together?',
      description: "I'd love to learn about your goals and see if we're a good fit.",
      buttonText: 'Apply for Coaching',
    },
  },

  /**
   * Coaching page content
   * Program details, process, and application embed
   */
  coaching: {
    hero: {
      label: 'Coaching',
      headline: 'Personalized strength coaching for lasting change',
      description: 'A 12-week coaching container designed to build your strength, deepen your body awareness, and give you the skills to continue progressing independently.',
    },
    includes: {
      headline: "What's included",
      items: [
        {
          title: 'Personalized Programming',
          description: "Your workouts are designed specifically for you—your goals, your equipment access, your schedule, your body. Delivered through a mobile app that makes it easy to follow along and track progress.",
        },
        {
          title: 'Nutritional Guidance',
          description: "Practical nutrition support that fits your lifestyle. No rigid meal plans or restriction—just clear guidance on fueling your body for the strength and energy you want.",
        },
        {
          title: 'Weekly Check-ins',
          description: "Regular check-ins to review your progress, adjust your programming, address questions, and make sure you're moving in the right direction. This is where the real coaching happens.",
        },
        {
          title: 'Community Access',
          description: "Join a private community of women working toward similar goals. Share wins, ask questions, and connect with others who understand what you're building.",
        },
        {
          title: 'Ongoing Support',
          description: "24/7 text access for questions, form checks, and accountability. When something comes up, you don't have to wait until your next check-in to get help.",
        },
      ],
    },
    process: {
      headline: 'How it works',
      steps: [
        {
          number: '01',
          title: 'Apply',
          description: "Fill out a short application so I can understand your goals, history, and what you're looking for.",
        },
        {
          number: '02',
          title: 'Connect',
          description: "If we seem like a good fit, we'll schedule a call to discuss your goals and make sure coaching is right for you.",
        },
        {
          number: '03',
          title: 'Begin',
          description: "You'll get your personalized program through the app, along with supplemental workouts and guided meditations for the days you want to go a little deeper.",
        },
        {
          number: '04',
          title: 'Transform',
          description: "Over 12 weeks, you'll build strength, develop body awareness, and gain the skills to continue progressing on your own.",
        },
      ],
    },
    cta: {
      headline: 'Ready to start?',
      description: "The application takes about 5 minutes. There's no commitment—it's just a chance for me to learn about you.",
      note: 'Applications are reviewed within 48 hours.',
      buttonText: 'Apply for Coaching',
    },
    applicationEmbed: {
      headline: 'Application',
      description: 'Prefer to apply here? Fill out the form below, or',
      linkText: 'open it in a new tab',
    },
  },

  /**
   * Contact page content
   * Contact methods and closing message
   */
  contact: {
    hero: {
      label: 'Contact',
      headline: "Let's connect",
      description: "Have questions about coaching or want to learn more? I'd love to hear from you.",
    },
    sections: {
      coaching: {
        headline: 'For coaching inquiries',
        description: 'The best way to start is by filling out the application. It helps me understand your goals and situation so I can give you a thoughtful response.',
        cta: 'Apply for Coaching',
      },
      social: {
        headline: 'Follow along',
        description: 'I share fitness insights, movement tips, and behind-the-scenes content on Instagram.',
        handle: '@sersunfit',
      },
      general: {
        headline: 'General inquiries',
        description: 'For press, partnerships, or other inquiries, please reach out via Instagram direct message.',
      },
    },
    closing: {
      quote: 'The journey of a thousand miles begins with a single step.',
      message: 'Wherever you are, that first step is worth taking.',
    },
  },

  /**
   * Writing/Blog page content
   * Hero and empty state messaging
   */
  writing: {
    hero: {
      label: 'Writing',
      headline: 'Thoughts on movement, strength, and sustainable fitness',
      description: 'Essays and insights from my practice. New posts are published occasionally—quality over quantity.',
    },
    emptyState: {
      message: 'Writing coming soon. In the meantime, follow along on',
      linkText: 'Instagram',
    },
  },

  /**
   * Footer content
   * Brand info, navigation, and social links
   */
  footer: {
    brand: {
      name: 'Claire Sersun Fitness',
      tagline: 'Online strength coaching for women ready to build lasting capability.',
    },
    navigation: {
      label: 'Navigate',
    },
    connect: {
      label: 'Connect',
      instagramLabel: 'Instagram',
    },
    copyright: '© {year} Claire Sersun Fitness. All rights reserved.',
  },
};

export default CONTENT;
