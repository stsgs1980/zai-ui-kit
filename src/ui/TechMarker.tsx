/**
 * TechMarker - Small numbered section marker with tooltip
 *
 * Layer: L1 (ui/atom)
 * Imports only from: ../ui/SimpleTooltip (sibling), ../utils/, ../theme/
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { SimpleTooltip } from './SimpleTooltip'

export interface TechMarkerProps {
  /** Section number displayed (e.g. "§01") */
  number: string
  /** Optional size label shown in brackets */
  size?: string
  /** Additional class names */
  className?: string
}

export const TechMarker = forwardRef<HTMLDivElement, TechMarkerProps>(
  ({ number, size, className }, ref) => {
    return (
      <SimpleTooltip content={`Секция ${number}`} side="left">
        <div
          ref={ref}
          className={cn(
            'flex items-center gap-1 font-mono text-[9px] text-neutral-400 cursor-help',
            className
          )}
        >
          <div className="w-2 h-2 border border-neutral-400 rounded-full flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-neutral-400 rounded-full" />
          </div>
          <span className="tracking-wider">{number}</span>
          {size && (
            <span className="text-neutral-300 ml-0.5">[{size}]</span>
          )}
        </div>
      </SimpleTooltip>
    )
  }
)

TechMarker.displayName = 'TechMarker'

export default TechMarker
