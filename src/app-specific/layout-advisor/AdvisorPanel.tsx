/**
 * AdvisorPanel - L3 Feature (Organism)
 * Mentor tips panel with collapsible mode.
 * Has own state via useAppStore.
 */

'use client'

import React from 'react'
import { useAppStore } from '@/store/useAppStore'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb } from 'lucide-react'
import { AdviceCard } from '../sections/AdviceCard'
import { EmptyState } from '../sections/EmptyState'
import { QuickLinks } from '../sections/QuickLinks'
import { CompatibilityBadge } from '../sections/CompatibilityBadge'

export interface AdvisorPanelProps {
  /** Compact mode for footer embedding */
  compact?: boolean
}

export function AdvisorPanel({ compact = false }: AdvisorPanelProps) {
  const { advices } = useAppStore()

  if (compact) {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <CompatibilityBadge advices={advices} compact />
          <span className="text-xs text-muted-foreground">
            {advices.length} {advices.length === 1 ? 'совет' : advices.length < 5 ? 'совета' : 'советов'}
          </span>
        </div>
        {advices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {advices.map((advice) => (
              <AdviceCard key={advice.id} advice={advice} compact />
            ))}
          </div>
        ) : (
          <EmptyState compact />
        )}
        <QuickLinks compact />
      </div>
    )
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          Советы ментора
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto">
        <CompatibilityBadge advices={advices} />
        {advices.length > 0 ? (
          <div className="space-y-3">
            {advices.map((advice) => (
              <AdviceCard key={advice.id} advice={advice} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
        <QuickLinks />
      </CardContent>
    </Card>
  )
}

export default AdvisorPanel
