/**
 * LayoutSelector - L3 Feature (Organism)
 * Grid of layout cards with category filtering.
 * Has own state via useAppStore + useState.
 */

'use client'

import React, { useState } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { layouts, layoutCategories } from '@/data/layouts'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '../utils/cn'
import { LayoutCategorySection } from '../sections/LayoutCategorySection'
import type { LayoutData } from '../sections/LayoutAdvisorCard'

export function LayoutSelector() {
  const { selectedLayout, projectGoal, setLayout } = useAppStore()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = activeCategory
    ? layoutCategories.filter((c) => c.id === activeCategory)
    : layoutCategories

  // Cast layouts to LayoutData for section compatibility
  const allLayouts = layouts as unknown as LayoutData[]

  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Макеты</h2>
          <span className="text-xs text-muted-foreground">
            {layouts.length} вариантов
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              'px-2 py-1 text-xs rounded transition-colors',
              !activeCategory
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            )}
          >
            Все
          </button>
          {layoutCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'px-2 py-1 text-xs rounded transition-colors',
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <CardContent className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {categories.map((category) => (
            <LayoutCategorySection
              key={category.id}
              categoryId={category.id}
              name={category.name}
              description={category.description}
              layoutIds={category.layouts}
              allLayouts={allLayouts}
              selectedId={selectedLayout?.id || null}
              projectGoal={projectGoal}
              onSelect={(layout) => setLayout(layout as any)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default LayoutSelector
