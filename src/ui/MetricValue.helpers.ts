/**
 * MetricValue helpers — extracted constants and formatting logic
 */

import { colors } from '../theme/colors'
import type { TrendDirection } from '../utils/types'

export const sizeMap = {
  xs: { value: 'text-lg', label: 'text-xs', unit: 'text-sm' },
  sm: { value: 'text-xl', label: 'text-xs', unit: 'text-sm' },
  md: { value: 'text-2xl', label: 'text-sm', unit: 'text-base' },
  lg: { value: 'text-3xl', label: 'text-sm', unit: 'text-lg' },
  xl: { value: 'text-4xl', label: 'text-base', unit: 'text-xl' },
} as const

export const trendColorMap: Record<TrendDirection, string> = {
  up: colors.neutral.base,
  down: colors.neutral.v4,
  neutral: colors.neutral.v3,
}

export function formatValue(
  value: string | number,
  format?: 'number' | 'currency' | 'percent' | 'compact',
  decimals?: number
): string {
  if (typeof value === 'string') return value

  const options: Intl.NumberFormatOptions = {}
  if (decimals !== undefined) {
    options.minimumFractionDigits = decimals
    options.maximumFractionDigits = decimals
  }

  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        ...options,
        style: 'currency',
        currency: 'USD',
      }).format(value)
    case 'percent':
      return new Intl.NumberFormat('en-US', {
        ...options,
        style: 'percent',
      }).format(value / 100)
    case 'compact':
      return new Intl.NumberFormat('en-US', {
        ...options,
        notation: 'compact',
        compactDisplay: 'short',
      }).format(value)
    default:
      return new Intl.NumberFormat('en-US', options).format(value)
  }
}
