/**
 * EmptyState - L2 Section (Molecule)
 * Placeholder state when no layout is selected.
 * Composes L1 atoms, no own state.
 */

import { Sparkles } from 'lucide-react'

export interface EmptyStateProps {
  /** Compact mode for inline/embedded display */
  compact?: boolean
  /** Title text (default: Russian) */
  title?: string
  /** Subtitle text */
  subtitle?: string
}

export function EmptyState({ compact, title = 'Начните выбирать макет', subtitle = 'Здесь появятся советы' }: EmptyStateProps) {
  if (compact) {
    return (
      <div className="text-center py-3">
        <Sparkles className="h-6 w-6 mx-auto text-muted-foreground/30 mb-1" />
        <p className="text-xs text-muted-foreground">{title}</p>
      </div>
    )
  }

  return (
    <div className="text-center py-8">
      <Sparkles className="h-10 w-10 mx-auto text-muted-foreground/30 mb-3" />
      <p className="text-muted-foreground font-medium">{title}</p>
      {subtitle && <p className="text-sm text-muted-foreground/70 mt-1">{subtitle}</p>}
    </div>
  )
}

export default EmptyState
