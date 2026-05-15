/**
 * InfoCard - Card component for displaying information sections
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { Divider } from '../basic/Divider'
import type { WithChildren, WithClassName, Variant } from '../../utils/types'

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

const variantBorderMap: Record<Variant, string> = {
  primary: 'border-blue-500/30',
  secondary: 'border-purple-500/30',
  success: 'border-green-500/30',
  warning: 'border-yellow-500/30',
  danger: 'border-red-500/30',
  info: 'border-cyan-500/30',
  neutral: 'border-gray-500/30',
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
          'rounded-lg border bg-gray-900/50 backdrop-blur-sm',
          variantBorderMap[variant],
          sizePaddingMap[size],
          hoverable && 'transition-all duration-200 hover:border-opacity-60 hover:shadow-lg cursor-pointer',
          glow && 'shadow-[0_0_15px_rgba(59,130,246,0.15)]',
          onClick && 'cursor-pointer',
          className
        )}
      >
        {(title || icon || actions) && (
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              {icon && (
                <div className="flex-shrink-0 text-gray-400">{icon}</div>
              )}
              <div>
                {title && (
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                )}
                {subtitle && (
                  <p className="text-sm text-gray-400">{subtitle}</p>
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
            <div className="h-4 w-3/4 rounded bg-gray-700" />
            <div className="h-4 w-1/2 rounded bg-gray-700" />
          </div>
        ) : (
          children
        )}

        {footer && (
          <>
            <Divider className="my-3" />
            <div className="text-sm text-gray-400">{footer}</div>
          </>
        )}
      </div>
    )
  }
)

InfoCard.displayName = 'InfoCard'

export default InfoCard
