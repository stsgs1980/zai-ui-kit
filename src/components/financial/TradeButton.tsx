/**
 * TradeButton - BUY/SELL trading buttons with gradient and hover effects
 * Extracted from CHROMEDNA patterns
 */

import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

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

const buyStyles = `
  bg-gradient-to-br from-green-500/25 to-green-500/12
  border border-green-500/30
  text-green-400
  shadow-[inset_0_1px_0_rgba(74,222,128,0.1)]
  hover:from-green-500/35 hover:to-green-500/18
  hover:border-green-500/50
  hover:shadow-[0_0_12px_rgba(34,197,94,0.15),inset_0_1px_0_rgba(74,222,128,0.15)]
  hover:-translate-y-px
  active:translate-y-0
  active:from-green-500/40 active:to-green-500/20
  disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none
`

const sellStyles = `
  bg-gradient-to-br from-red-500/25 to-red-500/12
  border border-red-500/30
  text-red-400
  shadow-[inset_0_1px_0_rgba(248,113,113,0.1)]
  hover:from-red-500/35 hover:to-red-500/18
  hover:border-red-500/50
  hover:shadow-[0_0_12px_rgba(239,68,68,0.15),inset_0_1px_0_rgba(248,113,113,0.15)]
  hover:-translate-y-px
  active:translate-y-0
  active:from-red-500/40 active:to-red-500/20
  disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none
`

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
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'transition-all duration-200 ease-out',
          'font-semibold uppercase tracking-wide',
          sizeStyles[size],
          side === 'BUY' ? buyStyles : sellStyles,
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children || side}
      </button>
    )
  }
)

TradeButton.displayName = 'TradeButton'
