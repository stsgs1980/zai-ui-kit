/**
 * CategoryBadge — Clickable badge for category filtering
 * L1 atom: Pure presentation, no internal state
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'

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
          'flex items-center gap-1.5 px-[var(--zai-space-3)] py-[var(--zai-space-element-xs)] text-[11px] font-mono',  // TODO: Add tokens for 1.5 gap (6px), 11px font size
          'transition-all whitespace-nowrap',
          isActive
            ? 'text-white shadow-[2px_2px_0_0_rgba(0,0,0,0.15)]'  // TODO: Add token for shadow
            : '',
          className
        )}
        style={{
          transitionDuration: tv('DURATION_FAST'),
          transitionTimingFunction: tv('EASING_OUT'),
          ...(isActive ? {
            background: color,
            border: `2px solid ${color}`,
          } : {
            color: tv('COLOR_NEUTRAL_V3'),
            backgroundColor: tv('COLOR_BG_PRIMARY'),
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: tv('COLOR_NEUTRAL_V1'),
          }),
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.borderColor = tv('COLOR_NEUTRAL_V3')
            e.currentTarget.style.color = tv('COLOR_NEUTRAL_V4')
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.borderColor = tv('COLOR_NEUTRAL_V1')
            e.currentTarget.style.color = tv('COLOR_NEUTRAL_V3')
          }
        }}
      >
        <span className="font-semibold uppercase tracking-wider">{label}</span>
        {count !== undefined && (
          <span
            className={cn(
              'text-[9px] tabular-nums',  // TODO: Add token for 9px font size
              isActive ? 'text-white/70' : ''
            )}
            style={isActive ? {} : { color: tv('COLOR_NEUTRAL_V2') }}
          >
            [{count}]
          </span>
        )}
      </button>
    )
  }
)

CategoryBadge.displayName = 'CategoryBadge'
export default CategoryBadge
