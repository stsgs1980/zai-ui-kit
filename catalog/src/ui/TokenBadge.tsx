'use client'

import React from 'react'
import { BRAND, TOKENS } from '../data/layout-data'

export function TokenBadge({ tokenId }: { tokenId: string }) {
  const token = TOKENS.find(t => t.id === tokenId)
  if (!token) return null

  const groupColors: Record<string, string> = {
    COL: BRAND.v3, ROW: BRAND.v4, GAP: BRAND.v2,
    AUTO: BRAND.v1, DIM: BRAND.base, AREA: BRAND.v3,
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
