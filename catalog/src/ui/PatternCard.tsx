'use client'

import React from 'react'
import { BRAND, CATEGORIES, type PatternData } from '../../data/layout-data'
import { GridPreview } from './GridPreview'
import { TokenBadge } from './TokenBadge'

interface PatternCardProps {
  pattern: PatternData
  selected: boolean
  onClick: () => void
}

export function PatternCard({ pattern, selected, onClick }: PatternCardProps) {
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
      <div style={{ height: '120px', padding: '8px', background: BRAND.bg }}>
        <GridPreview pattern={pattern} />
      </div>
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
