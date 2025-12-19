/**
 * ============================================
 * useIsMobile HOOK
 * ============================================
 *
 * Detects mobile viewport based on width threshold.
 * Used to disable scroll animations on mobile devices.
 *
 * WHY DISABLE ON MOBILE:
 * - Performance: Scroll listeners are expensive on mobile
 * - UX: Scroll animations can feel janky on touch devices
 * - Battery: Reduces CPU usage on mobile devices
 *
 * @module useIsMobile
 * ============================================
 */

import { useState, useEffect } from 'react';
import CONFIG from '../config/config';

/**
 * Hook to detect mobile viewport
 *
 * @param {number} [breakpoint] - Custom breakpoint (default from CONFIG)
 * @returns {boolean} True if viewport is below mobile breakpoint
 *
 * @example
 * const isMobile = useIsMobile();
 *
 * // Disable animation on mobile
 * const shouldAnimate = !isMobile && !prefersReducedMotion;
 */
const useIsMobile = (breakpoint = CONFIG.animation.mobileBreakpoint) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < breakpoint;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
