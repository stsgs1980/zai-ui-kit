/**
 * @zai/ui-kit
 * Production-ready React UI component library
 * Anti-monolith architecture: ui/ → sections/ → features/ → domain/
 *
 * Layer rules:
 *   ui/      — L1 atoms, pure presentation, NO state, NO hooks
 *   sections/— L2 molecules, compose L1, NO own state
 *   features/— L3 organisms, HAVE own state and hooks
 *   domain/  — L4 domain-specific, frozen combinations
 *   hooks/   — stateful logic, no JSX
 *
 * Dependencies flow strictly DOWNWARD:
 *   ui → sections → features → domain
 *   hooks can be used by features and domain
 *
 * @packageDocumentation
 */

// ─── Theme System (export first) ─────────────────────────────
export * from './theme'
export { colors } from './theme/colors'
export { spacing, radius, shadows } from './theme/spacing'
export { duration, easing, animationPresets } from './theme/animations'

// ─── Utilities ───────────────────────────────────────────────
export { cn } from './utils/cn'
export type {
  BaseProps,
  WithChildren,
  WithClassName,
  WithStyle,
  ComponentProps,
  Size,
  SizeSmMdLg,
  Status,
  Variant,
  TrendDirection,
  ColorSpec,
  AnimationState,
  Position,
  CornerPosition,
  ClickHandler,
  ChangeHandler,
  AsyncState,
  AsProp,
  PolymorphicComponentProps,
  IconProps,
  DataPoint,
  KeyValue,
  ColumnDef,
} from './utils/types'

// ─── L1 Atoms (ui/) ─────────────────────────────────────────
export * from './ui'

// ─── L2 Molecules (sections/) ───────────────────────────────
export * from './sections'

// ─── L3 Organisms (features/) ───────────────────────────────
export * from './features'

// ─── L4 Domain (domain/) ────────────────────────────────────
export * from './domain'

// ─── Hooks ───────────────────────────────────────────────────
export * from './hooks'
