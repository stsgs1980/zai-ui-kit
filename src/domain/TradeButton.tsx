/**
 * TradeButton - BUY/SELL trading buttons with gradient and hover effects
 * Extracted from CHROMEDNA patterns
 *
 * Colors sourced from centralized palette (colors.neutral.*)
 */

import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'

export type TradeSide = 'BUY' | 'SELL'

export interface TradeButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Trade side (BUY or SELL) */
  side: TradeSide
  /** Button content (defaults to side label) */
  children?: ReactNode
  /** Button size */
  size?: 'sm' | 'md' | 'lg'
  /** Show flash animation on click */
  flash?: boolean
  /** Full width */
  fullWidth?: boolean
  /** Icon */
  icon?: ReactNode
}

/** Build CSS custom properties for BUY side */
function getBuyCSSProps(): React.CSSProperties {
  const rgb = colors.neutralRgb.base // #E6E6E6 → 230, 230, 230
  return {
    '--btn-bg': `rgba(${rgb}, 0.15)`,
    '--btn-text': colors.neutral.base,
    '--btn-border': `rgba(${rgb}, 0.3)`,
    '--btn-shadow': `inset 0 1px 0 rgba(${rgb}, 0.1)`,
    '--btn-hover-bg': `rgba(${rgb}, 0.25)`,
    '--btn-hover-border': `rgba(${rgb}, 0.5)`,
    '--btn-hover-shadow': `0 0 12px rgba(${rgb}, 0.12), inset 0 1px 0 rgba(${rgb}, 0.15)`,
    '--btn-active-bg': `rgba(${rgb}, 0.3)`,
  } as React.CSSProperties
}

/** Build CSS custom properties for SELL side */
function getSellCSSProps(): React.CSSProperties {
  const rgb = colors.neutralRgb.v4 // #5C6070 → 92, 96, 112
  return {
    '--btn-bg': `rgba(${rgb}, 0.15)`,
    '--btn-text': colors.neutral.v3,     // #878992
    '--btn-border': `rgba(${rgb}, 0.3)`,
    '--btn-shadow': `inset 0 1px 0 rgba(${rgb}, 0.1)`,
    '--btn-hover-bg': `rgba(${rgb}, 0.25)`,
    '--btn-hover-border': `rgba(${rgb}, 0.5)`,
    '--btn-hover-shadow': `0 0 12px rgba(${rgb}, 0.12), inset 0 1px 0 rgba(${rgb}, 0.15)`,
    '--btn-active-bg': `rgba(${rgb}, 0.3)`,
  } as React.CSSProperties
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs font-semibold rounded',
  md: 'px-4 py-2 text-sm font-semibold rounded-md',
  lg: 'px-6 py-2.5 text-base font-semibold rounded-lg',
}

export const TradeButton = forwardRef<HTMLButtonElement, TradeButtonProps>(
  (
    {
      side,
      children,
      size = 'md',
      fullWidth = false,
      icon,
      className,
      ...props
    },
    ref
  ) => {
    const cssVars = side === 'BUY' ? getBuyCSSProps() : getSellCSSProps()

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'transition-all duration-200 ease-out',
          'font-semibold uppercase tracking-wide',
          'bg-[var(--btn-bg)] text-[var(--btn-text)] border border-[var(--btn-border)]',
          'shadow-[var(--btn-shadow)]',
          'hover:bg-[var(--btn-hover-bg)] hover:border-[var(--btn-hover-border)] hover:shadow-[var(--btn-hover-shadow)]',
          'hover:-translate-y-px',
          'active:translate-y-0 active:bg-[var(--btn-active-bg)]',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none',
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        style={cssVars}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children || side}
      </button>
    )
  }
)

TradeButton.displayName = 'TradeButton'
