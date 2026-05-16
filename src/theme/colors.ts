/**
 * ZAI UI Kit - Color System
 * Centralized color definitions for consistent theming
 *
 * Neutral scale (applied across the entire kit):
 *   base #E6E6E6  — primary text, bright elements
 *   v1   #CCCCCC  — secondary text
 *   v2   #BFBFBF  — tertiary / muted text
 *   v3   #878992  — subtle / disabled elements
 *   v4   #5C6070  — borders, very subtle chrome
 */

// ── Neutral palette (single source of truth) ────────────────
const neutral = {
  base: '#E6E6E6',
  v1: '#CCCCCC',
  v2: '#BFBFBF',
  v3: '#878992',
  v4: '#5C6070',
} as const

// ── RGB helper — convert hex to "r, g, b" for rgba() ───────
function hexToRgb(hex: string): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `${r}, ${g}, ${b}`
}

// Pre-computed RGB strings for neutral palette
const neutralRgb = {
  base: hexToRgb(neutral.base),   // "230, 230, 230"
  v1: hexToRgb(neutral.v1),       // "204, 204, 204"
  v2: hexToRgb(neutral.v2),       // "191, 191, 191"
  v3: hexToRgb(neutral.v3),       // "135, 137, 146"
  v4: hexToRgb(neutral.v4),       // "92, 96, 112"
} as const

// Pre-computed RGB strings for background colors
const bgRgb = {
  primary: hexToRgb('#0a0a0f'),   // "10, 10, 15"
  secondary: hexToRgb('#111118'),  // "17, 17, 24"
  surface: hexToRgb('#2a2c36'),    // "42, 44, 54"
  glass: hexToRgb('#030308'),      // "3, 3, 8"
} as const

