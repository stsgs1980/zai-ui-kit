/**
 * GlowDot - Glowing status dot with effects
 */

import { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { colors } from '../theme/colors';

export type GlowDotVariant = 'online' | 'offline' | 'warning' | 'success' | 'info' | 'neutral';

export interface GlowDotProps {
  /** Dot variant/color */
  variant?: GlowDotVariant;
  /** Dot size */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Pulse animation */
  pulse?: boolean;
  /** Glow intensity (0-1) */
  glowIntensity?: number;
  /** Container class name */
  className?: string;
}

const variantColors: Record<GlowDotVariant, string> = {
  online: colors.status.online,
  offline: colors.status.offline,
  warning: colors.status.warning,
  success: colors.status.success,
  info: colors.status.info,
  neutral: colors.neutral.v3,
};

export const GlowDot = forwardRef<HTMLSpanElement, GlowDotProps>(
  ({ variant = 'neutral', size = 'sm', pulse, glowIntensity = 0.6, className }, ref) => {
    const color = variantColors[variant];
    
    const sizeMap = {
      xs: 'w-1 h-1',
      sm: 'w-1.5 h-1.5',
      md: 'w-2 h-2',
      lg: 'w-3 h-3',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'rounded-full inline-block',
          sizeMap[size],
          pulse && 'animate-pulse',
          className
        )}
        style={{
          backgroundColor: color,
          boxShadow: `0 0 ${6 * glowIntensity}px ${color}${Math.round(glowIntensity * 99).toString(16).padStart(2, '0')}`,
        }}
      />
    );
  }
);

GlowDot.displayName = 'GlowDot';
