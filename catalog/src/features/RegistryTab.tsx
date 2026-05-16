'use client'

import React, { useState } from 'react'
import { BRAND, PATTERNS, patternToRegistry } from '../data/layout-data'
import { generateCode } from '../utils/codeGen'

// ── Registry Tab — has own state (selected pattern) ───────────

export function RegistryTab() {
  const [selected, setSelected] = useState<string | null>(null)
  const selectedPattern = PATTERNS.find(p => p.id === selected)

  return (
    <div>
      <div style={{ marginBottom: '16px', color: BRAND.v2, fontSize: '13px' }}>
        shadcn/ui-style registry entries for all {PATTERNS.length} layout patterns.
        Each entry maps to <code style={{ color: BRAND.v1 }}>npx shadcn add [name]</code>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <RegistryIndex selected={selected} onSelect={setSelected} />
        <RegistryDetail pattern={selectedPattern} />
      </div>
    </div>
  )
}

function RegistryIndex({ selected, onSelect }: { selected: string | null; onSelect: (id: string | null) => void }) {
  return (
    <div>
      <h3 style={{ fontSize: '14px', fontWeight: 600, color: BRAND.base, marginBottom: '8px' }}>Registry Index ({PATTERNS.length})</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', maxHeight: '70vh', overflowY: 'auto' }}>
        {PATTERNS.map(p => (
          <div
            key={p.id}
            onClick={() => onSelect(p.id)}
            style={{
              padding: '6px 10px', cursor: 'pointer', borderRadius: '4px',
              fontSize: '12px', fontFamily: 'monospace',
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
  )
}

function RegistryDetail({ pattern }: { pattern: ReturnType<typeof PATTERNS.find> }) {
  if (!pattern) {
    return <div style={{ color: BRAND.v4, fontSize: '13px' }}>Click a pattern to view its registry entry</div>
  }

  return (
    <div>
      <h3 style={{ fontSize: '14px', fontWeight: 600, color: BRAND.base, marginBottom: '8px' }}>{pattern.name}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <CodeBlock label="Registry JSON">{JSON.stringify(patternToRegistry(pattern), null, 2)}</CodeBlock>
        <CodeBlock label="React style object">{generateCode(pattern)}</CodeBlock>
      </div>
    </div>
  )
}

function CodeBlock({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <div style={{ fontSize: '11px', color: BRAND.v3, marginBottom: '4px' }}>{label}:</div>
      <pre style={{
        background: BRAND.bgCard, border: `1px solid ${BRAND.v4}44`, borderRadius: '6px',
        padding: '12px', fontSize: '11px', fontFamily: 'monospace', color: BRAND.v1,
        overflow: 'auto', whiteSpace: 'pre-wrap',
      }}>{children}</pre>
    </div>
  )
}
