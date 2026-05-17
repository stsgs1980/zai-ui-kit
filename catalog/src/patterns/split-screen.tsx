'use client'

/**
 * SplitScreen — 50/50 split layout
 *
 * A simple CSS Grid wrapper that creates an equal two-column layout
 * using the zai-ui-kit token system.
 *
 * Token: --zai-cols-equal-2 (1fr 1fr), --zai-gap-xs (4px)
 * Use for: hero sections, login pages, side-by-side comparisons
 *
 * @example
 * ```tsx
 * <SplitScreen>
 *   <LeftPanel />
 *   <RightPanel />
 * </SplitScreen>
 * ```
 *
 * @example
 * ```tsx
 * <SplitScreen className="min-h-screen">
 *   <LoginForm />
 *   <HeroImage />
 * </SplitScreen>
 * ```
 */

import React from 'react'

export interface SplitScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content to render inside the split layout (typically 2 children) */
  children?: React.ReactNode
  /** Additional CSS class names */
  className?: string
}

/**
 * SplitScreen creates a 50/50 horizontal split using CSS Grid.
 * Columns are defined by the --zai-cols-equal-2 token (1fr 1fr),
 * and the gap is defined by --zai-gap-xs (4px).
 */
export function SplitScreen({ children, className, ...props }: SplitScreenProps) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: 'var(--zai-cols-equal-2)',
        gap: 'var(--zai-gap-xs)',
        minHeight: '100%',
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default SplitScreen
