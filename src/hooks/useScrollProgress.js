/**
 * ============================================
 * useScrollProgress HOOK
 * ============================================
 *
 * Tracks overall page scroll progress (0 to 1).
 * Used for scroll progress indicators.
 *
 * CALCULATION:
 * progress = scrollTop / (documentHeight - viewportHeight)
 *
 * @module useScrollProgress
 * ============================================
 */

import { useState, useEffect } from 'react';

/**
 * Hook to track page scroll progress
 *
 * @returns {number} Progress value from 0 (top) to 1 (bottom)
 *
 * @example
 * const progress = useScrollProgress();
 *
 * <div style={{ width: `${progress * 100}%` }}>
 *   Progress bar
 * </div>
 */
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Prevent division by zero
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    // Passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
};

export default useScrollProgress;
