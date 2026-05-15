/**
 * HUDCard - HUD-style card with animated borders and glow
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import type { WithChildren, WithClassName, Variant } from '../../utils/types'

export interface HUDCardProps extends WithChildren, WithClassName {
  /** Card title */
  title?: ReactNode
  /** Corner label (like a badge) */
  cornerLabel?: ReactNode
  /** Color variant */
  variant?: Variant
  /** Enable animated border */
  animated?: boolean
  /** Enable glow effect */
  glow?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Click handler */
  onClick?: () => void
}

const sizePaddingMap = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-5',
  xl: 'p-6',
}

const variantGlowMap: Record<Variant, string> = {
  primary: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]',
  secondary: 'shadow-[0_0_20px_rgba(139,92,246,0.15)]',
  success: 'shadow-[0_0_20px_rgba(34,197,94,0.15)]',
  warning: 'shadow-[0_0_20px_rgba(245,158,11,0.15)]',
  danger: 'shadow-[0_0_20px_rgba(239,68,68,0.15)]',
  info: 'shadow-[0_0_20px_rgba(6,182,212,0.15)]',
  neutral: 'shadow-[0_0_20px_rgba(107,114,128,0.15)]',
}

export const HUDCard = forwardRef<HTMLDivElement, HUDCardProps>(
  (
    {
      title,
      cornerLabel,
      variant = 'primary',
      animated = true,
      glow = true,
      size = 'md',
      onClick,
      className,
      children,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          'relative overflow-hidden rounded-lg border border-gray-700/50 bg-gray-900/80 backdrop-blur-sm',
          sizePaddingMap[size],
          glow && variantGlowMap[variant],
          onClick && 'cursor-pointer transition-transform hover:scale-[1.01]',
          className
        )}
      >
        {/* Animated corner accents */}
        {animated && (
          <>
            <div className="absolute left-0 top-0 h-8 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />
            <div className="absolute left-0 top-0 h-px w-8 bg-gradient-to-r from-blue-500/50 to-transparent" />
            <div className="absolute bottom-0 right-0 h-8 w-px bg-gradient-to-t from-blue-500/50 to-transparent" />
            <div className="absolute bottom-0 right-0 h-px w-8 bg-gradient-to-l from-blue-500/50 to-transparent" />
          </>
        )}

        {/* Header */}
        {(title || cornerLabel) && (
          <div className="mb-3 flex items-start justify-between">
            {title && (
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                {title}
              </h3>
            )}
            {cornerLabel && (
              <div className="text-xs text-gray-500">{cornerLabel}</div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

HUDCard.displayName = 'HUDCard'

export default HUDCard
