'use client'

import React, { useState } from 'react'
import { BRAND, PATTERNS, TOKENS, patternToRegistry } from '../data/layout-data'
import { generateCode } from '../utils/codeGen'
import { GridPreview } from '../ui/GridPreview'
import { TokenBadge } from '../ui/TokenBadge'

// ── Pattern Detail — enhanced with Preview/Code/Tokens tabs ────

type DetailTab = 'preview' | 'code' | 'tokens'

interface PatternDetailProps {
  patternId: string | null
}

export function PatternDetail({ patternId }: PatternDetailProps) {
  const [detailTab, setDetailTab] = useState<DetailTab>('preview')
  const pattern = PATTERNS.find(p => p.id === patternId)

  if (!pattern) return null

  const referencedTokens = pattern.tokenRefs
    .map(ref => TOKENS.find(t => t.id === ref))
    .filter(Boolean) as (typeof TOKENS[number])[]

  return (
    <div style={{
      marginTop: '20px',
      background: BRAND.bgCard,
      border: `1px solid ${BRAND.v4}44`,
      borderRadius: '8px',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${BRAND.v4}44`,
      }}>
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: BRAND.base, marginBottom: '4px' }}>{pattern.name}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
            {pattern.tokenRefs.map(ref => <TokenBadge key={ref} tokenId={ref} />)}
          </div>
        </div>
        <span style={{ fontSize: '11px', color: BRAND.v4, fontFamily: 'monospace' }}>{pattern.type} · {pattern.category}</span>
      </div>

      {/* Tab bar */}
      <div style={{
        display: 'flex',
        borderBottom: `1px solid ${BRAND.v4}44`,
        padding: '0 16px',
      }}>
        {(['preview', 'code', 'tokens'] as DetailTab[]).map(tab => (
          <button
            key={tab}
            onClick={() => setDetailTab(tab)}
            style={{
              padding: '8px 16px',
              fontSize: '12px',
              fontWeight: detailTab === tab ? 600 : 400,
              color: detailTab === tab ? BRAND.base : BRAND.v3,
              background: 'none',
              border: 'none',
              borderBottom: detailTab === tab ? `2px solid ${BRAND.base}` : '2px solid transparent',
              cursor: 'pointer',
              textTransform: 'capitalize',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ padding: '16px' }}>
        {detailTab === 'preview' && <PreviewTab pattern={pattern} />}
        {detailTab === 'code' && <CodeTab pattern={pattern} />}
        {detailTab === 'tokens' && <TokensTab pattern={pattern} tokens={referencedTokens} />}
      </div>
    </div>
  )
}

// ── Preview Tab ─────────────────────────────────────────────────

function PreviewTab({ pattern }: { pattern: typeof PATTERNS[number] }) {
  return (
    <div>
      <div style={{ height: '240px', padding: '12px', background: BRAND.bg, borderRadius: '6px' }}>
        <GridPreview pattern={pattern} />
      </div>
      <div style={{ marginTop: '12px', fontSize: '11px', color: BRAND.v3 }}>
        Grid properties:
        {pattern.cols && <span style={{ marginLeft: '8px' }}>cols: <code style={{ color: BRAND.v1 }}>{pattern.cols}</code></span>}
        {pattern.rows && <span style={{ marginLeft: '8px' }}>rows: <code style={{ color: BRAND.v1 }}>{pattern.rows}</code></span>}
        {pattern.gap && <span style={{ marginLeft: '8px' }}>gap: <code style={{ color: BRAND.v1 }}>{pattern.gap}</code></span>}
        {pattern.areas && <span style={{ marginLeft: '8px' }}>areas: <code style={{ color: BRAND.v1 }}>{pattern.areas}</code></span>}
      </div>
    </div>
  )
}

// ── Code Tab ────────────────────────────────────────────────────

function CodeTab({ pattern }: { pattern: typeof PATTERNS[number] }) {
  const registry = patternToRegistry(pattern)
  const componentCode = generateCode(pattern)
  const installCmd = `npx shadcn@latest add https://your-registry.com/r/${pattern.id}`

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Install command */}
      <div>
        <h4 style={{ fontSize: '13px', color: BRAND.v3, marginBottom: '6px' }}>Install</h4>
        <div style={{
          background: BRAND.bg,
          border: `1px solid ${BRAND.v4}44`,
          borderRadius: '6px',
          padding: '10px 14px',
          fontFamily: 'monospace',
          fontSize: '12px',
          color: BRAND.base,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <code>{installCmd}</code>
          <button
            onClick={() => navigator.clipboard?.writeText(installCmd)}
            style={{
              background: BRAND.bgSurface,
              border: `1px solid ${BRAND.v4}66`,
              borderRadius: '4px',
              padding: '3px 8px',
              fontSize: '10px',
              color: BRAND.v1,
              cursor: 'pointer',
            }}
          >
            Copy
          </button>
        </div>
      </div>

      {/* React style code */}
      <div>
        <h4 style={{ fontSize: '13px', color: BRAND.v3, marginBottom: '6px' }}>React Style Object</h4>
        <pre style={{
          background: BRAND.bg,
          border: `1px solid ${BRAND.v4}44`,
          borderRadius: '6px',
          padding: '12px',
          fontSize: '12px',
          fontFamily: 'monospace',
          color: BRAND.base,
          whiteSpace: 'pre-wrap',
          overflow: 'auto',
          maxHeight: '200px',
        }}>{componentCode}</pre>
      </div>

      {/* Registry JSON */}
      <div>
        <h4 style={{ fontSize: '13px', color: BRAND.v3, marginBottom: '6px' }}>Registry JSON</h4>
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
          maxHeight: '240px',
        }}>{JSON.stringify(registry, null, 2)}</pre>
      </div>
    </div>
  )
}

// ── Tokens Tab ──────────────────────────────────────────────────

function TokensTab({
  pattern,
  tokens,
}: {
  pattern: typeof PATTERNS[number]
  tokens: (typeof TOKENS[number])[]
}) {
  return (
    <div>
      <p style={{ fontSize: '12px', color: BRAND.v3, marginBottom: '12px' }}>
        CSS custom properties used by <strong style={{ color: BRAND.base }}>{pattern.name}</strong>
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {tokens.map(token => (
          <div
            key={token.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: BRAND.bg,
              border: `1px solid ${BRAND.v4}44`,
              borderRadius: '6px',
              padding: '10px 14px',
            }}
          >
            {/* Group badge */}
            <span style={{
              padding: '2px 8px',
              borderRadius: '3px',
              fontSize: '9px',
              fontWeight: 600,
              fontFamily: 'monospace',
              background: token.group === 'COL' ? BRAND.v3
                : token.group === 'ROW' ? BRAND.v4
                : token.group === 'GAP' ? BRAND.v2
                : BRAND.v1,
              color: BRAND.bg,
              minWidth: '36px',
              textAlign: 'center',
            }}>
              {token.group}
            </span>

            {/* CSS variable name */}
            <code style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              color: BRAND.base,
              minWidth: '220px',
            }}>
              var({token.cssVar})
            </code>

            {/* Resolved value */}
            <span style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              color: BRAND.v2,
              background: BRAND.bgElevated,
              padding: '2px 8px',
              borderRadius: '3px',
            }}>
              {token.cssValue}
            </span>

            {/* Visual preview for COL/ROW tokens */}
            {(token.group === 'COL' || token.group === 'ROW') && (
              <TokenVisualPreview token={token} />
            )}

            {/* Label */}
            <span style={{ fontSize: '10px', color: BRAND.v4, marginLeft: 'auto' }}>
              {token.label}
            </span>
          </div>
        ))}
      </div>

      {/* Raw CSS block */}
      <div style={{ marginTop: '16px' }}>
        <h4 style={{ fontSize: '13px', color: BRAND.v3, marginBottom: '6px' }}>Raw CSS</h4>
        <pre style={{
          background: BRAND.bg,
          border: `1px solid ${BRAND.v4}44`,
          borderRadius: '6px',
          padding: '12px',
          fontSize: '11px',
          fontFamily: 'monospace',
          color: BRAND.v1,
          whiteSpace: 'pre-wrap',
        }}>
{tokens.map(t => `  ${t.cssVar}: ${t.cssValue};`).join('\n')}
        </pre>
      </div>
    </div>
  )
}

