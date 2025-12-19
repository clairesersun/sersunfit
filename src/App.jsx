/**
 * ============================================
 * CLAIRE SERSUN FITNESS - WEBSITE v3.0
 * ============================================
 * 
 * Enhanced with scroll-based animations and visual personality.
 * 
 * SCROLL EFFECTS (Desktop only, respects reduced-motion):
 * - Parallax backgrounds on hero sections
 * - Reveal animations as content enters viewport
 * - Text animations (words sliding up)
 * - Image zoom/scale on scroll
 * - Staggered card animations
 * - Smooth section transitions
 * 
 * ACCESSIBILITY:
 * - All animations disabled when prefers-reduced-motion is set
 * - Mobile devices get standard scrolling (no effects)
 * - All other WCAG 2.2 AA requirements maintained
 * 
 * ============================================
 */

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// ============================================
// SECTION 1: CONFIGURATION
// ============================================

const CONFIG = {
  urls: {
    application: 'https://clairesersunfitness.fillout.com/coaching',
    instagram: 'https://www.instagram.com/sersunfit/',
    site: 'https://clairesersunfitness.com',
  },
  meta: {
    siteName: 'Claire Sersun Fitness',
    tagline: 'You are capable of more than you think',
    author: 'Claire Sersun',
  },
  assets: {
    headshot: '/assets/headshot.webp',
  },
  // Animation configuration
  animation: {
    // Breakpoint below which animations are disabled (mobile)
    mobileBreakpoint: 768,
    // Intersection Observer threshold for triggering animations
    revealThreshold: 0.15,
    // Stagger delay between animated items (ms)
    staggerDelay: 100,
  },
};

// ============================================
// SECTION 2: CONTENT
// ============================================

const CONTENT = {
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
        { title: "If you're unsure where to start", description: "You want to get stronger but feel overwhelmed by conflicting fitness advice. You're not sure what exercises are right for your body or goals." },
        { title: 'If gyms feel intimidating', description: "You've tried gym memberships before but never felt confident navigating the equipment or building a program that actually works for you." },
        { title: 'If you want more than yoga or Pilates', description: 'You love movement but know you need strength training to support the life you want to live—hiking, traveling, playing with grandkids, staying independent.' },
        { title: "If you're neurodivergent", description: "Traditional fitness approaches haven't worked for your brain. You need structure that's flexible, accountability that's supportive, not punishing." },
        { title: "If you're over 60", description: 'You want to maintain your independence, prevent falls, stay active with the people you love, and feel capable in your own body for decades to come.' },
        { title: 'If you want lasting change', description: "You're tired of quick fixes and restrictive programs. You want to build strength and habits that become part of who you are, not another thing to maintain." },
      ],
    },
    transformation: {
      label: 'What Changes',
      headline: "This isn't about following a program.",
      headlineAccent: "It's about becoming capable.",
      benefits: [
        { title: "You'll trust your body again", description: "Instead of second-guessing every movement, you'll develop intuition about what your body needs. You'll know how to adapt when life gets busy, when you're traveling, when things change." },
        { title: "You'll move through life differently", description: 'Carrying groceries, climbing stairs, keeping up with kids or grandkids, exploring new places—these become easier, more natural. Your strength serves your actual life.' },
        { title: "You'll have skills, not just habits", description: "When our work together ends, you won't need me to maintain what you've built. You'll understand your body, your movement patterns, and how to keep progressing on your own." },
      ],
    },
    approach: {
      label: 'My Approach',
      headline: 'Strength that starts from within',
      description: 'I blend evidence-based strength training with somatic awareness—because lasting change happens when your body and mind work together, not against each other.',
      pillars: [
        { id: 'somatic', title: 'Somatic Foundation', description: 'We start with body awareness. Understanding how you move, where you hold tension, and how to work with your nervous system—not override it.' },
        { id: 'strength', title: 'Progressive Strength', description: 'Structured, periodized training that meets you where you are and builds systematically. No random workouts—everything has purpose and progression.' },
        { id: 'accountability', title: 'Real Accountability', description: 'Weekly check-ins and ongoing support that adapts to your life. Not pressure or guilt—genuine partnership in your process.' },
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

  about: {
    hero: { label: 'About', headline: 'Building strength that lasts' },
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
      certifications: ['ACE Certified Personal Trainer', '500-Hour Comprehensive Pilates Instructor', '200-Hour Registered Yoga Teacher', 'Moving For Life Certified Instructor', 'Certified BodyMind Dancing Teacher', 'Bridging The Gap Movement Method™', 'Somatic-based movement training', 'Specialized training for aging populations and cancer survivors'],
    },
    philosophy: {
      headline: 'My philosophy',
      principles: [
        { title: 'Capability over aesthetics', description: "I believe the purpose of training is to make your life better—not to achieve a certain look. When you focus on what your body can do, the confidence follows naturally." },
        { title: 'Understanding over obedience', description: "I don't want clients who depend on me forever. I want to teach you enough about your own body that you can make informed decisions about your training for the rest of your life." },
        { title: 'Sustainability over intensity', description: "The best program is the one you can stick with. I design training that fits into real life—not training that requires you to reorganize your entire existence around the gym." },
      ],
    },
    cta: { headline: 'Ready to work together?', description: "I'd love to learn about your goals and see if we're a good fit.", buttonText: 'Apply for Coaching' },
  },

  coaching: {
    hero: { label: 'Coaching', headline: 'Personalized strength coaching for lasting change', description: 'A 12-week coaching container designed to build your strength, deepen your body awareness, and give you the skills to continue progressing independently.' },
    includes: {
      headline: "What's included",
      items: [
        { title: 'Personalized Programming', description: "Your workouts are designed specifically for you—your goals, your equipment access, your schedule, your body. Delivered through a mobile app that makes it easy to follow along and track progress." },
        { title: 'Nutritional Guidance', description: "Practical nutrition support that fits your lifestyle. No rigid meal plans or restriction—just clear guidance on fueling your body for the strength and energy you want." },
        { title: 'Weekly Check-ins', description: "Regular check-ins to review your progress, adjust your programming, address questions, and make sure you're moving in the right direction. This is where the real coaching happens." },
        { title: 'Community Access', description: 'Join a private community of women working toward similar goals. Share wins, ask questions, and connect with others who understand what you\'re building.' },
        { title: 'Ongoing Support', description: "24/7 text access for questions, form checks, and accountability. When something comes up, you don't have to wait until your next check-in to get help." },
      ],
    },
    process: {
      headline: 'How it works',
      steps: [
        { number: '01', title: 'Apply', description: "Fill out a short application so I can understand your goals, history, and what you're looking for." },
        { number: '02', title: 'Connect', description: "If we seem like a good fit, we'll schedule a call to discuss your goals and make sure coaching is right for you." },
        { number: '03', title: 'Begin', description: "You'll get your personalized program through the app, along with supplemental workouts and guided meditations for the days you want to go a little deeper." },
        { number: '04', title: 'Transform', description: "Over 12 weeks, you'll build strength, develop body awareness, and gain the skills to continue progressing on your own." },
      ],
    },
    cta: { headline: 'Ready to start?', description: "The application takes about 5 minutes. There's no commitment—it's just a chance for me to learn about you.", note: 'Applications are reviewed within 48 hours.', buttonText: 'Apply for Coaching' },
    applicationEmbed: { headline: 'Application', description: 'Prefer to apply here? Fill out the form below, or', linkText: 'open it in a new tab' },
  },

  contact: {
    hero: { label: 'Contact', headline: "Let's connect", description: "Have questions about coaching or want to learn more? I'd love to hear from you." },
    sections: {
      coaching: { headline: 'For coaching inquiries', description: 'The best way to start is by filling out the application. It helps me understand your goals and situation so I can give you a thoughtful response.', cta: 'Apply for Coaching' },
      social: { headline: 'Follow along', description: 'I share fitness insights, movement tips, and behind-the-scenes content on Instagram.', handle: '@sersunfit' },
      general: { headline: 'General inquiries', description: 'For press, partnerships, or other inquiries, please reach out via Instagram direct message.' },
    },
    closing: { quote: 'The journey of a thousand miles begins with a single step.', message: 'Wherever you are, that first step is worth taking.' },
  },

  writing: {
    hero: { label: 'Writing', headline: 'Thoughts on movement, strength, and sustainable fitness', description: 'Essays and insights from my practice. New posts are published occasionally—quality over quantity.' },
    emptyState: { message: 'Writing coming soon. In the meantime, follow along on', linkText: 'Instagram' },
  },

  footer: {
    brand: { name: 'Claire Sersun Fitness', tagline: 'Online strength coaching for women ready to build lasting capability.' },
    navigation: { label: 'Navigate' },
    connect: { label: 'Connect', instagramLabel: 'Instagram' },
    copyright: '© {year} Claire Sersun Fitness. All rights reserved.',
  },
};

