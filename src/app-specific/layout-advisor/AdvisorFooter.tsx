/**
 * AdvisorFooter - L3 Feature (Organism)
 * Collapsible advisor footer panel.
 * Has own state (useState) + useAppStore.
 */

'use client'

import React, { useState } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { MessageCircle, ChevronUp, ChevronDown } from 'lucide-react'
import { AdvisorPanel } from './AdvisorPanel'

export function AdvisorFooter() {
  const [expanded, setExpanded] = useState(false)
  const { advices } = useAppStore()

  const errorCount = advices.filter((a) => a.type === 'error').length
  const warningCount = advices.filter((a) => a.type === 'warning').length
  const successCount = advices.filter((a) => a.type === 'success').length

  return (
    <div className="border-t bg-background">
      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-6 py-3 hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <MessageCircle className="h-4 w-4 text-primary" />
          <span className="font-medium text-sm">Советы ментора</span>
          <div className="flex items-center gap-1.5">
            {errorCount > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] rounded bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                {errorCount} errors
              </span>
            )}
            {warningCount > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
                {warningCount} tips
              </span>
            )}
            {successCount > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] rounded bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                {successCount} ok
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-xs">{advices.length} советов</span>
          {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-6 pb-4 border-t bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <AdvisorPanel compact />
          </div>
        </div>
      )}
    </div>
  )
}

export default AdvisorFooter
