/**
 * KeyValueList - Display key-value pairs in a list format
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'
import { StatusDot } from '../ui/StatusDot'
import type { KeyValue, SizeSmMdLg, WithClassName } from '../utils/types'

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
            )}
            style={{
              minWidth: labelWidth ? labelWidth : undefined,
              ...(dividers && index < items.length - 1 ? {
                borderBottom: `1px solid ${colors.background.surfaceA50}`,
                paddingBottom: '0.5rem',
                marginBottom: '0.5rem',
              } : {}),
            }}
          >
            <dt
              className={sizeFontMap[size]}
              style={{
                color: colors.text.secondary,
                width: direction === 'horizontal' ? (labelWidth ?? 'auto') : undefined,
              }}
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
            <dd className={cn('font-medium', sizeFontMap[size])} style={{ color: colors.text.primary }}>
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
