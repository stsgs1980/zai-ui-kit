/**
 * ZAI UI Kit — Layout Pattern Configs
 * 47 макетов как комбинации атомарных токенов
 *
 * Было: 47 макетов × ~20 строк хардкода = ~940 строк
 * Стало: 47 конфигов × 3-5 полей = ~250 строк
 *
 * Новый макет = одна строка конфига, 0 хардкода
 */

import { LAYOUT_COL, LAYOUT_ROW, LAYOUT_GAP, LAYOUT_AUTO, LAYOUT_AREA } from './layout-tokens'
import type { LayoutConfig } from './layout-tokens'

// ── Тип макета ────────────────────────────────────────────────────

export type LayoutType = 'grid' | 'absolute' | 'polar' | 'nested' | 'flex'

export interface LayoutPattern extends LayoutConfig {
  id: string
  type: LayoutType
  /** Категория для UI-селектора */
  category: LayoutCategory
  /** Человекочитаемое имя */
  name: string
  /** Для absolute/polar/nested — позиции элементов */
  positions?: PositionDef[]
}

export type LayoutCategory =
  | 'basic'      // Sidebar, header, columns
  | 'bento'      // Bento grid variations
  | 'fibonacci'  // Fibonacci-based
  | 'advanced'   // Masonry, overlap, honeycomb
  | 'math'       // Golden, phi, sqrt, prime, harmonic
  | 'complex'    // Dashboard, blog

interface PositionDef {
  /** Название/метка элемента */
  label: string
  /** CSS top */
  top?: string
  /** CSS left */
  left?: string
  /** CSS right */
  right?: string
  /** CSS bottom */
  bottom?: string
  /** CSS width (%, px, fr) */
  width?: string
  /** CSS height (%, px, fr) */
  height?: string
  /** Угол для polar layout */
  angle?: number
  /** Row span для grid */
  rowSpan?: number
  /** Col span для grid */
  colSpan?: number
}

// ── Basic / Classic (10) ──────────────────────────────────────────

const basic: LayoutPattern[] = [
  {
    id: 'sidebar-left', type: 'grid', category: 'basic',
    name: 'Sidebar Left',
    cols: LAYOUT_COL.SIDEBAR_L_XL,
    rows: LAYOUT_ROW.HEADER_CONTENT_FOOTER,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'sidebar-right', type: 'grid', category: 'basic',
    name: 'Sidebar Right',
    cols: LAYOUT_COL.SIDEBAR_R,
    rows: LAYOUT_ROW.HEADER_CONTENT_FOOTER,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'top-nav', type: 'grid', category: 'basic',
    name: 'Top Navigation',
    rows: LAYOUT_ROW.HEADER_CONTENT_FOOTER,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'two-columns', type: 'grid', category: 'basic',
    name: 'Two Columns',
    cols: LAYOUT_COL.EQUAL_2,
    rows: LAYOUT_ROW.HEADER_CONTENT_FOOTER,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'three-columns', type: 'grid', category: 'basic',
    name: 'Three Columns',
    cols: LAYOUT_COL.EQUAL_3,
    rows: LAYOUT_ROW.HEADER_CONTENT_FOOTER,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'holy-grail', type: 'grid', category: 'basic',
    name: 'Holy Grail',
    cols: LAYOUT_COL.HOLY_GRAIL,
    rows: LAYOUT_ROW.HEADER_CONTENT_FOOTER,
    areas: LAYOUT_AREA.HOLY_GRAIL,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'split-screen', type: 'grid', category: 'basic',
    name: 'Split Screen',
    cols: LAYOUT_COL.EQUAL_2,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'cards-grid', type: 'grid', category: 'basic',
    name: 'Cards Grid',
    rows: LAYOUT_ROW.HEADER_CONTENT_FOOTER,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'magazine', type: 'grid', category: 'basic',
    name: 'Magazine',
    cols: LAYOUT_COL.EQUAL_3,
    rows: LAYOUT_ROW.MAGAZINE,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'fullscreen-hero', type: 'grid', category: 'basic',
    name: 'Fullscreen Hero',
    rows: LAYOUT_ROW.HERO_CONTENT,
    gap: LAYOUT_GAP.NONE,
  },
]

// ── Bento (4) ────────────────────────────────────────────────────

