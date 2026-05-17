/**
 * FibonacciLayoutsPart2 - L2 Section
 * Renders Fibonacci CSS Grid layout previews (remaining 6 layouts).
 * Composes PreviewBlock (L1), no own state.
 */

import { PreviewBlock } from '../ui/PreviewBlock'

export function renderFibonacciLayout2(structure: string, _fullscreen: boolean): React.ReactNode | null {
  switch (structure) {
    case 'fibonacci-diagonal':
      return (
        <div className="h-full relative overflow-hidden">
          <div className="absolute w-[60%] h-[60%] top-[5%] left-[5%] border rounded flex items-center justify-center text-xs font-medium" style={{ borderColor: 'var(--accent)', backgroundColor: 'color-mix(in srgb, var(--accent) 20%, transparent)' }}>1</div>
          <div className="absolute w-[50%] h-[50%] top-[15%] left-[25%] border rounded flex items-center justify-center text-xs bg-muted/40">1</div>
          <div className="absolute w-[45%] h-[45%] top-[25%] left-[40%] border rounded flex items-center justify-center text-xs bg-muted/30">2</div>
          <div className="absolute w-[40%] h-[40%] top-[35%] left-[50%] border rounded flex items-center justify-center text-xs bg-muted/40">3</div>
          <div className="absolute w-[35%] h-[35%] top-[45%] left-[58%] border rounded flex items-center justify-center text-xs font-medium" style={{ borderColor: 'var(--accent)', backgroundColor: 'color-mix(in srgb, var(--accent) 15%, transparent)' }}>5</div>
        </div>
      )

    case 'fibonacci-steps':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateRows: '1fr 2fr 3fr 5fr', gridTemplateColumns: '1fr 2fr 3fr 5fr' }}>
          <PreviewBlock title="1" className="col-start-1 bg-muted/30" size="xs" />
          <PreviewBlock title="2" className="col-start-1 col-span-2 bg-muted/40" size="sm" />
          <PreviewBlock title="3" className="col-start-1 col-span-3 bg-muted/50" />
          <PreviewBlock title="5" className="col-start-1 col-span-4" accent />
        </div>
      )

    case 'fibonacci-radiant':
      return (
        <div className="h-full relative">
          <div className="absolute top-1/2 left-1/2 w-[15%] h-[15%] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>φ</div>
          {['8', '5', '3', '2', '1', '1', '3', '5'].map((n, i) => (
            <div
              key={i}
              className="absolute w-[18%] h-[25%] rounded flex items-center justify-center text-xs"
              style={{
                top: `${50 + 35 * Math.cos((i * 45 - 90) * Math.PI / 180)}%`,
                left: `${50 + 35 * Math.sin((i * 45 - 90) * Math.PI / 180)}%`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: i % 2 === 0 ? 'color-mix(in srgb, var(--accent) 20%, transparent)' : undefined,
                border: '1px dashed var(--border)'
              }}
            >
              {n}
            </div>
          ))}
        </div>
      )

    case 'fibonacci-cascade':
      return (
        <div className="h-full grid gap-1" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gridAutoRows: '1fr', gridAutoFlow: 'column' }}>
          <PreviewBlock title="1" className="row-span-1 bg-muted/30" size="xs" />
          <PreviewBlock title="2" className="row-span-2 bg-muted/40" size="sm" />
          <PreviewBlock title="3" className="row-span-3 bg-muted/50" />
          <PreviewBlock title="5" className="row-span-5" accent />
          <PreviewBlock title="8" className="row-span-8" accent />
        </div>
      )

    case 'fibonacci-nested':
      return (
        <div className="h-full relative p-1">
          <div className="absolute inset-0 border-2 rounded m-1 flex items-center justify-center text-lg font-bold" style={{ borderColor: 'var(--accent)', backgroundColor: 'color-mix(in srgb, var(--accent) 10%, transparent)' }}>8</div>
          <div className="absolute border-2 rounded bg-background/80 flex items-center justify-center text-sm font-medium" style={{ top: '10%', left: '55%', right: '10%', bottom: '20%', borderColor: 'var(--accent)' }}>5</div>
          <div className="absolute border rounded bg-background/90 flex items-center justify-center text-xs" style={{ top: '55%', left: '10%', width: '35%', height: '35%' }}>3</div>
          <div className="absolute border rounded bg-background flex items-center justify-center text-[10px]" style={{ top: '65%', left: '50%', width: '20%', height: '20%' }}>2</div>
          <div className="absolute rounded flex items-center justify-center text-[8px] font-bold" style={{ top: '75%', left: '60%', width: '10%', height: '10%', backgroundColor: 'var(--accent)', color: 'white' }}>1</div>
        </div>
      )

    case 'fibonacci-triangle':
      return (
        <div className="h-full flex flex-col items-center justify-center gap-0.5 py-2">
          <div className="flex gap-0.5">
            <PreviewBlock title="1" className="w-6 h-6 bg-muted/30" size="xs" />
          </div>
          <div className="flex gap-0.5">
            <PreviewBlock title="1" className="w-6 h-6 bg-muted/30" size="xs" />
            <PreviewBlock title="1" className="w-6 h-6 bg-muted/40" size="xs" />
          </div>
          <div className="flex gap-0.5">
            <PreviewBlock title="2" className="w-6 h-6 bg-muted/40" size="xs" />
            <PreviewBlock title="3" className="w-6 h-6 bg-muted/50" size="xs" />
            <PreviewBlock title="2" className="w-6 h-6 bg-muted/40" size="xs" />
          </div>
          <div className="flex gap-0.5">
            <PreviewBlock title="3" className="w-6 h-6 bg-muted/50" size="xs" />
            <PreviewBlock title="5" className="w-6 h-6" accent size="xs" />
            <PreviewBlock title="8" className="w-6 h-6" accent size="xs" />
            <PreviewBlock title="5" className="w-6 h-6" accent size="xs" />
          </div>
          <div className="flex gap-0.5">
            <PreviewBlock title="5" className="w-6 h-6" accent size="xs" />
            <PreviewBlock title="8" className="w-6 h-6" accent size="xs" />
            <PreviewBlock title="13" className="w-8 h-6" accent size="xs" />
            <PreviewBlock title="8" className="w-6 h-6" accent size="xs" />
            <PreviewBlock title="5" className="w-6 h-6" accent size="xs" />
          </div>
        </div>
      )

    default:
      return null
  }
}
