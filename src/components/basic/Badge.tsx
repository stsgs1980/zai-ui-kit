/**
 * Badge - Small label/tag component for status or categorization
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { colors } from '../../theme/colors'
import type { SizeSmMdLg, Variant, WithChildren } from '../../utils/types'

export interface BadgeProps extends WithChildren {
  /** Color variant */
  variant?: Variant
  /** Size variant */
  size?: SizeSmMdLg
  /** Enable glowing border effect */
  glow?: boolean
  /** Custom color override */
  color?: string
  /** Icon prefix */
  icon?: ReactNode
  /** Dotted indicator */
  dot?: boolean
  /** Dot status (overrides variant for dot) */
  dotStatus?: Variant
  /** Clickable style */
  clickable?: boolean
  /** Click handler */
  onClick?: () => void
  /** Additional class names */
  className?: string
}

const sizeMap = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
} as const

const variantBgMap: Record<Variant, string> = {
  primary: 'bg-blue-500/20 text-blue-400',
  secondary: 'bg-purple-500/20 text-purple-400',
  success: 'bg-green-500/20 text-green-400',
  warning: 'bg-yellow-500/20 text-yellow-400',
  danger: 'bg-red-500/20 text-red-400',
  info: 'bg-cyan-500/20 text-cyan-400',
  neutral: 'bg-gray-500/20 text-gray-400',
}

const variantDotMap: Record<Variant, string> = {
  primary: colors.semantic.primary,
  secondary: colors.semantic.secondary,
  success: colors.semantic.positive,
  warning: colors.semantic.caution,
  danger: colors.semantic.danger,
  info: colors.status.info,
  neutral: colors.status.neutral,
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      glow = false,
      color,
      icon,
      dot = false,
      dotStatus,
      clickable = false,
      onClick,
      className,
      children,
    },
    ref
  ) => {
    const dotColor = color ?? variantDotMap[dotStatus ?? variant]

    return (
      <span
        ref={ref}
        onClick={onClick}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full font-medium',
          sizeMap[size],
          variantBgMap[variant],
          glow && 'ring-1 ring-inset',
          clickable && 'cursor-pointer transition-colors hover:opacity-80',
          className
        )}
        style={{
          borderColor: glow ? color ?? variantDotMap[variant] : undefined,
        }}
      >
        {dot && (
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: dotColor }}
          />
        )}
        {icon}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
