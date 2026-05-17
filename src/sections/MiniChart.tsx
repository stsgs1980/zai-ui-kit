/**
 * MiniChart - Simple sparkline/bar chart for inline data visualization
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import type { Variant, SizeSmMdLg, WithClassName } from '../utils/types'
import { sizeHeightMap, variantColorMap } from './MiniChart.helpers'

export interface MiniChartProps extends WithClassName {
  /** Data points */
  data: number[]
  /** Chart type */
  type?: 'line' | 'bar' | 'area'
  /** Color variant */
  variant?: Variant
  /** Custom color */
  color?: string
  /** Size variant */
  size?: SizeSmMdLg
  /** Show dots on line chart */
  showDots?: boolean
  /** Enable gradient fill for area */
  gradient?: boolean
  /** Height in pixels */
  height?: number
}

export const MiniChart = forwardRef<HTMLDivElement, MiniChartProps>(
  (
    {
      data,
      type = 'line',
      variant = 'primary',
      color,
      size = 'md',
      showDots = false,
      gradient = true,
      height,
      className,
    },
    ref
  ) => {
    if (!data.length) return null

    const chartColor = color ?? variantColorMap[variant]
    const chartHeight = height ?? sizeHeightMap[size]
    const chartWidth = data.length * 8 // 8px per point

    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min || 1

    // Normalize data to 0-100 range
    const normalizedData = data.map(v => ((v - min) / range) * 100)

    // Generate points for line/area
    const points = normalizedData.map((v, i) => ({
      x: i * (chartWidth / (data.length - 1 || 1)),
      y: chartHeight - (v / 100) * chartHeight,
    }))

    const pathD = points
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
      .join(' ')

    const areaPath = `${pathD} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`

    // Bar chart
    const barWidth = chartWidth / data.length - 2
    const barGap = 2

    return (
      <div ref={ref} className={cn('inline-block', className)}>
        <svg
          width={chartWidth}
          height={chartHeight}
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="overflow-visible"
        >
          <defs>
            {gradient && (
              <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={chartColor} stopOpacity="0.3" />
                <stop offset="100%" stopColor={chartColor} stopOpacity="0" />
              </linearGradient>
            )}
          </defs>

          {type === 'bar' ? (
            // Bar chart
            normalizedData.map((v, i) => (
              <rect
                key={i}
                x={i * (barWidth + barGap)}
                y={chartHeight - (v / 100) * chartHeight}
                width={barWidth}
                height={(v / 100) * chartHeight}
                fill={chartColor}
                rx={2}
              />
            ))
          ) : (
            <>
              {/* Area fill */}
              {type === 'area' && gradient && (
                <path d={areaPath} fill={`url(#gradient-${variant})`} />
              )}

              {/* Line */}
              <path
                d={pathD}
                fill="none"
                stroke={chartColor}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Dots */}
              {showDots &&
                points.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={3}
                    fill={chartColor}
                    stroke={tv('COLOR_NEUTRAL_BASE')}
                    strokeWidth={1}
                  />
                ))}
            </>
          )}
        </svg>
      </div>
    )
  }
)

MiniChart.displayName = 'MiniChart'

export default MiniChart
