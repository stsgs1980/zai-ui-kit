/**
 * SectionTitle - Section heading with optional numbered marker
 *
 * Layer: L2 (sections/molecule)
 * Imports from: ../ui/, ../utils/, ../tokens/
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import { TechMarker } from '../ui/TechMarker'

export interface SectionTitleProps {
  /** Title content */
  children: ReactNode
  /** Optional section number (e.g. "01") */
  number?: string
  /** Additional class names */
  className?: string
}

export const SectionTitle = forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ children, number, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-[var(--zai-space-element-md)] mb-[var(--zai-space-card-md)]', className)}
      >
        {number && (
          <div className="flex items-center gap-[var(--zai-space-element-xs)]">
            <div
              className="w-5 h-5 border-2 flex items-center justify-center"
              style={{
                borderColor: tv('COLOR_NEUTRAL_V4'),
                backgroundColor: tv('COLOR_BG_PRIMARY'),
              }}
            >
              <span
                className="text-[9px] font-mono font-bold"
                style={{ color: tv('COLOR_NEUTRAL_V4') }}
              >
                {number}
              </span>
            </div>
            <div
              className="w-10 border-t border-dashed"
              style={{ borderColor: tv('COLOR_BORDER_MUTED') }}
            />
          </div>
        )}
        <div
          className="text-sm font-bold tracking-tight font-mono uppercase"
          style={{ color: tv('COLOR_TEXT_PRIMARY') }}
        >
          {children}
        </div>
        <div
          className="flex-1 border-t border-dashed"
          style={{ borderColor: tv('COLOR_BORDER_SUBTLE') }}
        />
        {number && <TechMarker number={`§${number}`} />}
      </div>
    )
  }
)

SectionTitle.displayName = 'SectionTitle'

export default SectionTitle
