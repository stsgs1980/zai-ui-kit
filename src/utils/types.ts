/**
 * ZAI UI Kit - TypeScript Types
 * Shared type definitions for all components
 */

import type { ReactNode, HTMLAttributes, SVGAttributes } from 'react'

// Base component props with common HTML attributes
export type BaseProps = HTMLAttributes<HTMLElement>

// Props with children
export interface WithChildren {
  children?: ReactNode
}

// Props with optional className
export interface WithClassName {
  className?: string
}

// Props with optional style
export interface WithStyle {
  style?: React.CSSProperties
}

// Combined base props
export type ComponentProps = BaseProps & WithClassName & WithStyle

// Size variants
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SizeSmMdLg = 'sm' | 'md' | 'lg'

// Status/variant types
export type Status = 'online' | 'offline' | 'warning' | 'error' | 'info' | 'success' | 'neutral' | 'unknown'
export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'

// Trend direction
export type TrendDirection = 'up' | 'down' | 'neutral'

// Value type for metrics
export type MetricValue = string | number

// Color specification (CSS color or theme color key)
export type ColorSpec = string

// Animation state
export type AnimationState = 'entering' | 'entered' | 'exiting' | 'exited'

// Position types
export type Position = 'top' | 'right' | 'bottom' | 'left'
export type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

// Click handler type
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void

// Change handler type
export type ChangeHandler<T = unknown> = (value: T) => void

// Async state
export interface AsyncState<T> {
  data?: T
  loading?: boolean
  error?: Error | null
}

// Polymorphic component utility
export type AsProp<E extends React.ElementType> = {
  as?: E
}

export type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P)

export type PolymorphicComponentProps<
  E extends React.ElementType,
  Props = object
> = React.PropsWithChildren<Props & AsProp<E>> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, Props>>

// SVG Icon props
export interface IconProps extends SVGAttributes<SVGElement> {
  size?: number
  color?: string
}

// Common data point type for charts
export interface DataPoint {
  label: string
  value: number
  color?: string
}

// Key-value pair type
export interface KeyValue {
  key: string
  value: ReactNode
  icon?: ReactNode
  status?: Status
}

// Column definition for tables
export interface ColumnDef<T = unknown> {
  key: string
  header: ReactNode
  width?: string | number
  align?: 'left' | 'center' | 'right'
  render?: (value: unknown, row: T) => ReactNode
}

export default types
