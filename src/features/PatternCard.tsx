/**
 * PatternCard - Tabbed card with preview/code views for CSS Grid patterns
 *
 * Layer: L3 (features/organism)
 * Imports from: ../ui/, ../utils/, ../theme/, @/components/ui/tabs
 */

import { forwardRef, type ReactNode } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { cn } from '../utils/cn'
import { SimpleTooltip } from '../ui/SimpleTooltip'

export interface PatternCardProps {
  /** Card title */
  title: string
  /** Optional category badge */
  badge?: string
  /** Optional description text */
  description?: string
  /** Preview content (visual example) */
  preview: ReactNode
  /** CSS code snippet */
  code: string
  /** Additional class names */
  className?: string
}

const triggerClass =
  'text-[10px] px-2.5 py-1 h-auto data-[state=active]:bg-neutral-800 data-[state=active]:text-white border border-neutral-300 rounded text-neutral-600 font-medium'

export const PatternCard = forwardRef<HTMLDivElement, PatternCardProps>(
  ({ title, badge, description, preview, code, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'border border-neutral-200 rounded-lg overflow-hidden bg-white',
          className
        )}
      >
        <Tabs defaultValue="preview">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-3 py-2 bg-neutral-50">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-800 font-semibold">
                {title}
              </span>
              {badge && (
                <SimpleTooltip content={`Категория: ${badge}`}>
                  <span className="text-[10px] px-1.5 py-0.5 bg-neutral-200 text-neutral-600 rounded font-mono uppercase font-medium cursor-help">
                    {badge}
                  </span>
                </SimpleTooltip>
              )}
            </div>
            <TabsList className="h-auto p-0 bg-transparent gap-0.5">
              <SimpleTooltip content="Показать визуальный пример">
                <TabsTrigger value="preview" className={triggerClass}>
                  Preview
                </TabsTrigger>
              </SimpleTooltip>
              <SimpleTooltip content="Показать CSS код">
                <TabsTrigger value="code" className={triggerClass}>
                  Code
                </TabsTrigger>
              </SimpleTooltip>
            </TabsList>
          </div>

          {/* Preview */}
          <TabsContent
            value="preview"
            className="p-5 m-0 bg-white min-h-[80px] flex items-center justify-center"
          >
            {preview}
          </TabsContent>

          {/* Code */}
          <TabsContent value="code" className="p-0 m-0">
            <pre className="text-xs text-neutral-800 font-mono bg-neutral-50 p-4 overflow-x-auto leading-relaxed border-t border-neutral-200">
              <code>{code}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </div>
    )
  }
)

PatternCard.displayName = 'PatternCard'

export default PatternCard
