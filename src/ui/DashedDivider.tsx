/**
 * DashedDivider - Horizontal dashed line with optional centered label
 *
 * Layer: L1 (ui/atom)
 * Imports only from: ../utils/, ../tokens/
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
      <div ref={ref} className={cn('flex items-center gap-[var(--zai-space-element-sm)] py-[var(--zai-space-element-sm)]', className)}>
        <div
          className="flex-1 border-t border-dashed"
          style={{ borderColor: 'var(--zai-color-border-subtle)' }}
        />
        {label && (
          <>
            <span
              className="text-[9px] font-mono uppercase tracking-widest"  // TODO: Add token for 9px font size
              style={{ color: 'var(--zai-color-text-muted)' }}
            >
              {label}
            </span>
            <div
              className="flex-1 border-t border-dashed"
              style={{ borderColor: 'var(--zai-color-border-subtle)' }}
            />
          </>
        )}
        {!label && (
          <div
            className="flex-1 border-t border-dashed"
            style={{ borderColor: 'var(--zai-color-border-subtle)' }}
          />
        )}
      </div>
    )
  }
)

DashedDivider.displayName = 'DashedDivider'

export default DashedDivider
