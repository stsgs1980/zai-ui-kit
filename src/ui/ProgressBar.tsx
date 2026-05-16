/**
 * ProgressBar - Visual progress indicator with multiple variants
 * Supports determinate and indeterminate states
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'
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
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
} as const

const variantColorMap: Record<Variant, string> = {
  primary: colors.neutral.base,
  secondary: colors.neutral.v1,
  success: colors.neutral.v2,
  warning: colors.neutral.v3,
  danger: colors.neutral.v4,
  info: colors.neutral.v1,
  neutral: colors.neutral.v3,
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
      <div className={cn('flex items-center gap-2', className)}>
        <div
          ref={ref}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={ariaLabel ?? 'Progress'}
          className={cn(
            'w-full overflow-hidden rounded-full',
            sizeMap[size]
          )}
        >
          {indeterminate ? (
            <div
              className="h-full w-full animate-[shimmer_1.5s_infinite] rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${barColor}, transparent)`,
                backgroundSize: '200% 100%',
              }}
            />
          ) : (
            <div
              className={cn(
                'h-full rounded-full',
                animated && 'transition-all duration-300 ease-out'
              )}
              style={{
                width: `${percentage}%`,
                backgroundColor: barColor,
              }}
            />
          )}
        </div>
        {showLabel && !indeterminate && (
          <span className="min-w-[3rem] text-sm" style={{ color: colors.text.secondary }}>
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
