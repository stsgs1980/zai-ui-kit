/**
 * TrendIndicator - Shows directional trend (up/down/neutral) with optional value
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'
import type { TrendDirection, SizeSmMdLg, WithChildren } from '../utils/types'

export interface TrendIndicatorProps extends WithChildren {
  /** Trend direction */
  direction: TrendDirection
  /** Size variant */
  size?: SizeSmMdLg
  /** Show percentage/value */
  value?: string | number
  /** Show arrow icon */
  showArrow?: boolean
  /** Invert colors (e.g., down is good for costs) */
  invertColors?: boolean
  /** Custom color override */
  color?: string
  /** Additional class names */
  className?: string
}

const sizeMap = {
  sm: 'text-xs gap-0.5',
  md: 'text-sm gap-1',
  lg: 'text-base gap-1.5',
} as const

const arrowSizeMap = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
} as const

const directionConfig: Record<
  TrendDirection,
  { color: string; arrow: string; transform?: string }
> = {
  up: {
    color: colors.neutral.base,
    arrow: 'M5 15l7-7 7 7',
  },
  down: {
    color: colors.neutral.v4,
    arrow: 'M19 9l-7 7-7-7',
  },
  neutral: {
    color: colors.neutral.v3,
    arrow: 'M5 12h14',
  },
}

export const TrendIndicator = forwardRef<HTMLSpanElement, TrendIndicatorProps>(
  (
    {
      direction,
      size = 'md',
      value,
      showArrow = true,
      invertColors = false,
      color,
      className,
      children,
    },
    ref
  ) => {
    const config = directionConfig[direction]
    let displayColor = color ?? config.color

    if (invertColors && direction !== 'neutral') {
      displayColor = direction === 'up' ? colors.neutral.v4 : colors.neutral.base
    }

    return (
      <span
        ref={ref}
        className={cn('inline-flex items-center font-medium', sizeMap[size])}
        style={{ color: displayColor }}
      >
        {showArrow && (
          <svg
            className={cn(arrowSizeMap[size], 'flex-shrink-0')}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={config.arrow} />
          </svg>
        )}
        {value !== undefined && (
          <span className="tabular-nums">{value}</span>
        )}
        {children}
      </span>
    )
  }
)

TrendIndicator.displayName = 'TrendIndicator'

export default TrendIndicator
