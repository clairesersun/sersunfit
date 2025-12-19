/**
 * ============================================
 * Button COMPONENT
 * ============================================
 *
 * Primary and secondary button variants with magnetic hover effect.
 * Supports both link and button behaviors.
 * Uses BEM methodology for styling.
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
import useReducedMotion from '../../hooks/useReducedMotion';
import useIsMobile from '../../hooks/useIsMobile';

/**
 * MagneticButton - Internal button with cursor-following effect
 * The button slightly moves toward the cursor position on hover.
 */
const MagneticButton = ({ children, className, ...props }) => {
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
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
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
 * @param {string} [ariaLabel] - Accessible label for button
 *
 * @example
 * // Primary button
 * <Button variant="primary" href="https://example.com">
 *   Apply Now
 * </Button>
 *
 * // Secondary button with click handler
 * <Button variant="secondary" onClick={() => navigate('about')}>
 *   Learn More
 * </Button>
 */
const Button = ({
  variant = 'primary',
  href,
  onClick,
  children,
  ariaLabel,
}) => {
  const className = `btn btn--${variant}`;

  const content = (
    <span className="btn__content">
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
        className={className}
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
      className={className}
      aria-label={ariaLabel}
    >
      {content}
    </MagneticButton>
  );
};

export default Button;
