/**
 * Divider - Visual separator for content sections
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import type { WithChildren, WithClassName } from '../../utils/types'

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
    sm: 'my-2',
    md: 'my-4',
    lg: 'my-6',
  },
  vertical: {
    sm: 'mx-2',
    md: 'mx-4',
    lg: 'mx-6',
  },
}

const variantStyles = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  gradient: 'border-none bg-gradient-to-r from-transparent via-gray-600 to-transparent',
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

    if (labeled && children) {
      return (
        <div
          ref={ref}
          className={cn(
            'flex items-center gap-4',
            spacingMap.horizontal[spacing],
            className
          )}
        >
          <div
            className={cn(
              'flex-1 border-t border-gray-700',
              variantStyles[variant]
            )}
            style={color ? { borderColor: color } : undefined}
          />
          <span className="flex-shrink-0 text-sm text-gray-500">{children}</span>
          <div
            className={cn(
              'flex-1 border-t border-gray-700',
              variantStyles[variant]
            )}
            style={color ? { borderColor: color } : undefined}
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
            ? cn('w-full border-t border-gray-700', spacingMap.horizontal[spacing])
            : cn('h-full border-l border-gray-700', spacingMap.vertical[spacing]),
          variantStyles[variant],
          className
        )}
        style={color ? { borderColor: color } : undefined}
      />
    )
  }
)

Divider.displayName = 'Divider'

export default Divider
