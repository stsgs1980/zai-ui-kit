/**
 * ProgressBar - Visual progress indicator with multiple variants
 * Supports determinate and indeterminate states
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import type { SizeSmMdLg, Variant } from '../utils/types'

export interface ProgressBarProps {
  /** Current progress value (0-100) */
  value?: number
  /** Maximum value (default 100) */
  max?: number
  /** Size variant */
  size?: SizeSmMdLg
  /** Color variant */
  variant?: Variant
  /** Custom color override */
  color?: string
  /** Show percentage label */
  showLabel?: boolean
  /** Indeterminate loading state */
  indeterminate?: boolean
  /** Animated transition */
  animated?: boolean
  /** Additional class names */
  className?: string
  /** Accessible label */
  'aria-label'?: string
}

const sizeMap = {
  sm: 'h-1',   // TODO: Add token for small progress height
  md: 'h-2',   // h-2 = 8px, PROGRESS_HEIGHT token = 6px — kept for size scale
  lg: 'h-3',   // TODO: Add token for large progress height
} as const

const variantColorMap: Record<Variant, string> = {
  primary: tv('COLOR_NEUTRAL_BASE'),
  secondary: tv('COLOR_NEUTRAL_V1'),
  success: tv('COLOR_NEUTRAL_V2'),
  warning: tv('COLOR_NEUTRAL_V3'),
  danger: tv('COLOR_NEUTRAL_V4'),
  info: tv('COLOR_NEUTRAL_V1'),
  neutral: tv('COLOR_NEUTRAL_V3'),
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value = 0,
      max = 100,
      size = 'md',
      variant = 'primary',
      color,
      showLabel = false,
      indeterminate = false,
      animated = true,
      className,
      'aria-label': ariaLabel,
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    const barColor = color ?? variantColorMap[variant]

    return (
      <div className={cn('flex items-center gap-[var(--zai-space-element-sm)]', className)}>
        <div
          ref={ref}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={ariaLabel ?? 'Progress'}
          className={cn(
            'w-full overflow-hidden rounded-[var(--zai-radius-full)]',
            sizeMap[size]
          )}
        >
          {indeterminate ? (
            <div
              className="h-full w-full animate-[shimmer_1.5s_infinite] rounded-[var(--zai-radius-full)]"
              style={{
                background: `linear-gradient(90deg, transparent, ${barColor}, transparent)`,
                backgroundSize: '200% 100%',
              }}
            />
          ) : (
            <div
              className={cn('h-full rounded-[var(--zai-radius-full)]')}
              style={{
                width: `${percentage}%`,
                backgroundColor: barColor,
                ...(animated ? { transition: `all ${tv('DURATION_NORMAL')} ${tv('EASING_OUT')}` } : {}),
              }}
            />
          )}
        </div>
        {showLabel && !indeterminate && (
          <span className="min-w-[3rem] text-sm" style={{ color: tv('COLOR_TEXT_SECONDARY') }}>
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
