/**
 * Badge - Small label/tag component for status or categorization
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
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
  sm: 'px-2 py-0.5 text-xs',         // TODO: Add token for 2px/0.5px padding
  md: 'px-2.5 py-1 text-sm',         // TODO: Add token for 2.5px/1px padding
  lg: 'px-3 py-1.5 text-base',       // px-3 = 12px = space-3, py-1.5 = 6px — TODO for 1.5
} as const

/** Map variant → text color from token */
const variantTextMap: Record<Variant, string> = {
  primary: tv('COLOR_NEUTRAL_BASE'),
  secondary: tv('COLOR_NEUTRAL_V1'),
  success: tv('COLOR_NEUTRAL_V2'),
  warning: tv('COLOR_NEUTRAL_V3'),
  danger: tv('COLOR_NEUTRAL_V4'),
  info: tv('COLOR_NEUTRAL_V1'),
  neutral: tv('COLOR_NEUTRAL_V3'),
}

const variantDotMap: Record<Variant, string> = {
  primary: tv('COLOR_NEUTRAL_BASE'),
  secondary: tv('COLOR_NEUTRAL_V1'),
  success: tv('COLOR_NEUTRAL_V2'),
  warning: tv('COLOR_NEUTRAL_V3'),
  danger: tv('COLOR_NEUTRAL_V4'),
  info: tv('COLOR_NEUTRAL_V1'),
  neutral: tv('COLOR_NEUTRAL_V3'),
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
          'inline-flex items-center gap-1.5 rounded-[var(--zai-radius-full)] font-medium',  // TODO: Add token for 1.5 gap (6px)
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
            className="h-1.5 w-1.5 rounded-[var(--zai-radius-full)]"  // TODO: Add token for dot size in badge
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
