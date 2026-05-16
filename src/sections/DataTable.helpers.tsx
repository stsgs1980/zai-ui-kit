/**
 * DataTable.helpers - Extracted sub-components and constants for DataTable
 */

import type { ReactNode } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'

export const sizePaddingMap = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-3 text-sm',
  lg: 'px-5 py-4 text-base',
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
          style={{ borderColor: colors.background.surfaceA50 }}
        >
          {Array.from({ length: columnCount }).map((_, j) => (
            <td key={`${i}-${j}`} className={sizePaddingMap[size]}>
              <div
                className="h-4 w-3/4 animate-pulse rounded"
                style={{ backgroundColor: colors.neutral.v4 }}
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
        style={{ color: colors.neutral.v3 }}
      >
        {emptyContent ?? 'No data available'}
      </td>
    </tr>
  )
}
