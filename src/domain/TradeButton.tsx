/**
 * TradeButton - BUY/SELL trading buttons with gradient and hover effects
 * Extracted from CHROMEDNA patterns
 *
 * Colors sourced from token system (tv() + color-mix())
 */

import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'

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
  return {
    '--btn-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 15%, transparent)`,
    '--btn-text': tv('COLOR_NEUTRAL_BASE'),
    '--btn-border': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 30%, transparent)`,
    '--btn-shadow': `inset 0 1px 0 color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 10%, transparent)`,
    '--btn-hover-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 25%, transparent)`,
    '--btn-hover-border': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 50%, transparent)`,
    '--btn-hover-shadow': `0 0 12px color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 12%, transparent), inset 0 1px 0 color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 15%, transparent)`,
    '--btn-active-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 30%, transparent)`,
  } as React.CSSProperties
}

/** Build CSS custom properties for SELL side */
function getSellCSSProps(): React.CSSProperties {
  return {
    '--btn-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 15%, transparent)`,
    '--btn-text': tv('COLOR_NEUTRAL_V3'),
    '--btn-border': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 30%, transparent)`,
    '--btn-shadow': `inset 0 1px 0 color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 10%, transparent)`,
    '--btn-hover-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 25%, transparent)`,
    '--btn-hover-border': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 50%, transparent)`,
    '--btn-hover-shadow': `0 0 12px color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 12%, transparent), inset 0 1px 0 color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 15%, transparent)`,
    '--btn-active-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 30%, transparent)`,
  } as React.CSSProperties
}

const sizeStyles = {
  sm: 'px-[var(--zai-space-3)] py-[var(--zai-space-element-sm)] text-xs font-semibold rounded-[var(--zai-radius-default)]',
  md: 'px-[var(--zai-space-card-md)] py-[var(--zai-space-2)] text-sm font-semibold rounded-[var(--zai-radius-md)]',
  lg: 'px-[var(--zai-space-card-lg)] py-[var(--zai-space-element-sm)] text-base font-semibold rounded-[var(--zai-radius-lg)]',
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
          'inline-flex items-center justify-center gap-[var(--zai-space-element-sm)]',
          'transition-all duration-[var(--zai-duration-fast)] ease-[var(--zai-easing-out)]',
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
