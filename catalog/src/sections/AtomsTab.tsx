'use client'

import React from 'react'
import { BRAND, CELL_COLORS, TOKENS, type TokenData } from '../data/layout-data'
import { parseFrOrPx } from '../utils/codeGen'

// ── Atoms Tab — no own state, pure composition ────────────────

export function AtomsTab() {
  const groups = ['COL', 'ROW', 'GAP', 'AUTO', 'DIM', 'AREA'] as const

  return (
    <div>
      {groups.map(group => {
        const groupTokens = TOKENS.filter(t => t.group === group)
        if (groupTokens.length === 0) return null

        return (
          <div key={group} style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: BRAND.base, marginBottom: '12px', borderBottom: `1px solid ${BRAND.v4}44`, paddingBottom: '8px' }}>
              {groupLabel(group)}
              <span style={{ marginLeft: '8px', fontSize: '12px', color: BRAND.v3, fontWeight: 400 }}>({groupTokens.length})</span>
            </h3>
            {group === 'GAP' ? <GapScale tokens={groupTokens} />
              : group === 'COL' ? <ColStrips tokens={groupTokens} />
              : group === 'ROW' ? <RowStacks tokens={groupTokens} />
              : group === 'DIM' ? <DimBlocks tokens={groupTokens} />
              : <TokenTable tokens={groupTokens} />}
          </div>
        )
      })}
    </div>
  )
}

function groupLabel(g: string): string {
  const map: Record<string, string> = { COL: 'Columns', ROW: 'Rows', GAP: 'Gap Scale', AUTO: 'Auto Props', DIM: 'Dimensions', AREA: 'Areas' }
  return map[g] ?? g
}

// ── Column strips ─────────────────────────────────────────────

function ColStrips({ tokens }: { tokens: TokenData[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '8px' }}>
      {tokens.map(token => {
        const values = parseFrOrPx(token.cssValue)
        const total = values.reduce((a, b) => a + b, 0) || 1
        return (
          <div key={token.id} style={{ background: BRAND.bgCard, border: `1px solid ${BRAND.v4}44`, borderRadius: '6px', padding: '8px' }}>
            <div style={{ fontSize: '10px', color: BRAND.v3, marginBottom: '4px', fontFamily: 'monospace' }}>{token.cssVar}</div>
            <div style={{ display: 'flex', height: '24px', borderRadius: '3px', overflow: 'hidden', gap: '1px' }}>
              {values.map((v, i) => (
                <div key={i} style={{
                  flex: v / total,
                  background: CELL_COLORS[i % CELL_COLORS.length],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '7px', color: BRAND.bg, fontWeight: 600,
                  minWidth: v / total > 0.08 ? undefined : '2px',
                }}>{v}</div>
              ))}
            </div>
            <div style={{ fontSize: '9px', color: BRAND.v4, marginTop: '3px' }}>{token.cssValue}</div>
          </div>
        )
      })}
    </div>
  )
}

// ── Row stacks ────────────────────────────────────────────────

function RowStacks({ tokens }: { tokens: TokenData[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '8px' }}>
      {tokens.map(token => {
        const values = parseFrOrPx(token.cssValue)
        const total = values.reduce((a, b) => a + b, 0) || 1
        return (
          <div key={token.id} style={{ background: BRAND.bgCard, border: `1px solid ${BRAND.v4}44`, borderRadius: '6px', padding: '8px' }}>
            <div style={{ fontSize: '10px', color: BRAND.v3, marginBottom: '4px', fontFamily: 'monospace' }}>{token.cssVar}</div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '48px', borderRadius: '3px', overflow: 'hidden', gap: '1px' }}>
              {values.map((v, i) => (
                <div key={i} style={{
                  flex: v / total,
                  background: CELL_COLORS[(i + 2) % CELL_COLORS.length],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '7px', color: BRAND.bg, fontWeight: 600,
                }}>{v}</div>
              ))}
            </div>
            <div style={{ fontSize: '9px', color: BRAND.v4, marginTop: '3px' }}>{token.cssValue}</div>
          </div>
        )
      })}
    </div>
  )
}

// ── Gap scale ─────────────────────────────────────────────────

function GapScale({ tokens }: { tokens: TokenData[] }) {
  const gapPxValues = [0, 4, 8, 12, 20, 40, 64, 104]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {tokens.map((token, i) => (
        <div key={token.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: BRAND.bgCard, border: `1px solid ${BRAND.v4}44`, borderRadius: '6px', padding: '8px 12px' }}>
          <span style={{ fontSize: '10px', fontFamily: 'monospace', color: BRAND.v3, minWidth: '160px' }}>{token.cssVar}</span>
          <div style={{ display: 'flex', gap: `${gapPxValues[i]}px`, flex: 1 }}>
            {[0, 1, 2, 3].map(j => (
              <div key={j} style={{ width: '20px', height: '20px', borderRadius: '3px', background: CELL_COLORS[j % CELL_COLORS.length] }} />
            ))}
          </div>
          <span style={{ fontSize: '11px', color: BRAND.base, fontWeight: 500, minWidth: '40px' }}>{token.cssValue}</span>
          <span style={{ fontSize: '10px', color: BRAND.v4 }}>{token.label}</span>
        </div>
      ))}
    </div>
  )
}

// ── Dimension blocks ──────────────────────────────────────────

function DimBlocks({ tokens }: { tokens: TokenData[] }) {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {tokens.map(token => {
        const px = parseInt(token.cssValue) || 50
        const displaySize = Math.max(20, Math.min(px * 1.5, 100))
        return (
          <div key={token.id} style={{ background: BRAND.bgCard, border: `1px solid ${BRAND.v4}44`, borderRadius: '6px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: `${displaySize}px`, height: `${displaySize}px`, background: BRAND.v3, borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: BRAND.bg, fontWeight: 600 }}>{token.cssValue}</div>
            <div style={{ fontSize: '10px', fontFamily: 'monospace', color: BRAND.v3 }}>{token.cssVar}</div>
            <div style={{ fontSize: '11px', color: BRAND.base }}>{token.label}</div>
          </div>
        )
      })}
    </div>
  )
}

// ── Token table ───────────────────────────────────────────────

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