const BLOG_POSTS = [];

// ============================================
// SECTION 3: THEME
// ============================================

const THEME = {
  colors: {
    dark: {
      bg: '#1a1f1a', bgSecondary: '#242a24', bgTertiary: '#2d352d',
      text: '#e8e6e3', textSecondary: '#a8a5a0', textMuted: '#7a7872',
      primary: '#4a7c59', primaryHover: '#5a8c69', border: '#3a423a',
    },
    light: {
      bg: '#faf9f7', bgSecondary: '#f0eeeb', bgTertiary: '#e8e5e1',
      text: '#1a1f1a', textSecondary: '#5a5854', textMuted: '#8a8680',
      primary: '#3d6b4a', primaryHover: '#4d7b5a', border: '#d8d5d0',
    },
  },
  fonts: {
    display: '"Cormorant Garamond", Georgia, serif',
    body: '"Source Serif 4", Georgia, serif',
    ui: '"DM Sans", system-ui, sans-serif',
  },
  fontUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@400;500;600&family=Source+Serif+4:wght@400;500&display=swap',
  maxWidth: { narrow: '800px', wide: '1000px', full: '1200px' },
  transition: { fast: '0.15s ease', normal: '0.3s ease', slow: '0.5s ease' },
  // Updated: Added border radius
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '20px',
    full: '9999px',
  },
  focus: { width: '3px', offset: '3px' },
  touchTarget: '44px',
  zIndex: { nav: 1000 },
};

// ============================================
// SECTION 4: CUSTOM HOOKS
// ============================================

/**
 * useTheme - Manages dark/light mode
 */
const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const theme = useMemo(() => ({
    ...THEME,
    ...(isDarkMode ? THEME.colors.dark : THEME.colors.light),
  }), [isDarkMode]);

  const toggleTheme = useCallback(() => setIsDarkMode(prev => !prev), []);
  return { isDarkMode, toggleTheme, theme };
};

/**
 * useReducedMotion - Respects user's motion preference
 */
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return false;
  });
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return prefersReducedMotion;
};

/**
 * useIsMobile - Detects mobile viewport
 * Used to disable scroll animations on mobile
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < CONFIG.animation.mobileBreakpoint;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < CONFIG.animation.mobileBreakpoint);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

/**
 * useScrollAnimation - Intersection Observer for reveal animations
 * Returns ref to attach to element and whether it's visible
 */
const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Skip if reduced motion or mobile
    if (prefersReducedMotion || isMobile) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (animation plays once)
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold || CONFIG.animation.revealThreshold,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion, isMobile, options.threshold, options.rootMargin]);

  return { ref, isVisible };
};

/**
 * useParallax - Parallax scroll effect
 * Returns scroll-adjusted Y offset
 */
const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;

    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.innerHeight - rect.top;
        setOffset(scrolled * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, prefersReducedMotion, isMobile]);

  return { ref, offset };
};

/**
 * useSmoothScroll - Smooth scroll position tracking
 */
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return progress;
};

// ============================================
// SECTION 5: UTILITIES
// ============================================

const hasBlogContent = () => BLOG_POSTS && BLOG_POSTS.length > 0;
const getTransition = (duration, prefersReducedMotion) => prefersReducedMotion ? 'none' : duration;

// ============================================
// SECTION 6: ANIMATED COMPONENTS
// ============================================

/**
 * RevealOnScroll - Wrapper that animates children when they enter viewport
 * 
 * @param {string} animation - Animation type: 'fade', 'slideUp', 'slideLeft', 'slideRight', 'scale', 'blur'
 * @param {number} delay - Delay in ms before animation starts
 * @param {number} duration - Animation duration in seconds
 */
