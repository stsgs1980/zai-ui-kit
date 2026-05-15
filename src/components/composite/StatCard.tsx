/**
 * StatCard - Card optimized for displaying a single metric/statistic
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { MetricValue } from '../basic/MetricValue'
import { TrendIndicator } from '../basic/TrendIndicator'
import type { SizeSmMdLg, TrendDirection, Variant, WithClassName } from '../../utils/types'

export interface StatCardProps extends WithClassName {
  /** Label/title */
  label: string
  /** Main value */
  value: string | number
  /** Value unit */
  unit?: string
  /** Value prefix (e.g., $) */
  prefix?: string
  /** Trend direction */
  trend?: TrendDirection
  /** Trend value (e.g., +5.2%) */
  trendValue?: string | number
  /** Icon for the stat */
  icon?: ReactNode
  /** Color variant */
  variant?: Variant
  /** Size variant */
  size?: SizeSmMdLg
  /** Enable glow effect */
  glow?: boolean
  /** Comparison value (e.g., "vs last week") */
  comparison?: string
  /** Mini chart or sparkline */
  sparkline?: ReactNode
  /** Click handler */
  onClick?: () => void
  /** Format for value */
  format?: 'number' | 'currency' | 'percent' | 'compact'
}

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      label,
      value,
      unit,
      prefix,
      trend,
      trendValue,
      icon,
      variant = 'primary',
      size = 'md',
      glow = false,
      comparison,
      sparkline,
      onClick,
      format,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          'rounded-lg border border-gray-700/50 bg-gray-900/50 p-4 backdrop-blur-sm',
          glow && 'shadow-[0_0_20px_rgba(59,130,246,0.1)]',
          onClick && 'cursor-pointer transition-all hover:border-gray-600',
          className
        )}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-400">{label}</p>
            <MetricValue
              value={value}
              unit={unit}
              prefix={prefix}
              format={format}
              size={size === 'sm' ? 'md' : size === 'lg' ? 'xl' : 'lg'}
              trend={trend}
              trendValue={trendValue}
              className="mt-1"
            />
            {comparison && (
              <p className="mt-1 text-xs text-gray-500">{comparison}</p>
            )}
          </div>
          {icon && (
            <div className="flex-shrink-0 text-gray-500">{icon}</div>
          )}
        </div>

        {sparkline && (
          <div className="mt-3 h-12">{sparkline}</div>
        )}

        {trend !== undefined && trendValue !== undefined && (
          <div className="mt-2 flex items-center justify-between">
            <TrendIndicator
              direction={trend}
              value={trendValue}
              size="sm"
            />
          </div>
        )}
      </div>
    )
  }
)

StatCard.displayName = 'StatCard'

export default StatCard
