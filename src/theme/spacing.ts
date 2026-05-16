/**
 * ZAI UI Kit - Spacing System
 * Consistent spacing scale based on 4px units
 *
 * @deprecated Use the token system instead.
 *   Import TOKEN / tv from '@zai/ui-kit/tokens' and use CSS custom properties.
 *   Fibonacci-based spacing tokens are defined in skins/dark-zai.css etc.
 *   This module is kept for backward compatibility and will be removed in v2.
 */

export const spacing = {
  // Base scale (rem units)
  0: '0',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
} as const

// Component-specific spacing presets
export const componentSpacing = {
  // Card padding
  card: {
    sm: spacing[3],
    md: spacing[4],
    lg: spacing[6],
  },

  // Section gaps
  section: {
    sm: spacing[4],
    md: spacing[6],
    lg: spacing[8],
  },

  // Element gaps (between related items)
  element: {
    xs: spacing[1],
    sm: spacing[2],
    md: spacing[3],
    lg: spacing[4],
  },

  // Input/button padding
  input: {
    sm: `${spacing[1.5]} ${spacing[3]}`,
    md: `${spacing[2]} ${spacing[4]}`,
    lg: `${spacing[3]} ${spacing[5]}`,
  },
} as const

// Border radius scale
export const radius = {
  none: '0',
  sm: '0.125rem',   // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const

// Shadows (dark theme optimized)
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.5), 0 1px 2px -1px rgba(0, 0, 0, 0.5)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.5)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.5)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
  glow: '0 0 15px rgba(59, 130, 246, 0.3)',
} as const

// Z-index scale
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const

export type SpacingKey = keyof typeof spacing
export type RadiusKey = keyof typeof radius

export default spacing
