/**
 * GridItem - Simple grid cell for CSS Grid demonstrations
 *
 * Layer: L1 (ui/atom)
 * Imports only from: ../utils/, ../tokens/
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'

export interface GridItemProps {
  /** Cell content */
  children: ReactNode
  /** Additional class names */
  className?: string
  /** Use dark variant (dark background, light text) */
  dark?: boolean
}

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  ({ children, className, dark = false }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'text-xs font-mono flex items-center justify-center p-[var(--zai-space-element-sm)] rounded-[var(--zai-radius-default)]',
          dark
            ? 'text-white'
            : '',
          className
        )}
        style={dark
          ? { backgroundColor: tv('COLOR_BG_ELEVATED') }
          : {
              backgroundColor: tv('COLOR_BG_TERTIARY'),
              color: tv('COLOR_TEXT_DISABLED'),
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: tv('COLOR_BORDER_SUBTLE'),
            }
        }
      >
        {children}
      </div>
    )
  }
)

GridItem.displayName = 'GridItem'

export default GridItem