const bento: LayoutPattern[] = [
  {
    id: 'bento-grid', type: 'grid', category: 'bento',
    name: 'Bento Grid',
    cols: LAYOUT_COL.EQUAL_4,
    autoRows: LAYOUT_AUTO.ROWS_EQUAL,
    autoFlow: LAYOUT_AUTO.FLOW_DENSE,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'bento-sidebar', type: 'grid', category: 'bento',
    name: 'Bento + Sidebar',
    cols: LAYOUT_COL.SIDEBAR_L,
    autoRows: LAYOUT_AUTO.ROWS_EQUAL,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'bento-hero', type: 'grid', category: 'bento',
    name: 'Bento Hero',
    rows: LAYOUT_ROW.HERO_GRID,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'bento-masonry', type: 'grid', category: 'bento',
    name: 'Bento Masonry',
    cols: LAYOUT_COL.EQUAL_4,
    autoRows: LAYOUT_AUTO.ROWS_SM,
    gap: LAYOUT_GAP.XS,
  },
]

// ── Fibonacci (13) ────────────────────────────────────────────────

const fibonacci: LayoutPattern[] = [
  {
    id: 'fibonacci-grid', type: 'grid', category: 'fibonacci',
    name: 'Fibonacci Grid',
    cols: LAYOUT_COL.FIB_5,
    rows: LAYOUT_ROW.FIB_4,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'fibonacci-spiral', type: 'grid', category: 'fibonacci',
    name: 'Fibonacci Spiral',
    cols: LAYOUT_COL.FIB_4_REV,
    rows: LAYOUT_ROW.FIB_4_REV,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'fibonacci-columns', type: 'grid', category: 'fibonacci',
    name: 'Fibonacci Columns',
    cols: LAYOUT_COL.FIB_5,
    rows: LAYOUT_ROW.HEADER_CONTENT_FOOTER,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'fibonacci-tiles', type: 'grid', category: 'fibonacci',
    name: 'Fibonacci Tiles',
    cols: LAYOUT_COL.EQUAL_8,
    rows: LAYOUT_ROW.EQUAL_5,
    autoFlow: LAYOUT_AUTO.FLOW_DENSE,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'fibonacci-responsive', type: 'grid', category: 'fibonacci',
    name: 'Fibonacci Responsive',
    cols: LAYOUT_COL.EQUAL_3,
    gap: LAYOUT_GAP.LG,
  },
  {
    id: 'fibonacci-masonry', type: 'grid', category: 'fibonacci',
    name: 'Fibonacci Masonry',
    cols: LAYOUT_COL.EQUAL_3,
    autoRows: LAYOUT_AUTO.ROWS_SM,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'fibonacci-bento', type: 'grid', category: 'fibonacci',
    name: 'Fibonacci Bento',
    cols: LAYOUT_COL.FIB_3_REV,
    rows: LAYOUT_ROW.FIB_4_REV,
    autoFlow: LAYOUT_AUTO.FLOW_DENSE,
    gap: LAYOUT_GAP.XS,
  },
  // Non-grid Fibonacci layouts
  {
    id: 'fibonacci-diagonal', type: 'absolute', category: 'fibonacci',
    name: 'Fibonacci Diagonal',
    positions: [
      { label: '1', width: '60%', height: '60%', top: '5%', left: '5%' },
      { label: '1', width: '50%', height: '50%', top: '15%', left: '25%' },
      { label: '2', width: '45%', height: '45%', top: '25%', left: '40%' },
      { label: '3', width: '40%', height: '40%', top: '35%', left: '50%' },
      { label: '5', width: '35%', height: '35%', top: '45%', left: '58%' },
    ],
  },
  {
    id: 'fibonacci-steps', type: 'grid', category: 'fibonacci',
    name: 'Fibonacci Steps',
    cols: LAYOUT_COL.FIB_4,
    rows: LAYOUT_ROW.FIB_4,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'fibonacci-radiant', type: 'polar', category: 'fibonacci',
    name: 'Fibonacci Radiant',
    positions: [
      { label: 'φ', top: '50%', left: '50%' },  // center
      { label: '8', angle: 0 },
      { label: '5', angle: 45 },
      { label: '3', angle: 90 },
      { label: '2', angle: 135 },
      { label: '1', angle: 180 },
      { label: '1', angle: 225 },
      { label: '3', angle: 270 },
      { label: '5', angle: 315 },
    ],
  },
  {
    id: 'fibonacci-cascade', type: 'grid', category: 'fibonacci',
    name: 'Fibonacci Cascade',
    cols: LAYOUT_COL.EQUAL_5,
    autoRows: LAYOUT_AUTO.ROWS_EQUAL,
    autoFlow: LAYOUT_AUTO.FLOW_COLUMN,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'fibonacci-nested', type: 'nested', category: 'fibonacci',
    name: 'Fibonacci Nested',
    positions: [
      { label: '8', top: '0', left: '0', right: '0', bottom: '0' },
      { label: '5', top: '10%', left: '55%', right: '10%', bottom: '20%' },
      { label: '3', top: '55%', left: '10%', width: '35%', height: '35%' },
      { label: '2', top: '65%', left: '50%', width: '20%', height: '20%' },
      { label: '1', top: '75%', left: '60%', width: '10%', height: '10%' },
    ],
  },
  {
    id: 'fibonacci-triangle', type: 'flex', category: 'fibonacci',
    name: 'Fibonacci Triangle',
    positions: [
      { label: '1' },
      { label: '1', colSpan: 2 },
      { label: '2 3 2', colSpan: 3 },
      { label: '3 5 8 5', colSpan: 4 },
      { label: '5 8 13 8 5', colSpan: 5 },
    ],
  },
]

