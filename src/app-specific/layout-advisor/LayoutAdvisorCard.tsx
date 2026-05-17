/**
 * LayoutAdvisorCard - L2 Section (Molecule)
 * A card displaying a single layout option in the selector.
 * Renamed from LayoutCard to avoid conflict with grid-showcase.
 * Composes L1 atoms, no own state.
 */

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '../utils/cn'
import {
  LayoutPanelLeft, LayoutPanelTop, LayoutList, Columns2, Columns3,
  Layout, Split, LayoutGrid, Newspaper, Monitor, Grid3x3, Square,
  LayoutDashboard, BookOpen, Sigma, RefreshCw, Circle, Grid2x2,
  Table, Layers, Hexagon, SquareDashed, Smartphone,
  TrendingUp, ArrowUpRight, Sun, Waves, Triangle,
  RectangleHorizontal, Diamond, Music, Pi, Hash,
  SquareDashedBottom, SquareRadical,
} from 'lucide-react'

export interface LayoutData {
  id: string
  name: string
  description: string
  icon: string
  bestFor: string[]
  conflicts: string[]
  [key: string]: unknown
}

export interface LayoutAdvisorCardProps {
  /** Layout data */
  layout: LayoutData
  /** Whether this layout is currently selected */
  isSelected: boolean
  /** Whether this layout conflicts with the current goal */
  hasConflict: boolean
  /** Whether this layout is a best match for the current goal */
  isBestMatch: boolean
  /** Click handler */
  onClick: () => void
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutPanelLeft, LayoutPanelTop, LayoutList, Columns2, Columns3,
  Layout, Split, LayoutGrid, Newspaper, Monitor, Grid3x3, Square,
  LayoutDashboard, BookOpen, Sigma, RefreshCw, Circle, Grid2x2,
  Table, Layers, Hexagon, SquareDashed, Smartphone,
  TrendingUp, ArrowUpRight, Sun, Waves, Triangle,
  RectangleHorizontal, Diamond, Music, Pi, Hash,
  SquareDashedBottom, SquareRadical,
}

export function LayoutAdvisorCard({ layout, isSelected, hasConflict, isBestMatch, onClick }: LayoutAdvisorCardProps) {
  const Icon = iconMap[layout.icon] || LayoutGrid

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left p-3 rounded border transition-all group',
        'hover:shadow-md hover:scale-[1.02]',
        isSelected
          ? 'border-primary bg-primary/5 ring-1 ring-primary'
          : 'border-border hover:border-primary/50 bg-background'
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn(
          'p-2 rounded shrink-0 transition-colors',
          isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted group-hover:bg-primary/10'
        )}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm truncate">{layout.name}</span>
            {hasConflict && (
              <Badge variant="destructive" className="text-[10px] px-1.5">!</Badge>
            )}
            {isBestMatch && !hasConflict && (
              <Badge variant="outline" className="text-[10px] px-1.5 border-green-500 text-green-600">OK</Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
            {layout.description}
          </p>
        </div>
      </div>
    </button>
  )
}

export default LayoutAdvisorCard
