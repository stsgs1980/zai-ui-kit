/**
 * DataTable - Simple data table component
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import type { WithClassName, ColumnDef } from '../../utils/types'

export interface DataTableProps<T = unknown> extends WithClassName {
  /** Column definitions */
  columns: ColumnDef<T>[]
  /** Row data */
  data: T[]
  /** Row key accessor */
  rowKey?: keyof T | ((row: T) => string)
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Enable hover effect */
  hoverable?: boolean
  /** Show borders */
  bordered?: boolean
  /** Empty state content */
  emptyContent?: ReactNode
  /** Loading state */
  loading?: boolean
  /** Sticky header */
  stickyHeader?: boolean
  /** Row click handler */
  onRowClick?: (row: T, index: number) => void
  /** Custom row className */
  getRowClassName?: (row: T, index: number) => string
}

const sizePaddingMap = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-3 text-sm',
  lg: 'px-5 py-4 text-base',
}

export function DataTable<T extends Record<string, unknown>>(
  props: DataTableProps<T>
): ReactNode {
  const {
    columns,
    data,
    rowKey,
    size = 'md',
    hoverable = true,
    bordered = false,
    emptyContent,
    loading = false,
    stickyHeader = false,
    onRowClick,
    getRowClassName,
    className,
  } = props

  const getRowKey = (row: T, index: number): string => {
    if (rowKey) {
      return typeof rowKey === 'function' ? rowKey(row) : String(row[rowKey])
    }
    return String(index)
  }

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full">
        <thead>
          <tr
            className={cn(
              'border-b border-gray-700 bg-gray-800/50',
              stickyHeader && 'sticky top-0 z-10'
            )}
          >
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  'text-left font-medium text-gray-400',
                  sizePaddingMap[size],
                  bordered && 'border-r border-gray-700 last:border-r-0'
                )}
                style={{
                  width: col.width,
                  textAlign: col.align ?? 'left',
                }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            // Loading skeleton
            Array.from({ length: 3 }).map((_, i) => (
              <tr key={`skeleton-${i}`} className="border-b border-gray-800">
                {columns.map((col, j) => (
                  <td key={`${i}-${j}`} className={sizePaddingMap[size]}>
                    <div className="h-4 w-3/4 animate-pulse rounded bg-gray-700" />
                  </td>
                ))}
              </tr>
            ))
          ) : data.length === 0 ? (
            // Empty state
            <tr>
              <td
                colSpan={columns.length}
                className={cn('text-center text-gray-500', sizePaddingMap[size])}
              >
                {emptyContent ?? 'No data available'}
              </td>
            </tr>
          ) : (
            // Data rows
            data.map((row, rowIndex) => (
              <tr
                key={getRowKey(row, rowIndex)}
                onClick={() => onRowClick?.(row, rowIndex)}
                className={cn(
                  'border-b border-gray-800',
                  hoverable && 'transition-colors hover:bg-gray-800/50',
                  onRowClick && 'cursor-pointer',
                  bordered && '[&>td]:border-r [&>td]:border-gray-800 [&>td:last-child]:border-r-0',
                  getRowClassName?.(row, rowIndex)
                )}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={sizePaddingMap[size]}
                    style={{ textAlign: col.align ?? 'left' }}
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

// Wrap with forwardRef for consistency
export const Table = forwardRef<HTMLDivElement, DataTableProps>(
  (props, ref) => {
    return (
      <div ref={ref}>
        <DataTable {...props} />
      </div>
    )
  }
) as <T extends Record<string, unknown>>(
  props: DataTableProps<T>
) => ReactNode

Table.displayName = 'Table'

export default DataTable
