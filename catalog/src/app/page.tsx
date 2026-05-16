'use client'

import React, { useState, useMemo } from 'react'
import { BRAND, CELL_COLORS, CATEGORIES, PATTERNS, TOKENS, patternToRegistry, type PatternData, type LayoutCategory, type TokenData } from '../data/layout-data'

// ═══════════════════════════════════════════════════════════════
//  Grid Preview — renders a pattern as a mini CSS Grid
// ═══════════════════════════════════════════════════════════════

function parseFrOrPx(css: string): number[] {
  if (!css) return []
  // Handle repeat(N, Xfr)
  const repeatMatch = css.match(/repeat\((\d+),\s*([\d.]+)fr\)/)
  if (repeatMatch) {
    const count = parseInt(repeatMatch[1])
    const val = parseFloat(repeatMatch[2])
    return Array(count).fill(val)
  }
  // Handle auto-fit / minmax — fallback to 3 equal
  if (css.includes('auto-fit') || css.includes('auto-fill')) return [1, 1, 1]
  // Parse individual fr values
  const parts = css.split(/\s+/)
  const values: number[] = []
  for (const p of parts) {
    const m = p.match(/^([\d.]+)fr$/)
    if (m) values.push(parseFloat(m[1]))
    else if (p.endsWith('px')) values.push(parseInt(p) / 50) // normalize px to ~fr
    else if (p === 'auto') values.push(0.5)
  }
  return values.length > 0 ? values : []
}

function GridPreview({ pattern }: { pattern: PatternData }) {
  if (pattern.type === 'absolute' || pattern.type === 'nested') {
    return <AbsolutePreview pattern={pattern} />
  }
  if (pattern.type === 'polar') {
    return <PolarPreview pattern={pattern} />
  }

  const colValues = parseFrOrPx(pattern.cols || '')
  const rowValues = parseFrOrPx(pattern.rows || '')
  const autoRowCount = pattern.autoRows ? 3 : 0

  const totalCols = colValues.length || 1
  const totalRows = rowValues.length || (autoRowCount > 0 ? autoRowCount + 1 : 1)

  const gapPx = pattern.gap === '0' ? 0 : (parseInt(pattern.gap || '4') || 4)
  const gapClamped = Math.max(1, Math.min(gapPx, 4))

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: pattern.cols || undefined,
    gridTemplateRows: pattern.rows || undefined,
    gap: `${gapClamped}px`,
    width: '100%',
    height: '100%',
    minHeight: '80px',
  }

  if (pattern.autoRows) {
    gridStyle.gridAutoRows = '1fr'
  }
  if (pattern.autoFlow) {
    gridStyle.gridAutoFlow = pattern.autoFlow
  }
  if (pattern.areas) {
    gridStyle.gridTemplateAreas = pattern.areas
  }

  // Generate cells
  const cells: React.ReactNode[] = []
  let cellIdx = 0
  for (let r = 0; r < totalRows; r++) {
    for (let c = 0; c < totalCols; c++) {
      const color = CELL_COLORS[cellIdx % CELL_COLORS.length]
      cells.push(
        <div
          key={`${r}-${c}`}
          style={{
            background: color,
            borderRadius: '2px',
            opacity: 0.7 + (0.3 * (cellIdx % 3) / 2),
            minHeight: pattern.autoRows ? '12px' : undefined,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '8px',
            color: BRAND.bg,
            fontWeight: 600,
          }}
        />
      )
      cellIdx++
    }
  }

  return <div style={gridStyle}>{cells}</div>
}

function AbsolutePreview({ pattern }: { pattern: PatternData }) {
  if (!pattern.positions) return null
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '80px' }}>
      {pattern.positions.map((pos, i) => {
        const color = CELL_COLORS[i % CELL_COLORS.length]
        const style: React.CSSProperties = {
          position: 'absolute',
          background: color,
          borderRadius: '2px',
          opacity: 0.6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '9px',
          color: BRAND.bg,
          fontWeight: 600,
          ...(pos.top ? { top: pos.top } : {}),
          ...(pos.left ? { left: pos.left } : {}),
          ...(pos.right ? { right: pos.right } : {}),
          ...(pos.bottom ? { bottom: pos.bottom } : {}),
          ...(pos.width ? { width: pos.width } : {}),
          ...(pos.height ? { height: pos.height } : {}),
        }
        return <div key={i} style={style}>{pos.label}</div>
      })}
    </div>
  )
}

