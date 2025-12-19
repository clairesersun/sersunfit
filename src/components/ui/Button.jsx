/**
 * ============================================
 * Button COMPONENT
 * ============================================
 *
 * Primary and secondary button variants with magnetic hover effect.
 * Supports both link and button behaviors.
 *
 * ACCESSIBILITY:
 * - Minimum 44px touch target (WCAG 2.2)
 * - Supports aria-label for icon-only variants
 * - Magnetic effect disabled for reduced motion
 *
 * @module Button
 * ============================================
 */

import React, { useRef, useState } from 'react';
import { THEME } from '../../styles/theme';
import useReducedMotion from '../../hooks/useReducedMotion';
import useIsMobile from '../../hooks/useIsMobile';

/**
 * MagneticButton - Internal button with cursor-following effect
 * The button slightly moves toward the cursor position on hover.
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
 * Button - Styled button/link component
 *
 * Props:
 * @param {'primary'|'secondary'} [variant='primary'] - Button style variant
 * @param {string} [href] - If provided, renders as anchor tag
 * @param {Function} [onClick] - Click handler (for button variant)
 * @param {React.ReactNode} children - Button content
 * @param {Object} theme - Active theme object
 * @param {boolean} prefersReducedMotion - User's motion preference
 * @param {string} [ariaLabel] - Accessible label for button
 *
 * @example
 * // Primary button
 * <Button
 *   variant="primary"
 *   href="https://example.com"
 *   theme={theme}
 *   prefersReducedMotion={prefersReducedMotion}
 * >
 *   Apply Now
 * </Button>
 *
 * // Secondary button with click handler
 * <Button
 *   variant="secondary"
 *   onClick={() => navigate('about')}
 *   theme={theme}
 *   prefersReducedMotion={prefersReducedMotion}
 * >
 *   Learn More
 * </Button>
 */
const Button = ({
  variant = 'primary',
  href,
  onClick,
  children,
  theme,
  prefersReducedMotion,
  ariaLabel,
}) => {
  const baseStyles = {
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
    borderRadius: THEME.borderRadius.lg,
    position: 'relative',
    overflow: 'hidden',
  };

  const variantStyles = variant === 'primary'
    ? {
        ...baseStyles,
        backgroundColor: theme.primary,
        color: '#fff',
      }
    : {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: theme.text,
        border: `1px solid ${theme.border}`,
      };

  const content = (
    <span style={{ position: 'relative', zIndex: 1 }}>
      {children}
    </span>
  );

  // Render as anchor for external links
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={variantStyles}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  // Render as magnetic button for click handlers
  return (
    <MagneticButton
      onClick={onClick}
      style={variantStyles}
      aria-label={ariaLabel}
    >
      {content}
    </MagneticButton>
  );
};

export default Button;
