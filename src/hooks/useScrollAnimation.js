/**
 * ============================================
 * useScrollAnimation HOOK
 * ============================================
 *
 * Intersection Observer hook for scroll-triggered animations.
 * Returns ref and visibility state for elements entering viewport.
 *
 * FEATURES:
 * - Uses IntersectionObserver for performance
 * - Auto-disables for reduced motion / mobile
 * - One-shot trigger (doesn't re-hide on scroll out)
 * - Configurable threshold and root margin
 *
 * @module useScrollAnimation
 * ============================================
 */

import { useRef, useState, useEffect } from 'react';
import CONFIG from '../config/config';
import useReducedMotion from './useReducedMotion';
import useIsMobile from './useIsMobile';

/**
 * Hook for scroll-triggered reveal animations
 *
 * @param {Object} [options] - IntersectionObserver options
 * @param {number} [options.threshold] - Visibility threshold (0-1)
 * @param {string} [options.rootMargin] - Root margin for early/late trigger
 * @returns {Object} Ref and visibility state
 * @returns {React.RefObject} returns.ref - Ref to attach to target element
 * @returns {boolean} returns.isVisible - Whether element is visible
 *
 * @example
 * const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
 *
 * <div
 *   ref={ref}
 *   style={{
 *     opacity: isVisible ? 1 : 0,
 *     transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
 *   }}
 * >
 *   Content
 * </div>
 */
const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Skip animation setup if reduced motion or mobile
    // Immediately set visible to show content without animation
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

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion, isMobile, options.threshold, options.rootMargin]);

  return { ref, isVisible };
};

export default useScrollAnimation;
