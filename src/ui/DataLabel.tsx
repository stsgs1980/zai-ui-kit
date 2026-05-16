/**
 * DataLabel - Small label text for data sections
 */

import { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { colors } from '../theme/colors';

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
          size === 'xs' && 'text-[8px]',
          size === 'sm' && 'text-[10px]',
          size === 'md' && 'text-xs',
          uppercase && 'uppercase',
          className
        )}
        style={color ? { color } : { color: colors.neutral.v3 }}
      >
        {children}
      </span>
    );
  }
);

DataLabel.displayName = 'DataLabel';
