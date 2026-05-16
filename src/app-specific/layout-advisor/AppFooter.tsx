/**
 * AppFooter - L2 Section (Molecule)
 * Application footer with credits.
 * Composes L1 atoms, no own state.
 */

import { Heart } from 'lucide-react'

export interface AppFooterProps {
  /** Version label */
  version?: string
  /** Layout count label */
  layoutCount?: number
  /** "Made with love" text */
  credits?: string
}

export function AppFooter({
  version = 'Layout & Stack Advisor v2.0',
  layoutCount,
  credits = 'для обучения',
}: AppFooterProps) {
  return (
    <footer className="border-t bg-muted/30 py-3 px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>{version}</span>
          {layoutCount !== undefined && (
            <>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">{layoutCount} CSS Grid макетов</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-1">
          Сделано с <Heart className="h-3 w-3 text-red-500" /> {credits}
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
