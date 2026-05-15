/**
 * MetricValue - Display numeric/string values with formatting
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import type { Size, TrendDirection, WithClassName } from '../../utils/types'

export interface MetricValueProps extends WithClassName {
  /** The value to display */
  value: string | number
  /** Unit suffix */
  unit?: string
  /** Label/description */
  label?: string
  /** Size variant */
  size?: Size
  /** Trend direction */
  trend?: TrendDirection
  /** Trend value (percentage or absolute) */
  trendValue?: string | number
  /** Prefix (e.g., currency symbol) */
  prefix?: string
  /** Number formatting options */
  format?: 'number' | 'currency' | 'percent' | 'compact'
  /** Decimal places */
  decimals?: number
  /** Show trend arrow */
  showTrendArrow?: boolean
  /** Color based on trend */
  colorByTrend?: boolean
  /** Additional content after value */
  suffix?: ReactNode
}

const sizeMap = {
  xs: { value: 'text-lg', label: 'text-xs', unit: 'text-sm' },
  sm: { value: 'text-xl', label: 'text-xs', unit: 'text-sm' },
  md: { value: 'text-2xl', label: 'text-sm', unit: 'text-base' },
  lg: { value: 'text-3xl', label: 'text-sm', unit: 'text-lg' },
  xl: { value: 'text-4xl', label: 'text-base', unit: 'text-xl' },
} as const

const trendColorMap = {
  up: 'text-green-400',
  down: 'text-red-400',
  neutral: 'text-gray-400',
}

function formatValue(
  value: string | number,
  format?: 'number' | 'currency' | 'percent' | 'compact',
  decimals?: number
): string {
  if (typeof value === 'string') return value

  const options: Intl.NumberFormatOptions = {}
  if (decimals !== undefined) {
    options.minimumFractionDigits = decimals
    options.maximumFractionDigits = decimals
  }

  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        ...options,
        style: 'currency',
        currency: 'USD',
      }).format(value)
    case 'percent':
      return new Intl.NumberFormat('en-US', {
        ...options,
        style: 'percent',
      }).format(value / 100)
    case 'compact':
      return new Intl.NumberFormat('en-US', {
        ...options,
        notation: 'compact',
        compactDisplay: 'short',
      }).format(value)
    default:
      return new Intl.NumberFormat('en-US', options).format(value)
  }
}

export const MetricValue = forwardRef<HTMLDivElement, MetricValueProps>(
  (
    {
      value,
      unit,
      label,
      size = 'md',
      trend,
      trendValue,
      prefix,
      format,
      decimals,
      showTrendArrow = true,
      colorByTrend = false,
      suffix,
      className,
    },
    ref
  ) => {
    const displayValue = formatValue(value, format, decimals)
    const sizes = sizeMap[size]

    return (
      <div ref={ref} className={cn('flex flex-col', className)}>
        {label && (
          <span className={cn('text-gray-400', sizes.label)}>{label}</span>
        )}
        <div className="flex items-baseline gap-1">
          {prefix && (
            <span className={cn('text-gray-400', sizes.unit)}>{prefix}</span>
          )}
          <span
            className={cn(
              'font-semibold tabular-nums',
              sizes.value,
              colorByTrend && trend && trendColorMap[trend]
            )}
          >
            {displayValue}
          </span>
          {unit && (
            <span className={cn('text-gray-400', sizes.unit)}>{unit}</span>
          )}
          {suffix}
          {trend !== undefined && trendValue !== undefined && (
            <span
              className={cn(
                'ml-2 flex items-center gap-0.5 text-sm',
                trendColorMap[trend]
              )}
            >
              {showTrendArrow && (
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d={
                      trend === 'up'
                        ? 'M5 15l7-7 7 7'
                        : trend === 'down'
                        ? 'M19 9l-7 7-7-7'
                        : 'M5 12h14'
                    }
                  />
                </svg>
              )}
              {trendValue}
            </span>
          )}
        </div>
      </div>
    )
  }
)

MetricValue.displayName = 'MetricValue'

export default MetricValue
