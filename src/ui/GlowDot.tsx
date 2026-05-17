/**
 * GlowDot - Glowing status dot with effects
 */

import { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { tv } from '../tokens';

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
  online: tv('COLOR_STATUS_ONLINE'),
  offline: tv('COLOR_STATUS_OFFLINE'),
  warning: tv('COLOR_STATUS_WARNING'),
  success: tv('COLOR_STATUS_SUCCESS'),
  info: tv('COLOR_STATUS_INFO'),
  neutral: tv('COLOR_NEUTRAL_V3'),
};

export const GlowDot = forwardRef<HTMLSpanElement, GlowDotProps>(
  ({ variant = 'neutral', size = 'sm', pulse, glowIntensity = 0.6, className }, ref) => {
    const color = variantColors[variant];
    
    const sizeMap = {
      xs: 'w-1 h-1',       // TODO: Add token for xs dot size
      sm: 'w-1.5 h-1.5',   // TODO: Add token for sm dot size
      md: 'w-2 h-2',       // TODO: Add token for md dot size
      lg: 'w-3 h-3',       // TODO: Add token for lg dot size
    };

    return (
      <span
        ref={ref}
        className={cn(
          'rounded-[var(--zai-radius-full)] inline-block',
          sizeMap[size],
          pulse && 'animate-pulse',
          className
        )}
        style={{
          backgroundColor: color,
          // TODO: Add per-variant glow token; spread (6px) and alpha are dynamic
          boxShadow: `0 0 ${6 * glowIntensity}px ${color}${Math.round(glowIntensity * 99).toString(16).padStart(2, '0')}`,
        }}
      />
    );
  }
);

GlowDot.displayName = 'GlowDot';
