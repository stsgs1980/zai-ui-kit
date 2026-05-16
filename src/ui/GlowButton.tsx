/**
 * GlowButton - Button with animated glow effect
 * Extracted from CHROMEDNA patterns
 *
 * Colors sourced from centralized palette (colors.neutral.*)
 */

import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'

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

/** Map variant → neutral palette key for text/border tint */
const variantKey: Record<GlowVariant, 'base' | 'v1' | 'v2' | 'v3' | 'v4'> = {
  amber: 'base',   // #E6E6E6
  green: 'v2',     // #BFBFBF
  red: 'v4',       // #5C6070
  blue: 'v1',      // #CCCCCC
}

/** Map variant → text color key (may differ from border/bg) */
const variantTextKey: Record<GlowVariant, 'base' | 'v1' | 'v2' | 'v3' | 'v4'> = {
  amber: 'base',   // #E6E6E6
  green: 'v2',     // #BFBFBF
  red: 'v3',       // #878992
  blue: 'v1',      // #CCCCCC
}

/** Build CSS custom properties for a given variant */
function getVariantCSSProps(variant: GlowVariant): React.CSSProperties {
  const k = variantKey[variant]
  const tk = variantTextKey[variant]
  const rgb = colors.neutralRgb[k]
  const textRgb = colors.neutralRgb[tk]

  return {
    '--btn-bg': `rgba(${rgb}, 0.15)`,
    '--btn-text': colors.neutral[tk],
    '--btn-border': `rgba(${rgb}, 0.3)`,
    '--btn-shadow': `0 0 8px rgba(${rgb}, 0.15)`,
    '--btn-hover-bg': `rgba(${rgb}, 0.25)`,
    '--btn-hover-border': `rgba(${rgb}, 0.5)`,
    '--btn-hover-shadow': `0 0 12px rgba(${rgb}, 0.25)`,
    '--btn-active-shadow': `0 0 12px rgba(${rgb}, 0.25)`,
    '--glow-intensity': '1',
  } as React.CSSProperties
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
    const cssVars = getVariantCSSProps(variant)
    cssVars['--glow-intensity'] = String(intensity)

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-md',
          'transition-all duration-200 ease-out',
          'bg-[var(--btn-bg)] text-[var(--btn-text)] border-[var(--btn-border)]',
          'shadow-[var(--btn-shadow)]',
          'hover:bg-[var(--btn-hover-bg)] hover:border-[var(--btn-hover-border)] hover:shadow-[var(--btn-hover-shadow)]',
          active && 'shadow-[var(--btn-active-shadow)]',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        style={cssVars}
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
