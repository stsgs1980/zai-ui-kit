/**
 * AdviceCard - L2 Section (Molecule)
 * Displays a single advice/tip card with type-specific styling.
 * Composes L1 atoms, no own state.
 */

import React from 'react'
import { cn } from '../utils/cn'
import { Lightbulb, AlertCircle, CheckCircle2, Info } from 'lucide-react'

export type AdviceType = 'error' | 'warning' | 'success' | 'info'

export interface Advice {
  id: string
  type: AdviceType
  title: string
  message: string
  suggestion?: string
}

export interface AdviceCardProps {
  /** The advice data to display */
  advice: Advice
  /** Compact mode for inline/embedded display */
  compact?: boolean
}

const icons: Record<AdviceType, React.ComponentType<{ className?: string }>> = {
  error: AlertCircle,
  warning: Lightbulb,
  success: CheckCircle2,
  info: Info,
}

const styles: Record<AdviceType, { bg: string; border: string; icon: string; text: string }> = {
  error: {
    bg: 'bg-red-50 dark:bg-red-950/30',
    border: 'border-red-200 dark:border-red-800',
    icon: 'text-red-500',
    text: 'text-red-700 dark:text-red-300',
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-950/30',
    border: 'border-yellow-200 dark:border-yellow-800',
    icon: 'text-yellow-500',
    text: 'text-yellow-700 dark:text-yellow-300',
  },
  success: {
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'border-green-200 dark:border-green-800',
    icon: 'text-green-500',
    text: 'text-green-700 dark:text-green-300',
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-800',
    icon: 'text-blue-500',
    text: 'text-blue-700 dark:text-blue-300',
  },
}

export function AdviceCard({ advice, compact }: AdviceCardProps) {
  const Icon = icons[advice.type]
  const style = styles[advice.type]

  if (compact) {
    return (
      <div className={cn('p-2 rounded border text-xs', style.bg, style.border)}>
        <div className="flex items-start gap-2">
          <Icon className={cn('h-3.5 w-3.5 mt-0.5 shrink-0', style.icon)} />
          <div className="flex-1 min-w-0">
            <p className={cn('font-medium', style.text)}>{advice.title}</p>
            <p className="text-muted-foreground line-clamp-2 mt-0.5">{advice.message}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('p-3 rounded-lg border', style.bg, style.border)}>
      <div className="flex gap-3">
        <Icon className={cn('h-5 w-5 shrink-0 mt-0.5', style.icon)} />
        <div className="flex-1 space-y-1">
          <p className={cn('font-medium text-sm', style.text)}>{advice.title}</p>
          <p className="text-sm text-muted-foreground">{advice.message}</p>
          {advice.suggestion && (
            <p className="text-xs text-muted-foreground italic mt-2 pl-3 border-l-2 border-muted-foreground/30">
              Tip: {advice.suggestion}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdviceCard
