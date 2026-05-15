/**
 * @zai/ui-kit
 * Production-ready React UI components for dashboards and monitoring interfaces
 *
 * @packageDocumentation
 */

// Components
export * from './components'

// Theme system
export * from './theme'

// Utilities
export * from './utils'

// Re-export commonly used items for convenience
export { cn } from './utils/cn'
export { colors } from './theme/colors'
export { spacing, radius, shadows } from './theme/spacing'
export { duration, easing, animationPresets } from './theme/animations'

// Type exports
export type {
  // Basic types
  Size,
  SizeSmMdLg,
  Status,
  Variant,
  TrendDirection,
  // Component props
  StatusDotProps,
  ProgressBarProps,
  BadgeProps,
  TrendIndicatorProps,
  GlowIconProps,
  MetricValueProps,
  DividerProps,
  // Composite props
  InfoCardProps,
  StatCardProps,
  GaugeMeterProps,
  MiniChartProps,
  DataTableProps,
  KeyValueListProps,
  // Ready props
  HUDCardProps,
  SectionHeaderProps,
  ToastProps,
  ToastData,
} from './components'