// ── Small visual preview for COL/ROW tokens ─────────────────────

function TokenVisualPreview({ token }: { token: typeof TOKENS[number] }) {
  // Parse fr values for a mini bar
  const values = parseSimpleFr(token.cssValue)
  if (values.length === 0) return null

  const total = values.reduce((a, b) => a + b, 0) || 1
  const isRow = token.group === 'ROW'

  return (
    <div style={{
      display: 'flex',
      flexDirection: isRow ? 'column' : 'row',
      width: isRow ? '24px' : '80px',
      height: isRow ? '40px' : '16px',
      borderRadius: '2px',
      overflow: 'hidden',
      gap: '1px',
      opacity: 0.8,
    }}>
      {values.map((v, i) => (
        <div
          key={i}
          style={{
            flex: v / total,
            background: [BRAND.v3, BRAND.v4, BRAND.v2, BRAND.v1, BRAND.base][i % 5],
            minWidth: '2px',
            minHeight: '2px',
          }}
        />
      ))}
    </div>
  )
}

function parseSimpleFr(css: string): number[] {
  // Handle repeat(N, Xfr)
  const repeatMatch = css.match(/repeat\((\d+),\s*([\d.]+)fr\)/)
  if (repeatMatch) {
    const count = parseInt(repeatMatch[1])
    const val = parseFloat(repeatMatch[2])
    return Array(count).fill(val)
  }
  // Handle individual fr/px values
  const parts = css.split(/\s+/)
  const values: number[] = []
  for (const p of parts) {
    const m = p.match(/^([\d.]+)fr$/)
    if (m) values.push(parseFloat(m[1]))
    else if (p.endsWith('px')) values.push(parseInt(p) / 50)
    else if (p === 'auto') values.push(0.5)
  }
  return values
}
