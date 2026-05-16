/**
 * MetricCard - Simple metric display card
 *
 * Colors sourced from centralized palette (colors.neutral.*)
 */

import { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { colors } from '../theme/colors';

export interface MetricCardProps {
  /** Label text */
  label: string;
  /** Value to display */
  value: string | number;
  /** Text color — accepts any CSS color string, defaults to palette text.primary */
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
          'rounded-md px-2.5 py-1.5 border',
          className
        )}
        style={{
          backgroundColor: `rgba(${colors.neutralRgb.base}, 0.03)`,
          borderColor: `rgba(${colors.neutralRgb.base}, 0.06)`,
        }}
      >
        <div className="text-[10px] uppercase tracking-wider" style={{ color: colors.neutral.v3 }}>
          {label}
        </div>
        <div className="text-sm font-semibold tabular-nums" style={{ color: color || colors.text.primary }}>
          {value}
        </div>
        {subtext && (
          <div className="text-[9px] tabular-nums" style={{ color: colors.neutral.v4 }}>
            {subtext}
          </div>
        )}
      </div>
    );
  }
);

MetricCard.displayName = 'MetricCard';
