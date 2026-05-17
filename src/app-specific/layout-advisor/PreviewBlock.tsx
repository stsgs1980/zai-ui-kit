/**
 * PreviewBlock - L1 Atom
 * A single block in a layout preview diagram.
 * Pure presentation, no state, no hooks.
 */

import { cn } from '../utils/cn'

export interface PreviewBlockProps {
  /** Label displayed inside the block */
  title: string
  /** Additional CSS classes */
  className?: string
  /** Whether to highlight with accent color */
  accent?: boolean
  /** Text size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Inline styles (for grid placement) */
  style?: React.CSSProperties
}

const sizeMap: Record<NonNullable<PreviewBlockProps['size']>, string> = {
  xs: 'text-[8px]',
  sm: 'text-[10px]',
  md: 'text-xs',
  lg: 'text-sm',
}

export function PreviewBlock({
  title,
  className,
  accent = false,
  size = 'md',
  style,
}: PreviewBlockProps) {
  return (
    <div
      className={cn(
        'rounded flex items-center justify-center font-medium border border-dashed border-border/40',
        sizeMap[size],
        accent && 'border-primary/30',
        className
      )}
      style={
        accent
          ? { backgroundColor: 'color-mix(in srgb, var(--accent) 15%, transparent)', ...style }
          : style
      }
    >
      {title}
    </div>
  )
}

export default PreviewBlock
