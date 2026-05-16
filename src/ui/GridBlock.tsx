/**
 * GridBlock — Visual block for CSS grid layout previews
 * L1 atom: Pure presentation, no internal state
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'

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
  xs: { text: 'text-[8px]', minH: 'min-h-[14px]' },
  sm: { text: 'text-[9px]', minH: 'min-h-[18px]' },
  md: { text: 'text-[10px]', minH: 'min-h-[22px]' },
  lg: { text: 'text-[11px]', minH: 'min-h-[28px]' },
}

export const GridBlock = forwardRef<HTMLDivElement, GridBlockProps>(
  ({ label, colSpan, rowSpan, accent, accentColor, size = 'sm', className }, ref) => {
    const s = sizeMap[size]

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center font-mono transition-colors duration-150',
          s.text,
          s.minH,
          accent
            ? 'text-white border'
            : 'text-[#878992] border border-dashed border-[#CCCCCC] bg-[#FAFAFA]',
          className
        )}
        style={{
          ...(colSpan ? { gridColumn: `span ${colSpan}` } : {}),
          ...(rowSpan ? { gridRow: `span ${rowSpan}` } : {}),
          ...(accent && accentColor ? { backgroundColor: accentColor, borderColor: accentColor } : {}),
        }}
      >
        {label}
      </div>
    )
  }
)

GridBlock.displayName = 'GridBlock'
export default GridBlock
