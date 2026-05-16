/**
 * GlowButton - Button with animated glow effect
 * Extracted from CHROMEDNA patterns
 *
 * Tokens used for text colors, radius, motion. RGB-based rgba() kept
 * with TODO until per-alpha neutral tokens exist.
 */

import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import { colors } from '../theme/colors'  // TODO: Remove when neutral RGB tokens are available

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
  amber: 'base',
  green: 'v2',
  red: 'v4',
  blue: 'v1',
}

/** Map variant key → token key for text color */
const neutralTokenKey: Record<'base' | 'v1' | 'v2' | 'v3' | 'v4', string> = {
  base: tv('COLOR_NEUTRAL_BASE'),
  v1: tv('COLOR_NEUTRAL_V1'),
  v2: tv('COLOR_NEUTRAL_V2'),
  v3: tv('COLOR_NEUTRAL_V3'),
  v4: tv('COLOR_NEUTRAL_V4'),
}

/** Map variant → text color key (may differ from border/bg) */
const variantTextKey: Record<GlowVariant, 'base' | 'v1' | 'v2' | 'v3' | 'v4'> = {
  amber: 'base',
  green: 'v2',
  red: 'v3',
  blue: 'v1',
}

/** Build CSS custom properties for a given variant */
function getVariantCSSProps(variant: GlowVariant): React.CSSProperties {
  const k = variantKey[variant]
  const tk = variantTextKey[variant]
  // TODO: Replace neutralRgb with token when RGB tokens are available
  const rgb = colors.neutralRgb[k]

  return {
    '--btn-bg': `rgba(${rgb}, 0.15)`,
    '--btn-text': neutralTokenKey[tk],
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
  sm: 'px-2.5 py-1.5 text-xs gap-1.5',   // TODO: Add tokens for 2.5/1.5/1.5 padding/gap
  md: 'px-[var(--zai-space-3)] py-[var(--zai-space-element-xs)] text-sm gap-[var(--zai-space-element-sm)]',
  lg: 'px-[var(--zai-space-5)] py-2.5 text-base gap-[var(--zai-space-element-sm)]',   // TODO: Add token for 2.5 py
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
    ;(cssVars as Record<string, string>)['--glow-intensity'] = String(intensity)

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-[var(--zai-radius-md)]',
          'transition-all',
          'bg-[var(--btn-bg)] text-[var(--btn-text)] border-[var(--btn-border)]',
          'shadow-[var(--btn-shadow)]',
          'hover:bg-[var(--btn-hover-bg)] hover:border-[var(--btn-hover-border)] hover:shadow-[var(--btn-hover-shadow)]',
          active && 'shadow-[var(--btn-active-shadow)]',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        style={{
          ...cssVars,
          transitionDuration: tv('DURATION_FAST'),
          transitionTimingFunction: tv('EASING_OUT'),
        }}
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
