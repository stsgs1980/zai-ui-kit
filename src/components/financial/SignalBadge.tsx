/**
 * SignalBadge - Trading signal badge (BULLISH/BEARISH/NEUTRAL)
 */

import { forwardRef } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

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

const signalConfig: Record<SignalType, { icon: React.ReactNode; className: string }> = {
  BULLISH: {
    icon: <TrendingUp className="w-3 h-3" />,
    className: 'border-green-500/50 text-green-400 bg-green-500/10',
  },
  BEARISH: {
    icon: <TrendingDown className="w-3 h-3" />,
    className: 'border-red-500/50 text-red-400 bg-red-500/10',
  },
  NEUTRAL: {
    icon: <Minus className="w-3 h-3" />,
    className: 'border-gray-500/50 text-gray-400 bg-gray-500/10',
  },
};

export const SignalBadge = forwardRef<HTMLSpanElement, SignalBadgeProps>(
  ({ signal, showIcon = true, size = 'md', className }, ref) => {
    const config = signalConfig[signal];

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 border rounded-full font-medium',
          size === 'sm' && 'text-[9px] px-1.5 py-0.5',
          size === 'md' && 'text-xs px-2 py-0.5',
          config.className,
          className
        )}
      >
        {showIcon && config.icon}
        <span>{signal}</span>
      </span>
    );
  }
);

SignalBadge.displayName = 'SignalBadge';
