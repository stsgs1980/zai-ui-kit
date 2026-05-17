/**
 * ZAI UI Kit — Layout Token Bank
 * Атомарные токены для CSS Grid макетов
 *
 * Извлечены из 47 макетов layout-advisor:
 *   24 col-template, 16 row-template, 4 gap, 6 auto-props
 *
 * Принципы:
 *   1. Структура отделена от визуала (токены не знают цветов)
 *   2. Все значения — через CSS custom properties (скины дают значения)
 *   3. Параметрические размеры (sidebar-w, header-h) — настраиваемые на проекте
 *   4. Совместимость с phi-layout skill (одна шкала)
 *
 * Usage:
 *   import { LAYOUT_TOKEN } from '@zai/ui-kit/tokens'
 *   style={{ gridTemplateColumns: `var(${LAYOUT_TOKEN.COLS_GOLDEN})` }}
 */

// ── Column Template Tokens ────────────────────────────────────────
// Каждый токен — это значение для gridTemplateColumns

export const LAYOUT_COL = {
  // Equal columns (самый частый: 15 из 37 макетов)
  EQUAL_2:     '--zai-cols-equal-2',      // 1fr 1fr
  EQUAL_3:     '--zai-cols-equal-3',      // repeat(3, 1fr)
  EQUAL_4:     '--zai-cols-equal-4',      // repeat(4, 1fr)
  EQUAL_5:     '--zai-cols-equal-5',      // repeat(5, 1fr)
  EQUAL_6:     '--zai-cols-equal-6',      // repeat(6, 1fr) — Bento 6-col, Masonry Bento
  EQUAL_8:     '--zai-cols-equal-8',      // repeat(8, 1fr)

  // Fibonacci sequences (4 макета)
  FIB_4:       '--zai-cols-fib-4',        // 1fr 2fr 3fr 5fr
  FIB_5:       '--zai-cols-fib-5',        // 1fr 1fr 2fr 3fr 5fr
  FIB_3_REV:   '--zai-cols-fib-3rev',     // 8fr 5fr 3fr
  FIB_4_REV:   '--zai-cols-fib-4rev',     // 5fr 3fr 2fr 1fr

  // Golden ratio (canonical форма из phi-layout)
  GOLDEN:      '--zai-cols-golden',       // 1fr 1.618fr

  // Mathematical series
  PRIME_4:     '--zai-cols-prime-4',      // 2fr 3fr 5fr 7fr
  SQRT:        '--zai-cols-sqrt',         // 1fr 1.414fr 1.732fr 2fr
  ROOT_2:      '--zai-cols-root2',        // 1.414fr 1fr
  HARMONIC:    '--zai-cols-harmonic',     // 1fr 0.5fr 0.333fr 0.25fr

  // Asymmetric
  ASYM_2_1_1:  '--zai-cols-2-1-1',       // 2fr 1fr 1fr

  // Hero (Fullscreen Hero)
  HERO:        '--zai-cols-hero',        // 2fr 1fr

  // Sidebar layouts (6 макетов, параметрические)
  SIDEBAR_L:   '--zai-cols-sidebar-l',    // var(--zai-sidebar-w) 1fr
  SIDEBAR_R:   '--zai-cols-sidebar-r',    // 1fr var(--zai-sidebar-w)
  SIDEBAR_L_XL:'--zai-cols-sidebar-xl',   // var(--zai-sidebar-xl) 1fr
  HOLY_GRAIL:  '--zai-cols-holy-grail',   // var(--zai-sidebar-w) 1fr var(--zai-sidebar-w)
  HOLY_GRAIL_FIB: '--zai-cols-holy-grail-fib', // 3fr 13fr 5fr — Fib-based Holy Grail

  // Responsive
  AUTO_FIT:    '--zai-cols-auto-fit',     // repeat(auto-fit, minmax(var(--zai-card-min), 1fr))

  // From phi-layout skill (уникальные)
  SPIRAL:      '--zai-cols-spiral',      // 34fr 21fr 13fr 8fr 5fr 3fr 2fr 1fr
  PHI_12:      '--zai-cols-phi-12',      // repeat(12, 1fr)
  TIMELINE:    '--zai-cols-timeline',    // 3.82fr 1fr 5.18fr
  ZEITGEIST:   '--zai-cols-zeitgeist',   // 1fr 1.618fr 1fr
  DYN_SYM:     '--zai-cols-dyn-sym',     // 1fr 2.236fr
  GOLDEN_INV:  '--zai-cols-golden-inv',  // 1.618fr 1fr
  DASHBOARD:   '--zai-cols-dashboard',   // 3fr 5fr 2fr
  MAGAZINE:    '--zai-cols-magazine',    // 5fr 3fr 2fr
} as const

