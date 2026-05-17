/**
 * MetricCard - Simple metric display card
 *
 * Colors sourced from token system (tv() + color-mix())
 */

import { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { tv } from '../tokens';

export interface MetricCardProps {
  /** Label text */
  label: string;
  /** Value to display */
  value: string | number;
  /** Text color — accepts any CSS color string, defaults to token text.primary */
  color?: string;
  /** Subtext below value */
  subtext?: string;
  /** Container class name */
  className?: string;
}

export const MetricCard = forwardRef<HTMLDivElement, MetricCardProps>(
  ({ label, value, color, subtext, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[var(--zai-radius-md)] px-[var(--zai-space-element-sm)] py-[var(--zai-space-element-sm)] border',
          className
        )}
        style={{
          backgroundColor: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 3%, transparent)`,
          borderColor: `color-mix(in srgb, ${tv('COLOR_NEUTRAL_BASE')} 6%, transparent)`,
        }}
      >
        <div className="text-[10px] uppercase tracking-wider" style={{ color: tv('COLOR_NEUTRAL_V3') }}>
          {label}
        </div>
        <div className="text-sm font-semibold tabular-nums" style={{ color: color || tv('COLOR_TEXT_PRIMARY') }}>
          {value}
        </div>
        {subtext && (
          <div className="text-[9px] tabular-nums" style={{ color: tv('COLOR_NEUTRAL_V4') }}>
            {subtext}
          </div>
        )}
      </div>
    );
  }
);

MetricCard.displayName = 'MetricCard';
