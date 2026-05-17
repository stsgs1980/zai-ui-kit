/**
 * DataTable.helpers - Extracted sub-components and constants for DataTable
 */

import type { ReactNode } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'

export const sizePaddingMap = {
  sm: 'px-[var(--zai-space-3)] py-[var(--zai-space-2)] text-[var(--zai-font-size-1)]',
  md: 'px-[var(--zai-space-card-md)] py-[var(--zai-space-3)] text-[var(--zai-font-size-2)]',
  lg: 'px-[var(--zai-space-5)] py-[var(--zai-space-card-sm)] text-[var(--zai-font-size-3)]',
} as const

export interface TableSkeletonProps {
  /** Number of columns */
  columnCount: number
  /** Size variant */
  size: 'sm' | 'md' | 'lg'
}

export function TableSkeleton({ columnCount, size }: TableSkeletonProps): ReactNode {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <tr
          key={`skeleton-${i}`}
          className="border-b"
          style={{ borderColor: tv('COLOR_BG_SURFACE') }}
        >
          {Array.from({ length: columnCount }).map((_, j) => (
            <td key={`${i}-${j}`} className={sizePaddingMap[size]}>
              <div
                className="h-4 w-3/4 animate-pulse rounded"
                style={{ backgroundColor: tv('COLOR_NEUTRAL_V4') }}
              />
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

export interface TableEmptyStateProps {
  /** Number of columns to span */
  colSpan: number
  /** Size variant */
  size: 'sm' | 'md' | 'lg'
  /** Custom empty content */
  emptyContent?: ReactNode
}

export function TableEmptyState({
  colSpan,
  size,
  emptyContent,
}: TableEmptyStateProps): ReactNode {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className={cn('text-center', sizePaddingMap[size])}
        style={{ color: tv('COLOR_NEUTRAL_V3') }}
      >
        {emptyContent ?? 'No data available'}
      </td>
    </tr>
  )
}
