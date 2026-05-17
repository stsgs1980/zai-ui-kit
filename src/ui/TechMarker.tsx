/**
 * TechMarker - Small numbered section marker with tooltip
 *
 * Layer: L1 (ui/atom)
 * Imports only from: ../ui/SimpleTooltip (sibling), ../utils/, ../tokens/
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
            'flex items-center gap-[var(--zai-space-element-xs)] font-mono text-[9px] cursor-help',  // TODO: Add token for 9px font size
            className
          )}
          style={{ color: 'var(--zai-color-text-muted)' }}
        >
          <div
            className="w-2 h-2 rounded-[var(--zai-radius-full)] flex items-center justify-center"
            style={{ borderWidth: 1, borderStyle: 'solid', borderColor: 'var(--zai-color-text-muted)' }}
          >
            <div
              className="w-0.5 h-0.5 rounded-[var(--zai-radius-full)]"
              style={{ backgroundColor: 'var(--zai-color-text-muted)' }}
            />
          </div>
          <span className="tracking-wider">{number}</span>
          {size && (
            <span style={{ color: 'var(--zai-color-border-subtle)', marginLeft: 'var(--zai-space-1)' }}>[{size}]</span>
          )}
        </div>
      </SimpleTooltip>
    )
  }
)

TechMarker.displayName = 'TechMarker'

export default TechMarker
