/**
 * AdvancedLayouts - L2 Section
 * Renders advanced CSS Grid layout previews (masonry, asymmetric, etc.).
 * Composes PreviewBlock (L1), no own state.
 */

import { PreviewBlock } from '../ui/PreviewBlock'

export function renderAdvancedLayout(structure: string, fullscreen: boolean): React.ReactNode | null {
  switch (structure) {
    case 'masonry-grid': {
      const mCount = fullscreen ? 8 : 6
      const heights = [4, 6, 3, 5, 4, 3, 5, 4]
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: `repeat(${fullscreen ? 4 : 3}, 1fr)`, gridAutoRows: '15px' }}>
          {Array.from({ length: mCount }).map((_, i) => (
            <PreviewBlock key={i} title="" className={i % 3 === 0 ? 'bg-muted/40' : 'bg-muted/30'} style={{ gridRow: `span ${heights[i]}` }} />
          ))}
        </div>
      )
    }

    case 'asymmetric-grid':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: 'repeat(3, 1fr)' }}>
          <PreviewBlock title="Main" className="row-span-2" accent />
          <PreviewBlock title="Side" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Info" className="bg-muted/40" size="xs" />
          <PreviewBlock title="Data" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Stats" className="bg-muted/40" size="xs" />
          <PreviewBlock title="Footer" className="col-span-3 bg-muted/20" size="xs" />
        </div>
      )

    case 'span-grid':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, 1fr)' }}>
          <PreviewBlock title="2×2" className="col-span-2 row-span-2" accent />
          <PreviewBlock title="Span 2" className="col-span-2 bg-muted/40" size="sm" />
          <PreviewBlock title="1×1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="1×1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Span 3" className="col-span-3 bg-muted/20" size="xs" />
          <PreviewBlock title="1×1" className="bg-muted/30" size="xs" />
        </div>
      )

    case 'overlap-grid':
      return (
        <div className="h-full relative">
          <div className="absolute inset-0 grid gap-1" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
            <PreviewBlock title="Base" className="bg-muted/20" />
            <PreviewBlock title="Base" className="bg-muted/20" />
            <PreviewBlock title="Base" className="bg-muted/20" />
            <PreviewBlock title="Base" className="bg-muted/20" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2/3 h-2/3 border-2 border-dashed rounded flex items-center justify-center" style={{ borderColor: 'var(--accent)', backgroundColor: 'color-mix(in srgb, var(--accent) 15%, transparent)' }}>
              <span className="text-xs font-medium">Overlap</span>
            </div>
          </div>
        </div>
      )

    case 'honeycomb-grid':
      return (
        <div className="h-full grid gap-1 p-2" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="flex flex-col gap-1 pt-4">
            <PreviewBlock title="⬡" className="bg-muted/40 aspect-square" size="lg" />
            <PreviewBlock title="⬡" className="bg-muted/30 aspect-square" size="lg" />
          </div>
          <div className="flex flex-col gap-1">
            <PreviewBlock title="⬡" className="bg-muted/30 aspect-square" size="lg" />
            <PreviewBlock title="⬡" className="bg-muted/40 aspect-square" size="lg" />
          </div>
          <div className="flex flex-col gap-1 pt-4">
            <PreviewBlock title="⬡" className="bg-muted/30 aspect-square" size="lg" />
            <PreviewBlock title="⬡" className="bg-muted/40 aspect-square" size="lg" />
          </div>
        </div>
      )

    case 'mosaic-grid':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(4, 1fr)' }}>
          <PreviewBlock title="" className="col-span-2 row-span-2" accent />
          <PreviewBlock title="" className="row-span-2 bg-muted/30" />
          <PreviewBlock title="" className="row-span-2 bg-muted/40" />
          <PreviewBlock title="" className="col-span-2 bg-muted/30" />
          <PreviewBlock title="" className="bg-muted/40" size="xs" />
          <PreviewBlock title="" className="bg-muted/30" size="xs" />
          <PreviewBlock title="" className="col-span-3 bg-muted/20" size="xs" />
          <PreviewBlock title="" className="bg-muted/40" size="xs" />
        </div>
      )

    case 'responsive-grid': {
      const rCount = fullscreen ? 15 : 10
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))', gridAutoRows: '1fr' }}>
          {Array.from({ length: rCount }).map((_, i) => (
            <PreviewBlock key={i} title="" className={i % 5 === 0 ? 'bg-muted/40' : 'bg-muted/30'} size="xs" />
          ))}
        </div>
      )
    }

    default:
      return null
  }
}
