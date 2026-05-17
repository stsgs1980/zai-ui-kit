/**
 * PatternCard - Tabbed card with preview/code views for CSS Grid patterns
 *
 * Layer: L3 (features/organism)
 * Imports from: ../ui/, ../utils/, ../tokens/, @/components/ui/tabs
 */

import { forwardRef, type ReactNode } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
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
  'text-[10px] px-[var(--zai-space-element-sm)] py-[var(--zai-space-element-xs)] h-auto data-[state=active]:bg-[var(--zai-color-neutral-v4)] data-[state=active]:text-[var(--zai-color-text-inverse)] border border-[var(--zai-color-border-default)] rounded-[var(--zai-radius-default)] text-[var(--zai-color-text-secondary)] font-medium'

export const PatternCard = forwardRef<HTMLDivElement, PatternCardProps>(
  ({ title, badge, description, preview, code, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'border border-[var(--zai-color-border-subtle)] rounded-[var(--zai-radius-lg)] overflow-hidden bg-[var(--zai-color-bg-primary)]',
          className
        )}
      >
        <Tabs defaultValue="preview">
          {/* Header */}
          <div
            className="flex items-center justify-between border-b px-[var(--zai-space-3)] py-[var(--zai-space-2)]"
            style={{
              borderColor: tv('COLOR_BORDER_SUBTLE'),
              backgroundColor: tv('COLOR_BG_SECONDARY'),
            }}
          >
            <div className="flex items-center gap-[var(--zai-space-element-sm)]">
              <span
                className="text-xs font-mono font-semibold"
                style={{ color: tv('COLOR_TEXT_PRIMARY') }}
              >
                {title}
              </span>
              {badge && (
                <SimpleTooltip content={`Категория: ${badge}`}>
                  <span
                    className="text-[10px] px-[var(--zai-space-element-xs)] py-[0.5px] rounded-[var(--zai-radius-default)] font-mono uppercase font-medium cursor-help"
                    style={{
                      backgroundColor: tv('COLOR_BG_SURFACE'),
                      color: tv('COLOR_TEXT_SECONDARY'),
                    }}
                  >
                    {badge}
                  </span>
                </SimpleTooltip>
              )}
            </div>
            <TabsList className="h-auto p-0 bg-transparent gap-[var(--zai-space-element-xs)]">
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
            className="p-[var(--zai-space-5)] m-0 min-h-[80px] flex items-center justify-center"
            style={{ backgroundColor: tv('COLOR_BG_PRIMARY') }}
          >
            {preview}
          </TabsContent>

          {/* Code */}
          <TabsContent value="code" className="p-0 m-0">
            <pre
              className="text-xs font-mono p-[var(--zai-space-card-md)] overflow-x-auto leading-[var(--zai-line-height-relaxed)] border-t"
              style={{
                color: tv('COLOR_TEXT_PRIMARY'),
                backgroundColor: tv('COLOR_BG_SECONDARY'),
                borderColor: tv('COLOR_BORDER_SUBTLE'),
              }}
            >
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
