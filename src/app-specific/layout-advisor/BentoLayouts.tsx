/**
 * BentoLayouts - L2 Section
 * Renders Bento CSS Grid layout previews.
 * Composes PreviewBlock (L1), no own state.
 */

import { PreviewBlock } from '../ui/PreviewBlock'

export function renderBentoLayout(structure: string, fullscreen: boolean): React.ReactNode | null {
  const cols = fullscreen ? 5 : 4

  switch (structure) {
    case 'bento-grid':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridAutoRows: '1fr', gridAutoFlow: 'dense' }}>
          <PreviewBlock title="Featured" className="col-span-2 row-span-2" accent />
          <PreviewBlock title="Card" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Card" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Wide" className="col-span-2 bg-muted/40" size="xs" />
          {fullscreen && <><PreviewBlock title="Card" className="bg-muted/30" size="xs" /><PreviewBlock title="Card" className="bg-muted/30" size="xs" /></>}
          <PreviewBlock title="Data" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Info" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Stats" className="bg-muted/40" size="xs" />
          <PreviewBlock title="Card" className="bg-muted/30" size="xs" />
        </div>
      )

    case 'bento-sidebar':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '50px repeat(3, 1fr)', gridAutoRows: '1fr' }}>
          <PreviewBlock title="Nav" className="row-span-3" accent size="xs" />
          <PreviewBlock title="Main" className="col-span-2 row-span-2" accent />
          <PreviewBlock title="Card" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Card" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Wide" className="col-span-2 bg-muted/40" size="xs" />
          <PreviewBlock title="Card" className="bg-muted/30" size="xs" />
        </div>
      )

    case 'bento-hero':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateRows: '80px 1fr' }}>
          <PreviewBlock title="Hero Block" accent />
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridAutoFlow: 'dense' }}>
            <PreviewBlock title="Featured" className="col-span-2 row-span-2" accent />
            <PreviewBlock title="Card" className="bg-muted/30" size="xs" />
            <PreviewBlock title="Card" className="bg-muted/30" size="xs" />
            <PreviewBlock title="Wide" className="col-span-2 bg-muted/40" size="xs" />
            <PreviewBlock title="Card" className="bg-muted/30" size="xs" />
            <PreviewBlock title="Card" className="bg-muted/30" size="xs" />
          </div>
        </div>
      )

    case 'bento-masonry':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridAutoRows: '25px' }}>
          <PreviewBlock title="Tall" className="row-span-3" accent />
          <PreviewBlock title="Small" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Medium" className="row-span-2 bg-muted/40" size="xs" />
          <PreviewBlock title="Small" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Small" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Tall" className="row-span-3" accent />
          <PreviewBlock title="Wide" className="col-span-2 bg-muted/40" size="xs" />
          <PreviewBlock title="Small" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Small" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Medium" className="row-span-2 bg-muted/40" size="xs" />
        </div>
      )

    default:
      return null
  }
}
