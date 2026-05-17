/**
 * ZAI UI Kit Catalog — Layout Data
 * All 54 patterns + 72 layout atoms as structured data for catalog visualization
 */

// ── Brand Palette ──────────────────────────────────────────────
export const BRAND = {
  base: '#E6E6E6',
  v1: '#CCCCCC',
  v2: '#BFBFBF',
  v3: '#878992',
  v4: '#5C6070',
  bg: '#0a0a0f',
  bgCard: '#15151f',
  bgElevated: '#1e1e2a',
  bgSurface: '#2a2c36',
}

// ── Cell colors for grid preview (monochrome gradient) ────────
export const CELL_COLORS = [
  '#E6E6E6', '#CCCCCC', '#BFBFBF', '#878992', '#5C6070',
  '#3D4050', '#2A2C36', '#1E1E2A',
]

// ── Categories ─────────────────────────────────────────────────
export type LayoutCategory = 'basic' | 'bento' | 'fibonacci' | 'advanced' | 'math' | 'complex'

export interface CategoryMeta {
  id: LayoutCategory
  name: string
  emoji: string
}

export const CATEGORIES: CategoryMeta[] = [
  { id: 'basic', name: 'Basic / Classic', emoji: '▪' },
  { id: 'bento', name: 'Bento', emoji: '▦' },
  { id: 'fibonacci', name: 'Fibonacci', emoji: '🐙' },
  { id: 'advanced', name: 'Advanced', emoji: '◈' },
  { id: 'math', name: 'Mathematical', emoji: 'φ' },
  { id: 'complex', name: 'Complex', emoji: '⬡' },
]

// ── Token Data ─────────────────────────────────────────────────
export interface TokenData {
  id: string
  cssVar: string
  cssValue: string
  group: 'COL' | 'ROW' | 'GAP' | 'AUTO' | 'DIM' | 'AREA'
  label: string
}

