/**
 * LoadingSpinner - Animated loading spinner
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface LoadingSpinnerProps {
  /** Spinner size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Spinner color */
  color?: string;
  /** Border color (faded part) */
  borderColor?: string;
  /** Container class name */
  className?: string;
}

export const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ size = 'md', color, borderColor, className }, ref) => {
    const sizeMap = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-full border-2 animate-spin',
          sizeMap[size],
          className
        )}
        style={{
          borderColor: borderColor || 'rgba(251, 191, 36, 0.3)',
          borderTopColor: color || '#fbbf24',
        }}
      />
    );
  }
);

LoadingSpinner.displayName = 'LoadingSpinner';
