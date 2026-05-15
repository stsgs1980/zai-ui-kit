/**
 * SessionBadge - Market session indicator badge
 * Extracted from CHROMEDNA patterns
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import type { WithClassName } from '../../utils/types'

export type MarketSession = 'pre' | 'regular' | 'after' | 'closed'

export interface SessionBadgeProps extends WithClassName {
  /** Market session type */
  session: MarketSession
  /** Show time indicator */
  showTime?: boolean
  /** Custom time string */
  time?: string
  /** Size variant */
  size?: 'sm' | 'md'
  /** Pulse animation for active sessions */
  pulse?: boolean
}

const sessionConfig: Record<MarketSession, { label: string; className: string }> = {
  pre: {
    label: 'PRE',
    className: `
      text-amber-400/80
      bg-amber-500/10
      border-amber-500/20
    `,
  },
  regular: {
    label: 'REGULAR',
    className: `
      text-green-400/90
      bg-green-500/10
      border-green-500/20
    `,
  },
  after: {
    label: 'AFTER HOURS',
    className: `
      text-red-400/80
      bg-red-500/8
      border-red-500/15
    `,
  },
  closed: {
    label: 'CLOSED',
    className: `
      text-gray-400/70
      bg-gray-500/10
      border-gray-500/20
    `,
  },
}

const sizeStyles = {
  sm: 'px-2 py-0.5 text-[8px]',
  md: 'px-2.5 py-1 text-[10px]',
}

export const SessionBadge = forwardRef<HTMLDivElement, SessionBadgeProps>(
  (
    {
      session,
      showTime = false,
      time,
      size = 'sm',
      pulse = false,
      className,
    },
    ref
  ) => {
    const config = sessionConfig[session]

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border font-semibold uppercase tracking-wider',
          sizeStyles[size],
          config.className,
          pulse && session === 'regular' && 'animate-pulse',
          className
        )}
      >
        {/* Status dot */}
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            session === 'regular' && 'bg-green-400',
            session === 'pre' && 'bg-amber-400',
            session === 'after' && 'bg-red-400',
            session === 'closed' && 'bg-gray-400'
          )}
        />

        {/* Label */}
        <span>{config.label}</span>

        {/* Time */}
        {showTime && time && (
          <span className="opacity-70 font-normal">{time}</span>
        )}
      </div>
    )
  }
)

SessionBadge.displayName = 'SessionBadge'
