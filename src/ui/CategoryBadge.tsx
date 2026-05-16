/**
 * CategoryBadge — Clickable badge for category filtering
 * L1 atom: Pure presentation, no internal state
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'

export interface CategoryBadgeProps {
  /** Display label */
  label: string
  /** Badge accent color */
  color: string
  /** Whether the badge is active/selected */
  isActive: boolean
  /** Count of items in this category */
  count?: number
  /** Click handler */
  onClick?: () => void
  /** Additional class names */
  className?: string
}

export const CategoryBadge = forwardRef<HTMLButtonElement, CategoryBadgeProps>(
  ({ label, color, isActive, count, onClick, className }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono',
          'transition-all duration-150 whitespace-nowrap',
          isActive
            ? 'text-white shadow-[2px_2px_0_0_rgba(0,0,0,0.15)]'
            : 'text-[#878992] bg-white border border-[#CCCCCC] hover:border-[#878992] hover:text-[#5C6070]',
          className
        )}
        style={isActive ? {
          background: color,
          border: `2px solid ${color}`,
        } : {}}
      >
        <span className="font-semibold uppercase tracking-wider">{label}</span>
        {count !== undefined && (
          <span className={cn(
            'text-[9px] tabular-nums',
            isActive ? 'text-white/70' : 'text-[#BFBFBF]'
          )}>
            [{count}]
          </span>
        )}
      </button>
    )
  }
)

CategoryBadge.displayName = 'CategoryBadge'
export default CategoryBadge
