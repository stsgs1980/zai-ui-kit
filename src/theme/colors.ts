/**
 * ZAI UI Kit - Color System
 * Centralized color definitions for consistent theming
 */

export const colors = {
  // Status colors for indicators, badges, and alerts
  status: {
    online: '#22c55e',
    offline: '#ef4444',
    warning: '#f59e0b',
    error: '#dc2626',
    info: '#3b82f6',
    success: '#10b981',
    neutral: '#6b7280',
    unknown: '#9ca3af',
  },

  // Semantic colors
  semantic: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    danger: '#ef4444',
    caution: '#f59e0b',
    positive: '#22c55e',
  },

  // Background colors (dark theme optimized)
  background: {
    primary: '#0a0a0f',
    secondary: '#111118',
    tertiary: '#1a1a24',
    card: '#15151f',
    elevated: '#1e1e2a',
    overlay: 'rgba(0, 0, 0, 0.8)',
  },

  // Text colors
  text: {
    primary: '#ffffff',
    secondary: '#a1a1aa',
    muted: '#71717a',
    disabled: '#52525b',
    inverse: '#0a0a0f',
  },

  // Border colors
  border: {
    default: '#27272a',
    muted: '#1f1f23',
    focus: '#3b82f6',
    error: '#ef4444',
    success: '#22c55e',
  },

  // Chart/data visualization colors
  chart: {
    blue: '#3b82f6',
    green: '#22c55e',
    yellow: '#eab308',
    red: '#ef4444',
    purple: '#8b5cf6',
    cyan: '#06b6d4',
    orange: '#f97316',
    pink: '#ec4899',
  },

  // Gradient presets
  gradients: {
    primary: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    success: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
    danger: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    warning: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    glow: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
  },

  // Glow effects
  glow: {
    blue: '0 0 20px rgba(59, 130, 246, 0.5)',
    green: '0 0 20px rgba(34, 197, 94, 0.5)',
    red: '0 0 20px rgba(239, 68, 68, 0.5)',
    purple: '0 0 20px rgba(139, 92, 246, 0.5)',
    cyan: '0 0 20px rgba(6, 182, 212, 0.5)',
  },
} as const

// Type exports for TypeScript consumers
export type StatusColor = keyof typeof colors.status
export type SemanticColor = keyof typeof colors.semantic
export type ChartColor = keyof typeof colors.chart

// Helper function to get status color with fallback
export function getStatusColor(status: string): string {
  return colors.status[status as StatusColor] ?? colors.status.unknown
}

// Helper function to get chart color by index (cycling)
export function getChartColorByIndex(index: number): string {
  const chartColors = Object.values(colors.chart)
  return chartColors[index % chartColors.length]
}

export default colors
