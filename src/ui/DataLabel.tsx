/**
 * DataLabel - Small label text for data sections
 */

import { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { tv } from '../tokens';

export interface DataLabelProps {
  /** Label text */
  children: React.ReactNode;
  /** Size variant */
  size?: 'xs' | 'sm' | 'md';
  /** Text color */
  color?: string;
  /** Uppercase text */
  uppercase?: boolean;
  /** Container class name */
  className?: string;
}

export const DataLabel = forwardRef<HTMLSpanElement, DataLabelProps>(
  ({ children, size = 'sm', color, uppercase = true, className }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'tracking-wider',
          size === 'xs' && 'text-[8px]',    // TODO: Add token for 8px font size
          size === 'sm' && 'text-[10px]',    // TODO: Add token for 10px font size
          size === 'md' && 'text-xs',
          uppercase && 'uppercase',
          className
        )}
        style={color ? { color } : { color: tv('COLOR_NEUTRAL_V3') }}
      >
        {children}
      </span>
    );
  }
);

DataLabel.displayName = 'DataLabel';
