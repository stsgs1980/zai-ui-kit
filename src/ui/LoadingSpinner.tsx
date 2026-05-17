/**
 * LoadingSpinner - Animated loading spinner
 */

import { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { tv } from '../tokens';
import { colors } from '../theme/colors';  // TODO: Remove when neutral RGB tokens are available

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
      sm: 'w-4 h-4',     // TODO: Add token for sm spinner size
      md: 'w-8 h-8',     // TODO: Add token for md spinner size
      lg: 'w-12 h-12',   // TODO: Add token for lg spinner size
      xl: 'w-16 h-16',   // TODO: Add token for xl spinner size
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[var(--zai-radius-full)] border-2 animate-spin',  // TODO: Add token for border-width
          sizeMap[size],
          className
        )}
        style={{
          // TODO: Add token for neutral.v3 at 30% alpha
          borderColor: borderColor || `rgba(${colors.neutralRgb.v3}, 0.3)`,
          borderTopColor: color || tv('COLOR_NEUTRAL_BASE'),
        }}
      />
    );
  }
);

LoadingSpinner.displayName = 'LoadingSpinner';
