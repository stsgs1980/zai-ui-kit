/**
 * StatCard - Card optimized for displaying a single metric/statistic
 */

import { forwardRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { colors } from '../theme/colors'
import { MetricValue } from '../ui/MetricValue'
import { TrendIndicator } from '../ui/TrendIndicator'
import type { SizeSmMdLg, TrendDirection, Variant, WithClassName } from '../utils/types'

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
          'rounded-lg border p-4 backdrop-blur-sm',
          glow && 'shadow-[0_0_20px_var(--stat-glow)]',
          onClick && 'cursor-pointer transition-all',
          className
        )}
        style={{
          '--stat-glow': `rgba(${colors.neutralRgb.base}, 0.06)`,
          borderColor: colors.border.subtle,
          backgroundColor: colors.background.primaryA50,
        } as React.CSSProperties}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm" style={{ color: colors.text.secondary }}>{label}</p>
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
              <p className="mt-1 text-xs" style={{ color: colors.neutral.v3 }}>{comparison}</p>
            )}
          </div>
          {icon && (
            <div className="flex-shrink-0" style={{ color: colors.neutral.v3 }}>{icon}</div>
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
