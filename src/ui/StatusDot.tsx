/**
 * StatusDot - Visual status indicator with animated glow
 * Used for showing online/offline/warning states
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'
import type { Status, SizeSmMdLg } from '../utils/types'

export interface StatusDotProps {
  /** Status type determines color */
  status?: Status
  /** Size of the dot */
  size?: SizeSmMdLg
  /** Enable pulse animation */
  pulse?: boolean
  /** Enable glow effect */
  glow?: boolean
  /** Custom color override */
  color?: string
  /** Additional class names */
  className?: string
  /** Accessible label */
  'aria-label'?: string
}

const sizeMap = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
} as const

const statusColorMap: Record<Status, string> = {
  online: colors.status.online,
  offline: colors.status.offline,
  warning: colors.status.warning,
  error: colors.status.error,
  info: colors.status.info,
  success: colors.status.success,
  neutral: colors.neutral.v3,
  unknown: colors.neutral.v3,
}

export const StatusDot = forwardRef<HTMLSpanElement, StatusDotProps>(
  (
    {
      status = 'unknown',
      size = 'md',
      pulse = false,
      glow = false,
      color,
      className,
      'aria-label': ariaLabel,
    },
    ref
  ) => {
    const dotColor = color ?? statusColorMap[status]

    return (
      <span
        ref={ref}
        role="status"
        aria-label={ariaLabel ?? `Status: ${status}`}
        className={cn(
          'inline-block rounded-full',
          sizeMap[size],
          pulse && 'animate-pulse',
          className
        )}
        style={{
          backgroundColor: dotColor,
          boxShadow: glow ? `0 0 8px ${dotColor}` : undefined,
        }}
      />
    )
  }
)

StatusDot.displayName = 'StatusDot'

export default StatusDot