export const TOKENS: TokenData[] = [
  // COL tokens (31)
  { id: 'EQUAL_2', cssVar: '--zai-cols-equal-2', cssValue: '1fr 1fr', group: 'COL', label: '2 Equal' },
  { id: 'EQUAL_3', cssVar: '--zai-cols-equal-3', cssValue: 'repeat(3,1fr)', group: 'COL', label: '3 Equal' },
  { id: 'EQUAL_4', cssVar: '--zai-cols-equal-4', cssValue: 'repeat(4,1fr)', group: 'COL', label: '4 Equal' },
  { id: 'EQUAL_5', cssVar: '--zai-cols-equal-5', cssValue: 'repeat(5,1fr)', group: 'COL', label: '5 Equal' },
  { id: 'EQUAL_6', cssVar: '--zai-cols-equal-6', cssValue: 'repeat(6,1fr)', group: 'COL', label: '6 Equal' },
  { id: 'EQUAL_8', cssVar: '--zai-cols-equal-8', cssValue: 'repeat(8,1fr)', group: 'COL', label: '8 Equal' },
  { id: 'FIB_4', cssVar: '--zai-cols-fib-4', cssValue: '1fr 2fr 3fr 5fr', group: 'COL', label: 'Fib 4' },
  { id: 'FIB_5', cssVar: '--zai-cols-fib-5', cssValue: '1fr 1fr 2fr 3fr 5fr', group: 'COL', label: 'Fib 5' },
  { id: 'FIB_3_REV', cssVar: '--zai-cols-fib-3rev', cssValue: '8fr 5fr 3fr', group: 'COL', label: 'Fib 3 Rev' },
  { id: 'FIB_4_REV', cssVar: '--zai-cols-fib-4rev', cssValue: '5fr 3fr 2fr 1fr', group: 'COL', label: 'Fib 4 Rev' },
  { id: 'GOLDEN', cssVar: '--zai-cols-golden', cssValue: '1fr 1.618fr', group: 'COL', label: 'Golden' },
  { id: 'PRIME_4', cssVar: '--zai-cols-prime-4', cssValue: '2fr 3fr 5fr 7fr', group: 'COL', label: 'Prime 4' },
  { id: 'SQRT', cssVar: '--zai-cols-sqrt', cssValue: '1fr 1.414fr 1.732fr 2fr', group: 'COL', label: 'Sqrt' },
  { id: 'ROOT_2', cssVar: '--zai-cols-root2', cssValue: '1.414fr 1fr', group: 'COL', label: 'Root 2' },
  { id: 'HARMONIC', cssVar: '--zai-cols-harmonic', cssValue: '1fr 0.5fr 0.333fr 0.25fr', group: 'COL', label: 'Harmonic' },
  { id: 'ASYM_2_1_1', cssVar: '--zai-cols-2-1-1', cssValue: '2fr 1fr 1fr', group: 'COL', label: '2:1:1' },
  { id: 'HERO', cssVar: '--zai-cols-hero', cssValue: '2fr 1fr', group: 'COL', label: 'Hero' },
  { id: 'SIDEBAR_L', cssVar: '--zai-cols-sidebar-l', cssValue: '50px 1fr', group: 'COL', label: 'Sidebar L' },
  { id: 'SIDEBAR_R', cssVar: '--zai-cols-sidebar-r', cssValue: '1fr 50px', group: 'COL', label: 'Sidebar R' },
  { id: 'SIDEBAR_XL', cssVar: '--zai-cols-sidebar-xl', cssValue: '70px 1fr', group: 'COL', label: 'Sidebar XL' },
  { id: 'HOLY_GRAIL', cssVar: '--zai-cols-holy-grail', cssValue: '50px 1fr 50px', group: 'COL', label: 'Holy Grail' },
  { id: 'HOLY_GRAIL_FIB', cssVar: '--zai-cols-holy-grail-fib', cssValue: '3fr 13fr 5fr', group: 'COL', label: 'Holy Grail Fib' },
  { id: 'AUTO_FIT', cssVar: '--zai-cols-auto-fit', cssValue: 'auto-fit', group: 'COL', label: 'Auto Fit' },
  { id: 'SPIRAL', cssVar: '--zai-cols-spiral', cssValue: '34fr 21fr 13fr 8fr 5fr 3fr 2fr 1fr', group: 'COL', label: 'Spiral' },
  { id: 'PHI_12', cssVar: '--zai-cols-phi-12', cssValue: 'repeat(12,1fr)', group: 'COL', label: 'Phi 12' },
  { id: 'TIMELINE', cssVar: '--zai-cols-timeline', cssValue: '3.82fr 1fr 5.18fr', group: 'COL', label: 'Timeline' },
  { id: 'ZEITGEIST', cssVar: '--zai-cols-zeitgeist', cssValue: '1fr 1.618fr 1fr', group: 'COL', label: 'Zeitgeist' },
  { id: 'DYN_SYM', cssVar: '--zai-cols-dyn-sym', cssValue: '1fr 2.236fr', group: 'COL', label: 'Dyn Sym' },
  { id: 'GOLDEN_INV', cssVar: '--zai-cols-golden-inv', cssValue: '1.618fr 1fr', group: 'COL', label: 'Golden Inv' },
  { id: 'DASHBOARD', cssVar: '--zai-cols-dashboard', cssValue: '3fr 5fr 2fr', group: 'COL', label: 'Dashboard' },
  { id: 'MAGAZINE', cssVar: '--zai-cols-magazine', cssValue: '5fr 3fr 2fr', group: 'COL', label: 'Magazine' },

  // ROW tokens (20)
  { id: 'HEADER_CONTENT_FOOTER', cssVar: '--zai-rows-header-content-footer', cssValue: '35px 1fr 25px', group: 'ROW', label: 'H/C/F' },
  { id: 'HEADER_CONTENT', cssVar: '--zai-rows-header-content', cssValue: '35px 1fr', group: 'ROW', label: 'H/C' },
  { id: 'HERO_CONTENT', cssVar: '--zai-rows-hero-content', cssValue: '2fr 1fr', group: 'ROW', label: 'Hero/Content' },
  { id: 'HERO_GRID', cssVar: '--zai-rows-hero-grid', cssValue: '80px 1fr', group: 'ROW', label: 'Hero Grid' },
  { id: 'ROW_EQUAL_2', cssVar: '--zai-rows-equal-2', cssValue: 'repeat(2,1fr)', group: 'ROW', label: '2 Equal' },
  { id: 'ROW_EQUAL_3', cssVar: '--zai-rows-equal-3', cssValue: 'repeat(3,1fr)', group: 'ROW', label: '3 Equal' },
  { id: 'ROW_EQUAL_4', cssVar: '--zai-rows-equal-4', cssValue: 'repeat(4,1fr)', group: 'ROW', label: '4 Equal' },
  { id: 'ROW_EQUAL_5', cssVar: '--zai-rows-equal-5', cssValue: 'repeat(5,1fr)', group: 'ROW', label: '5 Equal' },
  { id: 'ROW_FIB_3', cssVar: '--zai-rows-fib-3', cssValue: '8fr 5fr 3fr', group: 'ROW', label: 'Fib 3' },
  { id: 'ROW_FIB_4', cssVar: '--zai-rows-fib-4', cssValue: '1fr 2fr 3fr 5fr', group: 'ROW', label: 'Fib 4' },
  { id: 'ROW_FIB_4REV', cssVar: '--zai-rows-fib-4rev', cssValue: '5fr 3fr 2fr 1fr', group: 'ROW', label: 'Fib 4 Rev' },
  { id: 'ROW_GOLDEN', cssVar: '--zai-rows-golden', cssValue: '1fr 1.618fr', group: 'ROW', label: 'Golden' },
  { id: 'ROW_GOLDEN_INV', cssVar: '--zai-rows-golden-inv', cssValue: '1.618fr 1fr', group: 'ROW', label: 'Golden Inv' },
  { id: 'ROW_MAGAZINE', cssVar: '--zai-rows-magazine', cssValue: '35px 1fr 1fr 25px', group: 'ROW', label: 'Magazine' },
  { id: 'ROW_SPIRAL', cssVar: '--zai-rows-spiral', cssValue: '34fr 21fr 13fr', group: 'ROW', label: 'Spiral' },
  { id: 'ROW_DASHBOARD', cssVar: '--zai-rows-dashboard', cssValue: 'auto 1fr 1.618fr', group: 'ROW', label: 'Dashboard' },
  { id: 'ROW_DYN_SYM', cssVar: '--zai-rows-dyn-sym', cssValue: '1fr 2.236fr', group: 'ROW', label: 'Dyn Sym' },
  { id: 'ROW_TIMELINE', cssVar: '--zai-rows-timeline', cssValue: '3.82fr 1fr 5.18fr', group: 'ROW', label: 'Timeline' },
  { id: 'ROW_ZEITGEIST', cssVar: '--zai-rows-zeitgeist', cssValue: '1fr 1.618fr 1fr', group: 'ROW', label: 'Zeitgeist' },
  { id: 'ROW_SACRED', cssVar: '--zai-rows-sacred', cssValue: '1fr 1.618fr 1fr', group: 'ROW', label: 'Sacred' },

  // GAP tokens (8)
  { id: 'GAP_NONE', cssVar: '--zai-gap-none', cssValue: '0', group: 'GAP', label: 'None' },
  { id: 'GAP_XS', cssVar: '--zai-gap-xs', cssValue: '4px', group: 'GAP', label: 'XS (4px)' },
  { id: 'GAP_SM', cssVar: '--zai-gap-sm', cssValue: '8px', group: 'GAP', label: 'SM (8px)' },
  { id: 'GAP_MD', cssVar: '--zai-gap-md', cssValue: '12px', group: 'GAP', label: 'MD (12px)' },
  { id: 'GAP_LG', cssVar: '--zai-gap-lg', cssValue: '20px', group: 'GAP', label: 'LG (20px)' },
  { id: 'GAP_XL', cssVar: '--zai-gap-xl', cssValue: '40px', group: 'GAP', label: 'XL (40px)' },
  { id: 'GAP_2XL', cssVar: '--zai-gap-2xl', cssValue: '64px', group: 'GAP', label: '2XL (64px)' },
  { id: 'GAP_3XL', cssVar: '--zai-gap-3xl', cssValue: '104px', group: 'GAP', label: '3XL (104px)' },

  // AUTO tokens (6)
  { id: 'AUTO_ROWS_SM', cssVar: '--zai-auto-rows-sm', cssValue: '20px', group: 'AUTO', label: 'Rows SM' },
  { id: 'AUTO_ROWS_MD', cssVar: '--zai-auto-rows-md', cssValue: '32px', group: 'AUTO', label: 'Rows MD' },
  { id: 'AUTO_ROWS_EQUAL', cssVar: '--zai-auto-rows-equal', cssValue: '1fr', group: 'AUTO', label: 'Rows Equal' },
  { id: 'AUTO_FLOW_DENSE', cssVar: '--zai-auto-flow-dense', cssValue: 'dense', group: 'AUTO', label: 'Flow Dense' },
  { id: 'AUTO_FLOW_COLUMN', cssVar: '--zai-auto-flow-column', cssValue: 'column', group: 'AUTO', label: 'Flow Column' },
  { id: 'AUTO_FLOW_ROW', cssVar: '--zai-auto-flow-row', cssValue: 'row', group: 'AUTO', label: 'Flow Row' },

  // DIM tokens (6)
  { id: 'SIDEBAR_W', cssVar: '--zai-sidebar-w', cssValue: '50px', group: 'DIM', label: 'Sidebar W' },
  { id: 'SIDEBAR_XL_DIM', cssVar: '--zai-sidebar-xl', cssValue: '70px', group: 'DIM', label: 'Sidebar XL' },
  { id: 'HEADER_H', cssVar: '--zai-header-h', cssValue: '35px', group: 'DIM', label: 'Header H' },
  { id: 'FOOTER_H', cssVar: '--zai-footer-h', cssValue: '25px', group: 'DIM', label: 'Footer H' },
  { id: 'HERO_H', cssVar: '--zai-hero-h', cssValue: '80px', group: 'DIM', label: 'Hero H' },
  { id: 'CARD_MIN', cssVar: '--zai-card-min', cssValue: '50px', group: 'DIM', label: 'Card Min' },

  // AREA tokens (1)
  { id: 'HOLY_GRAIL_AREA', cssVar: '--zai-area-holy-grail', cssValue: '"header header header" "nav main aside" "footer footer footer"', group: 'AREA', label: 'Holy Grail' },
]