// ── Row Template Tokens ───────────────────────────────────────────

export const LAYOUT_ROW = {
  // Король: header → content → footer (10 из 28 макетов!)
  HEADER_CONTENT_FOOTER: '--zai-rows-header-content-footer',  // var(--zai-header-h) 1fr var(--zai-footer-h)
  HEADER_CONTENT:        '--zai-rows-header-content',         // var(--zai-header-h) 1fr

  // Hero patterns
  HERO_CONTENT:   '--zai-rows-hero-content',    // 2fr 1fr
  HERO_GRID:      '--zai-rows-hero-grid',       // var(--zai-hero-h) 1fr

  // Equal rows
  EQUAL_2:        '--zai-rows-equal-2',         // repeat(2, 1fr)
  EQUAL_3:        '--zai-rows-equal-3',         // repeat(3, 1fr)
  EQUAL_4:        '--zai-rows-equal-4',         // repeat(4, 1fr)
  EQUAL_5:        '--zai-rows-equal-5',         // repeat(5, 1fr)

  // Fibonacci rows
  FIB_3:          '--zai-rows-fib-3',           // 8fr 5fr 3fr — Magazine rows
  FIB_4:          '--zai-rows-fib-4',           // 1fr 2fr 3fr 5fr
  FIB_4_REV:      '--zai-rows-fib-4rev',       // 5fr 3fr 2fr 1fr

  // Golden ratio rows (canonical форма из phi-layout)
  GOLDEN:         '--zai-rows-golden',          // 1fr 1.618fr
  GOLDEN_INV:     '--zai-rows-golden-inv',      // 1.618fr 1fr

  // Magazine
  MAGAZINE:       '--zai-rows-magazine',        // var(--zai-header-h) repeat(2, 1fr) var(--zai-footer-h)

  // Spiral rows
  SPIRAL:         '--zai-rows-spiral',          // 34fr 21fr 13fr

  // Dashboard rows
  DASHBOARD:      '--zai-rows-dashboard',       // auto 1fr 1.618fr

  // Dynamic Symmetry rows
  DYN_SYM:        '--zai-rows-dyn-sym',         // 1fr 2.236fr

  // From phi-layout skill
  TIMELINE:       '--zai-rows-timeline',        // 3.82fr 1fr 5.18fr
  ZEITGEIST:      '--zai-rows-zeitgeist',       // 1fr 1.618fr 1fr
  SACRED:         '--zai-rows-sacred',          // 1fr 1.618fr 1fr
} as const

// ── Gap Tokens ────────────────────────────────────────────────────
// Gap = производные от spacing-токенов, но с семантическим именем

export const LAYOUT_GAP = {
  NONE: '--zai-gap-none',   // 0
  XS:   '--zai-gap-xs',     // var(--zai-space-1) = 4px
  SM:   '--zai-gap-sm',     // var(--zai-space-2) = 8px
  MD:   '--zai-gap-md',     // var(--zai-space-3) = 12px
  LG:   '--zai-gap-lg',     // var(--zai-space-5) = 20px
  XL:   '--zai-gap-xl',     // 2.5rem = 40px — Fib-val 5, section-level
  XXL:  '--zai-gap-2xl',    // 4rem = 64px — Fib-val 8, major divisions
  XXXL: '--zai-gap-3xl',    // 6.5rem = 104px — Fib-val 13, page-level
} as const