// ── Advanced (7) ──────────────────────────────────────────────────

const advanced: LayoutPattern[] = [
  {
    id: 'masonry-grid', type: 'grid', category: 'advanced',
    name: 'Masonry Grid',
    cols: LAYOUT_COL.EQUAL_3,
    autoRows: LAYOUT_AUTO.ROWS_SM,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'asymmetric-grid', type: 'grid', category: 'advanced',
    name: 'Asymmetric Grid',
    cols: LAYOUT_COL.ASYM_2_1_1,
    rows: LAYOUT_ROW.EQUAL_3,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'span-grid', type: 'grid', category: 'advanced',
    name: 'Span Grid',
    cols: LAYOUT_COL.EQUAL_4,
    rows: LAYOUT_ROW.EQUAL_3,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'overlap-grid', type: 'grid', category: 'advanced',
    name: 'Overlap Grid',
    cols: LAYOUT_COL.EQUAL_2,
    rows: LAYOUT_ROW.EQUAL_2,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'honeycomb-grid', type: 'grid', category: 'advanced',
    name: 'Honeycomb Grid',
    cols: LAYOUT_COL.EQUAL_3,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'mosaic-grid', type: 'grid', category: 'advanced',
    name: 'Mosaic Grid',
    cols: LAYOUT_COL.EQUAL_4,
    rows: LAYOUT_ROW.EQUAL_4,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'responsive-grid', type: 'grid', category: 'advanced',
    name: 'Responsive Grid',
    cols: LAYOUT_COL.AUTO_FIT,
    autoRows: LAYOUT_AUTO.ROWS_EQUAL,
    gap: LAYOUT_GAP.XS,
  },
]

// ── Mathematical (11) ─────────────────────────────────────────────

const math: LayoutPattern[] = [
  {
    id: 'golden-ratio-grid', type: 'grid', category: 'math',
    name: 'Golden Ratio Grid',
    cols: LAYOUT_COL.GOLDEN,
    rows: LAYOUT_ROW.GOLDEN_INV,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'spiral-grid', type: 'absolute', category: 'math',
    name: 'Spiral Grid',
    positions: [
      { label: '1', top: '5%', left: '5%', right: '30%', bottom: '30%' },
      { label: '2', top: '5%', left: '70%', right: '5%', bottom: '55%' },
      { label: '3', top: '45%', left: '45%', right: '5%', bottom: '30%' },
      { label: '5', top: '70%', left: '5%', right: '55%', bottom: '5%' },
    ],
  },
  {
    id: 'phi-grid', type: 'grid', category: 'math',
    name: 'Phi Grid',
    cols: LAYOUT_COL.GOLDEN,
    rows: LAYOUT_ROW.GOLDEN,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'rule-of-thirds', type: 'grid', category: 'math',
    name: 'Rule of Thirds',
    cols: LAYOUT_COL.EQUAL_3,
    rows: LAYOUT_ROW.EQUAL_3,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'root-rectangle', type: 'grid', category: 'math',
    name: 'Root Rectangle',
    cols: LAYOUT_COL.ROOT_2,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'dynamic-symmetry', type: 'grid', category: 'math',
    name: 'Dynamic Symmetry',
    cols: LAYOUT_COL.EQUAL_2,
    rows: LAYOUT_ROW.EQUAL_2,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'harmonic-series', type: 'grid', category: 'math',
    name: 'Harmonic Series',
    cols: LAYOUT_COL.HARMONIC,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'pi-grid', type: 'absolute', category: 'math',
    name: 'Pi Grid',
    positions: [
      { label: 'π', top: '50%', left: '50%' },  // center circle
      { label: '', top: '10%', left: '10%', right: '68%', bottom: '68%' },
      { label: '', bottom: '10%', right: '10%', left: '68%', top: '68%' },
    ],
  },
  {
    id: 'prime-grid', type: 'grid', category: 'math',
    name: 'Prime Grid',
    cols: LAYOUT_COL.PRIME_4,
    rows: LAYOUT_ROW.HEADER_CONTENT_FOOTER,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'sqrt-grid', type: 'grid', category: 'math',
    name: 'Square Root Grid',
    cols: LAYOUT_COL.SQRT,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'modular-grid', type: 'grid', category: 'math',
    name: 'Modular Grid',
    cols: LAYOUT_COL.EQUAL_4,
    rows: LAYOUT_ROW.EQUAL_4,
    gap: LAYOUT_GAP.XS,
  },
]

