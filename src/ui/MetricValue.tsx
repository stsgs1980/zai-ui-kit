/**
 * MetricValue - Display numeric/string values with formatting
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'
import type { Size, TrendDirection, WithClassName } from '../utils/types'
import { sizeMap, trendColorMap, formatValue } from './MetricValue.helpers'

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
          <span className={sizes.label} style={{ color: colors.text.secondary }}>{label}</span>
        )}
        <div className="flex items-baseline gap-1">
          {prefix && (
            <span className={sizes.unit} style={{ color: colors.text.secondary }}>{prefix}</span>
          )}
          <span
            className={cn(
              'font-semibold tabular-nums',
              sizes.value,
            )}
            style={colorByTrend && trend ? { color: trendColorMap[trend] } : undefined}
          >
            {displayValue}
          </span>
          {unit && (
            <span className={sizes.unit} style={{ color: colors.text.secondary }}>{unit}</span>
          )}
          {suffix}
          {trend !== undefined && trendValue !== undefined && (
            <span
              className="ml-2 flex items-center gap-0.5 text-sm"
              style={{ color: trendColorMap[trend] }}
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
