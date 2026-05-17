/**
 * RecommendationsTab - L3 Feature (Organism)
 * Summary of the user's layout and theme configuration.
 * Has own state via useAppStore.
 */

'use client'

import React from 'react'
import { useAppStore } from '@/store/useAppStore'

export function RecommendationsTab() {
  const { selectedLayout, projectGoal, theme } = useAppStore()

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold mb-2">Ваш выбор</h2>
        <p className="text-muted-foreground">Сводка по текущей конфигурации</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border bg-muted/30">
          <p className="text-sm text-muted-foreground mb-1">Тип проекта</p>
          <p className="font-medium">
            {projectGoal === 'landing' && 'Landing'}
            {projectGoal === 'admin-panel' && 'Admin Panel'}
            {projectGoal === 'blog' && 'Blog'}
            {projectGoal === 'ecommerce' && 'E-commerce'}
          </p>
        </div>

        <div className="p-4 rounded-lg border bg-muted/30">
          <p className="text-sm text-muted-foreground mb-1">Макет</p>
          <p className="font-medium">{selectedLayout?.name || 'Не выбран'}</p>
        </div>

        <div className="p-4 rounded-lg border bg-muted/30">
          <p className="text-sm text-muted-foreground mb-1">Тема</p>
          <p className="font-medium">
            {theme.mode === 'light' ? 'Light' : 'Dark'}
          </p>
        </div>

        <div className="p-4 rounded-lg border bg-muted/30">
          <p className="text-sm text-muted-foreground mb-1">Шрифт</p>
          <p className="font-medium capitalize">
            {theme.fontFamily} ({theme.fontSize.toUpperCase()})
          </p>
        </div>
      </div>

      {selectedLayout && (
        <div className="p-6 rounded-lg border bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
          <h3 className="font-bold text-lg mb-3">Recommendation</h3>
          <p className="text-muted-foreground mb-4">{selectedLayout.techNotes}</p>
          <div className="space-y-2">
            <p className="font-medium">Подходит для:</p>
            <div className="flex flex-wrap gap-2">
              {selectedLayout.bestFor.map((use) => (
                <span key={use} className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs">
                  {use === 'admin-panel' ? 'Админ-панель' : use === 'landing' ? 'Лендинг' : use === 'ecommerce' ? 'Магазин' : 'Блог'}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedLayout && selectedLayout.conflicts.includes(projectGoal) && (
        <div className="p-6 rounded-lg border bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
          <h3 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">Warning!</h3>
          <p className="text-muted-foreground">
            Макет <strong>{selectedLayout.name}</strong> не рекомендуется для &quot;{projectGoal}&quot;.
          </p>
        </div>
      )}
    </div>
  )
}

export default RecommendationsTab
