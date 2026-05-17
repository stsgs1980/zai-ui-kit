/**
 * SignalBadge - Trading signal badge (BULLISH/BEARISH/NEUTRAL)
 *
 * Colors sourced from token system (tv() + color-mix())
 */

import { forwardRef } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '../utils/cn';
import { tv } from '../tokens';

export type SignalType = 'BULLISH' | 'BEARISH' | 'NEUTRAL';

export interface SignalBadgeProps {
  /** Signal type */
  signal: SignalType;
  /** Show icon */
  showIcon?: boolean;
  /** Badge size */
  size?: 'sm' | 'md';
  /** Container class name */
  className?: string;
}

/** Map signal → token-based CSS custom properties */
const signalCSSProps: Record<SignalType, React.CSSProperties> = {
  BULLISH: {
    '--signal-text': tv('COLOR_NEUTRAL_V2'),
    '--signal-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V2')} 10%, transparent)`,
    '--signal-border': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V2')} 50%, transparent)`,
  } as React.CSSProperties,
  BEARISH: {
    '--signal-text': tv('COLOR_NEUTRAL_V3'),
    '--signal-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 10%, transparent)`,
    '--signal-border': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V4')} 50%, transparent)`,
  } as React.CSSProperties,
  NEUTRAL: {
    '--signal-text': tv('COLOR_NEUTRAL_V3'),
    '--signal-bg': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V3')} 10%, transparent)`,
    '--signal-border': `color-mix(in srgb, ${tv('COLOR_NEUTRAL_V3')} 50%, transparent)`,
  } as React.CSSProperties,
}

const signalIcons: Record<SignalType, React.ReactNode> = {
  BULLISH: <TrendingUp className="w-3 h-3" />,
  BEARISH: <TrendingDown className="w-3 h-3" />,
  NEUTRAL: <Minus className="w-3 h-3" />,
};

export const SignalBadge = forwardRef<HTMLSpanElement, SignalBadgeProps>(
  ({ signal, showIcon = true, size = 'md', className }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-[var(--zai-space-element-xs)] border rounded-[var(--zai-radius-full)] font-medium',
          'text-[var(--signal-text)] bg-[var(--signal-bg)] border-[var(--signal-border)]',
          size === 'sm' && 'text-[9px] px-[var(--zai-badge-padding-x)] py-[var(--zai-badge-padding-y)]',
          size === 'md' && 'text-xs px-[var(--zai-space-element-sm)] py-[var(--zai-badge-padding-y)]',
          className
        )}
        style={signalCSSProps[signal]}
      >
        {showIcon && signalIcons[signal]}
        <span>{signal}</span>
      </span>
    );
  }
);

SignalBadge.displayName = 'SignalBadge';
