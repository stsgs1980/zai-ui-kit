/**
 * SimpleTooltip - Lightweight tooltip wrapper around shadcn/ui Tooltip
 *
 * Layer: L1 (ui/atom)
 * Imports only from: ../utils/, ../theme/, @/components/ui/tooltip
 */

import { forwardRef, type ReactNode } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '../utils/cn'
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
            'bg-neutral-800 text-white text-[10px] px-2 py-1 font-mono',
            className
          )}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    )
  }
)

SimpleTooltip.displayName = 'SimpleTooltip'

export default SimpleTooltip
