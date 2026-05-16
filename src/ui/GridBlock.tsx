/**
 * GridBlock — Visual block for CSS grid layout previews
 * L1 atom: Pure presentation, no internal state
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'

export interface GridBlockProps {
  /** Block label text */
  label: string
  /** Number of columns to span */
  colSpan?: number
  /** Number of rows to span */
  rowSpan?: number
  /** Whether this is an accent/highlighted block */
  accent?: boolean
  /** Custom accent color (used when accent=true) */
  accentColor?: string
  /** Block size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Additional class names */
  className?: string
}

const sizeMap: Record<string, { text: string; minH: string }> = {
  xs: { text: 'text-[8px]', minH: 'min-h-[14px]' },    // TODO: Add tokens for 8px font size, 14px min-height
  sm: { text: 'text-[9px]', minH: 'min-h-[18px]' },     // TODO: Add tokens for 9px font size, 18px min-height
  md: { text: 'text-[10px]', minH: 'min-h-[22px]' },    // TODO: Add tokens for 10px font size, 22px min-height
  lg: { text: 'text-[11px]', minH: 'min-h-[28px]' },    // TODO: Add tokens for 11px font size, 28px min-height
}

export const GridBlock = forwardRef<HTMLDivElement, GridBlockProps>(
  ({ label, colSpan, rowSpan, accent, accentColor, size = 'sm', className }, ref) => {
    const s = sizeMap[size]

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center font-mono transition-colors',
          s.text,
          s.minH,
          accent
            ? 'text-white border'
            : '',
          className
        )}
        style={{
          transitionDuration: tv('DURATION_FAST'),
          transitionTimingFunction: tv('EASING_OUT'),
          ...(colSpan ? { gridColumn: `span ${colSpan}` } : {}),
          ...(rowSpan ? { gridRow: `span ${rowSpan}` } : {}),
          ...(accent && accentColor ? { backgroundColor: accentColor, borderColor: accentColor } : {}),
          ...(!accent ? {
            color: tv('COLOR_NEUTRAL_V3'),
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: tv('COLOR_NEUTRAL_V1'),
            backgroundColor: tv('COLOR_BG_SURFACE'),
          } : {}),
        }}
      >
        {label}
      </div>
    )
  }
)

GridBlock.displayName = 'GridBlock'
export default GridBlock
