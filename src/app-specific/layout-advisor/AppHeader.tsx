/**
 * AppHeader - L2 Section (Molecule)
 * Application header with branding and goal selector slot.
 * Composes L1 atoms, no own state.
 */

import React from 'react'
import { Sparkles } from 'lucide-react'

export interface AppHeaderProps {
  /** Title text */
  title?: string
  /** Subtitle text */
  subtitle?: string
  /** Slot for goal selector or other controls */
  actions?: React.ReactNode
}

export function AppHeader({
  title = 'Layout & Stack Advisor',
  subtitle = 'Умный конструктор макетов для новичков',
  actions,
}: AppHeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur py-4 px-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        {actions && <div>{actions}</div>}
      </div>
    </header>
  )
}

export default AppHeader
