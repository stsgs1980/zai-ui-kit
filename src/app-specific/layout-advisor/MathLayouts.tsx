/**
 * MathLayouts - L2 Section
 * Renders mathematical CSS Grid layout previews (golden ratio, phi, etc.).
 * Composes PreviewBlock (L1), no own state.
 */

import { PreviewBlock } from '../ui/PreviewBlock'

export function renderMathLayout(structure: string, fullscreen: boolean): React.ReactNode | null {
  switch (structure) {
    case 'golden-ratio-grid':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '61.8fr 38.2fr', gridTemplateRows: '38.2fr 61.8fr' }}>
          <PreviewBlock title="Main (61.8%)" className="row-span-2" accent />
          <PreviewBlock title="Top (38.2%)" className="bg-muted/40" size="sm" />
          <PreviewBlock title="Bottom (38.2%)" className="bg-muted/30" size="sm" />
        </div>
      )

    case 'spiral-grid':
      return (
        <div className="h-full relative">
          <div className="absolute inset-0 grid gap-1" style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }}>
            <PreviewBlock title="" className="bg-muted/20" />
          </div>
          <div className="absolute" style={{ top: '5%', left: '5%', right: '30%', bottom: '30%' }}>
            <div className="h-full border-2 border-dashed rounded flex items-center justify-center text-xs font-medium" style={{ borderColor: 'var(--accent)', backgroundColor: 'color-mix(in srgb, var(--accent) 15%, transparent)' }}>1</div>
          </div>
          <div className="absolute" style={{ top: '5%', left: '70%', right: '5%', bottom: '55%' }}>
            <div className="h-full border-2 border-dashed rounded flex items-center justify-center text-xs bg-muted/30">2</div>
          </div>
          <div className="absolute" style={{ top: '45%', left: '45%', right: '5%', bottom: '30%' }}>
            <div className="h-full border-2 border-dashed rounded flex items-center justify-center text-xs bg-muted/20">3</div>
          </div>
          <div className="absolute" style={{ top: '70%', left: '5%', right: '55%', bottom: '5%' }}>
            <div className="h-full border-2 border-dashed rounded flex items-center justify-center text-xs bg-muted/30">5</div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium" style={{ color: 'var(--accent)' }}>Spiral</div>
        </div>
      )

    case 'phi-grid':
      return (
        <div className="h-full grid gap-0.5" style={{ gridTemplateColumns: '61.8fr 38.2fr', gridTemplateRows: '61.8fr 38.2fr' }}>
          <PreviewBlock title="φ" accent />
          <PreviewBlock title="φ'" className="bg-muted/40" />
          <PreviewBlock title="φ''" className="bg-muted/40" />
          <PreviewBlock title="φ'''" className="bg-muted/30" />
        </div>
      )

    case 'rule-of-thirds':
      return (
        <div className="h-full grid gap-0.5" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)' }}>
          {[...Array(9)].map((_, i) => (
            <PreviewBlock key={i} title="" className={i === 4 ? 'bg-muted/50' : 'bg-muted/30'} size="xs" />
          ))}
        </div>
      )

    case 'root-rectangle':
      return (
        <div className="h-full flex flex-col gap-1">
          <div className="flex-1 grid gap-1" style={{ gridTemplateColumns: '1.414fr 1fr' }}>
            <PreviewBlock title="√2" accent />
            <PreviewBlock title="1" className="bg-muted/40" size="sm" />
          </div>
          <div className="flex gap-1 text-[10px] text-center text-muted-foreground">
            <span className="flex-1 p-1 bg-muted/20 rounded">√2 = 1.414</span>
            <span className="flex-1 p-1 bg-muted/20 rounded">√3 = 1.732</span>
            <span className="flex-1 p-1 bg-muted/20 rounded">√4 = 2</span>
          </div>
        </div>
      )

    case 'dynamic-symmetry':
      return (
        <div className="h-full relative overflow-hidden">
          <div className="absolute inset-0 grid gap-1" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
            <PreviewBlock title="" className="bg-muted/20" />
            <PreviewBlock title="" className="bg-muted/30" />
            <PreviewBlock title="" className="bg-muted/30" />
            <PreviewBlock title="" className="bg-muted/20" />
          </div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100" y2="100" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="50" y1="0" x2="100" y2="50" stroke="var(--accent)" strokeWidth="0.3" strokeDasharray="1,1" />
            <line x1="0" y1="50" x2="50" y2="100" stroke="var(--accent)" strokeWidth="0.3" strokeDasharray="1,1" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium" style={{ color: 'var(--accent)' }}>√5</div>
        </div>
      )

    case 'harmonic-series':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '1fr 0.5fr 0.333fr 0.25fr' }}>
          <PreviewBlock title="1" accent />
          <PreviewBlock title="1/2" className="bg-muted/50" size="sm" />
          <PreviewBlock title="1/3" className="bg-muted/40" size="xs" />
          <PreviewBlock title="1/4" className="bg-muted/30" size="xs" />
        </div>
      )

    default:
      return null
  }
}
