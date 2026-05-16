/**
 * DashedDivider - Horizontal dashed line with optional centered label
 *
 * Layer: L1 (ui/atom)
 * Imports only from: ../utils/, ../theme/
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'

export interface DashedDividerProps {
  /** Optional centered label text */
  label?: string
  /** Additional class names */
  className?: string
}

export const DashedDivider = forwardRef<HTMLDivElement, DashedDividerProps>(
  ({ label, className }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-center gap-2 py-2', className)}>
        <div className="flex-1 border-t border-dashed border-neutral-300" />
        {label && (
          <>
            <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-widest">
              {label}
            </span>
            <div className="flex-1 border-t border-dashed border-neutral-300" />
          </>
        )}
        {!label && (
          <div className="flex-1 border-t border-dashed border-neutral-300" />
        )}
      </div>
    )
  }
)

DashedDivider.displayName = 'DashedDivider'

export default DashedDivider