// ── Complex (2) ───────────────────────────────────────────────────

const complex: LayoutPattern[] = [
  {
    id: 'dashboard', type: 'grid', category: 'complex',
    name: 'Dashboard',
    cols: LAYOUT_COL.SIDEBAR_L,
    rows: LAYOUT_ROW.HEADER_CONTENT,
    gap: LAYOUT_GAP.XS,
  },
  {
    id: 'blog', type: 'grid', category: 'complex',
    name: 'Blog',
    cols: LAYOUT_COL.SIDEBAR_R,
    rows: LAYOUT_ROW.HEADER_CONTENT_FOOTER,
    gap: LAYOUT_GAP.XS,
  },
]

// ── From phi-layout skill (7) ─────────────────────────────────────

const phiLayout: LayoutPattern[] = [
  {
    id: 'golden-timeline', type: 'grid', category: 'advanced',
    name: 'Golden Timeline',
    cols: LAYOUT_COL.TIMELINE,
    rows: LAYOUT_ROW.TIMELINE,
    gap: LAYOUT_GAP.SM,
  },
  {
    id: 'zeitgeist-grid', type: 'grid', category: 'advanced',
    name: 'Zeitgeist Grid (Linear/Vercel)',
    cols: LAYOUT_COL.ZEITGEIST,
    rows: LAYOUT_ROW.ZEITGEIST,
    gap: LAYOUT_GAP.LG,
  },
  {
    id: 'sacred-geometry', type: 'grid', category: 'math',
    name: 'Sacred Geometry',
    cols: LAYOUT_COL.ZEITGEIST,
    rows: LAYOUT_ROW.SACRED,
    gap: LAYOUT_GAP.SM,
  },
  {
    id: 'golden-triangle', type: 'grid', category: 'math',
    name: 'Golden Triangle',
    cols: LAYOUT_COL.GOLDEN_INV,
    rows: LAYOUT_ROW.GOLDEN,
    gap: LAYOUT_GAP.SM,
  },
  {
    id: 'phi-12col', type: 'grid', category: 'basic',
    name: 'Phi Grid (12-column)',
    cols: LAYOUT_COL.PHI_12,
    gap: LAYOUT_GAP.SM,
  },
  {
    id: 'spiral-8col', type: 'grid', category: 'fibonacci',
    name: 'Fibonacci Spiral (8-column)',
    cols: LAYOUT_COL.SPIRAL,
    rows: LAYOUT_ROW.FIB_4_REV,
    gap: LAYOUT_GAP.SM,
  },
  {
    id: 'dashboard-golden', type: 'grid', category: 'complex',
    name: 'Dashboard Golden',
    cols: LAYOUT_COL.DASHBOARD,
    rows: LAYOUT_ROW.HEADER_CONTENT,
    gap: LAYOUT_GAP.SM,
  },
]

// ── Все 54 паттерна ──────────────────────────────────────────────

export const LAYOUT_PATTERNS: LayoutPattern[] = [
  ...basic,
  ...bento,
  ...fibonacci,
  ...advanced,
  ...math,
  ...complex,
  ...phiLayout,
]

// ── Поиск по ID ───────────────────────────────────────────────────

const patternMap = new Map(LAYOUT_PATTERNS.map(p => [p.id, p]))

export function getLayoutPattern(id: string): LayoutPattern | undefined {
  return patternMap.get(id)
}

// ── Поиск по категории ────────────────────────────────────────────

export function getLayoutsByCategory(category: LayoutCategory): LayoutPattern[] {
  return LAYOUT_PATTERNS.filter(p => p.category === category)
}

// ── Все категории ─────────────────────────────────────────────────

export const LAYOUT_CATEGORIES: { id: LayoutCategory; name: string; count: number }[] = [
  { id: 'basic',     name: 'Basic / Classic',  count: basic.length + 1 },      // +phi-12col
  { id: 'bento',     name: 'Bento',            count: bento.length },
  { id: 'fibonacci', name: 'Fibonacci',        count: fibonacci.length + 1 },  // +spiral-8col
  { id: 'advanced',  name: 'Advanced',         count: advanced.length + 2 },   // +timeline, zeitgeist
  { id: 'math',      name: 'Mathematical',     count: math.length + 2 },       // +sacred, triangle
  { id: 'complex',   name: 'Complex',          count: complex.length + 1 },    // +dashboard-golden
]
