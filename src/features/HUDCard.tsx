/**
 * HUDCard - HUD-style card with animated borders and glow
 *
 * Colors sourced from centralized palette (colors.neutral.*)
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'
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
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-5',
  xl: 'p-6',
}

/** Map variant → neutral palette key for glow */
const variantGlowKey: Record<Variant, 'base' | 'v1' | 'v2' | 'v3' | 'v4'> = {
  primary: 'base',    // #E6E6E6
  secondary: 'v1',    // #CCCCCC
  success: 'v2',      // #BFBFBF
  warning: 'v3',      // #878992
  danger: 'v4',       // #5C6070
  info: 'v1',         // #CCCCCC
  neutral: 'v3',      // #878992
}

/** Map variant → glow alpha */
const variantGlowAlpha: Record<Variant, number> = {
  primary: 0.08,
  secondary: 0.08,
  success: 0.08,
  warning: 0.08,
  danger: 0.1,
  info: 0.08,
  neutral: 0.08,
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
    const glowKey = variantGlowKey[variant]
    const glowRgb = colors.neutralRgb[glowKey]
    const glowAlpha = variantGlowAlpha[variant]

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          'relative overflow-hidden rounded-lg border backdrop-blur-sm',
          sizePaddingMap[size],
          onClick && 'cursor-pointer transition-transform hover:scale-[1.01]',
          className
        )}
        style={{
          borderColor: colors.border.subtle,
          backgroundColor: colors.background.primaryA80,
          boxShadow: glow ? `0 0 20px rgba(${glowRgb}, ${glowAlpha})` : undefined,
        }}
      >
        {/* Animated corner accents */}
        {animated && (
          <>
            <div className="absolute left-0 top-0 h-8 w-px" style={{ backgroundImage: `linear-gradient(to bottom, rgba(${colors.neutralRgb.base}, 0.3), transparent)` }} />
            <div className="absolute left-0 top-0 h-px w-8" style={{ backgroundImage: `linear-gradient(to right, rgba(${colors.neutralRgb.base}, 0.3), transparent)` }} />
            <div className="absolute bottom-0 right-0 h-8 w-px" style={{ backgroundImage: `linear-gradient(to top, rgba(${colors.neutralRgb.base}, 0.3), transparent)` }} />
            <div className="absolute bottom-0 right-0 h-px w-8" style={{ backgroundImage: `linear-gradient(to left, rgba(${colors.neutralRgb.base}, 0.3), transparent)` }} />
          </>
        )}

        {/* Header */}
        {(title || cornerLabel) && (
          <div className="mb-3 flex items-start justify-between">
            {title && (
              <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: colors.text.primary }}>
                {title}
              </h3>
            )}
            {cornerLabel && (
              <div className="text-xs" style={{ color: colors.neutral.v3 }}>{cornerLabel}</div>
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
