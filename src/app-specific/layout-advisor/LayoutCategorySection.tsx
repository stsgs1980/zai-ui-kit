/**
 * LayoutCategorySection - L2 Section (Molecule)
 * Displays a category of layout cards in the selector.
 * Composes L1 atoms, no own state.
 */

import { LayoutAdvisorCard, type LayoutData } from './LayoutAdvisorCard'

export interface LayoutCategorySectionProps {
  /** Category ID */
  categoryId: string
  /** Category display name */
  name: string
  /** Category description */
  description: string
  /** Layout IDs belonging to this category */
  layoutIds: string[]
  /** All available layouts (filtered by category) */
  allLayouts: LayoutData[]
  /** Currently selected layout ID */
  selectedId: string | null
  /** Current project goal for conflict/best-match detection */
  projectGoal: string
  /** Callback when a layout is selected */
  onSelect: (layout: LayoutData) => void
}

export function LayoutCategorySection({
  name,
  layoutIds,
  allLayouts,
  selectedId,
  projectGoal,
  onSelect,
}: LayoutCategorySectionProps) {
  const categoryLayouts = allLayouts.filter((l) => layoutIds.includes(l.id))

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-1">
        <span className="font-medium text-sm">{name}</span>
        <span className="text-xs text-muted-foreground">({categoryLayouts.length})</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {categoryLayouts.map((layout) => (
          <LayoutAdvisorCard
            key={layout.id}
            layout={layout}
            isSelected={selectedId === layout.id}
            hasConflict={layout.conflicts.includes(projectGoal)}
            isBestMatch={layout.bestFor.includes(projectGoal)}
            onClick={() => onSelect(layout)}
          />
        ))}
      </div>
    </div>
  )
}

export default LayoutCategorySection