// ── Pattern Data ───────────────────────────────────────────────
export interface PatternData {
  id: string
  name: string
  category: LayoutCategory
  type: 'grid' | 'absolute' | 'polar' | 'nested' | 'flex'
  cols?: string
  rows?: string
  gap?: string
  areas?: string
  autoRows?: string
  autoFlow?: string
  positions?: { label: string; top?: string; left?: string; right?: string; bottom?: string; width?: string; height?: string; angle?: number; colSpan?: number }[]
  tokenRefs: string[]
}

export const PATTERNS: PatternData[] = [
  // ── Basic / Classic (11) ──────────────────────────────────────
  { id: 'sidebar-left', name: 'Sidebar Left', category: 'basic', type: 'grid', cols: '70px 1fr', rows: '35px 1fr 25px', gap: '4px', tokenRefs: ['SIDEBAR_XL', 'HEADER_CONTENT_FOOTER', 'GAP_XS'] },
  { id: 'sidebar-right', name: 'Sidebar Right', category: 'basic', type: 'grid', cols: '1fr 50px', rows: '35px 1fr 25px', gap: '4px', tokenRefs: ['SIDEBAR_R', 'HEADER_CONTENT_FOOTER', 'GAP_XS'] },
  { id: 'top-nav', name: 'Top Navigation', category: 'basic', type: 'grid', rows: '35px 1fr 25px', gap: '4px', tokenRefs: ['HEADER_CONTENT_FOOTER', 'GAP_XS'] },
  { id: 'two-columns', name: 'Two Columns', category: 'basic', type: 'grid', cols: '1fr 1fr', rows: '35px 1fr 25px', gap: '4px', tokenRefs: ['EQUAL_2', 'HEADER_CONTENT_FOOTER', 'GAP_XS'] },
  { id: 'three-columns', name: 'Three Columns', category: 'basic', type: 'grid', cols: 'repeat(3,1fr)', rows: '35px 1fr 25px', gap: '4px', tokenRefs: ['EQUAL_3', 'HEADER_CONTENT_FOOTER', 'GAP_XS'] },
  { id: 'holy-grail', name: 'Holy Grail', category: 'basic', type: 'grid', cols: '50px 1fr 50px', rows: '35px 1fr 25px', areas: '"header header header" "nav main aside" "footer footer footer"', gap: '4px', tokenRefs: ['HOLY_GRAIL', 'HEADER_CONTENT_FOOTER', 'HOLY_GRAIL_AREA', 'GAP_XS'] },
  { id: 'split-screen', name: 'Split Screen', category: 'basic', type: 'grid', cols: '1fr 1fr', gap: '4px', tokenRefs: ['EQUAL_2', 'GAP_XS'] },
  { id: 'cards-grid', name: 'Cards Grid', category: 'basic', type: 'grid', rows: '35px 1fr 25px', gap: '4px', tokenRefs: ['HEADER_CONTENT_FOOTER', 'GAP_XS'] },
  { id: 'magazine', name: 'Magazine', category: 'basic', type: 'grid', cols: 'repeat(3,1fr)', rows: '35px 1fr 1fr 25px', gap: '4px', tokenRefs: ['EQUAL_3', 'ROW_MAGAZINE', 'GAP_XS'] },
  { id: 'fullscreen-hero', name: 'Fullscreen Hero', category: 'basic', type: 'grid', rows: '2fr 1fr', gap: '0', tokenRefs: ['HERO_CONTENT', 'GAP_NONE'] },
  { id: 'phi-12col', name: 'Phi Grid (12-col)', category: 'basic', type: 'grid', cols: 'repeat(12,1fr)', gap: '8px', tokenRefs: ['PHI_12', 'GAP_SM'] },

  // ── Bento (4) ────────────────────────────────────────────────
  { id: 'bento-grid', name: 'Bento Grid', category: 'bento', type: 'grid', cols: 'repeat(4,1fr)', autoRows: '1fr', autoFlow: 'dense', gap: '4px', tokenRefs: ['EQUAL_4', 'AUTO_ROWS_EQUAL', 'AUTO_FLOW_DENSE', 'GAP_XS'] },
  { id: 'bento-sidebar', name: 'Bento + Sidebar', category: 'bento', type: 'grid', cols: '50px 1fr', autoRows: '1fr', gap: '4px', tokenRefs: ['SIDEBAR_L', 'AUTO_ROWS_EQUAL', 'GAP_XS'] },
  { id: 'bento-hero', name: 'Bento Hero', category: 'bento', type: 'grid', rows: '80px 1fr', gap: '4px', tokenRefs: ['HERO_GRID', 'GAP_XS'] },
  { id: 'bento-masonry', name: 'Bento Masonry', category: 'bento', type: 'grid', cols: 'repeat(4,1fr)', autoRows: '20px', gap: '4px', tokenRefs: ['EQUAL_4', 'AUTO_ROWS_SM', 'GAP_XS'] },

  // ── Fibonacci (13) ────────────────────────────────────────────
  { id: 'fibonacci-grid', name: 'Fibonacci Grid', category: 'fibonacci', type: 'grid', cols: '1fr 1fr 2fr 3fr 5fr', rows: '1fr 2fr 3fr 5fr', gap: '4px', tokenRefs: ['FIB_5', 'ROW_FIB_4', 'GAP_XS'] },
  { id: 'fibonacci-spiral', name: 'Fibonacci Spiral', category: 'fibonacci', type: 'grid', cols: '5fr 3fr 2fr 1fr', rows: '5fr 3fr 2fr 1fr', gap: '4px', tokenRefs: ['FIB_4_REV', 'ROW_FIB_4REV', 'GAP_XS'] },
  { id: 'fibonacci-columns', name: 'Fibonacci Columns', category: 'fibonacci', type: 'grid', cols: '1fr 1fr 2fr 3fr 5fr', rows: '35px 1fr 25px', gap: '4px', tokenRefs: ['FIB_5', 'HEADER_CONTENT_FOOTER', 'GAP_XS'] },
  { id: 'fibonacci-tiles', name: 'Fibonacci Tiles', category: 'fibonacci', type: 'grid', cols: 'repeat(8,1fr)', rows: 'repeat(5,1fr)', autoFlow: 'dense', gap: '4px', tokenRefs: ['EQUAL_8', 'ROW_EQUAL_5', 'AUTO_FLOW_DENSE', 'GAP_XS'] },
  { id: 'fibonacci-responsive', name: 'Fibonacci Responsive', category: 'fibonacci', type: 'grid', cols: 'repeat(3,1fr)', gap: '20px', tokenRefs: ['EQUAL_3', 'GAP_LG'] },
  { id: 'fibonacci-masonry', name: 'Fibonacci Masonry', category: 'fibonacci', type: 'grid', cols: 'repeat(3,1fr)', autoRows: '20px', gap: '4px', tokenRefs: ['EQUAL_3', 'AUTO_ROWS_SM', 'GAP_XS'] },
  { id: 'fibonacci-bento', name: 'Fibonacci Bento', category: 'fibonacci', type: 'grid', cols: '8fr 5fr 3fr', rows: '5fr 3fr 2fr 1fr', autoFlow: 'dense', gap: '4px', tokenRefs: ['FIB_3_REV', 'ROW_FIB_4REV', 'AUTO_FLOW_DENSE', 'GAP_XS'] },
  { id: 'fibonacci-diagonal', name: 'Fibonacci Diagonal', category: 'fibonacci', type: 'absolute', positions: [{ label: '1', width: '60%', height: '60%', top: '5%', left: '5%' }, { label: '1', width: '50%', height: '50%', top: '15%', left: '25%' }, { label: '2', width: '45%', height: '45%', top: '25%', left: '40%' }, { label: '3', width: '40%', height: '40%', top: '35%', left: '50%' }, { label: '5', width: '35%', height: '35%', top: '45%', left: '58%' }], tokenRefs: [] },
  { id: 'fibonacci-steps', name: 'Fibonacci Steps', category: 'fibonacci', type: 'grid', cols: '1fr 2fr 3fr 5fr', rows: '1fr 2fr 3fr 5fr', gap: '4px', tokenRefs: ['FIB_4', 'ROW_FIB_4', 'GAP_XS'] },
  { id: 'fibonacci-radiant', name: 'Fibonacci Radiant', category: 'fibonacci', type: 'polar', positions: [{ label: 'φ', top: '50%', left: '50%' }, { label: '8', angle: 0 }, { label: '5', angle: 45 }, { label: '3', angle: 90 }, { label: '2', angle: 135 }, { label: '1', angle: 180 }, { label: '1', angle: 225 }, { label: '3', angle: 270 }, { label: '5', angle: 315 }], tokenRefs: [] },
  { id: 'fibonacci-cascade', name: 'Fibonacci Cascade', category: 'fibonacci', type: 'grid', cols: 'repeat(5,1fr)', autoRows: '1fr', autoFlow: 'column', gap: '4px', tokenRefs: ['EQUAL_5', 'AUTO_ROWS_EQUAL', 'AUTO_FLOW_COLUMN', 'GAP_XS'] },
  { id: 'fibonacci-nested', name: 'Fibonacci Nested', category: 'fibonacci', type: 'nested', positions: [{ label: '8', top: '0', left: '0', right: '0', bottom: '0' }, { label: '5', top: '10%', left: '55%', right: '10%', bottom: '20%' }, { label: '3', top: '55%', left: '10%', width: '35%', height: '35%' }, { label: '2', top: '65%', left: '50%', width: '20%', height: '20%' }, { label: '1', top: '75%', left: '60%', width: '10%', height: '10%' }], tokenRefs: [] },
  { id: 'spiral-8col', name: 'Spiral (8-col)', category: 'fibonacci', type: 'grid', cols: '34fr 21fr 13fr 8fr 5fr 3fr 2fr 1fr', rows: '5fr 3fr 2fr 1fr', gap: '8px', tokenRefs: ['SPIRAL', 'ROW_FIB_4REV', 'GAP_SM'] },

  // ── Advanced (9) ─────────────────────────────────────────────
  { id: 'masonry-grid', name: 'Masonry Grid', category: 'advanced', type: 'grid', cols: 'repeat(3,1fr)', autoRows: '20px', gap: '4px', tokenRefs: ['EQUAL_3', 'AUTO_ROWS_SM', 'GAP_XS'] },
  { id: 'asymmetric-grid', name: 'Asymmetric Grid', category: 'advanced', type: 'grid', cols: '2fr 1fr 1fr', rows: 'repeat(3,1fr)', gap: '4px', tokenRefs: ['ASYM_2_1_1', 'ROW_EQUAL_3', 'GAP_XS'] },
  { id: 'span-grid', name: 'Span Grid', category: 'advanced', type: 'grid', cols: 'repeat(4,1fr)', rows: 'repeat(3,1fr)', gap: '4px', tokenRefs: ['EQUAL_4', 'ROW_EQUAL_3', 'GAP_XS'] },
  { id: 'overlap-grid', name: 'Overlap Grid', category: 'advanced', type: 'grid', cols: '1fr 1fr', rows: 'repeat(2,1fr)', gap: '4px', tokenRefs: ['EQUAL_2', 'ROW_EQUAL_2', 'GAP_XS'] },
  { id: 'honeycomb-grid', name: 'Honeycomb Grid', category: 'advanced', type: 'grid', cols: 'repeat(3,1fr)', gap: '4px', tokenRefs: ['EQUAL_3', 'GAP_XS'] },
  { id: 'mosaic-grid', name: 'Mosaic Grid', category: 'advanced', type: 'grid', cols: 'repeat(4,1fr)', rows: 'repeat(4,1fr)', gap: '4px', tokenRefs: ['EQUAL_4', 'ROW_EQUAL_4', 'GAP_XS'] },
  { id: 'responsive-grid', name: 'Responsive Grid', category: 'advanced', type: 'grid', cols: 'repeat(auto-fit,minmax(50px,1fr))', autoRows: '1fr', gap: '4px', tokenRefs: ['AUTO_FIT', 'AUTO_ROWS_EQUAL', 'GAP_XS'] },
  { id: 'golden-timeline', name: 'Golden Timeline', category: 'advanced', type: 'grid', cols: '3.82fr 1fr 5.18fr', rows: '3.82fr 1fr 5.18fr', gap: '8px', tokenRefs: ['TIMELINE', 'ROW_TIMELINE', 'GAP_SM'] },
  { id: 'zeitgeist-grid', name: 'Zeitgeist (Linear)', category: 'advanced', type: 'grid', cols: '1fr 1.618fr 1fr', rows: '1fr 1.618fr 1fr', gap: '20px', tokenRefs: ['ZEITGEIST', 'ROW_ZEITGEIST', 'GAP_LG'] },

  // ── Mathematical (13) ────────────────────────────────────────
  { id: 'golden-ratio-grid', name: 'Golden Ratio Grid', category: 'math', type: 'grid', cols: '1fr 1.618fr', rows: '1.618fr 1fr', gap: '4px', tokenRefs: ['GOLDEN', 'ROW_GOLDEN_INV', 'GAP_XS'] },
  { id: 'spiral-grid', name: 'Spiral Grid', category: 'math', type: 'absolute', positions: [{ label: '1', top: '5%', left: '5%', right: '30%', bottom: '30%' }, { label: '2', top: '5%', left: '70%', right: '5%', bottom: '55%' }, { label: '3', top: '45%', left: '45%', right: '5%', bottom: '30%' }, { label: '5', top: '70%', left: '5%', right: '55%', bottom: '5%' }], tokenRefs: [] },
  { id: 'phi-grid', name: 'Phi Grid', category: 'math', type: 'grid', cols: '1fr 1.618fr', rows: '1fr 1.618fr', gap: '4px', tokenRefs: ['GOLDEN', 'ROW_GOLDEN', 'GAP_XS'] },
  { id: 'rule-of-thirds', name: 'Rule of Thirds', category: 'math', type: 'grid', cols: 'repeat(3,1fr)', rows: 'repeat(3,1fr)', gap: '4px', tokenRefs: ['EQUAL_3', 'ROW_EQUAL_3', 'GAP_XS'] },
  { id: 'root-rectangle', name: 'Root Rectangle', category: 'math', type: 'grid', cols: '1.414fr 1fr', gap: '4px', tokenRefs: ['ROOT_2', 'GAP_XS'] },
  { id: 'dynamic-symmetry', name: 'Dynamic Symmetry', category: 'math', type: 'grid', cols: '1fr 1fr', rows: 'repeat(2,1fr)', gap: '4px', tokenRefs: ['EQUAL_2', 'ROW_EQUAL_2', 'GAP_XS'] },
  { id: 'harmonic-series', name: 'Harmonic Series', category: 'math', type: 'grid', cols: '1fr 0.5fr 0.333fr 0.25fr', gap: '4px', tokenRefs: ['HARMONIC', 'GAP_XS'] },
  { id: 'pi-grid', name: 'Pi Grid', category: 'math', type: 'absolute', positions: [{ label: 'π', top: '50%', left: '50%' }, { label: '', top: '10%', left: '10%', right: '68%', bottom: '68%' }, { label: '', bottom: '10%', right: '10%', left: '68%', top: '68%' }], tokenRefs: [] },
  { id: 'prime-grid', name: 'Prime Grid', category: 'math', type: 'grid', cols: '2fr 3fr 5fr 7fr', rows: '35px 1fr 25px', gap: '4px', tokenRefs: ['PRIME_4', 'HEADER_CONTENT_FOOTER', 'GAP_XS'] },
  { id: 'sqrt-grid', name: 'Square Root Grid', category: 'math', type: 'grid', cols: '1fr 1.414fr 1.732fr 2fr', gap: '4px', tokenRefs: ['SQRT', 'GAP_XS'] },
  { id: 'modular-grid', name: 'Modular Grid', category: 'math', type: 'grid', cols: 'repeat(4,1fr)', rows: 'repeat(4,1fr)', gap: '4px', tokenRefs: ['EQUAL_4', 'ROW_EQUAL_4', 'GAP_XS'] },
  { id: 'sacred-geometry', name: 'Sacred Geometry', category: 'math', type: 'grid', cols: '1fr 1.618fr 1fr', rows: '1fr 1.618fr 1fr', gap: '8px', tokenRefs: ['ZEITGEIST', 'ROW_SACRED', 'GAP_SM'] },
  { id: 'golden-triangle', name: 'Golden Triangle', category: 'math', type: 'grid', cols: '1.618fr 1fr', rows: '1fr 1.618fr', gap: '8px', tokenRefs: ['GOLDEN_INV', 'ROW_GOLDEN', 'GAP_SM'] },

  // ── Complex (3) ──────────────────────────────────────────────
  { id: 'dashboard', name: 'Dashboard', category: 'complex', type: 'grid', cols: '50px 1fr', rows: '35px 1fr', gap: '4px', tokenRefs: ['SIDEBAR_L', 'HEADER_CONTENT', 'GAP_XS'] },
  { id: 'blog', name: 'Blog', category: 'complex', type: 'grid', cols: '1fr 50px', rows: '35px 1fr 25px', gap: '4px', tokenRefs: ['SIDEBAR_R', 'HEADER_CONTENT_FOOTER', 'GAP_XS'] },
  { id: 'dashboard-golden', name: 'Dashboard Golden', category: 'complex', type: 'grid', cols: '3fr 5fr 2fr', rows: '35px 1fr', gap: '8px', tokenRefs: ['DASHBOARD', 'HEADER_CONTENT', 'GAP_SM'] },
]

