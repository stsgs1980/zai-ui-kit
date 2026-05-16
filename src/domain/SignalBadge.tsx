/**
 * SignalBadge - Trading signal badge (BULLISH/BEARISH/NEUTRAL)
 *
 * Colors sourced from centralized palette (colors.neutral.*)
 */

import { forwardRef } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '../utils/cn';
import { colors } from '../theme/colors';

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

/** Map signal → neutral palette key for text/border tint */
const signalKey: Record<SignalType, 'v2' | 'v3' | 'v4'> = {
  BULLISH: 'v2',    // #BFBFBF
  BEARISH: 'v4',    // #5C6070 (border), v3 (text)
  NEUTRAL: 'v3',    // #878992
}

/** Map signal → text color key (may differ from border key) */
const signalTextKey: Record<SignalType, 'v2' | 'v3'> = {
  BULLISH: 'v2',    // #BFBFBF
  BEARISH: 'v3',    // #878992
  NEUTRAL: 'v3',    // #878992
}

const signalIcons: Record<SignalType, React.ReactNode> = {
  BULLISH: <TrendingUp className="w-3 h-3" />,
  BEARISH: <TrendingDown className="w-3 h-3" />,
  NEUTRAL: <Minus className="w-3 h-3" />,
};

/** Build CSS custom properties for a signal */
function getSignalCSSProps(signal: SignalType): React.CSSProperties {
  const k = signalKey[signal]
  const tk = signalTextKey[signal]
  const rgb = colors.neutralRgb[k]
  const textRgb = colors.neutralRgb[tk]
  return {
    '--signal-text': `rgba(${textRgb}, 1)`,
    '--signal-bg': `rgba(${rgb}, 0.1)`,
    '--signal-border': `rgba(${rgb}, 0.5)`,
  } as React.CSSProperties
}

export const SignalBadge = forwardRef<HTMLSpanElement, SignalBadgeProps>(
  ({ signal, showIcon = true, size = 'md', className }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 border rounded-full font-medium',
          'text-[var(--signal-text)] bg-[var(--signal-bg)] border-[var(--signal-border)]',
          size === 'sm' && 'text-[9px] px-1.5 py-0.5',
          size === 'md' && 'text-xs px-2 py-0.5',
          className
        )}
        style={getSignalCSSProps(signal)}
      >
        {showIcon && signalIcons[signal]}
        <span>{signal}</span>
      </span>
    );
  }
);

SignalBadge.displayName = 'SignalBadge';