export const colors = {
  // Neutral scale — re-exported for direct access
  neutral,

  // Neutral RGB — for constructing rgba() strings in components
  neutralRgb,

  // Background RGB — for constructing rgba() strings in components
  bgRgb,

  // Status colors — mapped to neutral scale
  status: {
    online: neutral.base,
    offline: neutral.v4,
    warning: neutral.v3,
    error: neutral.v4,
    info: neutral.v1,
    success: neutral.v2,
    neutral: neutral.v3,
    unknown: neutral.v3,
  },

  // Semantic colors — mapped to neutral scale
  semantic: {
    primary: neutral.base,
    secondary: neutral.v1,
    accent: neutral.v2,
    danger: neutral.v4,
    caution: neutral.v3,
    positive: neutral.v2,
  },

  // Background colors (dark theme optimized)
  background: {
    primary: '#0a0a0f',
    secondary: '#111118',
    tertiary: '#1a1a24',
    card: '#15151f',
    elevated: '#1e1e2a',
    surface: '#2a2c36',
    glass: '#030308',
    overlay: 'rgba(0, 0, 0, 0.8)',
    // Alpha variants — pre-built for common use cases
    primaryA50: `rgba(${bgRgb.primary}, 0.5)`,
    primaryA80: `rgba(${bgRgb.primary}, 0.8)`,
    primaryA90: `rgba(${bgRgb.primary}, 0.9)`,
    primaryA95: `rgba(${bgRgb.primary}, 0.95)`,
    surfaceA50: `rgba(${bgRgb.surface}, 0.5)`,
    glassA80: `rgba(${bgRgb.glass}, 0.8)`,
    glassA82: `rgba(${bgRgb.glass}, 0.82)`,
    glassA85: `rgba(${bgRgb.glass}, 0.85)`,
  },

  // Text colors — mapped to neutral scale
  text: {
    primary: neutral.base,    // #E6E6E6
    secondary: neutral.v1,    // #CCCCCC
    muted: neutral.v3,        // #878992
    disabled: neutral.v4,     // #5C6070
    inverse: '#0a0a0f',
  },

  // Border colors — mapped to neutral scale
  border: {
    default: neutral.v4,                       // #5C6070
    muted: `rgba(${neutralRgb.v4}, 0.5)`,      // v4 @ 50%
    subtle: `rgba(${neutralRgb.v4}, 0.25)`,    // v4 @ 25%
    focus: neutral.v1,
    error: neutral.v4,
    success: neutral.v2,
    // Alpha variants for common border usage
    baseA06: `rgba(${neutralRgb.base}, 0.06)`,
    baseA04: `rgba(${neutralRgb.base}, 0.04)`,
    baseA05: `rgba(${neutralRgb.base}, 0.05)`,
    surfaceA50: `rgba(${bgRgb.surface}, 0.5)`,
  },

  // Chart/data visualization colors — mapped to neutral scale
  chart: {
    blue: neutral.base,
    green: neutral.v2,
    yellow: neutral.v1,
    red: neutral.v4,
    purple: neutral.v1,
    cyan: neutral.v2,
    orange: neutral.v3,
    pink: neutral.v3,
  },

  // Gradient presets — neutral
  gradients: {
    primary: `linear-gradient(135deg, ${neutral.base} 0%, ${neutral.v1} 100%)`,
    success: `linear-gradient(135deg, ${neutral.v2} 0%, ${neutral.v3} 100%)`,
    danger: `linear-gradient(135deg, ${neutral.v3} 0%, ${neutral.v4} 100%)`,
    warning: `linear-gradient(135deg, ${neutral.v1} 0%, ${neutral.v3} 100%)`,
    glow: `linear-gradient(135deg, rgba(${neutralRgb.base}, 0.2) 0%, rgba(${neutralRgb.v1}, 0.2) 100%)`,
  },

  // Glow effects — neutral
  glow: {
    blue: `0 0 20px rgba(${neutralRgb.base}, 0.3)`,
    green: `0 0 20px rgba(${neutralRgb.v2}, 0.3)`,
    red: `0 0 20px rgba(${neutralRgb.v4}, 0.3)`,
    purple: `0 0 20px rgba(${neutralRgb.v1}, 0.3)`,
    cyan: `0 0 20px rgba(${neutralRgb.v2}, 0.3)`,
    // Common glow shadows for components
    baseA05: `0 0 20px rgba(${neutralRgb.base}, 0.05)`,
    baseA06: `0 0 20px rgba(${neutralRgb.base}, 0.06)`,
    baseA08: `0 0 20px rgba(${neutralRgb.base}, 0.08)`,
    v1A06: `0 0 20px rgba(${neutralRgb.v1}, 0.06)`,
    v1A08: `0 0 20px rgba(${neutralRgb.v1}, 0.08)`,
    v2A06: `0 0 20px rgba(${neutralRgb.v2}, 0.06)`,
    v3A08: `0 0 20px rgba(${neutralRgb.v3}, 0.08)`,
    v4A08: `0 0 20px rgba(${neutralRgb.v4}, 0.08)`,
    v4A10: `0 0 20px rgba(${neutralRgb.v4}, 0.1)`,
  },

  // Surface overlay colors — for glassmorphism and card backgrounds
  surface: {
    whiteA03: 'rgba(255, 255, 255, 0.03)',
    whiteA04: 'rgba(255, 255, 255, 0.04)',
    blackA30: 'rgba(0, 0, 0, 0.3)',
    blackA40: 'rgba(0, 0, 0, 0.4)',
    blackA50: 'rgba(0, 0, 0, 0.5)',
  },
} as const

// Type exports for TypeScript consumers
export type StatusColor = keyof typeof colors.status
export type SemanticColor = keyof typeof colors.semantic
export type ChartColor = keyof typeof colors.chart
export type NeutralColor = keyof typeof colors.neutral

// Helper function to get status color with fallback
export function getStatusColor(status: string): string {
  return colors.status[status as StatusColor] ?? colors.status.unknown
}

// Helper function to get chart color by index (cycling)
export function getChartColorByIndex(index: number): string {
  const chartColors = Object.values(colors.chart)
  return chartColors[index % chartColors.length]
}

/**
 * Helper to build rgba() string from a neutral palette key and alpha.
 * Usage: `rgba('base', 0.15)` → `"rgba(230, 230, 230, 0.15)"`
 */
export function rgba(key: keyof typeof neutral, alpha: number): string {
  return `rgba(${neutralRgb[key]}, ${alpha})`
}

/**
 * Helper to build a Tailwind-compatible shadow string from neutral palette key + alpha.
 * Usage: `shadow('base', 0.15)` → `"0 0 8px rgba(230, 230, 230, 0.15)"`
 */
export function shadow(key: keyof typeof neutral, alpha: number, spread = 8): string {
  return `0 0 ${spread}px rgba(${neutralRgb[key]}, ${alpha})`
}

export default colors
