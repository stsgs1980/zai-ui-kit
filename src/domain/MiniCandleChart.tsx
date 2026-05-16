/**
 * MiniCandleChart - Candlestick mini chart for financial dashboards
 *
 * Colors sourced from centralized palette (colors.neutral.*)
 */

import { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { colors } from '../theme/colors';

export interface MiniCandleChartProps {
  /** Array of OHLC candles */
  candles: Array<{
    open: number;
    high: number;
    low: number;
    close: number;
  }>;
  /** Chart width in pixels */
  width?: number;
  /** Chart height in pixels */
  height?: number;
  /** Bullish candle color */
  bullishColor?: string;
  /** Bearish candle color */
  bearishColor?: string;
  /** Line color */
  lineColor?: string;
  /** Show close line */
  showCloseLine?: boolean;
  /** Container class name */
  className?: string;
}

export const MiniCandleChart = forwardRef<HTMLDivElement, MiniCandleChartProps>(
  ({
    candles,
    width = 248,
    height = 80,
    bullishColor = colors.neutral.base,
    bearishColor = colors.neutral.v4,
    lineColor = colors.neutral.v3,
    showCloseLine = true,
    className,
  }, ref) => {
    if (candles.length < 2) return null;

    const allHighs = candles.map((c) => c.high);
    const allLows = candles.map((c) => c.low);
    const max = Math.max(...allHighs);
    const min = Math.min(...allLows);
    const range = max - min || 1;
    const padding = 4;
    const chartH = height - padding * 2;

    const yScale = (v: number) => chartH - ((v - min) / range) * chartH + padding;

    const candleWidth = Math.max(2, Math.floor((width - padding * 2) / candles.length) - 2);
    const gap = (width - padding * 2) / candles.length;

    const closeLine = candles.map((c, i) => {
      const x = padding + i * gap + gap / 2;
      return `${x},${yScale(c.close)}`;
    }).join(' ');

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border p-2',
          className
        )}
        style={{
          backgroundColor: `rgba(${colors.neutralRgb.base}, 0.02)`,
          borderColor: `rgba(${colors.neutralRgb.base}, 0.04)`,
        }}
      >
        <svg width={width} height={height} className="w-full">
          <defs>
            <linearGradient id="close-line-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={lineColor} stopOpacity="0.2" />
              <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area fill under close line */}
          {candles.length > 1 && (() => {
            const firstX = padding + gap / 2;
            const lastX = padding + (candles.length - 1) * gap + gap / 2;
            const areaPath = `M ${firstX},${height} ${closeLine.split(' ').map(p => `L ${p}`).join(' ')} L ${lastX},${height} Z`;
            return <path d={areaPath} fill="url(#close-line-grad)" />;
          })()}

          {/* Candles */}
          {candles.map((c, i) => {
            const x = padding + i * gap + gap / 2;
            const isUp = c.close >= c.open;
            const bodyTop = yScale(Math.max(c.open, c.close));
            const bodyBottom = yScale(Math.min(c.open, c.close));
            const wickTop = yScale(c.high);
            const wickBottom = yScale(c.low);
            const bodyHeight = Math.max(1, bodyBottom - bodyTop);
            const color = isUp ? bullishColor : bearishColor;
            const colorFaded = isUp
              ? `${bullishColor}4D`
              : `${bearishColor}4D`;

            return (
              <g key={i}>
                <line
                  x1={x}
                  y1={wickTop}
                  x2={x}
                  y2={wickBottom}
                  stroke={colorFaded}
                  strokeWidth="1"
                />
                <rect
                  x={x - candleWidth / 2}
                  y={bodyTop}
                  width={candleWidth}
                  height={bodyHeight}
                  fill={color}
                  rx="0.5"
                  opacity="0.7"
                />
              </g>
            );
          })}

          {/* Close line */}
          {showCloseLine && (
            <polyline
              points={closeLine}
              fill="none"
              stroke={lineColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
            />
          )}
        </svg>
      </div>
    );
  }
);

MiniCandleChart.displayName = 'MiniCandleChart';
