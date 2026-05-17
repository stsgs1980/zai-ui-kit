/**
 * Toast.icons - Icon and color maps for Toast variants
 */

import type { ReactNode } from 'react'
import { tv } from '../tokens'
import type { Variant } from '../utils/types'

/** Map variant → neutral palette key for border tint (kept for semantic reference) */
export const variantBorderKey: Record<Variant, 'base' | 'v1' | 'v2' | 'v3' | 'v4'> = {
  primary: 'base',
  secondary: 'v1',
  success: 'v2',
  warning: 'v3',
  danger: 'v4',
  info: 'v1',
  neutral: 'v3',
}

/** Map variant → icon color via tokens */
export const variantIconColor: Record<Variant, string> = {
  primary: tv('COLOR_NEUTRAL_BASE'),
  secondary: tv('COLOR_NEUTRAL_V1'),
  success: tv('COLOR_NEUTRAL_V2'),
  warning: tv('COLOR_NEUTRAL_V3'),
  danger: tv('COLOR_NEUTRAL_V4'),
  info: tv('COLOR_NEUTRAL_V1'),
  neutral: tv('COLOR_NEUTRAL_V3'),
}

/** Map variant → border color with alpha via color-mix */
export const variantBorderColor: Record<Variant, string> = {
  primary: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 25%, transparent)`,
  secondary: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V1')} 25%, transparent)`,
  success: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V2')} 25%, transparent)`,
  warning: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V3')} 25%, transparent)`,
  danger: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 25%, transparent)`,
  info: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V1')} 25%, transparent)`,
  neutral: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V3')} 25%, transparent)`,
}

export const variantIconMap: Record<Variant, ReactNode> = {
  primary: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  ),
  secondary: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  ),
  success: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  warning: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  ),
  danger: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  ),
  info: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  ),
  neutral: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  ),
}
