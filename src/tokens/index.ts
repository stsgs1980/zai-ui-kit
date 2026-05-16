/**
 * ZAI UI Kit — Token System
 * Golden ratio (phi) + Fibonacci based design tokens
 *
 * Components use var(--zai-*) — values come from skins
 * Token NAMES are constants here, VALUES live in skin CSS files
 */

// ── Token name constants ────────────────────────────────────
// These are the ONLY source of truth for token names.
// Components import from here, never hardcode var() strings.

export const TOKEN = {
  // ── Colors ──────────────────────────────────────────────
  // Neutral scale (5-step, project-agnostic)
  COLOR_NEUTRAL_BASE: '--zai-color-neutral-base',
  COLOR_NEUTRAL_V1: '--zai-color-neutral-v1',
  COLOR_NEUTRAL_V2: '--zai-color-neutral-v2',
  COLOR_NEUTRAL_V3: '--zai-color-neutral-v3',
  COLOR_NEUTRAL_V4: '--zai-color-neutral-v4',

  // Semantic colors
  COLOR_TEXT_PRIMARY: '--zai-color-text-primary',
  COLOR_TEXT_SECONDARY: '--zai-color-text-secondary',
  COLOR_TEXT_MUTED: '--zai-color-text-muted',
  COLOR_TEXT_DISABLED: '--zai-color-text-disabled',
  COLOR_TEXT_INVERSE: '--zai-color-text-inverse',

  COLOR_BG_PRIMARY: '--zai-color-bg-primary',
  COLOR_BG_SECONDARY: '--zai-color-bg-secondary',
  COLOR_BG_TERTIARY: '--zai-color-bg-tertiary',
  COLOR_BG_CARD: '--zai-color-bg-card',
  COLOR_BG_ELEVATED: '--zai-color-bg-elevated',
  COLOR_BG_SURFACE: '--zai-color-bg-surface',
  COLOR_BG_OVERLAY: '--zai-color-bg-overlay',

  COLOR_BORDER_DEFAULT: '--zai-color-border-default',
  COLOR_BORDER_MUTED: '--zai-color-border-muted',
  COLOR_BORDER_SUBTLE: '--zai-color-border-subtle',
  COLOR_BORDER_FOCUS: '--zai-color-border-focus',

  COLOR_STATUS_ONLINE: '--zai-color-status-online',
  COLOR_STATUS_OFFLINE: '--zai-color-status-offline',
  COLOR_STATUS_WARNING: '--zai-color-status-warning',
  COLOR_STATUS_ERROR: '--zai-color-status-error',
  COLOR_STATUS_SUCCESS: '--zai-color-status-success',
  COLOR_STATUS_INFO: '--zai-color-status-info',

  COLOR_ACCENT: '--zai-color-accent',
  COLOR_ACCENT_MUTED: '--zai-color-accent-muted',

  // ── Fibonacci Spacing ───────────────────────────────────
  // Based on Fibonacci * 4px base unit
  // Fib: 1, 1, 2, 3, 5, 8, 13, 21, 34
  // px:  4, 4, 8, 12, 20, 32, 52, 84, 136
  // Practical scale (clamped):
  SPACE_0: '--zai-space-0',       // 0
  SPACE_1: '--zai-space-1',       // Fib(1) = 4px
  SPACE_2: '--zai-space-2',       // Fib(2) = 8px
  SPACE_3: '--zai-space-3',       // Fib(3) = 12px
  SPACE_5: '--zai-space-5',       // Fib(4) = 20px
  SPACE_8: '--zai-space-8',       // Fib(5) = 32px
  SPACE_13: '--zai-space-13',     // Fib(6) = 52px
  SPACE_21: '--zai-space-21',     // Fib(7) = 84px

  // Component spacing (derived from Fibonacci)
  SPACE_CARD_SM: '--zai-space-card-sm',     // = space-3 (12px)
  SPACE_CARD_MD: '--zai-space-card-md',     // = space-5 (20px)
  SPACE_CARD_LG: '--zai-space-card-lg',     // = space-8 (32px)
  SPACE_SECTION_SM: '--zai-space-section-sm', // = space-5 (20px)
  SPACE_SECTION_MD: '--zai-space-section-md', // = space-8 (32px)
  SPACE_SECTION_LG: '--zai-space-section-lg', // = space-13 (52px)
  SPACE_ELEMENT_XS: '--zai-space-element-xs', // = space-1 (4px)
  SPACE_ELEMENT_SM: '--zai-space-element-sm', // = space-2 (8px)
  SPACE_ELEMENT_MD: '--zai-space-element-md', // = space-3 (12px)
  SPACE_ELEMENT_LG: '--zai-space-element-lg', // = space-5 (20px)

  // ── Radius ──────────────────────────────────────────────
  RADIUS_NONE: '--zai-radius-none',
  RADIUS_SM: '--zai-radius-sm',       // 2px
  RADIUS_DEFAULT: '--zai-radius-default', // 4px
  RADIUS_MD: '--zai-radius-md',       // 6px
  RADIUS_LG: '--zai-radius-lg',       // 8px
  RADIUS_XL: '--zai-radius-xl',       // 12px
  RADIUS_FULL: '--zai-radius-full',    // 9999px

  // ── Shadows ─────────────────────────────────────────────
  SHADOW_SM: '--zai-shadow-sm',
  SHADOW_DEFAULT: '--zai-shadow-default',
  SHADOW_MD: '--zai-shadow-md',
  SHADOW_LG: '--zai-shadow-lg',
  SHADOW_XL: '--zai-shadow-xl',
  SHADOW_GLOW: '--zai-shadow-glow',

  // ── Glass effects ───────────────────────────────────────
  GLASS_BG: '--zai-glass-bg',
  GLASS_BORDER: '--zai-glass-border',
  GLASS_SHADOW: '--zai-glass-shadow',
  GLASS_BLUR: '--zai-glass-blur',
  GLASS_SATURATE: '--zai-glass-saturate',
  GLASS_OPACITY: '--zai-glass-opacity',

  // ── Glow effects ────────────────────────────────────────
  GLOW_COLOR: '--zai-glow-color',
  GLOW_SPREAD: '--zai-glow-spread',
  GLOW_OPACITY: '--zai-glow-opacity',
  GLOW_SHADOW: '--zai-glow-shadow',

  // ── Motion ──────────────────────────────────────────────
  DURATION_INSTANT: '--zai-duration-instant',   // 0ms
  DURATION_FAST: '--zai-duration-fast',         // 150ms
  DURATION_NORMAL: '--zai-duration-normal',     // 300ms
  DURATION_SLOW: '--zai-duration-slow',         // 500ms
  EASING_DEFAULT: '--zai-easing-default',
  EASING_IN: '--zai-easing-in',
  EASING_OUT: '--zai-easing-out',
  EASING_IN_OUT: '--zai-easing-in-out',
  EASING_BOUNCE: '--zai-easing-bounce',

  // ── Typography ──────────────────────────────────────────
  // Fibonacci modular scale (base 16px)
  FONT_SIZE_1: '--zai-font-size-1',   // Fib(1) scaled = 12px
  FONT_SIZE_2: '--zai-font-size-2',   // Fib(2) scaled = 14px
  FONT_SIZE_3: '--zai-font-size-3',   // Fib(3) scaled = 16px (base)
  FONT_SIZE_4: '--zai-font-size-4',   // Fib(4) scaled = 18px
  FONT_SIZE_5: '--zai-font-size-5',   // Fib(5) scaled = 24px
  FONT_SIZE_6: '--zai-font-size-6',   // Fib(6) scaled = 32px
  FONT_SIZE_7: '--zai-font-size-7',   // Fib(7) scaled = 48px

  FONT_WEIGHT_NORMAL: '--zai-font-weight-normal',
  FONT_WEIGHT_MEDIUM: '--zai-font-weight-medium',
  FONT_WEIGHT_SEMIBOLD: '--zai-font-weight-semibold',
  FONT_WEIGHT_BOLD: '--zai-font-weight-bold',

  LINE_HEIGHT_TIGHT: '--zai-line-height-tight',
  LINE_HEIGHT_NORMAL: '--zai-line-height-normal',
  LINE_HEIGHT_RELAXED: '--zai-line-height-relaxed',

  // ── Layout (golden ratio) ───────────────────────────────
  PHI: '--zai-phi',         // 1.618
  PHI_INV: '--zai-phi-inv', // 0.618
  GRID_COLS_GOLDEN: '--zai-grid-cols-golden',     // 1fr 1.618fr
  GRID_COLS_FIBONACCI: '--zai-grid-cols-fibonacci', // 1fr 2fr 3fr 5fr
  GRID_GAP: '--zai-grid-gap',     // = space-5 (Fib)
  GRID_GAP_SM: '--zai-grid-gap-sm', // = space-3 (Fib)
  GRID_GAP_LG: '--zai-grid-gap-lg', // = space-8 (Fib)

  // ── Z-index ─────────────────────────────────────────────
  Z_DROPDOWN: '--zai-z-dropdown',
  Z_STICKY: '--zai-z-sticky',
  Z_FIXED: '--zai-z-fixed',
  Z_MODAL: '--zai-z-modal',
  Z_POPOVER: '--zai-z-popover',
  Z_TOOLTIP: '--zai-z-tooltip',
  Z_TOAST: '--zai-z-toast',

  // ── Component-specific ──────────────────────────────────
  PROGRESS_HEIGHT: '--zai-progress-height',
  PROGRESS_RADIUS: '--zai-progress-radius',
  BADGE_PADDING_X: '--zai-badge-padding-x',
  BADGE_PADDING_Y: '--zai-badge-padding-y',
  BADGE_RADIUS: '--zai-badge-radius',
  DOT_SIZE: '--zai-dot-size',
  DIVIDER_THICKNESS: '--zai-divider-thickness',
} as const

// ── Helper: resolve token → CSS var() string ──────────────
export function tv(token: keyof typeof TOKEN): string {
  return `var(${TOKEN[token]})`
}

// ── Helper: resolve with fallback ──────────────────────────
export function tvf(token: keyof typeof TOKEN, fallback: string): string {
  return `var(${TOKEN[token]}, ${fallback})`
}

// ── Type exports ────────────────────────────────────────────
export type TokenKey = keyof typeof TOKEN
export type TokenValue = typeof TOKEN[TokenKey]

// Re-export types from separate file
export * from './types'
