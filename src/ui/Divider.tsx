/**
 * Divider - Visual separator for content sections
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import type { WithChildren, WithClassName } from '../utils/types'

export interface DividerProps extends WithChildren, WithClassName {
  /** Orientation */
  orientation?: 'horizontal' | 'vertical'
  /** Style variant */
  variant?: 'solid' | 'dashed' | 'dotted' | 'gradient'
  /** Add label/children in center */
  labeled?: boolean
  /** Custom color */
  color?: string
  /** Spacing (margin) */
  spacing?: 'sm' | 'md' | 'lg'
}

const spacingMap = {
  horizontal: {
    sm: 'my-[var(--zai-space-element-sm)]',   // 8px
    md: 'my-4',   // TODO: Add token for 16px spacing
    lg: 'my-6',   // TODO: Add token for 24px spacing
  },
  vertical: {
    sm: 'mx-[var(--zai-space-element-sm)]',   // 8px
    md: 'mx-4',   // TODO: Add token for 16px spacing
    lg: 'mx-6',   // TODO: Add token for 24px spacing
  },
}

const variantStyles = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  gradient: 'border-none',
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'solid',
      labeled = false,
      color,
      spacing = 'md',
      className,
      children,
    },
    ref
  ) => {
    const isHorizontal = orientation === 'horizontal'
    const borderColor = color ?? tv('COLOR_BORDER_DEFAULT')

    if (labeled && children) {
      return (
        <div
          ref={ref}
          className={cn(
            'flex items-center gap-4',   // TODO: Add token for 16px gap
            spacingMap.horizontal[spacing],
            className
          )}
        >
          <div
            className={cn('flex-1 border-t', variantStyles[variant])}
            style={{ borderColor, ...(variant === 'gradient' ? { backgroundImage: `linear-gradient(to right, transparent, ${tv('COLOR_NEUTRAL_V4')}, transparent)`, height: tv('DIVIDER_THICKNESS') } : {}) }}
          />
          <span className="flex-shrink-0 text-sm" style={{ color: tv('COLOR_NEUTRAL_V3') }}>{children}</span>
          <div
            className={cn('flex-1 border-t', variantStyles[variant])}
            style={{ borderColor, ...(variant === 'gradient' ? { backgroundImage: `linear-gradient(to right, transparent, ${tv('COLOR_NEUTRAL_V4')}, transparent)`, height: tv('DIVIDER_THICKNESS') } : {}) }}
          />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          isHorizontal
            ? cn('w-full border-t', spacingMap.horizontal[spacing])
            : cn('h-full border-l', spacingMap.vertical[spacing]),
          variantStyles[variant],
          className
        )}
        style={{ borderColor, ...(variant === 'gradient' ? { backgroundImage: `linear-gradient(to right, transparent, ${tv('COLOR_NEUTRAL_V4')}, transparent)`, height: tv('DIVIDER_THICKNESS'), border: 'none' } : {}) }}
      />
    )
  }
)

Divider.displayName = 'Divider'

export default Divider
