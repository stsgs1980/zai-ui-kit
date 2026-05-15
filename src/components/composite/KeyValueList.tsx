/**
 * KeyValueList - Display key-value pairs in a list format
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { StatusDot } from '../basic/StatusDot'
import type { KeyValue, SizeSmMdLg, WithClassName } from '../../utils/types'

export interface KeyValueListProps extends WithClassName {
  /** Key-value pairs to display */
  items: KeyValue[]
  /** Size variant */
  size?: SizeSmMdLg
  /** Layout direction */
  direction?: 'vertical' | 'horizontal'
  /** Show dividers between items */
  dividers?: boolean
  /** Show status dots */
  showDots?: boolean
  /** Label width (for horizontal layout) */
  labelWidth?: string | number
  /** Custom key renderer */
  renderKey?: (item: KeyValue, index: number) => ReactNode
  /** Custom value renderer */
  renderValue?: (item: KeyValue, index: number) => ReactNode
}

const sizeGapMap = {
  sm: 'gap-1',
  md: 'gap-2',
  lg: 'gap-3',
}

const sizeFontMap = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

export const KeyValueList = forwardRef<HTMLDListElement, KeyValueListProps>(
  (
    {
      items,
      size = 'md',
      direction = 'vertical',
      dividers = false,
      showDots = true,
      labelWidth,
      renderKey,
      renderValue,
      className,
    },
    ref
  ) => {
    return (
      <dl
        ref={ref}
        className={cn(
          direction === 'vertical' ? 'flex flex-col' : 'flex flex-wrap',
          sizeGapMap[size],
          className
        )}
      >
        {items.map((item, index) => (
          <div
            key={item.key}
            className={cn(
              direction === 'horizontal' ? 'flex items-center gap-2' : 'flex items-center justify-between',
              dividers && index < items.length - 1 && 'border-b border-gray-800 pb-2 mb-2'
            )}
            style={labelWidth ? { minWidth: labelWidth } : undefined}
          >
            <dt
              className={cn('text-gray-400', sizeFontMap[size])}
              style={direction === 'horizontal' ? { width: labelWidth ?? 'auto' } : undefined}
            >
              {renderKey ? (
                renderKey(item, index)
              ) : (
                <span className="flex items-center gap-2">
                  {showDots && item.status && (
                    <StatusDot status={item.status} size="sm" />
                  )}
                  {item.icon}
                  {item.key}
                </span>
              )}
            </dt>
            <dd className={cn('font-medium text-white', sizeFontMap[size])}>
              {renderValue ? renderValue(item, index) : item.value}
            </dd>
          </div>
        ))}
      </dl>
    )
  }
)

KeyValueList.displayName = 'KeyValueList'

export default KeyValueList
