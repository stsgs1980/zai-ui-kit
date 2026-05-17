/**
 * ConstructorTab - L2 Section (Molecule)
 * Layout for the constructor view with two panels.
 * Composes L1 atoms, no own state.
 */

import React from 'react'

export interface ConstructorTabProps {
  /** Left panel content (layout selector) */
  leftPanel: React.ReactNode
  /** Right panel content (preview area) */
  rightPanel: React.ReactNode
}

export function ConstructorTab({ leftPanel, rightPanel }: ConstructorTabProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
      {leftPanel}
      {rightPanel}
    </div>
  )
}

export default ConstructorTab
