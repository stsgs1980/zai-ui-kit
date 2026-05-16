/**
 * Badge - Small label/tag component for status or categorization
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'
import type { SizeSmMdLg, Variant, WithChildren } from '../utils/types'

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

/** Map variant → text color from palette */
const variantTextMap: Record<Variant, string> = {
  primary: colors.neutral.base,    // #E6E6E6
  secondary: colors.neutral.v1,    // #CCCCCC
  success: colors.neutral.v2,      // #BFBFBF
  warning: colors.neutral.v3,      // #878992
  danger: colors.neutral.v4,       // #5C6070
  info: colors.neutral.v1,         // #CCCCCC
  neutral: colors.neutral.v3,      // #878992
}

const variantDotMap: Record<Variant, string> = {
  primary: colors.neutral.base,
  secondary: colors.neutral.v1,
  success: colors.neutral.v2,
  warning: colors.neutral.v3,
  danger: colors.neutral.v4,
  info: colors.neutral.v1,
  neutral: colors.neutral.v3,
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
          clickable && 'cursor-pointer transition-colors hover:opacity-80',
          className
        )}
        style={{
          color: variantTextMap[variant],
          borderColor: glow ? color ?? variantDotMap[variant] : undefined,
          ...(glow ? { '--tw-ring-color': color ?? variantDotMap[variant] } as React.CSSProperties : {}),
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
