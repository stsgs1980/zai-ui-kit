/**
 * SettingsTab - L2 Section (Molecule)
 * Settings tab layout with theme controls and help content.
 * Composes L1 atoms, no own state.
 */

import React from 'react'

export interface SettingsTabProps {
  /** Theme settings panel content */
  themePanel: React.ReactNode
  /** How-to-use instructions */
  howToItems?: string[]
  /** What-you-learn items */
  learnItems?: string[]
}

const defaultHowTo = [
  '1. Выберите цель проекта в шапке',
  '2. Кликните на макет для предпросмотра',
  '3. Изучите советы ментора внизу',
  '4. Настройте тему по вкусу',
]

const defaultLearn = [
  '• Какие макеты подходят для разных проектов',
  '• Основы CSS Grid и Flexbox',
  '• Bento Grid, Fibonacci Grid и другие',
  '• Как избежать типичных ошибок',
]

export function SettingsTab({
  themePanel,
  howToItems = defaultHowTo,
  learnItems = defaultLearn,
}: SettingsTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {themePanel}
      <div className="space-y-4">
        <div className="p-4 rounded-lg border bg-muted/30">
          <h3 className="font-medium mb-2">How to use</h3>
          <ol className="text-sm text-muted-foreground space-y-2">
            {howToItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
          <h3 className="font-medium mb-2 text-green-700 dark:text-green-300">
            What you will learn
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            {learnItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SettingsTab
