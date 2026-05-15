/**
 * GlowButton - Button with animated glow effect
 * Extracted from CHROMEDNA patterns
 */

import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export type GlowVariant = 'amber' | 'green' | 'red' | 'blue'

export interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button content */
  children: ReactNode
  /** Glow color variant */
  variant?: GlowVariant
  /** Button size */
  size?: 'sm' | 'md' | 'lg'
  /** Glow intensity (0-1) */
  intensity?: number
  /** Active state (forces glow) */
  active?: boolean
  /** Icon prefix */
  icon?: ReactNode
  /** Icon suffix */
  iconSuffix?: ReactNode
  /** Full width */
  fullWidth?: boolean
}

const variantStyles: Record<GlowVariant, string> = {
  amber: `
    bg-amber-500/15 text-amber-400 border border-amber-500/30
    hover:bg-amber-500/25 hover:border-amber-500/50
    shadow-[0_0_8px_rgba(245,158,11,0.15)]
    hover:shadow-[0_0_12px_rgba(245,158,11,0.25)]
    inset-shadow-[0_1px_0_rgba(245,158,11,0.1)]
  `,
  green: `
    bg-green-500/15 text-green-400 border border-green-500/30
    hover:bg-green-500/25 hover:border-green-500/50
    shadow-[0_0_8px_rgba(34,197,94,0.15)]
    hover:shadow-[0_0_12px_rgba(34,197,94,0.25)]
    inset-shadow-[0_1px_0_rgba(34,197,94,0.1)]
  `,
  red: `
    bg-red-500/15 text-red-400 border border-red-500/30
    hover:bg-red-500/25 hover:border-red-500/50
    shadow-[0_0_8px_rgba(239,68,68,0.15)]
    hover:shadow-[0_0_12px_rgba(239,68,68,0.25)]
    inset-shadow-[0_1px_0_rgba(239,68,68,0.1)]
  `,
  blue: `
    bg-blue-500/15 text-blue-400 border border-blue-500/30
    hover:bg-blue-500/25 hover:border-blue-500/50
    shadow-[0_0_8px_rgba(59,130,246,0.15)]
    hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]
    inset-shadow-[0_1px_0_rgba(59,130,246,0.1)]
  `,
}

const activeVariantStyles: Record<GlowVariant, string> = {
  amber: 'shadow-[0_0_12px_rgba(245,158,11,0.25),inset_0_1px_0_rgba(245,158,11,0.15)]',
  green: 'shadow-[0_0_12px_rgba(34,197,94,0.25),inset_0_1px_0_rgba(34,197,94,0.15)]',
  red: 'shadow-[0_0_12px_rgba(239,68,68,0.25),inset_0_1px_0_rgba(239,68,68,0.15)]',
  blue: 'shadow-[0_0_12px_rgba(59,130,246,0.25),inset_0_1px_0_rgba(59,130,246,0.15)]',
}

const sizeStyles = {
  sm: 'px-2.5 py-1.5 text-xs gap-1.5',
  md: 'px-3 py-2 text-sm gap-2',
  lg: 'px-4 py-2.5 text-base gap-2',
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  (
    {
      children,
      variant = 'amber',
      size = 'md',
      intensity = 1,
      active = false,
      icon,
      iconSuffix,
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-md',
          'transition-all duration-200 ease-out',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
          sizeStyles[size],
          variantStyles[variant],
          active && activeVariantStyles[variant],
          fullWidth && 'w-full',
          className
        )}
        style={{ '--glow-intensity': intensity } as React.CSSProperties}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {iconSuffix && <span className="flex-shrink-0">{iconSuffix}</span>}
      </button>
    )
  }
)

GlowButton.displayName = 'GlowButton'
