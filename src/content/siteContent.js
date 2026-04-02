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
      { id: 'resources', label: 'Resources' },
      { id: 'contact', label: 'Contact' },
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
          description: 'You love movement but know you need strength training to support the life you want to live: hiking, traveling, playing with grandkids, staying independent.',
        },
        {
          title: "If you're neurodivergent",
          description: "Traditional fitness approaches haven't worked for your brain. You need structure that's flexible, accountability that's supportive, not punishing.",
        },
        {
          title: "If you're over 40",
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
          description: 'Structured, periodized training that meets you where you are and builds systematically. No random workouts. Everything has purpose and progression.',
        },
        {
          id: 'accountability',
          title: 'Real Accountability',
          description: 'Weekly check-ins and ongoing support that adapts to your life. Not pressure or guilt, but genuine partnership in your process.',
        },
      ],
    },
    program: {
      label: 'Capable Body Coaching',
      headline: '12 weeks to build your foundation',
      description: 'A comprehensive coaching experience designed to build lasting strength, sustainable habits, and the skills to continue progressing independently. You\'ll leave with tools, not dependency.',
      features: [
        'Personalized workout programming delivered via mobile app',
        'Nutritional guidance tailored to your goals and lifestyle',
        'Weekly check-ins to assess progress and adjust your program',
        'Access to private community of like-minded women',
        '24/7 text support for questions and accountability',
      ],
      cta: 'Apply for Coaching',
    },
    aboutPreview: {
      label: 'Your Coach',
      headline: "Hi, I'm Claire",
      description: "I'm an ACE Certified Personal Trainer with over a decade of movement education experience. My background spans dance, Pilates, yoga, and somatic practices, all of which inform how I approach strength training today.",
      additionalText: 'I believe everyone deserves to feel capable in their body. My work focuses on building that capability through progressive, sustainable training that honors where you are while challenging you to grow.',
      cta: 'More About Me',
    },
    finalCta: {
      headline: 'Ready to begin?',
      description: "The application is simple and takes about 5 minutes. It helps me understand where you are and what you're looking for. No commitment required.",
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
        "What sets my approach apart is the integration of somatic awareness with progressive strength training. I help you understand your body from the inside out, building the kind of body knowledge that stays with you long after our work together ends.",
        "I work primarily with women across all life stages, with particular expertise in supporting neurodivergent clients, women over 40, and anyone who's felt intimidated or excluded by traditional fitness spaces.",
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
          id: 'capability',
          title: 'Capability over aesthetics',
          description: "I believe the purpose of training is to make your life better, not to achieve a certain look. When you focus on what your body can do, the confidence follows naturally.",
        },
        {
          id: 'understanding',
          title: 'Understanding over obedience',
          description: "I don't want clients who depend on me forever. I want to teach you enough about your own body that you can make informed decisions about your training for the rest of your life.",
        },
        {
          id: 'sustainability',
          title: 'Sustainability over intensity',
          description: "The best program is the one you can stick with. I design training that fits into real life, not training that requires you to reorganize your entire existence around the gym.",
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
      headline: 'Capable Body Coaching',
      subheadline: 'Build strength, confidence, and tools you keep for life',
      description: 'A 12-week personalized coaching experience to deepen body awareness, expand capacity, and make progress feel sustainable and yours.',
    },
    includes: {
      headline: "What's included",
      items: [
        {
          id: 'programming',
          title: 'Personalized Programming',
          description: "Your workouts are designed specifically for you: your goals, your equipment access, your schedule, your body. Delivered through a mobile app that makes it easy to follow along and track progress.",
        },
        {
          id: 'nutrition',
          title: 'Nutritional Guidance',
          description: "Practical nutrition support that fits your lifestyle. No rigid meal plans or restriction, just clear guidance on fueling your body for the strength and energy you want.",
        },
        {
          id: 'checkin',
          title: 'Weekly Check-ins',
          description: "Regular check-ins to review your progress, adjust your programming, address questions, and make sure you\'re moving in the right direction. This is where the real coaching happens.",
        },
        {
          id: 'community',
          title: 'Community Access',
          description: "Join a private community of women working toward similar goals. Share wins, ask questions, and connect with others who understand what you\'re building.",
        },
        {
          id: 'support',
          title: 'Ongoing Support',
          description: "24/7 text access for questions, form checks, and accountability. When something comes up, you don\'t have to wait until your next check-in to get help.",
        }
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
          title: 'Build Your Foundation',
          description: "Over 12 weeks, you\'ll build strength, develop body awareness, and learn the skills to keep progressing independently. This is the beginning of your transformation, not the end.",
        },
      ],
    },
    cta: {
      headline: 'Ready to build your foundation?',
      description: "The application takes about 5 minutes. There\'s no commitment—it\'s just a chance for me to learn about you and see if we\'re a good fit.",
      note: 'Applications are reviewed within 48 hours.',
      buttonText: 'Apply for Capable Body Coaching',
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
        description: 'I share fitness insights and movement tips content on Instagram.',
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
   * Resources page content
   * Training guides, digital products, and helpful content
   */
  resources: {
    hero: {
      label: 'Resources',
      headline: 'Training guides and resources for strong, capable movement',
      description: 'Digital guides and resources to support your fitness journey, wherever you are, whatever your goals.',
    },
    featuredProducts: {
      headline: 'Training Guides',
      products: [
        {
          id: 'kilimanjaro',
          title: 'The Kilimanjaro Training Blueprint',
          description: 'A clear, strength-first training plan for hikers who want to feel capable on the mountain. Includes 6-month and 12-week options.',
          price: '$17',
          features: ['Strength training and Conditioning', 'Nutrition', 'Breathwork', 'Joint protection'],
          path: '/kilimanjaro-training-plan',
          cta: 'Learn More',
        },
      ],
    },
    emptyState: {
      message: 'New resources coming soon. In the meantime, follow along on',
      linkText: 'Instagram',
    },
  },

  /**
   * Kilimanjaro Training Blueprint Landing Page
   * SEO-optimized product page for digital training guide
   */
  kilimanjaro: {
    // SEO Meta
    meta: {
      title: 'Kilimanjaro Training Plan: 6-Month Strength-First Blueprint for Hikers | $17',
      description: 'Train for Kilimanjaro with confidence. Strength training, hiking conditioning, and breathwork designed for busy women. 6-month + 12-week plans. Instant PDF access.',
      keywords: 'kilimanjaro training plan, how to train for kilimanjaro, mount kilimanjaro training, kilimanjaro preparation guide, hiking training program',
    },

    // Hero Section
    hero: {
      label: 'Kilimanjaro Training Blueprint',
      headline: 'Train for Kilimanjaro without guesswork',
      description: 'A clear, strength-first training plan for hikers who want to feel capable on the mountain.',
      features: [
        'Strength training',
        'Hiking-specific conditioning',
        'Breathwork for calm pacing',
        '6-month plan plus 12-week option',
      ],
      price: '$17',
      priceNote: 'Instant access',
      cta: 'Get the Kilimanjaro Training Blueprint',
      ctaUrl: 'https://clairesersunfitness.kit.com/products/kilimanjaro-training-blueprint?step=checkout', // Replace with ConvertKit checkout URL
    },

    // Authority Section
    authority: {
      headline: 'Written by a certified strength coach',
      description: 'Who has climbed Kilimanjaro and trains hikers to prepare their bodies for long days, repetitive steps, and altitude stress.',
      emphasis: 'This is not a generic hiking plan.',
      subtext: 'It is a practical framework.',
    },

    // Problem Section
    problem: {
      headline: 'Most people train for Kilimanjaro by doing more cardio',
      intro: 'That often leads to:',
      issues: [
        'Sore knees on the descent',
        'Foot pain and fatigue',
        'Anxiety about pacing and altitude',
      ],
      solution: 'This guide shows you how to prepare your body to handle the demands of the climb.',
    },

    // What's Inside Section
    inside: {
      headline: "What's inside the Kilimanjaro Training Blueprint",
      intro: 'Everything is laid out clearly so you can train with confidence.',
      features: [
        {
          id: 'timeline',
          title: 'Step-by-step training timeline',
          description: 'Exactly how to structure strength and hiking each week for Kilimanjaro success.',
        },
        {
          id: 'joint',
          title: 'Joint-protective exercises',
          description: 'Movements that support knees, hips, and feet through repetitive climbing and descent.',
        },
        {
          id: 'endurance',
          title: 'Build endurance intelligently',
          description: 'How to increase stamina without burning out or overtaxing your body.',
        },
        {
          id: 'breathwork',
          title: 'Breathwork practices',
          description: 'Techniques to support calm pacing and manage altitude stress.',
        },
        {
          id: 'notrails',
          title: 'No trails? No problem',
          description: 'Options for training when you don\'t have access to hiking trails.',
        },
        {
          id: 'taper',
          title: 'Proper tapering protocol',
          description: 'How to rest strategically so you arrive on the mountain feeling fresh.',
        },
      ],
    },

    // Who It's For Section
    audience: {
      headline: 'Is this guide right for you?',
      intro: 'This guide is for you if:',
      criteria: [
        'You are climbing Kilimanjaro in the next 3–6 months',
        'You want a plan instead of guessing',
        'You care about joint health and long-term ability',
      ],
      note: 'Men can use this guide.',
      noteEmphasis: 'It is written with women in mind.',
    },

    // What It's Not Section
    notFor: {
      headline: 'What this is not',
      description: 'This is not an extreme challenge or a push-harder approach.',
      emphasis: 'It is about preparing intelligently.',
    },

    // Final CTA Section
    finalCta: {
      headline: 'The Kilimanjaro Training Blueprint',
      price: '$17',
      priceNote: 'Instant PDF plus follow-up support emails',
      cta: 'Get Instant Access',
      ctaUrl: 'https://clairesersunfitness.kit.com/products/kilimanjaro-training-blueprint?step=checkout', // Replace with ConvertKit checkout URL
    },

    // Breadcrumb for internal linking
    breadcrumb: {
      links: [
        { label: 'Home', path: '/' },
        { label: 'Resources', path: '/resources' },
        { label: 'Kilimanjaro Training Blueprint', path: '/kilimanjaro-training-plan' },
      ],
    },
  },

  /**
   * Corporate one-pager content
   * Hidden landing page for B2B prospects (not in navigation)
   */
  corporate: {
    hero: {
      label: 'Virtual · Async · Personalized',
      headline: '12-Week Executive Fitness Program',
      description:
        'A fully personalized 12-week coaching program designed for busy leaders — delivered through a mobile app, on your schedule, with weekly accountability built in.',
    },
    includes: {
      headline: "What's Included",
      items: [
        {
          id: 'programming',
          title: 'Personalized Workout Program',
          description: 'Custom programming delivered via mobile app — tailored to each person\'s goals, equipment, and schedule.',
        },
        {
          id: 'nutrition',
          title: 'Nutritional Coaching & Guidance',
          description: 'Practical nutrition support that fits real life. No rigid meal plans — just clear guidance for energy and performance.',
        },
        {
          id: 'checkin',
          title: 'Weekly 1:1 Accountability Check-ins',
          description: 'Regular check-ins to review progress, adjust programming, and keep momentum. This is where consistency is built.',
        },
        {
          id: 'support',
          title: '24/7 Async Text Support',
          description: 'Questions, form checks, and accountability — available anytime, no scheduling required.',
        },
        {
          id: 'onboarding',
          title: 'Full Onboarding',
          description: 'I handle everything. Your team just shows up. No coordination headaches for HR.',
        },
      ],
    },
    process: {
      headline: 'How It Works',
      steps: [
        {
          number: '1',
          title: 'Enroll',
          description: 'Company pays, employees get onboarded.',
        },
        {
          number: '2',
          title: 'Program',
          description: 'Custom plan built for each person.',
        },
        {
          number: '3',
          title: 'Results',
          description: 'Weekly check-ins keep everyone consistent.',
        },
      ],
    },
    pricing: {
      headline: 'Investment',
      tiers: [
        {
          name: 'Individual Executive',
          price: '$750',
          unit: '/month',
          paidInFull: '$2,000 paid in full',
          savings: 'saves $250',
          description: 'Best for CEOs, founders & senior leaders',
          featured: true,
        },
        {
          name: 'Team · 3–5 People',
          price: '$600',
          unit: '/person/mo',
          paidInFull: '$1,700/person paid in full',
          savings: null,
          description: 'Ideal for leadership teams',
          featured: false,
        },
        {
          name: 'Team · 6+ People',
          price: '$500',
          unit: '/person/mo',
          paidInFull: '$1,400/person paid in full',
          savings: null,
          description: 'Maximum value for larger teams',
          featured: false,
        },
      ],
    },
    testimonials: {
      headline: 'What Clients Are Saying',
      items: [
        {
          quote:
            "Claire's fitness program has been a transformative process! She curates a perfect balance between challenging workouts, recovering cool downs, and mindful breathing exercises. What I really love about this program is the flexibility.",
          author: 'Mimi Rosepink',
        },
        {
          quote:
            'Claire was incredibly supportive and motivating throughout my experience. Every question I had or adjustment I needed was met with immediate care and encouragement — which made the process feel truly personal rather than generic.',
          author: 'Angelika Rosario',
        },
        {
          quote:
            'The program helped me stay accountable through check-ins with Claire. This was a wonderful way for me to grow in my knowledge and understanding of fitness. Thank you for everything.',
          author: 'Olivia Faulkner',
        },
      ],
    },
    cta: {
      headline: "Ready to invest in your team's health?",
      buttonText: 'Book a Discovery Call',
      details: [
        'No scheduling headaches',
        'Fully async',
        'Turnkey for HR',
      ],
    },
    footer: {
      email: 'claire.sersun@gmail.com',
      title: 'Executive Fitness Coach · Claire Sersun',
    },
  },

  /**
   * Privacy Policy page content
   * Required for Pinterest API app approval
   * Not shown in navigation — direct link only (/privacy)
   */
  privacy: {
    hero: {
      label: 'Legal',
      headline: 'Privacy Policy',
      description: 'Effective Date: April 2, 2026',
    },
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          'Claire Sersun Fitness ("we," "us," or "our") operates the website clairesersunfitness.com. This Privacy Policy explains how we collect, use, and protect information when you visit our website or interact with our services, including our use of the Pinterest API.',
        ],
      },
      {
        title: 'Information We Collect',
        paragraphs: ['We may collect the following types of information:'],
        items: [
          'Information you provide: Name, email address, and other details submitted through coaching applications or contact forms.',
          'Pinterest data: When connected to the Pinterest API, we access Pinterest account information such as profile details, pins, and boards for internal business dashboard purposes only.',
          'Automatically collected data: Standard web analytics data such as browser type, device type, pages visited, and referring URLs.',
        ],
      },
      {
        title: 'How We Use Your Information',
        items: [
          'To provide and improve our coaching services',
          'To respond to inquiries and communications',
          'To manage our internal Pinterest business dashboard',
          'To analyze website usage and improve user experience',
        ],
      },
      {
        title: 'Pinterest API Usage',
        paragraphs: [
          'This application uses the Pinterest API for internal business purposes. Please note the following:',
        ],
        items: [
          'This application is not affiliated with, endorsed by, or sponsored by Pinterest.',
          'Pinterest data accessed through the API is used solely for internal business dashboard purposes and is not stored beyond the active session.',
          'We do not sell, share, or redistribute any data obtained from Pinterest to third parties.',
          'If the Pinterest connection is disconnected, all associated data is immediately removed from our system.',
        ],
      },
      {
        title: 'Cookies and Tracking',
        paragraphs: [
          'Our website may use cookies and similar technologies to improve your browsing experience. These may include essential cookies for site functionality and analytics cookies to understand site usage.',
          'You can control cookie preferences through your browser settings.',
        ],
      },
      {
        title: 'Data Security',
        paragraphs: [
          'We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of internet transmission is 100% secure.',
        ],
      },
      {
        title: 'Third-Party Services',
        paragraphs: [
          'Our website may contain links to third-party services (e.g., Instagram, Pinterest). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.',
        ],
      },
      {
        title: "Children's Privacy",
        paragraphs: [
          'Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13.',
        ],
      },
      {
        title: 'Your Rights',
        paragraphs: [
          'Depending on your location, you may have the right to:',
        ],
        items: [
          'Access the personal information we hold about you',
          'Request correction of inaccurate information',
          'Request deletion of your personal information',
          'Opt out of the sale or sharing of personal information (we do not sell your data)',
        ],
      },
      {
        title: 'California Residents (CCPA/CPRA)',
        paragraphs: [
          'You have the right to know what personal information is collected, request its deletion, and opt out of its sale. We do not sell personal information.',
        ],
      },
      {
        title: 'EU/EEA Residents (GDPR)',
        paragraphs: [
          'You have rights to access, rectification, erasure, data portability, and the right to object to processing. Contact us to exercise these rights.',
        ],
      },
      {
        title: 'Changes to This Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.',
        ],
      },
      {
        title: 'Contact Us',
        paragraphs: [
          'For questions about this Privacy Policy, please contact us at claire.sersun@gmail.com.',
        ],
      },
    ],
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
