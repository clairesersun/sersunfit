/**
 * ============================================
 * useTheme HOOK
 * ============================================
 *
 * Manages dark/light mode with persistence.
 *
 * FEATURES:
 * - Respects system preference (prefers-color-scheme)
 * - Persists user choice to localStorage
 * - Provides toggle function
 * - Returns merged theme object with active colors
 *
 * @module useTheme
 * ============================================
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { THEME, createTheme } from '../styles/theme';

/**
 * Hook for managing theme mode (dark/light)
 *
 * @returns {Object} Theme state and controls
 * @returns {boolean} returns.isDarkMode - Current mode state
 * @returns {Function} returns.toggleTheme - Toggle between modes
 * @returns {Object} returns.theme - Active theme object with colors
 *
 * @example
 * const { isDarkMode, toggleTheme, theme } = useTheme();
 *
 * <button onClick={toggleTheme}>
 *   {isDarkMode ? 'Light Mode' : 'Dark Mode'}
 * </button>
 * <div style={{ backgroundColor: theme.bg }}>...</div>
 */
const useTheme = () => {
  /**
   * Initialize dark mode state
   * Priority: localStorage > system preference > default (true)
   */
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark mode for SSR
  });

  /**
   * Persist theme choice to localStorage
   */
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  /**
   * Memoized theme object
   * Merges base theme with active color scheme
   */
  const theme = useMemo(() => createTheme(isDarkMode), [isDarkMode]);

  /**
   * Toggle between dark and light modes
   */
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return { isDarkMode, toggleTheme, theme };
};

export default useTheme;
