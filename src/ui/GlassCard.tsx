/**
 * GlassCard - Glassmorphism card component with blur and transparency
 * Extracted from CHROMEDNA patterns
 *
 * Tokens used for glass effects, text colors, radius, motion.
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import type { WithChildren, WithClassName, Variant } from '../utils/types'
import {
  getGlassCSSProps,
  getGlowCSSProps,
  glassBlurStyles,
  paddingStyles,
} from './GlassCard.helpers'
import type { GlassVariant } from './GlassCard.helpers'

export type { GlassVariant }

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
  glowVariant?: Variant | 'amber' | 'green' | 'red' | 'blue' | 'error'
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /** Add noise texture overlay */
  noise?: boolean
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
    const glassCSS = getGlassCSSProps(variant)
    const glowCSS = (hoverable && glow) ? getGlowCSSProps(glowVariant) : {}

    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-[var(--zai-radius-lg)] overflow-hidden',
          'bg-[var(--glass-bg)] border border-[var(--glass-border)]',
          glassBlurStyles[variant],
          paddingStyles[padding],
          hoverable && 'transition-all',
          hoverable && glow && 'hover:border-[var(--glow-border-hover)] hover:shadow-[var(--glow-shadow-hover)]',
          className
        )}
        style={{
          ...glassCSS,
          ...glowCSS,
          ...(variant !== 'default' ? { boxShadow: 'var(--glass-shadow)' } : {}),
          ...(hoverable ? { transitionDuration: tv('DURATION_NORMAL'), transitionTimingFunction: tv('EASING_OUT') } : {}),
        }}
      >
        {/* Noise overlay */}
        {noise && (
          <div
            className="absolute inset-0 rounded-[var(--zai-radius-lg)] opacity-[0.018] pointer-events-none z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '128px 128px',
            }}
          />
        )}

        {/* Header */}
        {(title || actions) && (
          <div className="flex items-center justify-between mb-[var(--zai-space-5)]">
            {title && (
              <h3 className="text-sm font-semibold" style={{ color: tv('COLOR_TEXT_PRIMARY') }}>{title}</h3>
            )}
            {actions && <div className="flex items-center gap-[var(--zai-space-element-sm)]">{actions}</div>}
          </div>
        )}

        {/* Content */}
        {children}

        {/* Footer */}
        {footer && (
          <div
            className="mt-[var(--zai-space-5)] pt-[var(--zai-space-5)]"
            style={{ borderTopColor: tv('GLASS_BORDER'), borderTopWidth: 1 }}
          >
            {footer}
          </div>
        )}
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'
