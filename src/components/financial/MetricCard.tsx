/**
 * MetricCard - Simple metric display card
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface MetricCardProps {
  /** Label text */
  label: string;
  /** Value to display */
  value: string | number;
  /** Text color */
  color?: string;
  /** Subtext below value */
  subtext?: string;
  /** Container class name */
  className?: string;
}

export const MetricCard = forwardRef<HTMLDivElement, MetricCardProps>(
  ({ label, value, color = 'text-white', subtext, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white/[0.03] rounded-md px-2.5 py-1.5 border border-white/[0.04]',
          className
        )}
      >
        <div className="text-[10px] text-gray-500 uppercase tracking-wider">
          {label}
        </div>
        <div className={cn('text-sm font-semibold tabular-nums', color)}>
          {value}
        </div>
        {subtext && (
          <div className="text-[9px] text-gray-600 tabular-nums">
            {subtext}
          </div>
        )}
      </div>
    );
  }
);

MetricCard.displayName = 'MetricCard';
