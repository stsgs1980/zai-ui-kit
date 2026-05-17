'use client'

import React from 'react'
import { BRAND, CELL_COLORS, type PatternData } from '../data/layout-data'
import { parseFrOrPx } from '../utils/codeGen'

// ── Grid Preview ──────────────────────────────────────────────

export function GridPreview({ pattern }: { pattern: PatternData }) {
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

  if (pattern.autoRows) gridStyle.gridAutoRows = '1fr'
  if (pattern.autoFlow) gridStyle.gridAutoFlow = pattern.autoFlow
  if (pattern.areas) gridStyle.gridTemplateAreas = pattern.areas

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

// ── Absolute Preview ──────────────────────────────────────────

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

// ── Polar Preview ─────────────────────────────────────────────

function PolarPreview({ pattern }: { pattern: PatternData }) {
  if (!pattern.positions) return null
  const center = pattern.positions[0]
  const items = pattern.positions.slice(1)
  const radius = 35
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        position: 'absolute',
        width: '20px', height: '20px',
        borderRadius: '50%',
        background: BRAND.base,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '8px', color: BRAND.bg, fontWeight: 700, zIndex: 2,
      }}>{center?.label}</div>
      {items.map((item, i) => {
        const angle = (item.angle || 0) * (Math.PI / 180)
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const size = 12 + (i % 3) * 4
        return (
          <div key={i} style={{
            position: 'absolute',
            width: `${size}px`, height: `${size}px`,
            borderRadius: '50%',
            background: CELL_COLORS[(i + 1) % CELL_COLORS.length],
            left: `calc(50% + ${x}px - ${size / 2}px)`,
            top: `calc(50% + ${y}px - ${size / 2}px)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '7px', color: BRAND.bg, fontWeight: 600,
          }}>{item.label}</div>
        )
      })}
    </div>
  )
}