// ── Registry entry type (shadcn/ui style) ─────────────────────
export interface RegistryEntry {
  name: string
  type: 'registry:layout'
  dependencies: string[]
  cssVars: { light: Record<string, string>; dark: Record<string, string> }
  files: { name: string; content: string }[]
}

export function patternToRegistry(p: PatternData): RegistryEntry {
  const colToken = TOKENS.find(t => p.tokenRefs.includes(t.id) && t.group === 'COL')
  const rowToken = TOKENS.find(t => p.tokenRefs.includes(t.id) && t.group === 'ROW')
  const gapToken = TOKENS.find(t => p.tokenRefs.includes(t.id) && t.group === 'GAP')

  const codeLines = [`// ${p.name} — Layout Pattern`]
  if (p.cols) codeLines.push(`gridTemplateColumns: var(${colToken?.cssVar ?? '--zai-cols-auto'}),`)
  if (p.rows) codeLines.push(`gridTemplateRows: var(${rowToken?.cssVar ?? '--zai-rows-auto'}),`)
  if (p.gap) codeLines.push(`gap: var(${gapToken?.cssVar ?? '--zai-gap-xs'}),`)

  return {
    name: p.id,
    type: 'registry:layout',
    dependencies: p.tokenRefs.map(t => `var(${TOKENS.find(tk => tk.id === t)?.cssVar ?? t})`),
    cssVars: { light: {}, dark: {} },
    files: [{ name: `${p.id}.tsx`, content: codeLines.join('\n') }],
  }
}
