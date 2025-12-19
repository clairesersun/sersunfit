/**
 * ============================================
 * useParallax HOOK
 * ============================================
 *
 * Parallax scroll effect hook.
 * Calculates Y offset based on scroll position relative to element.
 *
 * HOW IT WORKS:
 * - Tracks element position relative to viewport
 * - Calculates scroll offset as element enters/exits view
 * - Applies speed multiplier for depth effect
 *
 * PERFORMANCE:
 * - Uses passive scroll listener
 * - Auto-disables for reduced motion / mobile
 *
 * @module useParallax
 * ============================================
 */

import { useRef, useState, useEffect } from 'react';
import useReducedMotion from './useReducedMotion';
import useIsMobile from './useIsMobile';

/**
 * Hook for parallax scroll effects
 *
 * @param {number} [speed=0.5] - Parallax speed multiplier (0-1)
 * @returns {Object} Ref and offset value
 * @returns {React.RefObject} returns.ref - Ref to attach to container element
 * @returns {number} returns.offset - Current Y offset in pixels
 *
 * @example
 * const { ref, offset } = useParallax(0.3);
 *
 * <div ref={ref}>
 *   <div style={{ transform: `translateY(${offset}px)` }}>
 *     Parallax content
 *   </div>
 * </div>
 */
const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Skip parallax effect if reduced motion or mobile
    if (prefersReducedMotion || isMobile) {
      return;
    }

    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Calculate how far the element has scrolled into view
        const scrolled = window.innerHeight - rect.top;
        setOffset(scrolled * speed);
      }
    };

    // Passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, prefersReducedMotion, isMobile]);

  return { ref, offset };
};

export default useParallax;
