/**
 * AnimatedDivider - Section divider with animated traveling light dot
 * Extracted from CHROMEDNA patterns
 *
 * Tokens: GLOW_SHADOW, GLASS_BORDER, motion tokens used where available.
 * RGB-based rgba() values kept with TODO until per-alpha neutral tokens exist.
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import { colors, rgba } from '../theme/colors'  // TODO: Remove when RGB/alpha tokens are available
import type { WithClassName } from '../utils/types'

export interface AnimatedDividerProps extends WithClassName {
  /** Divider height */
  height?: number
  /** Animation duration in seconds */
  duration?: number
  /** Show traveling light dot */
  showDot?: boolean
  /** Dot color (CSS color) — defaults to neutral.base @ 80% */
  dotColor?: string
  /** Gradient color (CSS color) — defaults to neutral.v3 @ 15% */
  gradientColor?: string
}

export const AnimatedDivider = forwardRef<HTMLDivElement, AnimatedDividerProps>(
  (
    {
      height = 1,
      duration = 3,
      showDot = true,
      // TODO: Add token for neutral.base @ 80% alpha
      dotColor = rgba('base', 0.8),
      // TODO: Add token for neutral.v3 @ 15% alpha
      gradientColor = rgba('v3', 0.15),
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('relative w-full overflow-hidden', className)}
        style={{ height }}
      >
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            // TODO: Add token for surface whiteA04
            background: `linear-gradient(90deg, ${gradientColor}, ${colors.surface.whiteA04} 40%, ${colors.surface.whiteA04} 60%, ${gradientColor})`,
          }}
        />

        {/* Leading edge glow */}
        <div
          className="absolute top-0 left-0 h-[3px] w-10 rounded-[var(--zai-radius-sm)]"
          style={{
            background: `linear-gradient(90deg, ${gradientColor.replace('0.15', '0.3')}, transparent)`,
          }}
        />

        {/* Traveling light dot */}
        {showDot && (
          <div
            className="absolute top-[-2px] w-5 h-[5px] rounded-[var(--zai-radius-full)]"
            style={{
              background: `radial-gradient(ellipse at center, ${dotColor}, ${gradientColor} 40%, transparent 70%)`,
              animation: `traveling-light-dot ${duration}s ${tv('EASING_IN_OUT')} infinite`,
            }}
          />
        )}

        {/* Keyframes style */}
        <style jsx>{`
          @keyframes traveling-light-dot {
            0% {
              left: -10%;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              left: 110%;
              opacity: 0;
            }
          }
        `}</style>
      </div>
    )
  }
)

AnimatedDivider.displayName = 'AnimatedDivider'
