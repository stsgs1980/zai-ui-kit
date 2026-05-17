/**
 * SessionBadge - Market session indicator badge
 * Extracted from CHROMEDNA patterns
 *
 * Colors sourced from token system (tv() + color-mix())
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import type { WithClassName } from '../utils/types'

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

/** Map session → token-based CSS custom properties */
const sessionCSSProps: Record<MarketSession, React.CSSProperties> = {
  pre: {
    '--session-text': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V1')} 80%, transparent)`,
    '--session-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V1')} 10%, transparent)`,
    '--session-border': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V1')} 20%, transparent)`,
  } as React.CSSProperties,
  regular: {
    '--session-text': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V2')} 90%, transparent)`,
    '--session-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V2')} 10%, transparent)`,
    '--session-border': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V2')} 20%, transparent)`,
  } as React.CSSProperties,
  after: {
    '--session-text': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V3')} 80%, transparent)`,
    '--session-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V3')} 10%, transparent)`,
    '--session-border': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V3')} 15%, transparent)`,
  } as React.CSSProperties,
  closed: {
    '--session-text': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 70%, transparent)`,
    '--session-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 10%, transparent)`,
    '--session-border': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 20%, transparent)`,
  } as React.CSSProperties,
}

const sessionLabels: Record<MarketSession, string> = {
  pre: 'PRE',
  regular: 'REGULAR',
  after: 'AFTER HOURS',
  closed: 'CLOSED',
}

/** Map session → dot color token */
const dotColorMap: Record<MarketSession, string> = {
  regular: tv('COLOR_NEUTRAL_V2'),
  pre: tv('COLOR_NEUTRAL_V1'),
  after: tv('COLOR_NEUTRAL_V3'),
  closed: tv('COLOR_NEUTRAL_V4'),
}

const sizeStyles = {
  sm: 'px-[var(--zai-space-element-sm)] py-[var(--zai-space-element-xs)] text-[8px]',
  md: 'px-[var(--zai-space-element-sm)] py-[var(--zai-space-element-xs)] text-[10px]',
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
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center gap-[var(--zai-space-element-xs)] rounded-[var(--zai-radius-full)] border font-semibold uppercase tracking-wider',
          'text-[var(--session-text)] bg-[var(--session-bg)] border-[var(--session-border)]',
          sizeStyles[size],
          pulse && session === 'regular' && 'animate-pulse',
          className
        )}
        style={sessionCSSProps[session]}
      >
        {/* Status dot */}
        <span
          className="w-1.5 h-1.5 rounded-[var(--zai-radius-full)]"
          style={{ backgroundColor: dotColorMap[session] }}
        />

        {/* Label */}
        <span>{sessionLabels[session]}</span>

        {/* Time */}
        {showTime && time && (
          <span className="opacity-70 font-normal">{time}</span>
        )}
      </div>
    )
  }
)

SessionBadge.displayName = 'SessionBadge'
