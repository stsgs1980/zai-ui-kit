/**
 * GlowIcon - Icon wrapper with animated glow effect
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { colors } from '../../theme/colors'
import type { Size, Variant, WithClassName } from '../../utils/types'

export interface GlowIconProps extends WithClassName {
  /** Icon element */
  icon: ReactNode
  /** Size variant */
  size?: Size
  /** Color variant */
  variant?: Variant
  /** Custom color override */
  color?: string
  /** Enable glow animation */
  glow?: boolean
  /** Pulse animation */
  pulse?: boolean
  /** Background circle */
  background?: boolean
  /** Background opacity (0-1) */
  backgroundOpacity?: number
}

const sizeMap = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
} as const

const iconSizeMap = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
} as const

const variantColorMap: Record<Variant, string> = {
  primary: colors.semantic.primary,
  secondary: colors.semantic.secondary,
  success: colors.semantic.positive,
  warning: colors.semantic.caution,
  danger: colors.semantic.danger,
  info: colors.status.info,
  neutral: colors.text.muted,
}

export const GlowIcon = forwardRef<HTMLSpanElement, GlowIconProps>(
  (
    {
      icon,
      size = 'md',
      variant = 'primary',
      color,
      glow = true,
      pulse = false,
      background = false,
      backgroundOpacity = 0.2,
      className,
    },
    ref
  ) => {
    const iconColor = color ?? variantColorMap[variant]

    return (
      <span
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center',
          sizeMap[size],
          className
        )}
      >
        {/* Glow layer */}
        {glow && (
          <span
            className={cn(
              'absolute inset-0 rounded-full blur-sm',
              pulse && 'animate-pulse'
            )}
            style={{
              backgroundColor: iconColor,
              opacity: 0.4,
            }}
          />
        )}

        {/* Background */}
        {background && (
          <span
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: iconColor,
              opacity: backgroundOpacity,
            }}
          />
        )}

        {/* Icon */}
        <span
          className={cn('relative z-10', iconSizeMap[size])}
          style={{ color: iconColor }}
        >
          {icon}
        </span>
      </span>
    )
  }
)

GlowIcon.displayName = 'GlowIcon'

export default GlowIcon
