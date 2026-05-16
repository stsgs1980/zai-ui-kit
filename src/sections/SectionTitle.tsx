/**
 * SectionTitle - Section heading with optional numbered marker
 *
 * Layer: L2 (sections/molecule)
 * Imports from: ../ui/, ../utils/, ../theme/
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
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
        className={cn('flex items-center gap-3 mb-4', className)}
      >
        {number && (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 border-2 border-neutral-800 flex items-center justify-center bg-white">
              <span className="text-[9px] text-neutral-800 font-mono font-bold">
                {number}
              </span>
            </div>
            <div className="w-10 border-t border-dashed border-neutral-400" />
          </div>
        )}
        <div className="text-sm font-bold text-neutral-900 tracking-tight font-mono uppercase">
          {children}
        </div>
        <div className="flex-1 border-t border-dashed border-neutral-300" />
        {number && <TechMarker number={`§${number}`} />}
      </div>
    )
  }
)

SectionTitle.displayName = 'SectionTitle'

export default SectionTitle
