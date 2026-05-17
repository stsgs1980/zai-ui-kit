'use client'

import React from 'react'
import { BRAND, PATTERNS, TOKENS } from '../data/layout-data'

export function CatalogHeader() {
  return (
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
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <span style={{ fontSize: '10px', color: BRAND.v4, marginRight: '4px' }}>palette:</span>
        {[BRAND.base, BRAND.v1, BRAND.v2, BRAND.v3, BRAND.v4].map((c, i) => (
          <div key={i} style={{
            width: '20px', height: '20px',
            borderRadius: '4px',
            background: c,
            border: `1px solid ${BRAND.v4}66`,
          }} />
        ))}
      </div>
    </header>
  )
}
