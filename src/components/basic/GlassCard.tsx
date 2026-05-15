/**
 * GlassCard - Glassmorphism card component with blur and transparency
 * Extracted from CHROMEDNA patterns
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import type { WithChildren, WithClassName, Variant } from '../../utils/types'

export type GlassVariant = 'default' | 'enhanced' | 'panel'

export interface GlassCardProps extends WithChildren, WithClassName {
  /** Glass style variant */
  variant?: GlassVariant
  /** Card title */
  title?: ReactNode
  /** Header actions */
  actions?: ReactNode
  /** Footer content */
  footer?: ReactNode
  /** Enable hover effects */
  hoverable?: boolean
  /** Enable border glow */
  glow?: boolean
  /** Glow color variant */
  glowVariant?: Variant
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /** Add noise texture overlay */
  noise?: boolean
}

const glassStyles: Record<GlassVariant, string> = {
  default: `
    bg-[rgba(3,3,8,0.8)]
    backdrop-blur-xl
    border border-white/[0.06]
  `,
  enhanced: `
    bg-[rgba(3,3,8,0.85)]
    backdrop-blur-[20px] backdrop-saturate-[1.2]
    border border-white/[0.06]
    shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,0,0,0.3)]
  `,
  panel: `
    bg-[rgba(3,3,8,0.82)]
    backdrop-blur-[24px] backdrop-saturate-[1.3]
    border border-white/[0.05]
    shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_8px_32px_rgba(0,0,0,0.5)]
  `,
}

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
}

const glowVariantStyles: Record<Variant, string> = {
  default: 'hover:border-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.05)]',
  amber: 'hover:border-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]',
  green: 'hover:border-green-500/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.08)]',
  red: 'hover:border-red-500/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.08)]',
  blue: 'hover:border-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]',
  success: 'hover:border-green-500/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.08)]',
  warning: 'hover:border-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]',
  error: 'hover:border-red-500/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.08)]',
  info: 'hover:border-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]',
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      variant = 'default',
      title,
      actions,
      footer,
      hoverable = false,
      glow = false,
      glowVariant = 'amber',
      padding = 'md',
      noise = false,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-lg overflow-hidden',
          glassStyles[variant],
          paddingStyles[padding],
          hoverable && 'transition-all duration-300',
          hoverable && glow && glowVariantStyles[glowVariant],
          className
        )}
      >
        {/* Noise overlay */}
        {noise && (
          <div
            className="absolute inset-0 rounded-lg opacity-[0.018] pointer-events-none z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '128px 128px',
            }}
          />
        )}

        {/* Header */}
        {(title || actions) && (
          <div className="flex items-center justify-between mb-4">
            {title && (
              <h3 className="text-sm font-semibold text-white/90">{title}</h3>
            )}
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </div>
        )}

        {/* Content */}
        {children}

        {/* Footer */}
        {footer && (
          <div className="mt-4 pt-4 border-t border-white/[0.06]">{footer}</div>
        )}
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'
