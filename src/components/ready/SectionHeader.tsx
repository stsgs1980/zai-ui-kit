/**
 * SectionHeader - Consistent section header with optional actions
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { Divider } from '../basic/Divider'
import type { WithChildren, WithClassName, SizeSmMdLg } from '../../utils/types'

export interface SectionHeaderProps extends WithChildren, WithClassName {
  /** Section title */
  title: ReactNode
  /** Subtitle/description */
  subtitle?: ReactNode
  /** Icon prefix */
  icon?: ReactNode
  /** Action buttons */
  actions?: ReactNode
  /** Badge or status indicator */
  badge?: ReactNode
  /** Size variant */
  size?: SizeSmMdLg
  /** Show divider below */
  divider?: boolean
  /** Divider variant */
  dividerVariant?: 'solid' | 'dashed' | 'gradient'
  /** Sticky positioning */
  sticky?: boolean
}

const sizeFontMap = {
  sm: { title: 'text-sm', subtitle: 'text-xs' },
  md: { title: 'text-base', subtitle: 'text-sm' },
  lg: { title: 'text-lg', subtitle: 'text-sm' },
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      title,
      subtitle,
      icon,
      actions,
      badge,
      size = 'md',
      divider = false,
      dividerVariant = 'solid',
      sticky = false,
      className,
      children,
    },
    ref
  ) => {
    const fonts = sizeFontMap[size]

    return (
      <div ref={ref} className={cn(sticky && 'sticky top-0 z-20 bg-gray-900/95 backdrop-blur-sm', className)}>
        <div className="flex items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="flex-shrink-0 text-gray-400">{icon}</div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h2 className={cn('font-semibold text-white', fonts.title)}>
                  {title}
                </h2>
                {badge}
              </div>
              {subtitle && (
                <p className={cn('text-gray-400', fonts.subtitle)}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {actions && (
            <div className="flex-shrink-0">{actions}</div>
          )}
        </div>

        {divider && (
          <Divider variant={dividerVariant} className="mt-2" />
        )}

        {children}
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'

export default SectionHeader
