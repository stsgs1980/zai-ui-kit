/**
 * ComplexLayouts - L2 Section
 * Renders complex CSS Grid layout previews (dashboard, blog) + default fallback.
 * Composes PreviewBlock (L1), no own state.
 */

import { PreviewBlock } from '../ui/PreviewBlock'

export function renderComplexLayout(structure: string, fullscreen: boolean): React.ReactNode | null {
  switch (structure) {
    case 'dashboard': {
      const wCount = fullscreen ? 8 : 6
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '50px 1fr', gridTemplateRows: '35px 1fr' }}>
          <PreviewBlock title="Nav" className="col-span-2" accent size="sm" />
          <PreviewBlock title="Menu" className="bg-muted/40" size="xs" />
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${fullscreen ? 4 : 3}, 1fr)` }}>
            {Array.from({ length: wCount }).map((_, i) => (
              <PreviewBlock key={i} title={`W${i + 1}`} className="bg-muted/30" size="xs" />
            ))}
          </div>
        </div>
      )
    }

    case 'blog':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '1fr 70px', gridTemplateRows: '35px 1fr 25px' }}>
          <PreviewBlock title="Header" className="col-span-2" accent />
          <PreviewBlock title="Articles" className="bg-muted/30" />
          <PreviewBlock title="Sidebar" className="bg-muted/40" size="xs" />
          <PreviewBlock title="Footer" className="col-span-2 bg-muted/20" size="xs" />
        </div>
      )

    default:
      return null
  }
}

/** Default fallback when no layout renderer matches */
export function renderDefaultLayout(): React.ReactNode {
  return (
    <div className="h-full flex items-center justify-center text-muted-foreground">
      <p>Предпросмотр в разработке</p>
    </div>
  )
}
