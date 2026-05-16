/**
 * ZAI UI Kit - Animation System
 * Reusable animation presets and keyframes
 *
 * @deprecated Use the token system instead.
 *   Import TOKEN / tv from '@zai/ui-kit/tokens' and use CSS custom properties.
 *   Motion tokens (duration, easing) are defined in skins/dark-zai.css etc.
 *   This module is kept for backward compatibility and will be removed in v2.
 */

import type { CSSProperties } from 'react'

// Duration presets
export const duration = {
  instant: '0ms',
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '700ms',
} as const

// Easing functions
export const easing = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
} as const

// CSS keyframe definitions (for injection into stylesheet)
export const keyframes = {
  // Fade animations
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  fadeOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },

  // Scale animations
  scaleIn: {
    '0%': { transform: 'scale(0.95)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' },
  },
  scaleOut: {
    '0%': { transform: 'scale(1)', opacity: '1' },
    '100%': { transform: 'scale(0.95)', opacity: '0' },
  },

  // Slide animations
  slideInUp: {
    '0%': { transform: 'translateY(10px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  slideInDown: {
    '0%': { transform: 'translateY(-10px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  slideInLeft: {
    '0%': { transform: 'translateX(-10px)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
  slideInRight: {
    '0%': { transform: 'translateX(10px)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },

  // Pulse animations
  pulse: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.5' },
  },
  pulseScale: {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
  },

  // Glow animations
  glow: {
    '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)' },
    '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' },
  },
  glowPulse: {
    '0%, 100%': { opacity: '1', boxShadow: '0 0 5px currentColor' },
    '50%': { opacity: '0.8', boxShadow: '0 0 15px currentColor' },
  },

  // Spin animation
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },

  // Bounce animation
  bounce: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },

  // Shimmer (skeleton loading)
  shimmer: {
    '0%': { backgroundPosition: '-200% 0' },
    '100%': { backgroundPosition: '200% 0' },
  },
} as const

// Animation presets for components
export const animationPresets = {
  fadeIn: {
    animation: `fadeIn ${duration.normal} ${easing.easeOut}`,
  },
  fadeOut: {
    animation: `fadeOut ${duration.fast} ${easing.easeIn}`,
  },
  scaleIn: {
    animation: `scaleIn ${duration.normal} ${easing.easeOut}`,
  },
  slideInUp: {
    animation: `slideInUp ${duration.normal} ${easing.easeOut}`,
  },
  slideInDown: {
    animation: `slideInDown ${duration.normal} ${easing.easeOut}`,
  },
  pulse: {
    animation: `pulse 2s ${easing.easeInOut} infinite`,
  },
  glow: {
    animation: `glow 2s ${easing.easeInOut} infinite`,
  },
  spin: {
    animation: `spin 1s ${easing.linear} infinite`,
  },
  bounce: {
    animation: `bounce 1s ${easing.easeInOut} infinite`,
  },
} as const

// Transition presets
export const transitions = {
  none: 'none',
  all: `all ${duration.normal} ${easing.easeInOut}`,
  colors: `color, background-color, border-color ${duration.fast} ${easing.easeInOut}`,
  opacity: `opacity ${duration.normal} ${easing.easeInOut}`,
  transform: `transform ${duration.normal} ${easing.easeOut}`,
  shadow: `box-shadow ${duration.normal} ${easing.easeInOut}`,
} as const

// Get animation style helper
export function getAnimationStyle(
  animation: keyof typeof animationPresets
): CSSProperties {
  return animationPresets[animation] as unknown as CSSProperties
}

// Get transition helper
export function getTransition(
  transition: keyof typeof transitions
): string {
  return transitions[transition]
}

export type AnimationKey = keyof typeof animationPresets
export type TransitionKey = keyof typeof transitions
export type DurationKey = keyof typeof duration

export default animations
