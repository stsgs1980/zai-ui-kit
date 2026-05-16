/**
 * InfoCard - Card component for displaying information sections
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'
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
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
}

/** Map variant → neutral palette key for border tint */
const variantBorderKey: Record<Variant, 'base' | 'v1' | 'v2' | 'v3' | 'v4'> = {
  primary: 'base',
  secondary: 'v1',
  success: 'v2',
  warning: 'v3',
  danger: 'v4',
  info: 'v1',
  neutral: 'v3',
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
          'rounded-lg border backdrop-blur-sm',
          sizePaddingMap[size],
          hoverable && 'transition-all duration-200 hover:border-opacity-60 hover:shadow-lg cursor-pointer',
          glow && 'shadow-[0_0_15px_var(--info-glow)]',
          onClick && 'cursor-pointer',
          className
        )}
        style={{
          '--info-glow': `rgba(${colors.neutralRgb.base}, 0.08)`,
          borderColor: `rgba(${colors.neutralRgb[variantBorderKey[variant]]}, 0.25)`,
          backgroundColor: colors.background.primaryA50,
        } as React.CSSProperties}
      >
        {(title || icon || actions) && (
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              {icon && (
                <div className="flex-shrink-0" style={{ color: colors.text.secondary }}>{icon}</div>
              )}
              <div>
                {title && (
                  <h3 className="text-base font-semibold" style={{ color: colors.text.primary }}>{title}</h3>
                )}
                {subtitle && (
                  <p className="text-sm" style={{ color: colors.text.secondary }}>{subtitle}</p>
                )}
              </div>
            </div>
            {actions && (
              <div className="flex-shrink-0">{actions}</div>
            )}
          </div>
        )}

        {(title || icon || actions) && children && (
          <Divider className="my-3" />
        )}

        {loading ? (
          <div className="animate-pulse space-y-2">
            <div className="h-4 w-3/4 rounded" style={{ backgroundColor: colors.neutral.v4 }} />
            <div className="h-4 w-1/2 rounded" style={{ backgroundColor: colors.neutral.v4 }} />
          </div>
        ) : (
          children
        )}

        {footer && (
          <>
            <Divider className="my-3" />
            <div className="text-sm" style={{ color: colors.text.secondary }}>{footer}</div>
          </>
        )}
      </div>
    )
  }
)

InfoCard.displayName = 'InfoCard'

export default InfoCard
