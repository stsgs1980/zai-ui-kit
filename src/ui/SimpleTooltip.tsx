/**
 * SimpleTooltip - Lightweight tooltip wrapper around shadcn/ui Tooltip
 *
 * Layer: L1 (ui/atom)
 * Imports only from: ../utils/, ../tokens/, @/components/ui/tooltip
 */

import { forwardRef, type ReactNode } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import type { WithClassName } from '../utils/types'

export interface SimpleTooltipProps extends WithClassName {
  /** Trigger element */
  children: ReactNode
  /** Tooltip content text */
  content: string
  /** Placement side */
  side?: 'top' | 'bottom' | 'left' | 'right'
}

export const SimpleTooltip = forwardRef<HTMLDivElement, SimpleTooltipProps>(
  ({ children, content, side = 'top', className }, ref) => {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          ref={ref}
          className={cn(
            'text-white text-[10px] px-[var(--zai-space-element-xs)] py-[var(--zai-space-1)] font-mono rounded-[var(--zai-radius-default)]',  // TODO: Add token for 10px font size
            className
          )}
          style={{ backgroundColor: tv('COLOR_BG_ELEVATED') }}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    )
  }
)

SimpleTooltip.displayName = 'SimpleTooltip'

export default SimpleTooltip
