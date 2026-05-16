/**
 * CompatibilityBadge - L2 Section (Molecule)
 * Displays a compatibility status badge based on advice types.
 * Receives data via props (no own state / no store dependency).
 */

import { Badge } from '@/components/ui/badge'
import type { Advice, AdviceType } from './AdviceCard'

export interface CompatibilityBadgeProps {
  /** List of advice items to evaluate compatibility from */
  advices: Advice[]
  /** Compact mode for inline display */
  compact?: boolean
}

export function CompatibilityBadge({ advices, compact }: CompatibilityBadgeProps) {
  const hasError = advices.some((a) => a.type === 'error')
  const hasWarning = advices.some((a) => a.type === 'warning')
  const hasSuccess = advices.some((a) => a.type === 'success')

  const status = hasError
    ? { label: 'Низкая', variant: 'destructive' as const }
    : hasWarning
      ? { label: 'Средняя', variant: 'outline' as const }
      : hasSuccess
        ? { label: 'Отличная', variant: 'outline' as const }
        : { label: 'Проверка...', variant: 'secondary' as const }

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-xs">
        <span className="text-muted-foreground">Совместимость:</span>
        <Badge variant={status.variant} className="text-[10px] px-1.5">
          {status.label}
        </Badge>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-sm text-muted-foreground">Совместимость:</span>
      <Badge variant={status.variant} className="text-xs">
        {status.label}
      </Badge>
    </div>
  )
}

export default CompatibilityBadge