const RevealOnScroll = ({ 
  children, 
  animation = 'slideUp', 
  delay = 0, 
  duration = 0.8,
  threshold,
  className = '',
  style = {},
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Define animation states
  const animations = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, transform: 'translateY(60px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    slideDown: {
      hidden: { opacity: 0, transform: 'translateY(-60px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    slideLeft: {
      hidden: { opacity: 0, transform: 'translateX(60px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    slideRight: {
      hidden: { opacity: 0, transform: 'translateX(-60px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    scale: {
      hidden: { opacity: 0, transform: 'scale(0.9)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' },
      visible: { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' },
    },
    rotateIn: {
      hidden: { opacity: 0, transform: 'rotate(-5deg) translateY(30px)' },
      visible: { opacity: 1, transform: 'rotate(0deg) translateY(0)' },
    },
  };

  const anim = animations[animation] || animations.slideUp;
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(shouldAnimate ? (isVisible ? anim.visible : anim.hidden) : {}),
        transition: shouldAnimate ? `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms` : 'none',
        willChange: shouldAnimate ? 'transform, opacity' : 'auto',
      }}
    >
      {children}
    </div>
  );
};

/**
 * ParallaxSection - Section with parallax background effect
 */
const ParallaxSection = ({ children, speed = 0.3, style = {}, className = '' }) => {
  const { ref, offset } = useParallax(speed);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Parallax background layer */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: 0,
          right: 0,
          bottom: '-20%',
          transform: shouldAnimate ? `translateY(${offset}px)` : 'none',
          willChange: shouldAnimate ? 'transform' : 'auto',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Content layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

/**
 * AnimatedText - Text that reveals word by word or character by character
 */
const AnimatedText = ({ 
  children, 
  as: Component = 'span', 
  delay = 0,
  stagger = 50,
  animation = 'slideUp',
  style = {},
}) => {
  const { ref, isVisible } = useScrollAnimation();
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  if (!shouldAnimate || typeof children !== 'string') {
    return <Component style={style}>{children}</Component>;
  }

  const words = children.split(' ');

  return (
    <Component ref={ref} style={{ ...style, display: 'inline' }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: '0.3em',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
              opacity: isVisible ? 1 : 0,
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * stagger}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};

/**
 * MagneticButton - Button that subtly follows cursor on hover
 */
const MagneticButton = ({ children, style = {}, ...props }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || isMobile) return;
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? 'transform 0.3s ease' : 'none',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * ScrollProgress - Progress bar showing scroll position
 */
const ScrollProgress = ({ theme }) => {
  const progress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  if (prefersReducedMotion || isMobile) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress * 100}%`,
        height: '3px',
        backgroundColor: theme.primary,
        zIndex: 10001,
        transition: 'width 0.1s linear',
      }}
    />
  );
};

/**
 * ImageReveal - Image that zooms/reveals on scroll
 */
const ImageReveal = ({ src, alt, style = {} }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <div
      ref={ref}
      style={{
        overflow: 'hidden',
        borderRadius: THEME.borderRadius.md,
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: shouldAnimate
            ? isVisible ? 'scale(1)' : 'scale(1.2)'
            : 'scale(1)',
          opacity: shouldAnimate ? (isVisible ? 1 : 0) : 1,
          transition: shouldAnimate ? 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
        }}
        loading="lazy"
      />
    </div>
  );
};

/**
 * StaggeredList - Animates children with staggered delays
 */
const StaggeredList = ({ children, staggerDelay = 100, animation = 'slideUp' }) => {
  return React.Children.map(children, (child, index) => (
    <RevealOnScroll 
      animation={animation} 
      delay={index * staggerDelay}
      duration={0.6}
    >
      {child}
    </RevealOnScroll>
  ));
};

// ============================================
// SECTION 7: UI COMPONENTS
// ============================================

const OrganicShape = ({ variant = 1, style, isDarkMode, primaryColor }) => {
  const paths = {
    1: "M45.3,-52.9C59.9,-42.4,73.8,-28.5,78.1,-11.8C82.4,4.9,77.2,24.3,66.1,38.3C55,52.3,38.1,60.8,20.3,66.4C2.5,72,-16.2,74.6,-32.4,68.8C-48.6,63,-62.3,48.8,-70.4,31.6C-78.5,14.4,-81,-5.8,-75.2,-23.1C-69.4,-40.4,-55.3,-54.8,-39.5,-65C-23.7,-75.2,-6.2,-81.2,8.1,-90.5C22.4,-99.8,30.7,-63.4,45.3,-52.9Z",
    2: "M39.5,-47.1C52.9,-36.6,66.8,-25.8,71.7,-11.4C76.6,3,72.4,21,63.1,35.1C53.8,49.2,39.4,59.4,23.5,65.2C7.6,71,-9.8,72.4,-25.4,67.1C-41,61.8,-54.8,49.8,-63.8,34.5C-72.8,19.2,-77,0.6,-73.5,-16.2C-70,-33,-58.8,-48,-44.5,-58.3C-30.2,-68.6,-12.8,-74.2,1.4,-75.9C15.6,-77.6,26.1,-57.6,39.5,-47.1Z",
    3: "M44.1,-51.5C57.3,-41.9,68,-27.4,71.8,-11C75.6,5.4,72.4,23.7,62.8,37.5C53.2,51.3,37.2,60.6,20.1,66.1C3,71.6,-15.2,73.3,-30.8,67.3C-46.4,61.3,-59.4,47.6,-67.1,31.1C-74.8,14.6,-77.2,-4.7,-71.8,-21.4C-66.4,-38.1,-53.2,-52.2,-38.3,-61.4C-23.4,-70.6,-6.8,-74.9,6.8,-83C20.4,-91.1,30.9,-61.1,44.1,-51.5Z",
  };
  const { ref, offset } = useParallax(0.1);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <svg 
      ref={ref}
      viewBox="0 0 200 200" 
      style={{ 
        position: 'absolute', 
        opacity: isDarkMode ? 0.03 : 0.04, 
        pointerEvents: 'none',
        transform: shouldAnimate ? `translateY(${offset * 0.5}px) rotate(${offset * 0.02}deg)` : 'none',
        transition: 'transform 0.1s linear',
        ...style,
      }} 
      aria-hidden="true"
    >
      <path d={paths[variant]} transform="translate(100 100)" fill={primaryColor} />
    </svg>
  );
};

const ApproachIcons = {
  somatic: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke={color} strokeWidth="1.5" opacity="0.3"/>
      <circle cx="16" cy="16" r="8" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      <circle cx="16" cy="16" r="3" fill={color}/>
      <path d="M16 2v4M16 26v4M2 16h4M26 16h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
  strength: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M8 24c0-8 8-14 8-14s8 6 8 14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 26c0-5 4-9 4-9s4 4 4 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <circle cx="16" cy="8" r="3" stroke={color} strokeWidth="1.5"/>
      <line x1="16" y1="11" x2="16" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  accountability: ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 16c0-5.5 4.5-10 10-10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <path d="M26 16c0 5.5-4.5 10-10 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <circle cx="10" cy="10" r="3" stroke={color} strokeWidth="1.5"/>
      <circle cx="22" cy="22" r="3" stroke={color} strokeWidth="1.5"/>
      <path d="M12 12l8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3"/>
    </svg>
  ),
};

const Divider = ({ theme }) => (
  <RevealOnScroll animation="scale" duration={0.6}>
    <div style={{ width: '60px', height: '2px', backgroundColor: theme.primary, margin: '3rem 0', borderRadius: '1px' }} aria-hidden="true" />
  </RevealOnScroll>
);

/**
 * Button - Updated with border radius and magnetic effect
 */
const Button = ({ variant = 'primary', href, onClick, children, theme, prefersReducedMotion, ariaLabel }) => {
  const base = {
    fontFamily: THEME.fonts.ui,
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '1rem 2.5rem',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
    minHeight: THEME.touchTarget,
    transition: prefersReducedMotion ? 'none' : 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    border: 'none',
    borderRadius: THEME.borderRadius.lg, // Added border radius
    position: 'relative',
    overflow: 'hidden',
  };

  const styles = variant === 'primary'
    ? { ...base, backgroundColor: theme.primary, color: '#fff' }
    : { ...base, backgroundColor: 'transparent', color: theme.text, border: `1px solid ${theme.border}` };

  const content = (
    <>
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={styles} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <MagneticButton onClick={onClick} style={styles} aria-label={ariaLabel}>
      {content}
    </MagneticButton>
  );
};

const Card = ({ children, theme, style = {}, index = 0 }) => (
  <RevealOnScroll animation="slideUp" delay={index * CONFIG.animation.staggerDelay}>
    <div style={{
      backgroundColor: theme.bgSecondary,
      padding: '2.5rem',
      borderRadius: THEME.borderRadius.lg,
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      ...style,
    }}>
      {children}
    </div>
  </RevealOnScroll>
);

const Navigation = ({ currentPage, onNavigate, theme, isDarkMode, onToggleTheme, prefersReducedMotion }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visibleNavItems = CONTENT.navigation.items.filter(item => !item.requiresBlogContent || hasBlogContent());
  const handleNavClick = (pageId) => { onNavigate(pageId); setMobileMenuOpen(false); };
  const navLinkStyle = (isActive) => ({
    fontFamily: THEME.fonts.ui,
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: isActive ? theme.primary : theme.textSecondary,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 0',
    transition: prefersReducedMotion ? 'none' : 'color 0.3s ease',
    position: 'relative',
  });

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: THEME.zIndex.nav,
        backgroundColor: scrolled
          ? (isDarkMode ? 'rgba(26, 31, 26, 0.98)' : 'rgba(250, 249, 247, 0.98)')
          : (isDarkMode ? 'rgba(26, 31, 26, 0.8)' : 'rgba(250, 249, 247, 0.8)'),
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? `1px solid ${theme.border}` : '1px solid transparent',
        transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div style={{ maxWidth: THEME.maxWidth.full, margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          style={{
            fontFamily: THEME.fonts.display,
            fontSize: '1.25rem',
            fontWeight: 600,
            letterSpacing: '0.02em',
            color: theme.text,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            transition: prefersReducedMotion ? 'none' : 'transform 0.3s ease',
          }}
          onClick={() => handleNavClick('home')}
          aria-label={`${CONTENT.navigation.logo} - Home`}
        >
          {CONTENT.navigation.logo}
        </button>

        <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {visibleNavItems.map(item => (
            <button key={item.id} style={navLinkStyle(currentPage === item.id)} onClick={() => handleNavClick(item.id)} aria-current={currentPage === item.id ? 'page' : undefined}>
              {item.label}
            </button>
          ))}

          <button
            style={{
              background: 'none',
              border: `1px solid ${theme.border}`,
              borderRadius: THEME.borderRadius.full,
              width: '2.5rem',
              height: '2.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.textSecondary,
              transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
            }}
            onClick={onToggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
        </div>

        <button
          className="mobile-menu-btn"
          style={{ display: 'none', background: 'none', border: 'none', color: theme.text, cursor: 'pointer', padding: '0.5rem', minWidth: THEME.touchTarget, minHeight: THEME.touchTarget }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="mobile-menu" style={{ position: 'fixed', top: '65px', left: 0, right: 0, backgroundColor: theme.bg, borderBottom: `1px solid ${theme.border}`, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {visibleNavItems.map(item => (
            <button key={item.id} style={navLinkStyle(currentPage === item.id)} onClick={() => handleNavClick(item.id)}>{item.label}</button>
          ))}
          <div style={{ marginTop: '1rem', paddingTop: '1.5rem', borderTop: `1px solid ${theme.border}` }}>
            <button
              onClick={onToggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0.75rem 1rem', backgroundColor: theme.bgTertiary, border: 'none', borderRadius: THEME.borderRadius.md, cursor: 'pointer', minHeight: THEME.touchTarget }}
            >
              <span style={{ fontFamily: THEME.fonts.ui, fontSize: '0.875rem', fontWeight: 500, color: theme.textSecondary }}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
              <div style={{ width: '48px', height: '26px', backgroundColor: isDarkMode ? theme.primary : theme.border, borderRadius: '13px', padding: '2px', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '22px', height: '22px', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: isDarkMode ? 'translateX(22px)' : 'translateX(0)', transition: prefersReducedMotion ? 'none' : 'transform 0.3s ease', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                  {isDarkMode ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={theme.primary} strokeWidth="2.5" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ onNavigate, theme }) => {
  const year = new Date().getFullYear();
  const c = CONTENT.footer;
  return (
    <footer className="texture-overlay" style={{ backgroundColor: theme.bgSecondary, borderTop: `1px solid ${theme.border}`, padding: '4rem 1.5rem 2rem', position: 'relative' }}>
      <RevealOnScroll animation="fade">
        <div style={{ maxWidth: THEME.maxWidth.full, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <p style={{ fontFamily: THEME.fonts.display, fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: theme.text }}>{c.brand.name}</p>
            <p style={{ fontFamily: THEME.fonts.body, fontSize: '0.875rem', color: theme.textSecondary, lineHeight: 1.7 }}>{c.brand.tagline}</p>
          </div>
          <div>
            <p style={{ fontFamily: THEME.fonts.ui, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: theme.primary, marginBottom: '1rem' }}>{c.navigation.label}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {CONTENT.navigation.items.filter(item => !item.requiresBlogContent || hasBlogContent()).map(item => (
                <button key={item.id} style={{ fontFamily: THEME.fonts.ui, fontSize: '0.875rem', color: theme.textSecondary, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }} onClick={() => onNavigate(item.id)}>{item.label}</button>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: THEME.fonts.ui, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: theme.primary, marginBottom: '1rem' }}>{c.connect.label}</p>
            <a href={CONFIG.urls.instagram} target="_blank" rel="noopener noreferrer" style={{ fontFamily: THEME.fonts.ui, fontSize: '0.875rem', color: theme.textSecondary, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              {c.connect.instagramLabel}
            </a>
          </div>
        </div>
        <div style={{ maxWidth: THEME.maxWidth.full, margin: '3rem auto 0', paddingTop: '2rem', borderTop: `1px solid ${theme.border}`, textAlign: 'center' }}>
          <p style={{ fontFamily: THEME.fonts.body, fontSize: '0.75rem', color: theme.textMuted }}>{c.copyright.replace('{year}', year)}</p>
        </div>
      </RevealOnScroll>
    </footer>
  );
};

// ============================================
// SECTION 8: PAGES WITH SCROLL ANIMATIONS
// ============================================

const createStyles = (theme) => ({
  label: { fontFamily: THEME.fonts.ui, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: theme.primary, marginBottom: '1rem', display: 'block' },
  heroHeading: { fontFamily: THEME.fonts.display, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem', color: theme.text },
  h2: { fontFamily: THEME.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: '1.5rem', color: theme.text },
  h3: { fontFamily: THEME.fonts.display, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, lineHeight: 1.3, marginBottom: '1rem', color: theme.text },
  bodyLarge: { fontFamily: THEME.fonts.body, fontSize: '1.125rem', lineHeight: 1.8, color: theme.textSecondary },
  body: { fontFamily: THEME.fonts.body, fontSize: '1rem', lineHeight: 1.8, color: theme.textSecondary },
});

const HomePage = ({ theme, isDarkMode, prefersReducedMotion, onNavigate }) => {
  const s = createStyles(theme);
  const c = CONTENT.home;

  return (
    <main>
      {/* HERO - Full viewport with parallax */}
      <ParallaxSection
        speed={0.2}
        className="hero-gradient texture-overlay"
        style={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '8rem',
          paddingBottom: '5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        <OrganicShape variant={1} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '500px', height: '500px', top: '-10%', right: '-5%', transform: 'rotate(-15deg)' }} />
        <OrganicShape variant={2} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '300px', height: '300px', bottom: '10%', left: '-5%', transform: 'rotate(45deg)' }} />

        <div style={{ maxWidth: THEME.maxWidth.full, margin: '0 auto', width: '100%' }}>
          <RevealOnScroll animation="fade" delay={0}>
            <span style={s.label}>{c.hero.label}</span>
          </RevealOnScroll>

          <h1 style={s.heroHeading}>
            <AnimatedText delay={100} stagger={80}>{c.hero.headline}</AnimatedText>
            <br />
            <AnimatedText delay={400} stagger={80} style={{ color: theme.primary }}>{c.hero.headlineAccent}</AnimatedText>
          </h1>

          <RevealOnScroll animation="slideUp" delay={600}>
            <p style={{ ...s.bodyLarge, maxWidth: '600px', marginBottom: '2.5rem' }}>{c.hero.description}</p>
          </RevealOnScroll>

          <RevealOnScroll animation="slideUp" delay={800}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="primary" href={CONFIG.urls.application} theme={theme} prefersReducedMotion={prefersReducedMotion}>{c.hero.primaryCta}</Button>
              <Button variant="secondary" onClick={() => onNavigate('about')} theme={theme} prefersReducedMotion={prefersReducedMotion}>{c.hero.secondaryCta}</Button>
            </div>
          </RevealOnScroll>
        </div>


      </ParallaxSection>

      {/* AUDIENCE SECTION */}
      <section className="texture-overlay" style={{ width: '100%', backgroundColor: theme.bgSecondary, padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <OrganicShape variant={3} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '400px', height: '400px', top: '5%', right: '10%', transform: 'rotate(30deg)' }} />

        <div style={{ maxWidth: THEME.maxWidth.full, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <span style={s.label}>{c.audience.label}</span>
            <h2 style={s.h2}>{c.audience.headline}</h2>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {c.audience.items.map((item, i) => (
              <Card key={i} theme={theme} index={i}>
                <h3 style={{ ...s.h3, fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={s.body}>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION SECTION */}
      <section style={{ width: '100%', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <span style={s.label}>{c.transformation.label}</span>
          </RevealOnScroll>

          <RevealOnScroll animation="slideUp" delay={100}>
            <h2 style={s.h2}>
              {c.transformation.headline}<br />
              <span style={{ color: theme.primary }}>{c.transformation.headlineAccent}</span>
            </h2>
          </RevealOnScroll>

          <Divider theme={theme} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {c.transformation.benefits.map((b, i) => (
              <RevealOnScroll key={i} animation="slideLeft" delay={i * 150}>
                <h3 style={{ ...s.h3, color: theme.primary }}>{b.title}</h3>
                <p style={s.bodyLarge}>{b.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="texture-overlay" style={{ width: '100%', backgroundColor: theme.bgSecondary, padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <OrganicShape variant={1} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '350px', height: '350px', bottom: '0%', left: '5%', transform: 'rotate(-20deg)' }} />

        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <span style={s.label}>{c.approach.label}</span>
            <h2 style={s.h2}>{c.approach.headline}</h2>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.approach.description}</p>
          </RevealOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {c.approach.pillars.map((p, i) => {
              const Icon = ApproachIcons[p.id];
              return (
                <RevealOnScroll key={p.id} animation="slideRight" delay={i * 150}>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: THEME.borderRadius.full, backgroundColor: theme.primary + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {Icon && <Icon color={theme.primary} />}
                    </div>
                    <div style={{ flex: 1, minWidth: '250px' }}>
                      <h3 style={{ ...s.h3, fontSize: '1.25rem' }}>{p.title}</h3>
                      <p style={s.body}>{p.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section style={{ width: '100%', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <span style={s.label}>{c.program.label}</span>
            <h2 style={s.h2}>{c.program.headline}</h2>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.program.description}</p>
          </RevealOnScroll>

          <RevealOnScroll animation="scale" delay={200}>
            <div style={{ backgroundColor: theme.bgSecondary, padding: '2.5rem', borderLeft: `3px solid ${theme.primary}`, borderRadius: `0 ${THEME.borderRadius.lg} ${THEME.borderRadius.lg} 0` }}>
              <h3 style={{ ...s.h3, marginBottom: '1.5rem' }}>What's included:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {c.program.features.map((f, i) => (
                  <RevealOnScroll key={i} animation="slideLeft" delay={300 + i * 80}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={theme.primary} strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={s.body}>{f}</span>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="slideUp" delay={600}>
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Button variant="primary" href={CONFIG.urls.application} theme={theme} prefersReducedMotion={prefersReducedMotion}>{c.program.cta}</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="texture-overlay" style={{ width: '100%', backgroundColor: theme.bgSecondary, padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <OrganicShape variant={2} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '450px', height: '450px', top: '-15%', left: '60%', transform: 'rotate(60deg)' }} />

        <div style={{ maxWidth: THEME.maxWidth.wide, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <RevealOnScroll animation="slideRight">
              <span style={s.label}>{c.aboutPreview.label}</span>
              <h2 style={s.h2}>{c.aboutPreview.headline}</h2>
              <p style={{ ...s.bodyLarge, marginBottom: '1.5rem' }}>{c.aboutPreview.description}</p>
              <p style={{ ...s.body, marginBottom: '2rem' }}>{c.aboutPreview.additionalText}</p>
              <Button variant="secondary" onClick={() => onNavigate('about')} theme={theme} prefersReducedMotion={prefersReducedMotion}>{c.aboutPreview.cta}</Button>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="slideLeft" delay={200}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ImageReveal
                src={CONFIG.assets.headshot}
                alt="Claire Sersun, fitness coach"
                style={{ width: '100%', maxWidth: '350px', aspectRatio: '4/5' }}
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-glow" style={{ width: '100%', padding: '6rem 1.5rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="scale">
            <h2 style={s.h2}>{c.finalCta.headline}</h2>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.finalCta.description}</p>
            <Button variant="primary" href={CONFIG.urls.application} theme={theme} prefersReducedMotion={prefersReducedMotion}>{c.finalCta.cta}</Button>
          </RevealOnScroll>
        </div>
      </section>

      {/* CLOSING */}
      <section className="texture-overlay" style={{ backgroundColor: theme.bgSecondary, padding: '4rem 1.5rem', textAlign: 'center', position: 'relative' }}>
        <RevealOnScroll animation="blur">
          <p style={{ ...s.bodyLarge, maxWidth: '600px', margin: '0 auto', fontStyle: 'italic', color: theme.textMuted }}>{c.closing.message}</p>
        </RevealOnScroll>
      </section>
    </main>
  );
};

const AboutPage = ({ theme, isDarkMode, prefersReducedMotion }) => {
  const s = createStyles(theme);
  const c = CONTENT.about;

  return (
    <main>
      <ParallaxSection className="hero-gradient texture-overlay" style={{ width: '100%', paddingTop: '10rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <OrganicShape variant={1} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '400px', height: '400px', top: '-20%', right: '-10%', transform: 'rotate(25deg)' }} />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade"><span style={s.label}>{c.hero.label}</span></RevealOnScroll>
          <h1 style={s.heroHeading}><AnimatedText stagger={100}>{c.hero.headline}</AnimatedText></h1>
          <Divider theme={theme} />
        </div>
      </ParallaxSection>

      <section className="texture-overlay" style={{ width: '100%', backgroundColor: theme.bgSecondary, padding: '4rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <OrganicShape variant={3} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '350px', height: '350px', bottom: '10%', left: '-5%', transform: 'rotate(-30deg)' }} />
        <div style={{ maxWidth: THEME.maxWidth.wide, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <RevealOnScroll animation="slideRight">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ImageReveal src={CONFIG.assets.headshot} alt="Claire Sersun" style={{ width: '100%', maxWidth: '400px', aspectRatio: '4/5' }} />
            </div>
          </RevealOnScroll>
          <div>
            <RevealOnScroll animation="slideLeft" delay={200}>
              <h2 style={{ ...s.h2, marginTop: 0 }}>{c.bio.headline}</h2>
            </RevealOnScroll>
            {c.bio.paragraphs.map((p, i) => (
              <RevealOnScroll key={i} animation="slideUp" delay={300 + i * 100}>
                <p style={{ ...s.bodyLarge, marginBottom: '1.5rem' }}>{p}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: '100%', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp">
            <h2 style={s.h2}>{c.background.headline}</h2>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.background.description}</p>
            <h3 style={{ ...s.h3, marginTop: '2.5rem' }}>{c.background.certificationsHeadline}</h3>
          </RevealOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            {c.background.certifications.map((cert, i) => (
              <RevealOnScroll key={i} animation="slideLeft" delay={i * 60}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.primary, flexShrink: 0 }} aria-hidden="true" />
                  <span style={s.body}>{cert}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="texture-overlay" style={{ backgroundColor: theme.bgSecondary, padding: '4rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <OrganicShape variant={2} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '380px', height: '380px', top: '5%', right: '5%', transform: 'rotate(45deg)' }} />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp"><h2 style={s.h2}>{c.philosophy.headline}</h2></RevealOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {c.philosophy.principles.map((p, i) => (
              <RevealOnScroll key={i} animation="slideRight" delay={i * 150}>
                <h3 style={{ ...s.h3, color: theme.primary }}>{p.title}</h3>
                <p style={s.bodyLarge}>{p.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-glow" style={{ width: '100%', padding: '5rem 1.5rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="scale">
            <h2 style={s.h2}>{c.cta.headline}</h2>
            <p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.cta.description}</p>
            <Button variant="primary" href={CONFIG.urls.application} theme={theme} prefersReducedMotion={prefersReducedMotion}>{c.cta.buttonText}</Button>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
};

const CoachingPage = ({ theme, isDarkMode, prefersReducedMotion }) => {
  const s = createStyles(theme);
  const c = CONTENT.coaching;

  return (
    <main>
      <ParallaxSection className="hero-gradient texture-overlay" style={{ width: '100%', paddingTop: '10rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <OrganicShape variant={2} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '450px', height: '450px', top: '-15%', right: '-15%', transform: 'rotate(-10deg)' }} />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade"><span style={s.label}>{c.hero.label}</span></RevealOnScroll>
          <h1 style={s.heroHeading}><AnimatedText stagger={80}>{c.hero.headline}</AnimatedText></h1>
          <RevealOnScroll animation="slideUp" delay={400}><p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.hero.description}</p></RevealOnScroll>
          <Divider theme={theme} />
        </div>
      </ParallaxSection>

      <section className="texture-overlay" style={{ backgroundColor: theme.bgSecondary, padding: '4rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <OrganicShape variant={1} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '320px', height: '320px', bottom: '5%', left: '3%', transform: 'rotate(20deg)' }} />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp"><h2 style={s.h2}>{c.includes.headline}</h2></RevealOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '2rem' }}>
            {c.includes.items.map((item, i) => (
              <Card key={i} theme={theme} index={i} style={{ borderRadius: THEME.borderRadius.lg }}>
                <h3 style={{ ...s.h3, fontSize: '1.25rem' }}>{item.title}</h3>
                <p style={s.body}>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="slideUp"><h2 style={s.h2}>{c.process.headline}</h2></RevealOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
            {c.process.steps.map((step, i) => (
              <RevealOnScroll key={i} animation="slideRight" delay={i * 150}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: THEME.fonts.display, fontSize: '3rem', color: theme.primary, lineHeight: 1, minWidth: '70px', opacity: 0.5 }}>{step.number}</span>
                  <div>
                    <h3 style={{ ...s.h3, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p style={s.body}>{step.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-glow" style={{ width: '100%', padding: '5rem 1.5rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="scale">
            <h2 style={s.h2}>{c.cta.headline}</h2>
            <p style={{ ...s.bodyLarge, marginBottom: '1rem' }}>{c.cta.description}</p>
            <p style={{ ...s.body, marginBottom: '2.5rem', color: theme.textMuted }}>{c.cta.note}</p>
            <Button variant="primary" href={CONFIG.urls.application} theme={theme} prefersReducedMotion={prefersReducedMotion}>{c.cta.buttonText}</Button>
          </RevealOnScroll>
        </div>
      </section>

      <section className="texture-overlay" style={{ backgroundColor: theme.bgSecondary, padding: '4rem 1.5rem', position: 'relative' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto', textAlign: 'center' }}>
          <RevealOnScroll animation="slideUp">
            <h2 style={{ ...s.h2, marginBottom: '1rem' }}>{c.applicationEmbed.headline}</h2>
            <p style={{ ...s.body, marginBottom: '2rem' }}>{c.applicationEmbed.description}{' '}<a href={CONFIG.urls.application} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary, textDecoration: 'underline' }}>{c.applicationEmbed.linkText}</a>.</p>
            <div style={{ backgroundColor: theme.bg, borderRadius: THEME.borderRadius.lg, overflow: 'hidden', minHeight: '600px' }}>
              <iframe src={CONFIG.urls.application} title="Coaching Application" style={{ width: '100%', height: '600px', border: 'none' }} loading="lazy" />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
};

const ContactPage = ({ theme, isDarkMode, prefersReducedMotion }) => {
  const s = createStyles(theme);
  const c = CONTENT.contact;

  return (
    <main>
      <ParallaxSection className="hero-gradient texture-overlay" style={{ width: '100%', paddingTop: '10rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <OrganicShape variant={1} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '350px', height: '350px', top: '-10%', right: '-10%', transform: 'rotate(30deg)' }} />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade"><span style={s.label}>{c.hero.label}</span></RevealOnScroll>
          <h1 style={s.heroHeading}><AnimatedText stagger={100}>{c.hero.headline}</AnimatedText></h1>
          <RevealOnScroll animation="slideUp" delay={300}><p style={{ ...s.bodyLarge, marginBottom: '2.5rem' }}>{c.hero.description}</p></RevealOnScroll>
          <Divider theme={theme} />
        </div>
      </ParallaxSection>

      <section style={{ width: '100%', padding: '2rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <RevealOnScroll animation="slideUp">
              <h2 style={s.h3}>{c.sections.coaching.headline}</h2>
              <p style={{ ...s.body, marginBottom: '1.5rem' }}>{c.sections.coaching.description}</p>
              <Button variant="primary" href={CONFIG.urls.application} theme={theme} prefersReducedMotion={prefersReducedMotion}>{c.sections.coaching.cta}</Button>
            </RevealOnScroll>

            <RevealOnScroll animation="slideUp" delay={150}>
              <h2 style={s.h3}>{c.sections.social.headline}</h2>
              <p style={{ ...s.body, marginBottom: '1.5rem' }}>{c.sections.social.description}</p>
              <Button variant="secondary" href={CONFIG.urls.instagram} theme={theme} prefersReducedMotion={prefersReducedMotion}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                {c.sections.social.handle}
              </Button>
            </RevealOnScroll>

            <RevealOnScroll animation="slideUp" delay={300}>
              <h2 style={s.h3}>{c.sections.general.headline}</h2>
              <p style={s.body}>{c.sections.general.description}</p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="texture-overlay" style={{ backgroundColor: theme.bgSecondary, padding: '4rem 1.5rem', position: 'relative' }}>
        <RevealOnScroll animation="blur">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ ...s.bodyLarge, fontStyle: 'italic', color: theme.textMuted }}>"{c.closing.quote}"</p>
            <p style={{ ...s.body, marginTop: '1rem' }}>{c.closing.message}</p>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
};

const WritingPage = ({ theme, isDarkMode, prefersReducedMotion }) => {
  const s = createStyles(theme);
  const c = CONTENT.writing;

  return (
    <main>
      <ParallaxSection className="hero-gradient texture-overlay" style={{ width: '100%', paddingTop: '10rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <OrganicShape variant={3} isDarkMode={isDarkMode} primaryColor={theme.primary} style={{ width: '350px', height: '350px', top: '-10%', right: '-10%', transform: 'rotate(15deg)' }} />
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          <RevealOnScroll animation="fade"><span style={s.label}>{c.hero.label}</span></RevealOnScroll>
          <h1 style={s.heroHeading}><AnimatedText stagger={80}>{c.hero.headline}</AnimatedText></h1>
          <RevealOnScroll animation="slideUp" delay={400}><p style={s.bodyLarge}>{c.hero.description}</p></RevealOnScroll>
          <Divider theme={theme} />
        </div>
      </ParallaxSection>

      <section style={{ width: '100%', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: THEME.maxWidth.narrow, margin: '0 auto' }}>
          {!hasBlogContent() ? (
            <RevealOnScroll animation="fade">
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <p style={s.body}>{c.emptyState.message}{' '}<a href={CONFIG.urls.instagram} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>{c.emptyState.linkText}</a>.</p>
              </div>
            </RevealOnScroll>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {BLOG_POSTS.map((post, i) => (
                <Card key={post.id} theme={theme} index={i}>
                  <span style={{ ...s.label, color: theme.textMuted }}>{post.date}</span>
                  <h2 style={{ fontFamily: THEME.fonts.display, fontSize: '1.5rem', fontWeight: 500, color: theme.text, marginTop: '0.5rem', marginBottom: '1rem' }}>{post.title}</h2>
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

// ============================================
// SECTION 9: MAIN APP
// ============================================

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { isDarkMode, toggleTheme, theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const navigate = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [prefersReducedMotion]);

  const renderPage = () => {
    const props = { theme, isDarkMode, prefersReducedMotion, onNavigate: navigate };
    switch (currentPage) {
      case 'about': return <AboutPage {...props} />;
      case 'coaching': return <CoachingPage {...props} />;
      case 'writing': return <WritingPage {...props} />;
      case 'contact': return <ContactPage {...props} />;
      default: return <HomePage {...props} />;
    }
  };

  const shouldAnimate = !prefersReducedMotion && !isMobile;

  const globalStyles = `
    @import url('${THEME.fontUrl}');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: ${prefersReducedMotion ? 'auto' : 'smooth'}; }
    body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; overflow-x: hidden; }
    
    .texture-overlay { position: relative; }
    .texture-overlay::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: ${isDarkMode ? '0.015' : '0.025'}; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); z-index: 1; }
    .texture-overlay > * { position: relative; z-index: 2; }
    
    .hero-gradient { position: relative; }
    .hero-gradient::after { content: ''; position: absolute; top: 0; right: 0; width: 60%; height: 100%; background: radial-gradient(ellipse at 80% 20%, ${isDarkMode ? 'rgba(74, 124, 89, 0.08)' : 'rgba(74, 124, 89, 0.06)'} 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, ${isDarkMode ? 'rgba(107, 155, 122, 0.05)' : 'rgba(107, 155, 122, 0.04)'} 0%, transparent 40%); pointer-events: none; z-index: 0; }
    .hero-gradient > * { position: relative; z-index: 1; }
    
    .cta-glow { position: relative; }
    .cta-glow::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; height: 80%; background: radial-gradient(ellipse at center, ${isDarkMode ? 'rgba(74, 124, 89, 0.08)' : 'rgba(74, 124, 89, 0.06)'} 0%, transparent 60%); pointer-events: none; z-index: 0; }
    .cta-glow > * { position: relative; z-index: 1; }
    
    button:focus-visible, a:focus-visible { outline: ${THEME.focus.width} solid ${theme.primary}; outline-offset: ${THEME.focus.offset}; }
    :focus { outline: none; }
    :focus-visible { outline: ${THEME.focus.width} solid ${theme.primary}; outline-offset: ${THEME.focus.offset}; }
    
    button:hover, a:hover { opacity: 0.9; }
    img { max-width: 100%; height: auto; }
    
    @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }
    @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } .mobile-menu { display: none !important; } }
    
    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; } }
    
    .skip-link { position: absolute; top: -40px; left: 0; background: ${theme.primary}; color: white; padding: 8px 16px; z-index: 10001; text-decoration: none; font-family: ${THEME.fonts.ui}; border-radius: ${THEME.borderRadius.md}; }
    .skip-link:focus { top: 10px; left: 10px; }
    
    /* Scroll indicator animation */
    @keyframes scrollPulse {
      0%, 100% { opacity: 1; transform: scaleY(1); }
      50% { opacity: 0.5; transform: scaleY(0.8); }
    }
    
    /* Card hover effect - desktop only */
    ${shouldAnimate ? `
    @media (min-width: 769px) {
      [style*="backgroundColor"][style*="padding: 2.5rem"]:hover {
        transform: translateY(-4px) !important;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
      }
    }
    ` : ''}
  `;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: theme.bg,
      color: theme.text,
      fontFamily: THEME.fonts.body,
      transition: prefersReducedMotion ? 'none' : `background-color ${THEME.transition.slow}, color ${THEME.transition.slow}`,
      lineHeight: 1.7,
      overflowX: 'hidden',
    }}>
      <style>{globalStyles}</style>

      {/* Scroll progress bar - desktop only */}
      <ScrollProgress theme={theme} />

      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Navigation
        currentPage={currentPage}
        onNavigate={navigate}
        theme={theme}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        prefersReducedMotion={prefersReducedMotion}
      />

      <div id="main-content">{renderPage()}</div>

      <Footer onNavigate={navigate} theme={theme} />
    </div>
  );
}
