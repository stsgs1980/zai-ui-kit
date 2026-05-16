/**
 * TrendIndicator - Shows directional trend (up/down/neutral) with optional value
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
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
  sm: 'text-xs gap-0.5',    // TODO: Add token for 0.5 gap (2px)
  md: 'text-sm gap-[var(--zai-space-element-xs)]',
  lg: 'text-base gap-1.5',  // TODO: Add token for 1.5 gap (6px)
} as const

const arrowSizeMap = {
  sm: 'w-3 h-3',   // TODO: Add token for small arrow size
  md: 'w-4 h-4',   // TODO: Add token for medium arrow size
  lg: 'w-5 h-5',   // TODO: Add token for large arrow size
} as const

const directionConfig: Record<
  TrendDirection,
  { color: string; arrow: string; transform?: string }
> = {
  up: {
    color: tv('COLOR_NEUTRAL_BASE'),
    arrow: 'M5 15l7-7 7 7',
  },
  down: {
    color: tv('COLOR_NEUTRAL_V4'),
    arrow: 'M19 9l-7 7-7-7',
  },
  neutral: {
    color: tv('COLOR_NEUTRAL_V3'),
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
      displayColor = direction === 'up' ? tv('COLOR_NEUTRAL_V4') : tv('COLOR_NEUTRAL_BASE')
    }

    return (
      <span
        ref={ref}
        className={cn('inline-flex items-center font-medium', sizeMap[size], className)}
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
