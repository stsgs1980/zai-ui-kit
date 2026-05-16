/**
 * GridItem - Simple grid cell for CSS Grid demonstrations
 *
 * Layer: L1 (ui/atom)
 * Imports only from: ../utils/, ../theme/
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'

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
          'text-xs font-mono flex items-center justify-center p-2 rounded',
          dark
            ? 'bg-neutral-800 text-white'
            : 'bg-neutral-100 text-neutral-700 border border-neutral-300',
          className
        )}
      >
        {children}
      </div>
    )
  }
)

GridItem.displayName = 'GridItem'

export default GridItem
