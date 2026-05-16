/**
 * HUDCard - HUD-style card with animated borders and glow
 *
 * Colors sourced from token system (tv() + color-mix())
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import type { WithChildren, WithClassName, Variant } from '../utils/types'

export interface HUDCardProps extends WithChildren, WithClassName {
  /** Card title */
  title?: ReactNode
  /** Corner label (like a badge) */
  cornerLabel?: ReactNode
  /** Color variant */
  variant?: Variant
  /** Enable animated border */
  animated?: boolean
  /** Enable glow effect */
  glow?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Click handler */
  onClick?: () => void
}

const sizePaddingMap = {
  sm: 'p-[var(--zai-space-card-sm)]',
  md: 'p-[var(--zai-space-card-md)]',
  lg: 'p-[var(--zai-space-5)]',
  xl: 'p-[var(--zai-space-card-lg)]',
}

/** Map variant → glow color via color-mix */
const variantGlowMap: Record<Variant, string> = {
  primary: `0 0 20px color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 8%, transparent)`,
  secondary: `0 0 20px color-mix(in srgb, ${tv('COLOR_NEUTRAL_V1')} 8%, transparent)`,
  success: `0 0 20px color-mix(in srgb, ${tv('COLOR_NEUTRAL_V2')} 8%, transparent)`,
  warning: `0 0 20px color-mix(in srgb, ${tv('COLOR_NEUTRAL_V3')} 8%, transparent)`,
  danger: `0 0 20px color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 10%, transparent)`,
  info: `0 0 20px color-mix(in srgb, ${tv('COLOR_NEUTRAL_V1')} 8%, transparent)`,
  neutral: `0 0 20px color-mix(in srgb, ${tv('COLOR_NEUTRAL_V3')} 8%, transparent)`,
}

export const HUDCard = forwardRef<HTMLDivElement, HUDCardProps>(
  (
    {
      title,
      cornerLabel,
      variant = 'primary',
      animated = true,
      glow = true,
      size = 'md',
      onClick,
      className,
      children,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          'relative overflow-hidden rounded-[var(--zai-radius-lg)] border backdrop-blur-sm',
          sizePaddingMap[size],
          onClick && 'cursor-pointer transition-transform hover:scale-[1.01]',
          className
        )}
        style={{
          borderColor: tv('COLOR_BORDER_SUBTLE'),
          backgroundColor: tv('GLASS_BG'),
          boxShadow: glow ? variantGlowMap[variant] : undefined,
        }}
      >
        {/* Animated corner accents */}
        {animated && (
          <>
            <div className="absolute left-0 top-0 h-8 w-px" style={{ backgroundImage: `linear-gradient(to bottom, color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 30%, transparent), transparent)` }} />
            <div className="absolute left-0 top-0 h-px w-8" style={{ backgroundImage: `linear-gradient(to right, color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 30%, transparent), transparent)` }} />
            <div className="absolute bottom-0 right-0 h-8 w-px" style={{ backgroundImage: `linear-gradient(to top, color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 30%, transparent), transparent)` }} />
            <div className="absolute bottom-0 right-0 h-px w-8" style={{ backgroundImage: `linear-gradient(to left, color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 30%, transparent), transparent)` }} />
          </>
        )}

        {/* Header */}
        {(title || cornerLabel) && (
          <div className="mb-[var(--zai-space-element-md)] flex items-start justify-between">
            {title && (
              <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: tv('COLOR_TEXT_PRIMARY') }}>
                {title}
              </h3>
            )}
            {cornerLabel && (
              <div className="text-xs" style={{ color: tv('COLOR_NEUTRAL_V3') }}>{cornerLabel}</div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

HUDCard.displayName = 'HUDCard'

export default HUDCard
