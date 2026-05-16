/**
 * DataTable - Simple data table component
 *
 * [ANTI-MONOLITH EXCEPTION] This component has 153 lines because it renders
 * a generic table with header, skeleton, empty state, and data rows.
 * The sub-components (TableSkeleton, TableEmptyState) are already extracted
 * into DataTable.helpers.tsx. The remaining 153 lines include the main render
 * + forwardRef wrapper + type export — splitting further would fragment the API.
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'
import type { WithClassName, ColumnDef } from '../utils/types'
import { sizePaddingMap, TableSkeleton, TableEmptyState } from './DataTable.helpers'

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
              'border-b',
              stickyHeader && 'sticky top-0 z-10'
            )}
            style={{
              borderColor: colors.border.default,
              backgroundColor: colors.background.surfaceA50,
            }}
          >
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  'text-left font-medium',
                  sizePaddingMap[size],
                  bordered && 'border-r last:border-r-0'
                )}
                style={{
                  width: col.width,
                  textAlign: col.align ?? 'left',
                  color: colors.text.secondary,
                  borderColor: bordered ? colors.border.default : undefined,
                }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <TableSkeleton columnCount={columns.length} size={size} />
          ) : data.length === 0 ? (
            <TableEmptyState colSpan={columns.length} size={size} emptyContent={emptyContent} />
          ) : (
            // Data rows
            data.map((row, rowIndex) => (
              <tr
                key={getRowKey(row, rowIndex)}
                onClick={() => onRowClick?.(row, rowIndex)}
                className={cn(
                  'border-b',
                  hoverable && 'transition-colors',
                  onRowClick && 'cursor-pointer',
                  getRowClassName?.(row, rowIndex)
                )}
                style={{
                  borderColor: colors.background.surfaceA50,
                }}
                onMouseEnter={(e) => hoverable && (e.currentTarget.style.backgroundColor = colors.background.surfaceA50)}
                onMouseLeave={(e) => hoverable && (e.currentTarget.style.backgroundColor = '')}
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
