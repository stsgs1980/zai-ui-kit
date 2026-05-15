/**
 * GaugeMeter - Circular/semi-circular gauge for displaying progress or levels
 */

import { forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { colors } from '../../theme/colors'
import type { Size, Variant, WithClassName } from '../../utils/types'

export interface GaugeMeterProps extends WithClassName {
  /** Current value */
  value: number
  /** Maximum value */
  max?: number
  /** Minimum value */
  min?: number
  /** Size variant */
  size?: Size
  /** Color variant */
  variant?: Variant
  /** Custom color */
  color?: string
  /** Show value label in center */
  showValue?: boolean
  /** Label suffix */
  unit?: string
  /** Title label */
  label?: string
  /** Thresholds for color changes */
  thresholds?: {
    warning: number
    danger: number
  }
  /** Semi-circular vs full circle */
  semiCircular?: boolean
  /** Thickness of the gauge */
  thickness?: number
}

const sizeConfig = {
  xs: { size: 48, strokeWidth: 4, fontSize: 'text-xs' },
  sm: { size: 64, strokeWidth: 5, fontSize: 'text-sm' },
  md: { size: 96, strokeWidth: 6, fontSize: 'text-lg' },
  lg: { size: 128, strokeWidth: 8, fontSize: 'text-2xl' },
  xl: { size: 160, strokeWidth: 10, fontSize: 'text-3xl' },
}

const variantColorMap: Record<Variant, string> = {
  primary: colors.semantic.primary,
  secondary: colors.semantic.secondary,
  success: colors.semantic.positive,
  warning: colors.semantic.caution,
  danger: colors.semantic.danger,
  info: colors.status.info,
  neutral: colors.status.neutral,
}

export const GaugeMeter = forwardRef<HTMLDivElement, GaugeMeterProps>(
  (
    {
      value,
      max = 100,
      min = 0,
      size = 'md',
      variant = 'primary',
      color,
      showValue = true,
      unit,
      label,
      thresholds,
      semiCircular = true,
      thickness,
      className,
    },
    ref
  ) => {
    const config = sizeConfig[size]
    const actualThickness = thickness ?? config.strokeWidth
    const percentage = Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100)

    // Determine color based on thresholds
    let arcColor = color ?? variantColorMap[variant]
    if (thresholds) {
      if (percentage >= thresholds.danger) {
        arcColor = colors.semantic.danger
      } else if (percentage >= thresholds.warning) {
        arcColor = colors.semantic.caution
      }
    }

    // SVG calculations
    const sizePx = config.size
    const center = sizePx / 2
    const radius = (sizePx - actualThickness) / 2

    // For semi-circular: only show bottom half
    const startAngle = semiCircular ? Math.PI : 0
    const endAngle = semiCircular ? 2 * Math.PI : 2 * Math.PI

    // Arc path calculation
    const angleOffset = semiCircular ? Math.PI : 0
    const endAngleAdjusted = angleOffset + (percentage / 100) * Math.PI

    const x1 = center + radius * Math.cos(Math.PI)
    const y1 = center + radius * Math.sin(Math.PI)
    const x2 = center + radius * Math.cos(2 * Math.PI)
    const y2 = center + radius * Math.sin(2 * Math.PI)

    const largeArcFlag = percentage > 50 ? 1 : 0

    // Current progress arc end point
    const progressEndAngle = Math.PI + (percentage / 100) * Math.PI
    const px = center + radius * Math.cos(progressEndAngle)
    const py = center + radius * Math.sin(progressEndAngle)

    return (
      <div ref={ref} className={cn('inline-flex flex-col items-center', className)}>
        <div className="relative" style={{ width: sizePx, height: semiCircular ? sizePx / 2 + 10 : sizePx }}>
          <svg
            width={sizePx}
            height={semiCircular ? sizePx / 2 + 10 : sizePx}
            viewBox={`0 0 ${sizePx} ${semiCircular ? sizePx / 2 + 10 : sizePx}`}
          >
            {/* Background arc */}
            <path
              d={`M ${center - radius} ${center} A ${radius} ${radius} 0 1 1 ${center + radius} ${center}`}
              fill="none"
              stroke={colors.border.default}
              strokeWidth={actualThickness}
              strokeLinecap="round"
            />

            {/* Progress arc */}
            <path
              d={`M ${center - radius} ${center} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${px} ${py}`}
              fill="none"
              stroke={arcColor}
              strokeWidth={actualThickness}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 0.5s ease-out',
              }}
            />
          </svg>

          {/* Center value */}
          {showValue && (
            <div
              className={cn(
                'absolute inset-x-0 flex flex-col items-center',
                semiCircular ? 'bottom-0' : 'top-1/2 -translate-y-1/2'
              )}
            >
              <span className={cn('font-bold tabular-nums', config.fontSize)}>
                {Math.round(percentage)}
                {unit && <span className="text-sm text-gray-400 ml-0.5">{unit}</span>}
              </span>
              {label && (
                <span className="text-xs text-gray-500">{label}</span>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)

GaugeMeter.displayName = 'GaugeMeter'

export default GaugeMeter
