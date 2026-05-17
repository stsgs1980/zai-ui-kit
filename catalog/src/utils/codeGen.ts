/**
 * Catalog utilities — pure functions (no React, no state)
 */

import { TOKENS, type PatternData } from '../data/layout-data'

// ── Parse CSS grid template values to numeric arrays ──────────

export function parseFrOrPx(css: string): number[] {
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
    else if (p.endsWith('px')) values.push(parseInt(p) / 50)
    else if (p === 'auto') values.push(0.5)
  }
  return values.length > 0 ? values : []
}

// ── Generate React style code from a pattern ──────────────────

export function generateCode(pattern: PatternData): string {
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