// ── Auto Props Tokens ─────────────────────────────────────────────

export const LAYOUT_AUTO = {
  // gridAutoRows
  ROWS_SM:    '--zai-auto-rows-sm',     // var(--zai-space-5) = 20px
  ROWS_MD:    '--zai-auto-rows-md',     // var(--zai-space-8) = 32px
  ROWS_EQUAL: '--zai-auto-rows-equal',  // 1fr

  // gridAutoFlow (не CSS vars, но константы для JS)
  FLOW_DENSE:   'dense',
  FLOW_COLUMN:  'column',
  FLOW_ROW:     'row',
} as const

// ── Parametric Dimensions ─────────────────────────────────────────
// Настраиваемые на уровне проекта (в скине или :root проекта)

export const LAYOUT_DIM = {
  SIDEBAR_W:   '--zai-sidebar-w',    // 50px default
  SIDEBAR_XL:  '--zai-sidebar-xl',   // 70px default
  HEADER_H:    '--zai-header-h',     // 35px default
  FOOTER_H:    '--zai-footer-h',     // 25px default
  HERO_H:      '--zai-hero-h',       // 80px default
  CARD_MIN:    '--zai-card-min',     // 50px default
} as const

// ── Area Map Tokens ───────────────────────────────────────────────
// gridTemplateAreas — строки, не CSS vars (CSS не позволяет vars в areas)

export const LAYOUT_AREA = {
  HOLY_GRAIL: '"header header header" "nav main aside" "footer footer footer"',
} as const

// ── Helper: resolve layout token → CSS var() string ──────────────

export function lv(token: string): string {
  return `var(${token})`
}

// ── Helper: build grid style from layout config ──────────────────

export interface LayoutConfig {
  cols?: string    // LAYOUT_COL key или CSS значение
  rows?: string    // LAYOUT_ROW key или CSS значение
  gap?: string     // LAYOUT_GAP key или CSS значение
  areas?: string   // LAYOUT_AREA key или CSS значение
  autoRows?: string // LAYOUT_AUTO key или CSS значение
  autoFlow?: string // LAYOUT_AUTO key или CSS значение
}

/**
 * Строит React style объект из конфига макета
 *
 * @example
 * const style = buildGridStyle({
 *   cols: LAYOUT_COL.SIDEBAR_L,
 *   rows: LAYOUT_ROW.HEADER_CONTENT_FOOTER,
 *   gap: LAYOUT_GAP.SM,
 * })
 * // → { gridTemplateColumns: 'var(--zai-cols-sidebar-l)', ... }
 */
export function buildGridStyle(config: LayoutConfig): React.CSSProperties {
  const style: Record<string, string> = {}

  if (config.cols) {
    style.gridTemplateColumns = config.cols.startsWith('--')
      ? `var(${config.cols})`
      : config.cols
  }
  if (config.rows) {
    style.gridTemplateRows = config.rows.startsWith('--')
      ? `var(${config.rows})`
      : config.rows
  }
  if (config.gap) {
    style.gap = config.gap.startsWith('--')
      ? `var(${config.gap})`
      : config.gap
  }
  if (config.areas) {
    style.gridTemplateAreas = config.areas.startsWith('"')
      ? config.areas
      : config.areas
  }
  if (config.autoRows) {
    style.gridAutoRows = config.autoRows.startsWith('--')
      ? `var(${config.autoRows})`
      : config.autoRows
  }
  if (config.autoFlow) {
    style.gridAutoFlow = config.autoFlow
  }

  return style as React.CSSProperties
}

// ── Type exports ──────────────────────────────────────────────────

export type LayoutColKey = keyof typeof LAYOUT_COL
export type LayoutRowKey = keyof typeof LAYOUT_ROW
export type LayoutGapKey = keyof typeof LAYOUT_GAP
export type LayoutAutoKey = keyof typeof LAYOUT_AUTO
export type LayoutDimKey = keyof typeof LAYOUT_DIM
export type LayoutAreaKey = keyof typeof LAYOUT_AREA
