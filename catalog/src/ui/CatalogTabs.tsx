'use client'

import React from 'react'
import { BRAND } from '../data/layout-data'
import type { Tab } from '../hooks/useCatalogFilters'

interface CatalogTabsProps {
  tab: Tab
  onTabChange: (tab: Tab) => void
}

export function CatalogTabs({ tab, onTabChange }: CatalogTabsProps) {
  const tabs: Tab[] = ['patterns', 'atoms', 'registry']

  return (
    <div style={{
      display: 'flex', gap: '0',
      borderBottom: `1px solid ${BRAND.v4}44`,
      padding: '0 24px',
    }}>
      {tabs.map(t => (
        <button
          key={t}
          onClick={() => onTabChange(t)}
          style={{
            padding: '10px 20px',
            fontSize: '13px',
            fontWeight: tab === t ? 600 : 400,
            color: tab === t ? BRAND.base : BRAND.v3,
            background: 'none',
            border: 'none',
            borderBottom: tab === t ? `2px solid ${BRAND.base}` : '2px solid transparent',
            cursor: 'pointer',
            textTransform: 'capitalize',
          }}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
