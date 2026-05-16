/**
 * SessionBadge - Market session indicator badge
 * Extracted from CHROMEDNA patterns
 *
 * Colors sourced from centralized palette (colors.neutral.*)
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'
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

/** Map session → neutral palette key */
const sessionKey: Record<MarketSession, 'v1' | 'v2' | 'v3' | 'v4'> = {
  pre: 'v1',       // #CCCCCC
  regular: 'v2',   // #BFBFBF
  after: 'v3',     // #878992
  closed: 'v4',    // #5C6070
}

/** Map session → text alpha */
const sessionTextAlpha: Record<MarketSession, number> = {
  pre: 0.8,
  regular: 0.9,
  after: 0.8,
  closed: 0.7,
}

/** Map session → border alpha */
const sessionBorderAlpha: Record<MarketSession, number> = {
  pre: 0.2,
  regular: 0.2,
  after: 0.15,
  closed: 0.2,
}

const sessionLabels: Record<MarketSession, string> = {
  pre: 'PRE',
  regular: 'REGULAR',
  after: 'AFTER HOURS',
  closed: 'CLOSED',
}

/** Build CSS custom properties for a session */
function getSessionCSSProps(session: MarketSession): React.CSSProperties {
  const k = sessionKey[session]
  const rgb = colors.neutralRgb[k]
  return {
    '--session-text': `rgba(${rgb}, ${sessionTextAlpha[session]})`,
    '--session-bg': `rgba(${rgb}, 0.1)`,
    '--session-border': `rgba(${rgb}, ${sessionBorderAlpha[session]})`,
  } as React.CSSProperties
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
    const dotColorMap: Record<MarketSession, string> = {
      regular: colors.neutral.v2,
      pre: colors.neutral.v1,
      after: colors.neutral.v3,
      closed: colors.neutral.v4,
    }

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border font-semibold uppercase tracking-wider',
          'text-[var(--session-text)] bg-[var(--session-bg)] border-[var(--session-border)]',
          sizeStyles[size],
          pulse && session === 'regular' && 'animate-pulse',
          className
        )}
        style={getSessionCSSProps(session)}
      >
        {/* Status dot */}
        <span
          className="w-1.5 h-1.5 rounded-full"
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
