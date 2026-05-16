/**
 * InfoCard - Card component for displaying information sections
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import { Divider } from '../ui/Divider'
import type { WithChildren, WithClassName, Variant } from '../utils/types'

export interface InfoCardProps extends WithChildren, WithClassName {
  /** Card title */
  title?: ReactNode
  /** Card subtitle */
  subtitle?: ReactNode
  /** Icon for the card header */
  icon?: ReactNode
  /** Action buttons in header */
  actions?: ReactNode
  /** Footer content */
  footer?: ReactNode
  /** Card variant */
  variant?: Variant
  /** Enable hover effects */
  hoverable?: boolean
  /** Enable glow border */
  glow?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Loading state */
  loading?: boolean
  /** Click handler */
  onClick?: () => void
}

const sizePaddingMap = {
  sm: 'p-[var(--zai-space-card-sm)]',
  md: 'p-[var(--zai-space-card-md)]',
  lg: 'p-[var(--zai-space-card-lg)]',
}

/** Map variant → token-based border color with alpha */
const variantBorderMap: Record<Variant, string> = {
  primary: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 25%, transparent)`,
  secondary: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V1')} 25%, transparent)`,
  success: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V2')} 25%, transparent)`,
  warning: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V3')} 25%, transparent)`,
  danger: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 25%, transparent)`,
  info: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V1')} 25%, transparent)`,
  neutral: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V3')} 25%, transparent)`,
}

export const InfoCard = forwardRef<HTMLDivElement, InfoCardProps>(
  (
    {
      title,
      subtitle,
      icon,
      actions,
      footer,
      variant = 'primary',
      hoverable = false,
      glow = false,
      size = 'md',
      loading = false,
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
          'rounded-[var(--zai-radius-lg)] border backdrop-blur-sm',
          sizePaddingMap[size],
          hoverable && `transition-all duration-[var(--zai-duration-fast)] hover:border-opacity-60 hover:shadow-lg cursor-pointer`,
          glow && 'shadow-[0_0_15px_var(--info-glow)]',
          onClick && 'cursor-pointer',
          className
        )}
        style={{
          // TODO: TOKEN-SEC — no token for variant glow; consider adding --zai-glow-* per variant
          '--info-glow': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 8%, transparent)`,
          borderColor: variantBorderMap[variant],
          backgroundColor: tv('COLOR_BG_CARD'),
        } as React.CSSProperties}
      >
        {(title || icon || actions) && (
          <div className="flex items-start justify-between gap-[var(--zai-space-element-lg)]">
            <div className="flex items-center gap-[var(--zai-space-element-md)]">
              {icon && (
                <div className="flex-shrink-0" style={{ color: tv('COLOR_TEXT_SECONDARY') }}>{icon}</div>
              )}
              <div>
                {title && (
                  <h3 className="text-base font-semibold" style={{ color: tv('COLOR_TEXT_PRIMARY') }}>{title}</h3>
                )}
                {subtitle && (
                  <p className="text-sm" style={{ color: tv('COLOR_TEXT_SECONDARY') }}>{subtitle}</p>
                )}
              </div>
            </div>
            {actions && (
              <div className="flex-shrink-0">{actions}</div>
            )}
          </div>
        )}

        {(title || icon || actions) && children && (
          <Divider className="my-[var(--zai-space-element-md)]" />
        )}

        {loading ? (
          <div className="animate-pulse space-y-[var(--zai-space-element-sm)]">
            <div className="h-4 w-3/4 rounded" style={{ backgroundColor: tv('COLOR_NEUTRAL_V4') }} />
            <div className="h-4 w-1/2 rounded" style={{ backgroundColor: tv('COLOR_NEUTRAL_V4') }} />
          </div>
        ) : (
          children
        )}

        {footer && (
          <>
            <Divider className="my-[var(--zai-space-element-md)]" />
            <div className="text-sm" style={{ color: tv('COLOR_TEXT_SECONDARY') }}>{footer}</div>
          </>
        )}
      </div>
    )
  }
)

InfoCard.displayName = 'InfoCard'

export default InfoCard
