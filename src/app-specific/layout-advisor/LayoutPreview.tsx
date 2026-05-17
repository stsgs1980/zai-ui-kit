/**
 * LayoutPreview - L2 Section (Molecule)
 * Delegates layout rendering to the appropriate category renderer.
 * Composes L1 atoms + other L2 sections, no own state.
 */

import { MousePointer } from 'lucide-react'
import { renderBasicClassicLayout } from './BasicClassicLayouts'
import { renderBentoLayout } from './BentoLayouts'
import { renderAdvancedLayout } from './AdvancedLayouts'
import { renderFibonacciLayout1 } from './FibonacciLayoutsPart1'
import { renderFibonacciLayout2 } from './FibonacciLayoutsPart2'
import { renderMathLayout } from './MathLayouts'
import { renderMathLayout2 } from './MathLayoutsPart2'
import { renderComplexLayout, renderDefaultLayout } from './ComplexLayouts'

export interface LayoutPreviewProps {
  /** Layout structure identifier */
  structure?: string
  /** Whether to render in fullscreen mode */
  fullscreen?: boolean
}

/** Ordered list of renderers to try; first non-null wins */
const renderers: Array<(structure: string, fullscreen: boolean) => React.ReactNode | null> = [
  renderBasicClassicLayout,
  renderBentoLayout,
  renderAdvancedLayout,
  renderFibonacciLayout1,
  renderFibonacciLayout2,
  renderMathLayout,
  renderMathLayout2,
  renderComplexLayout,
]

export function LayoutPreview({ structure, fullscreen = false }: LayoutPreviewProps) {
  if (!structure) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-8">
        <MousePointer className="h-12 w-12 mb-4 opacity-30" />
        <p className="text-center font-medium">Выберите макет слева</p>
        <p className="text-center text-sm mt-2 opacity-70">
          Здесь появится интерактивный предпросмотр
        </p>
      </div>
    )
  }

  for (const renderer of renderers) {
    const result = renderer(structure, fullscreen)
    if (result !== null) return result
  }

  return renderDefaultLayout()
}

export default LayoutPreview
