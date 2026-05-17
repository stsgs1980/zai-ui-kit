/**
 * SectionHeader - Consistent section header with optional actions
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import { Divider } from '../ui/Divider'
import type { WithChildren, WithClassName, SizeSmMdLg } from '../utils/types'

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
  sm: { title: 'text-[var(--zai-font-size-2)]', subtitle: 'text-[var(--zai-font-size-1)]' },
  md: { title: 'text-[var(--zai-font-size-3)]', subtitle: 'text-[var(--zai-font-size-2)]' },
  lg: { title: 'text-[var(--zai-font-size-4)]', subtitle: 'text-[var(--zai-font-size-2)]' },
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
      <div
        ref={ref}
        className={cn(sticky && 'sticky top-0 z-20 backdrop-blur-sm', className)}
        style={sticky ? { backgroundColor: tv('GLASS_BG') } : undefined}
      >
        <div className="flex items-center justify-between gap-[var(--zai-space-element-lg)] py-[var(--zai-space-2)]">
          <div className="flex items-center gap-[var(--zai-space-element-md)]">
            {icon && (
              <div className="flex-shrink-0" style={{ color: tv('COLOR_TEXT_SECONDARY') }}>{icon}</div>
            )}
            <div>
              <div className="flex items-center gap-[var(--zai-space-element-sm)]">
                <h2 className={cn('font-semibold', fonts.title)} style={{ color: tv('COLOR_TEXT_PRIMARY') }}>
                  {title}
                </h2>
                {badge}
              </div>
              {subtitle && (
                <p className={fonts.subtitle} style={{ color: tv('COLOR_TEXT_SECONDARY') }}>
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
          <Divider variant={dividerVariant} className="mt-[var(--zai-space-2)]" />
        )}

        {children}
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'

export default SectionHeader
