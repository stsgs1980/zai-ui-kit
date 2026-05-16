/**
 * GoalSelector - L3 Feature (Organism)
 * Project goal selector buttons.
 * Has own state via useAppStore.
 */

'use client'

import React from 'react'
import { useAppStore } from '@/store/useAppStore'
import { goalLabels } from '@/data/layouts'
import { cn } from '../utils/cn'

const goals = ['landing', 'admin-panel', 'blog', 'ecommerce'] as const

export function GoalSelector() {
  const { projectGoal, setGoal } = useAppStore()

  return (
    <div className="flex items-center gap-1 flex-wrap">
      {goals.map((goal) => (
        <button
          key={goal}
          onClick={() => setGoal(goal)}
          className={cn(
            'px-3 py-1.5 text-sm rounded transition-all',
            'border border-border hover:border-primary/50',
            projectGoal === goal
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-background hover:bg-muted'
          )}
        >
          {goalLabels[goal]}
        </button>
      ))}
    </div>
  )
}

export default GoalSelector