function PolarPreview({ pattern }: { pattern: PatternData }) {
  if (!pattern.positions) return null
  const center = pattern.positions[0]
  const items = pattern.positions.slice(1)
  const radius = 35
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        position: 'absolute',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: BRAND.base,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '8px',
        color: BRAND.bg,
        fontWeight: 700,
        zIndex: 2,
      }}>{center?.label}</div>
      {items.map((item, i) => {
        const angle = (item.angle || 0) * (Math.PI / 180)
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const size = 12 + (i % 3) * 4
        return (
          <div key={i} style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            background: CELL_COLORS[(i + 1) % CELL_COLORS.length],
            left: `calc(50% + ${x}px - ${size / 2}px)`,
            top: `calc(50% + ${y}px - ${size / 2}px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '7px',
            color: BRAND.bg,
            fontWeight: 600,
          }}>{item.label}</div>
        )
      })}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
//  Code View
// ═══════════════════════════════════════════════════════════════

function generateCode(pattern: PatternData): string {
  const lines: string[] = [`// ${pattern.name}`]
  lines.push(`style={{`)

  const colToken = TOKENS.find(t => pattern.tokenRefs.includes(t.id) && t.group === 'COL')
  const rowToken = TOKENS.find(t => pattern.tokenRefs.includes(t.id) && t.group === 'ROW')
  const gapToken = TOKENS.find(t => pattern.tokenRefs.includes(t.id) && t.group === 'GAP')

  if (pattern.cols) lines.push(`  gridTemplateColumns: var(${colToken?.cssVar ?? '"--zai-cols-auto"'}),`)
  if (pattern.rows) lines.push(`  gridTemplateRows: var(${rowToken?.cssVar ?? '"--zai-rows-auto"'}),`)
  if (pattern.gap) lines.push(`  gap: var(${gapToken?.cssVar ?? '"--zai-gap-xs"'}),`)
  if (pattern.areas) lines.push(`  gridTemplateAreas: '${pattern.areas}',`)
  if (pattern.autoRows) lines.push(`  gridAutoRows: '1fr',`)
  if (pattern.autoFlow) lines.push(`  gridAutoFlow: '${pattern.autoFlow}',`)

  lines.push(`}}`)
  return lines.join('\n')
}

// ═══════════════════════════════════════════════════════════════
//  Token Badge
// ═══════════════════════════════════════════════════════════════

function TokenBadge({ tokenId }: { tokenId: string }) {
  const token = TOKENS.find(t => t.id === tokenId)
  if (!token) return null

  const groupColors: Record<string, string> = {
    COL: BRAND.v3,
    ROW: BRAND.v4,
    GAP: BRAND.v2,
    AUTO: BRAND.v1,
    DIM: BRAND.base,
    AREA: BRAND.v3,
  }

  return (
    <span style={{
      display: 'inline-block',
      padding: '1px 5px',
      borderRadius: '3px',
      fontSize: '9px',
      fontFamily: 'monospace',
      background: groupColors[token.group] || BRAND.v4,
      color: BRAND.bg,
      marginRight: '3px',
      marginBottom: '2px',
      fontWeight: 500,
    }}>
      {token.label}
    </span>
  )
}

// ═══════════════════════════════════════════════════════════════
//  Pattern Card
// ═══════════════════════════════════════════════════════════════

function PatternCard({ pattern, selected, onClick }: { pattern: PatternData; selected: boolean; onClick: () => void }) {
  const catMeta = CATEGORIES.find(c => c.id === pattern.category)

  return (
    <div
      onClick={onClick}
      style={{
        background: selected ? BRAND.bgElevated : BRAND.bgCard,
        border: `1px solid ${selected ? BRAND.v3 : BRAND.v4}33`,
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }}
    >
      {/* Preview */}
      <div style={{ height: '120px', padding: '8px', background: BRAND.bg }}>
        <GridPreview pattern={pattern} />
      </div>
      {/* Info */}
      <div style={{ padding: '8px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          <span style={{ fontSize: '11px', color: BRAND.v3 }}>{catMeta?.emoji}</span>
          <span style={{ fontSize: '12px', fontWeight: 600, color: BRAND.base }}>{pattern.name}</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px' }}>
          {pattern.tokenRefs.slice(0, 4).map(ref => (
            <TokenBadge key={ref} tokenId={ref} />
          ))}
          {pattern.tokenRefs.length > 4 && (
            <span style={{ fontSize: '9px', color: BRAND.v3 }}>+{pattern.tokenRefs.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
//  Atoms Tab — Visualize individual tokens
// ═══════════════════════════════════════════════════════════════

function AtomsTab() {
  const groups = ['COL', 'ROW', 'GAP', 'AUTO', 'DIM', 'AREA'] as const

  return (
    <div>
      {groups.map(group => {
        const groupTokens = TOKENS.filter(t => t.group === group)
        if (groupTokens.length === 0) return null

        return (
          <div key={group} style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: BRAND.base, marginBottom: '12px', borderBottom: `1px solid ${BRAND.v4}44`, paddingBottom: '8px' }}>
              {group === 'COL' ? 'Columns' : group === 'ROW' ? 'Rows' : group === 'GAP' ? 'Gap Scale' : group === 'AUTO' ? 'Auto Props' : group === 'DIM' ? 'Dimensions' : 'Areas'}
              <span style={{ marginLeft: '8px', fontSize: '12px', color: BRAND.v3, fontWeight: 400 }}>({groupTokens.length})</span>
            </h3>

            {group === 'GAP' ? (
              <GapScale tokens={groupTokens} />
            ) : group === 'COL' ? (
              <ColStrips tokens={groupTokens} />
            ) : group === 'ROW' ? (
              <RowStacks tokens={groupTokens} />
            ) : group === 'DIM' ? (
              <DimBlocks tokens={groupTokens} />
            ) : (
              <TokenTable tokens={groupTokens} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function ColStrips({ tokens }: { tokens: TokenData[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '8px' }}>
      {tokens.map(token => {
        const values = parseFrOrPx(token.cssValue)
        const total = values.reduce((a, b) => a + b, 0) || 1
        return (
          <div key={token.id} style={{
            background: BRAND.bgCard,
            border: `1px solid ${BRAND.v4}44`,
            borderRadius: '6px',
            padding: '8px',
          }}>
            <div style={{ fontSize: '10px', color: BRAND.v3, marginBottom: '4px', fontFamily: 'monospace' }}>{token.cssVar}</div>
            <div style={{ display: 'flex', height: '24px', borderRadius: '3px', overflow: 'hidden', gap: '1px' }}>
              {values.map((v, i) => (
                <div key={i} style={{
                  flex: v / total,
                  background: CELL_COLORS[i % CELL_COLORS.length],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '7px',
                  color: BRAND.bg,
                  fontWeight: 600,
                  minWidth: v / total > 0.08 ? undefined : '2px',
                }}>
                  {v}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '9px', color: BRAND.v4, marginTop: '3px' }}>{token.cssValue}</div>
          </div>
        )
      })}
    </div>
  )
}

function RowStacks({ tokens }: { tokens: TokenData[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '8px' }}>
      {tokens.map(token => {
        const values = parseFrOrPx(token.cssValue)
        const total = values.reduce((a, b) => a + b, 0) || 1
        return (
          <div key={token.id} style={{
            background: BRAND.bgCard,
            border: `1px solid ${BRAND.v4}44`,
            borderRadius: '6px',
            padding: '8px',
          }}>
            <div style={{ fontSize: '10px', color: BRAND.v3, marginBottom: '4px', fontFamily: 'monospace' }}>{token.cssVar}</div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '48px', borderRadius: '3px', overflow: 'hidden', gap: '1px' }}>
              {values.map((v, i) => (
                <div key={i} style={{
                  flex: v / total,
                  background: CELL_COLORS[(i + 2) % CELL_COLORS.length],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '7px',
                  color: BRAND.bg,
                  fontWeight: 600,
                }}>
                  {v}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '9px', color: BRAND.v4, marginTop: '3px' }}>{token.cssValue}</div>
          </div>
        )
      })}
    </div>
  )
}

function GapScale({ tokens }: { tokens: TokenData[] }) {
  const gapPxValues = [0, 4, 8, 12, 20, 40, 64, 104]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {tokens.map((token, i) => (
        <div key={token.id} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: BRAND.bgCard,
          border: `1px solid ${BRAND.v4}44`,
          borderRadius: '6px',
          padding: '8px 12px',
        }}>
          <span style={{ fontSize: '10px', fontFamily: 'monospace', color: BRAND.v3, minWidth: '160px' }}>{token.cssVar}</span>
          <div style={{ display: 'flex', gap: `${gapPxValues[i]}px`, flex: 1 }}>
            {[0, 1, 2, 3].map(j => (
              <div key={j} style={{
                width: '20px',
                height: '20px',
                borderRadius: '3px',
                background: CELL_COLORS[j % CELL_COLORS.length],
              }} />
            ))}
          </div>
          <span style={{ fontSize: '11px', color: BRAND.base, fontWeight: 500, minWidth: '40px' }}>{token.cssValue}</span>
          <span style={{ fontSize: '10px', color: BRAND.v4 }}>{token.label}</span>
        </div>
      ))}
    </div>
  )
}

function DimBlocks({ tokens }: { tokens: TokenData[] }) {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {tokens.map(token => {
        const px = parseInt(token.cssValue) || 50
        const displaySize = Math.max(20, Math.min(px * 1.5, 100))
        return (
          <div key={token.id} style={{
            background: BRAND.bgCard,
            border: `1px solid ${BRAND.v4}44`,
            borderRadius: '6px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}>
            <div style={{
              width: `${displaySize}px`,
              height: `${displaySize}px`,
              background: BRAND.v3,
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              color: BRAND.bg,
              fontWeight: 600,
            }}>
              {token.cssValue}
            </div>
            <div style={{ fontSize: '10px', fontFamily: 'monospace', color: BRAND.v3 }}>{token.cssVar}</div>
            <div style={{ fontSize: '11px', color: BRAND.base }}>{token.label}</div>
          </div>
        )
      })}
    </div>
  )
}

function TokenTable({ tokens }: { tokens: TokenData[] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '6px 10px', color: BRAND.v3, borderBottom: `1px solid ${BRAND.v4}44` }}>Token</th>
            <th style={{ textAlign: 'left', padding: '6px 10px', color: BRAND.v3, borderBottom: `1px solid ${BRAND.v4}44` }}>CSS Var</th>
            <th style={{ textAlign: 'left', padding: '6px 10px', color: BRAND.v3, borderBottom: `1px solid ${BRAND.v4}44` }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(token => (
            <tr key={token.id}>
              <td style={{ padding: '4px 10px', color: BRAND.base, fontWeight: 500 }}>{token.label}</td>
              <td style={{ padding: '4px 10px', fontFamily: 'monospace', fontSize: '10px', color: BRAND.v1 }}>{token.cssVar}</td>
              <td style={{ padding: '4px 10px', fontFamily: 'monospace', fontSize: '10px', color: BRAND.v2 }}>{token.cssValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
//  Registry Tab — shadcn/ui style registry JSON
// ═══════════════════════════════════════════════════════════════

function RegistryTab() {
  const [selected, setSelected] = useState<string | null>(null)
  const selectedPattern = PATTERNS.find(p => p.id === selected)

  return (
    <div>
      <div style={{ marginBottom: '16px', color: BRAND.v2, fontSize: '13px' }}>
        shadcn/ui-style registry entries for all {PATTERNS.length} layout patterns.
        Each entry maps to <code style={{ color: BRAND.v1 }}>npx shadcn add [name]</code>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 600, color: BRAND.base, marginBottom: '8px' }}>Registry Index ({PATTERNS.length})</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', maxHeight: '70vh', overflowY: 'auto' }}>
            {PATTERNS.map(p => (
              <div
                key={p.id}
                onClick={() => setSelected(p.id)}
                style={{
                  padding: '6px 10px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  color: selected === p.id ? BRAND.base : BRAND.v1,
                  background: selected === p.id ? BRAND.bgElevated : 'transparent',
                  borderLeft: selected === p.id ? `2px solid ${BRAND.base}` : '2px solid transparent',
                }}
              >
                {p.id}
                <span style={{ marginLeft: '8px', fontSize: '10px', color: BRAND.v3 }}>{p.category}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 600, color: BRAND.base, marginBottom: '8px' }}>
            {selectedPattern ? selectedPattern.name : 'Select a pattern'}
          </h3>
          {selectedPattern ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Registry JSON */}
              <pre style={{
                background: BRAND.bgCard,
                border: `1px solid ${BRAND.v4}44`,
                borderRadius: '6px',
                padding: '12px',
                fontSize: '11px',
                fontFamily: 'monospace',
                color: BRAND.v1,
                overflow: 'auto',
                whiteSpace: 'pre-wrap',
              }}>
                {JSON.stringify(patternToRegistry(selectedPattern), null, 2)}
              </pre>
              {/* Code snippet */}
              <div>
                <div style={{ fontSize: '11px', color: BRAND.v3, marginBottom: '4px' }}>React style object:</div>
                <pre style={{
                  background: BRAND.bgCard,
                  border: `1px solid ${BRAND.v4}44`,
                  borderRadius: '6px',
                  padding: '12px',
                  fontSize: '11px',
                  fontFamily: 'monospace',
                  color: BRAND.base,
                  overflow: 'auto',
                  whiteSpace: 'pre-wrap',
                }}>
                  {generateCode(selectedPattern)}
                </pre>
              </div>
            </div>
          ) : (
            <div style={{ color: BRAND.v4, fontSize: '13px' }}>Click a pattern to view its registry entry</div>
          )}
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
//  Main Page
// ═══════════════════════════════════════════════════════════════

export default function CatalogPage() {
  const [tab, setTab] = useState<'patterns' | 'atoms' | 'registry'>('patterns')
  const [category, setCategory] = useState<LayoutCategory | 'all'>('all')
  const [search, setSearch] = useState('')
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return PATTERNS.filter(p => {
      if (category !== 'all' && p.category !== category) return false
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.id.includes(search.toLowerCase())) return false
      return true
    })
  }, [category, search])

  const activePattern = PATTERNS.find(p => p.id === selectedPattern)

  return (
    <div style={{
      minHeight: '100vh',
      background: BRAND.bg,
      color: BRAND.base,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      {/* ── Header ─────────────────────────────────── */}
      <header style={{
        borderBottom: `1px solid ${BRAND.v4}44`,
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: 700, color: BRAND.base, margin: 0 }}>
            @zai/ui-kit
            <span style={{ marginLeft: '8px', fontSize: '13px', fontWeight: 400, color: BRAND.v3 }}>catalog</span>
          </h1>
          <p style={{ fontSize: '12px', color: BRAND.v4, margin: '2px 0 0' }}>
            {PATTERNS.length} patterns &middot; {TOKENS.length} tokens &middot; 2 skins
          </p>
        </div>
        {/* Brand palette */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', color: BRAND.v4, marginRight: '4px' }}>palette:</span>
          {[BRAND.base, BRAND.v1, BRAND.v2, BRAND.v3, BRAND.v4].map((c, i) => (
            <div key={i} style={{
              width: '20px',
              height: '20px',
              borderRadius: '4px',
              background: c,
              border: `1px solid ${BRAND.v4}66`,
            }} />
          ))}
        </div>
      </header>

      {/* ── Tabs ──────────────────────────────────── */}
      <div style={{
        display: 'flex',
        gap: '0',
        borderBottom: `1px solid ${BRAND.v4}44`,
        padding: '0 24px',
      }}>
        {(['patterns', 'atoms', 'registry'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: '10px 20px',
              fontSize: '13px',
              fontWeight: tab === t ? 600 : 400,
              color: tab === t ? BRAND.base : BRAND.v3,
              background: 'none',
              border: 'none',
              borderBottom: tab === t ? `2px solid ${BRAND.base}` : '2px solid transparent',
              cursor: 'pointer',
              textTransform: 'capitalize',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── Content ───────────────────────────────── */}
      <div style={{ padding: '24px' }}>
        {tab === 'patterns' && (
          <>
            {/* Filters */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center' }}>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search patterns..."
                style={{
                  padding: '6px 12px',
                  background: BRAND.bgCard,
                  border: `1px solid ${BRAND.v4}66`,
                  borderRadius: '6px',
                  color: BRAND.base,
                  fontSize: '13px',
                  outline: 'none',
                  width: '200px',
                }}
              />
              <div style={{ display: 'flex', gap: '4px' }}>
                {[{ id: 'all' as const, name: 'All' }, ...CATEGORIES].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    style={{
                      padding: '4px 10px',
                      fontSize: '11px',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      background: category === cat.id ? BRAND.v3 : `${BRAND.v4}44`,
                      color: category === cat.id ? BRAND.bg : BRAND.v1,
                      fontWeight: category === cat.id ? 600 : 400,
                    }}
                  >
                    {cat.name} ({cat.id === 'all' ? PATTERNS.length : PATTERNS.filter(p => p.category === cat.id).length})
                  </button>
                ))}
              </div>
            </div>

            {/* Pattern grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
              {filtered.map(p => (
                <PatternCard
                  key={p.id}
                  pattern={p}
                  selected={selectedPattern === p.id}
                  onClick={() => setSelectedPattern(selectedPattern === p.id ? null : p.id)}
                />
              ))}
            </div>

            {/* Detail panel */}
            {activePattern && (
              <div style={{
                marginTop: '20px',
                background: BRAND.bgCard,
                border: `1px solid ${BRAND.v4}44`,
                borderRadius: '8px',
                padding: '16px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: BRAND.base, marginBottom: '8px' }}>{activePattern.name}</h3>
                  <div style={{ height: '200px', padding: '12px', background: BRAND.bg, borderRadius: '6px' }}>
                    <GridPreview pattern={activePattern} />
                  </div>
                  <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
                    {activePattern.tokenRefs.map(ref => (
                      <TokenBadge key={ref} tokenId={ref} />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', color: BRAND.v3, marginBottom: '6px' }}>Code</h4>
                  <pre style={{
                    background: BRAND.bg,
                    border: `1px solid ${BRAND.v4}44`,
                    borderRadius: '6px',
                    padding: '12px',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    color: BRAND.base,
                    whiteSpace: 'pre-wrap',
                    overflow: 'auto',
                    maxHeight: '180px',
                  }}>
                    {generateCode(activePattern)}
                  </pre>
                  <h4 style={{ fontSize: '13px', color: BRAND.v3, marginBottom: '6px', marginTop: '10px' }}>Registry JSON</h4>
                  <pre style={{
                    background: BRAND.bg,
                    border: `1px solid ${BRAND.v4}44`,
                    borderRadius: '6px',
                    padding: '12px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    color: BRAND.v1,
                    whiteSpace: 'pre-wrap',
                    overflow: 'auto',
                    maxHeight: '140px',
                  }}>
                    {JSON.stringify(patternToRegistry(activePattern), null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </>
        )}

        {tab === 'atoms' && <AtomsTab />}
        {tab === 'registry' && <RegistryTab />}
      </div>

      {/* ── Footer ──────────────────────────────── */}
      <footer style={{
        borderTop: `1px solid ${BRAND.v4}44`,
        padding: '12px 24px',
        fontSize: '11px',
        color: BRAND.v4,
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <span>L0 Tokens → L1 Elements → L2 Components → L3 Sections → L4 Domain → L5 Skins</span>
        <span>Base: {BRAND.base} · V1: {BRAND.v1} · V2: {BRAND.v2} · V3: {BRAND.v3} · V4: {BRAND.v4}</span>
      </footer>
    </div>
  )
}
