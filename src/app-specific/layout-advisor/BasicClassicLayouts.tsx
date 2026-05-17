/**
 * BasicClassicLayouts - L2 Section
 * Renders basic and classic CSS Grid layout previews.
 * Composes PreviewBlock (L1), no own state.
 */

import { PreviewBlock } from '../ui/PreviewBlock'

interface LayoutRendererProps {
  fullscreen: boolean
}

export function renderBasicClassicLayout(structure: string, fullscreen: boolean): React.ReactNode | null {
  const props: LayoutRendererProps = { fullscreen }

  switch (structure) {
    case 'sidebar-left':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '70px 1fr', gridTemplateRows: '35px 1fr 25px' }}>
          <PreviewBlock title="Header" className="col-span-2" accent />
          <PreviewBlock title="Nav" className="bg-muted/50" size="xs" />
          <PreviewBlock title="Content" className="bg-muted/30" />
          <PreviewBlock title="Footer" className="col-span-2 bg-muted/20" size="xs" />
        </div>
      )

    case 'sidebar-right':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '1fr 70px', gridTemplateRows: '35px 1fr 25px' }}>
          <PreviewBlock title="Header" className="col-span-2" accent />
          <PreviewBlock title="Content" className="bg-muted/30" />
          <PreviewBlock title="Side" className="bg-muted/50" size="xs" />
          <PreviewBlock title="Footer" className="col-span-2 bg-muted/20" size="xs" />
        </div>
      )

    case 'top-nav':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateRows: '35px 1fr 25px' }}>
          <PreviewBlock title="Navigation" accent />
          <PreviewBlock title="Hero Section" className="bg-muted/30" />
          <PreviewBlock title="Footer" className="bg-muted/20" size="xs" />
        </div>
      )

    case 'two-columns':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '35px 1fr 25px' }}>
          <PreviewBlock title="Header" className="col-span-2" accent />
          <PreviewBlock title="Left" className="bg-muted/30" size="sm" />
          <PreviewBlock title="Right" className="bg-muted/30" size="sm" />
          <PreviewBlock title="Footer" className="col-span-2 bg-muted/20" size="xs" />
        </div>
      )

    case 'three-columns':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '35px 1fr 25px' }}>
          <PreviewBlock title="Header" className="col-span-3" accent />
          <PreviewBlock title="Col 1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Col 2" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Col 3" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Footer" className="col-span-3 bg-muted/20" size="xs" />
        </div>
      )

    case 'holy-grail':
      return (
        <div className="h-full grid gap-1" style={{
          gridTemplateAreas: '"header header header" "nav main aside" "footer footer footer"',
          gridTemplateColumns: '50px 1fr 50px',
          gridTemplateRows: '35px 1fr 25px'
        }}>
          <PreviewBlock title="Header" style={{ gridArea: 'header' }} accent />
          <PreviewBlock title="Nav" style={{ gridArea: 'nav' }} className="bg-muted/50" size="xs" />
          <PreviewBlock title="Main" style={{ gridArea: 'main' }} className="bg-muted/30" />
          <PreviewBlock title="Aside" style={{ gridArea: 'aside' }} className="bg-muted/50" size="xs" />
          <PreviewBlock title="Footer" style={{ gridArea: 'footer' }} className="bg-muted/20" size="xs" />
        </div>
      )

    case 'split-screen':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <PreviewBlock title="Left Panel" accent />
          <PreviewBlock title="Right Panel" className="bg-muted/30" />
        </div>
      )

    case 'cards-grid': {
      const cardCount = fullscreen ? 8 : 6
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateRows: '35px 1fr 25px' }}>
          <PreviewBlock title="Header" accent />
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${fullscreen ? 4 : 3}, 1fr)` }}>
            {Array.from({ length: cardCount }).map((_, i) => (
              <PreviewBlock key={i} title={`Card ${i + 1}`} className="bg-muted/30" size="xs" />
            ))}
          </div>
          <PreviewBlock title="Footer" className="bg-muted/20" size="xs" />
        </div>
      )
    }

    case 'magazine':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '35px repeat(2, 1fr) 25px' }}>
          <PreviewBlock title="Header" className="col-span-3" accent />
          <PreviewBlock title="Featured" className="row-span-2" accent />
          <PreviewBlock title="Article 1" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Article 2" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Article 3" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Article 4" className="bg-muted/30" size="xs" />
          <PreviewBlock title="Footer" className="col-span-3 bg-muted/20" size="xs" />
        </div>
      )

    case 'fullscreen-hero':
      return (
        <div className="h-full grid gap-0" style={{ gridTemplateRows: '2fr 1fr' }}>
          <PreviewBlock title="Full Screen Hero (100vh)" accent size="lg" />
          <div className="grid gap-1 p-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <PreviewBlock title="Section" className="bg-muted/30" size="xs" />
            <PreviewBlock title="Section" className="bg-muted/30" size="xs" />
            <PreviewBlock title="Section" className="bg-muted/30" size="xs" />
          </div>
        </div>
      )

    default:
      return null
  }
}
