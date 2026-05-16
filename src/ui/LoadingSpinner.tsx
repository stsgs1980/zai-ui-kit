/**
 * LoadingSpinner - Animated loading spinner
 */

import { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { colors } from '../theme/colors';

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
          borderColor: borderColor || `rgba(${colors.neutralRgb.v3}, 0.3)`,
          borderTopColor: color || colors.neutral.base,
        }}
      />
    );
  }
);

LoadingSpinner.displayName = 'LoadingSpinner';
