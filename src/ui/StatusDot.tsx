/**
 * StatusDot - Visual status indicator with animated glow
 * Used for showing online/offline/warning states
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
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
  sm: 'w-2 h-2',   // TODO: Add token for small dot size
  md: 'w-3 h-3',   // TODO: Add token for medium dot size (DOT_SIZE is 8px = w-2)
  lg: 'w-4 h-4',   // TODO: Add token for large dot size
} as const

const statusColorMap: Record<Status, string> = {
  online: tv('COLOR_STATUS_ONLINE'),
  offline: tv('COLOR_STATUS_OFFLINE'),
  warning: tv('COLOR_STATUS_WARNING'),
  error: tv('COLOR_STATUS_ERROR'),
  success: tv('COLOR_STATUS_SUCCESS'),
  info: tv('COLOR_STATUS_INFO'),
  neutral: tv('COLOR_NEUTRAL_V3'),
  unknown: tv('COLOR_NEUTRAL_V3'),
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
          'inline-block rounded-[var(--zai-radius-full)]',
          sizeMap[size],
          pulse && 'animate-pulse',
          className
        )}
        style={{
          backgroundColor: dotColor,
          // TODO: Add token for glow spread value (8px)
          boxShadow: glow ? `0 0 8px ${dotColor}` : undefined,
        }}
      />
    )
  }
)

StatusDot.displayName = 'StatusDot'

export default StatusDot
