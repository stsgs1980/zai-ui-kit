/**
 * MathLayoutsPart2 - L2 Section
 * Renders mathematical CSS Grid layout previews (pi, prime, sqrt, modular).
 * Composes PreviewBlock (L1), no own state.
 */

import { PreviewBlock } from '../ui/PreviewBlock'

export function renderMathLayout2(structure: string, fullscreen: boolean): React.ReactNode | null {
  switch (structure) {
    case 'pi-grid':
      return (
        <div className="h-full relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[60%] h-[60%] rounded-full border-2 border-dashed flex items-center justify-center" style={{ borderColor: 'var(--accent)' }}>
              <span className="text-lg font-bold" style={{ color: 'var(--accent)' }}>π</span>
            </div>
          </div>
          <div className="absolute top-[10%] left-[10%] right-[68%] bottom-[68%] border rounded bg-muted/30" />
          <div className="absolute bottom-[10%] right-[10%] left-[68%] top-[68%] border rounded" style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 20%, transparent)' }} />
          <div className="absolute bottom-2 left-2 text-[10px] text-muted-foreground">π ≈ 3.14159</div>
        </div>
      )

    case 'prime-grid':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '2fr 3fr 5fr 7fr', gridTemplateRows: '35px 1fr 25px' }}>
          <PreviewBlock title="2" className="bg-muted/30" size="xs" />
          <PreviewBlock title="3" className="bg-muted/40" size="sm" />
          <PreviewBlock title="5" className="bg-muted/50" />
          <PreviewBlock title="7" accent />
          <PreviewBlock title="11" className="col-span-2 bg-muted/30" size="sm" />
          <PreviewBlock title="13" className="col-span-2" accent size="sm" />
          <PreviewBlock title="Prime Numbers" className="col-span-4 bg-muted/20" size="xs" />
        </div>
      )

    case 'sqrt-grid':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '1fr 1.414fr 1.732fr 2fr' }}>
          <PreviewBlock title="√1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="√2" className="bg-muted/40" size="sm" />
          <PreviewBlock title="√3" className="bg-muted/50" />
          <PreviewBlock title="√4" accent />
        </div>
      )

    case 'modular-grid': {
      const gridSize = fullscreen ? 8 : 6
      return (
        <div className="h-full grid gap-0.5 p-1" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)`, gridTemplateRows: `repeat(${gridSize}, 1fr)` }}>
          {Array.from({ length: gridSize * gridSize }).map((_, i) => (
            <div
              key={i}
              className="border border-dashed border-border/30 rounded-sm flex items-center justify-center text-[8px] text-muted-foreground"
            >
              {i + 1}
            </div>
          ))}
        </div>
      )
    }

    default:
      return null
  }
}
