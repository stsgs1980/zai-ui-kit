/**
 * FibonacciLayoutsPart1 - L2 Section
 * Renders Fibonacci CSS Grid layout previews (first 7 layouts).
 * Composes PreviewBlock (L1), no own state.
 */

import { PreviewBlock } from '../ui/PreviewBlock'

export function renderFibonacciLayout1(structure: string, _fullscreen: boolean): React.ReactNode | null {
  switch (structure) {
    case 'fibonacci-grid':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '1fr 1fr 2fr 3fr 5fr', gridTemplateRows: '1fr 1fr 2fr 3fr' }}>
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="2" className="bg-muted/40" size="sm" />
          <PreviewBlock title="3" className="bg-muted/50" size="sm" />
          <PreviewBlock title="5" accent />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="2" className="row-span-2 bg-muted/40" size="sm" />
          <PreviewBlock title="3" className="row-span-2 bg-muted/50" />
          <PreviewBlock title="5" className="row-span-3" accent />
          <PreviewBlock title="2" className="col-span-2 bg-muted/40" size="sm" />
          <PreviewBlock title="3" className="row-span-2 bg-muted/50" />
          <PreviewBlock title="5" className="row-span-2" accent />
          <PreviewBlock title="3" className="col-span-3 bg-muted/50" size="sm" />
          <PreviewBlock title="5" className="col-span-2" accent />
        </div>
      )

    case 'fibonacci-spiral':
      return (
        <div className="h-full relative p-2">
          <div className="absolute inset-0 grid gap-0.5" style={{ gridTemplateColumns: '5fr 3fr 2fr 1fr', gridTemplateRows: '5fr 3fr 2fr 1fr' }}>
            <PreviewBlock title="8" accent />
            <PreviewBlock title="5" className="col-span-2 bg-muted/50" />
            <PreviewBlock title="3" className="col-span-2 bg-muted/40" />
            <PreviewBlock title="2" className="row-span-2 bg-muted/40" />
            <PreviewBlock title="1" className="bg-muted/30" size="xs" />
            <PreviewBlock title="1" className="bg-muted/30" size="xs" />
            <PreviewBlock title="1" className="col-span-2 bg-muted/30" size="xs" />
            <PreviewBlock title="φ" className="col-span-2 row-span-2 bg-muted/20" size="lg" />
          </div>
        </div>
      )

    case 'fibonacci-columns':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '1fr 1fr 2fr 3fr 5fr', gridTemplateRows: '35px 1fr 25px' }}>
          <PreviewBlock title="Header" className="col-span-5" accent />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="2" className="bg-muted/40" size="sm" />
          <PreviewBlock title="3" className="bg-muted/50" />
          <PreviewBlock title="5" accent />
          <PreviewBlock title="Footer" className="col-span-5 bg-muted/20" size="xs" />
        </div>
      )

    case 'fibonacci-tiles':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: 'repeat(5, 1fr)', gridAutoFlow: 'dense' }}>
          <PreviewBlock title="8×5" className="col-span-5 row-span-3" accent />
          <PreviewBlock title="5×3" className="col-span-3 row-span-2 bg-muted/50" />
          <PreviewBlock title="3×2" className="col-span-2 row-span-2 bg-muted/40" />
          <PreviewBlock title="2×1" className="col-span-2 bg-muted/40" size="sm" />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
        </div>
      )

    case 'fibonacci-responsive':
      return (
        <div className="h-full grid gap-2" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div className="flex flex-col gap-1">
            <p className="text-[10px] text-center text-muted-foreground">Mobile</p>
            <div className="flex-1 grid gap-0.5" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
              {[1,1,1,1].map((_, i) => <PreviewBlock key={i} title="1" className="bg-muted/30" size="xs" />)}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[10px] text-center text-muted-foreground">Tablet</p>
            <div className="flex-1 grid gap-0.5" style={{ gridTemplateColumns: '2fr 3fr' }}>
              <PreviewBlock title="2" className="bg-muted/40" size="xs" />
              <PreviewBlock title="3" className="bg-muted/50" size="xs" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[10px] text-center text-muted-foreground">Desktop</p>
            <div className="flex-1 grid gap-0.5" style={{ gridTemplateColumns: '5fr 8fr' }}>
              <PreviewBlock title="5" className="bg-muted/50" size="xs" />
              <PreviewBlock title="8" accent size="xs" />
            </div>
          </div>
        </div>
      )

    case 'fibonacci-masonry':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '18px' }}>
          <PreviewBlock title="8" className="row-span-8" accent />
          <PreviewBlock title="5" className="row-span-5 bg-muted/50" />
          <PreviewBlock title="3" className="row-span-3 bg-muted/40" />
          <PreviewBlock title="2" className="row-span-2 bg-muted/40" />
          <PreviewBlock title="1" className="row-span-1 bg-muted/30" size="xs" />
          <PreviewBlock title="5" className="row-span-5 bg-muted/50" />
          <PreviewBlock title="3" className="row-span-3 bg-muted/40" />
          <PreviewBlock title="8" className="row-span-8" accent />
          <PreviewBlock title="2" className="row-span-2 bg-muted/40" />
        </div>
      )

    case 'fibonacci-bento':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '8fr 5fr 3fr', gridTemplateRows: '5fr 3fr 2fr 1fr', gridAutoFlow: 'dense' }}>
          <PreviewBlock title="8×5" className="row-span-2" accent />
          <PreviewBlock title="5×3" className="row-span-2 bg-muted/50" />
          <PreviewBlock title="3×2" className="bg-muted/40" size="sm" />
          <PreviewBlock title="2" className="bg-muted/40" size="xs" />
          <PreviewBlock title="2" className="col-span-2 bg-muted/40" size="xs" />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="3" className="col-span-2 bg-muted/40" size="sm" />
        </div>
      )

    default:
      return null
  }
}
