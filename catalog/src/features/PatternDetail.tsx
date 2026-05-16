'use client'

import React from 'react'
import { BRAND, PATTERNS, patternToRegistry } from '../../data/layout-data'
import { generateCode } from '../../utils/codeGen'
import { GridPreview } from '../ui/GridPreview'
import { TokenBadge } from '../ui/TokenBadge'

// ── Pattern Detail — detail panel when a pattern is selected ──

interface PatternDetailProps {
  patternId: string | null
}

export function PatternDetail({ patternId }: PatternDetailProps) {
  const pattern = PATTERNS.find(p => p.id === patternId)
  if (!pattern) return null

  return (
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
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: BRAND.base, marginBottom: '8px' }}>{pattern.name}</h3>
        <div style={{ height: '200px', padding: '12px', background: BRAND.bg, borderRadius: '6px' }}>
          <GridPreview pattern={pattern} />
        </div>
        <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
          {pattern.tokenRefs.map(ref => <TokenBadge key={ref} tokenId={ref} />)}
        </div>
      </div>
      <div>
        <h4 style={{ fontSize: '13px', color: BRAND.v3, marginBottom: '6px' }}>Code</h4>
        <pre style={{
          background: BRAND.bg, border: `1px solid ${BRAND.v4}44`, borderRadius: '6px',
          padding: '12px', fontSize: '11px', fontFamily: 'monospace', color: BRAND.base,
          whiteSpace: 'pre-wrap', overflow: 'auto', maxHeight: '180px',
        }}>{generateCode(pattern)}</pre>
        <h4 style={{ fontSize: '13px', color: BRAND.v3, marginBottom: '6px', marginTop: '10px' }}>Registry JSON</h4>
        <pre style={{
          background: BRAND.bg, border: `1px solid ${BRAND.v4}44`, borderRadius: '6px',
          padding: '12px', fontSize: '10px', fontFamily: 'monospace', color: BRAND.v1,
          whiteSpace: 'pre-wrap', overflow: 'auto', maxHeight: '140px',
        }}>{JSON.stringify(patternToRegistry(pattern), null, 2)}</pre>
      </div>
    </div>
  )
}
