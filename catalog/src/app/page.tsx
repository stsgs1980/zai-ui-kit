'use client'

import React from 'react'
import { BRAND, CATEGORIES, PATTERNS } from '../data/layout-data'
import { useCatalogFilters } from '../hooks'
import { CatalogHeader, CatalogTabs, PatternCard } from '../ui'
import { AtomsTab } from '../sections/AtomsTab'
import { RegistryTab, PatternDetail } from '../features'

export default function CatalogPage() {
  const {
    tab, setTab,
    category, setCategory,
    search, setSearch,
    selectedPattern, togglePattern,
    filtered,
  } = useCatalogFilters()

  return (
    <div style={{
      minHeight: '100vh',
      background: BRAND.bg,
      color: BRAND.base,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <CatalogHeader />
      <CatalogTabs tab={tab} onTabChange={setTab} />

      <div style={{ padding: '24px' }}>
        {tab === 'patterns' && (
          <>
            <FilterBar
              search={search} onSearchChange={setSearch}
              category={category} onCategoryChange={setCategory}
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
              {filtered.map(p => (
                <PatternCard
                  key={p.id}
                  pattern={p}
                  selected={selectedPattern === p.id}
                  onClick={() => togglePattern(p.id)}
                />
              ))}
            </div>
            <PatternDetail patternId={selectedPattern} />
          </>
        )}
        {tab === 'atoms' && <AtomsTab />}
        {tab === 'registry' && <RegistryTab />}
      </div>

      <footer style={{
        borderTop: `1px solid ${BRAND.v4}44`,
        padding: '12px 24px',
        fontSize: '11px',
        color: BRAND.v4,
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <span>L0 Tokens → L1 Elements → L2 Components → L3 Sections → L4 Domain → L5 Skins</span>
        <span>Base: {BRAND.base} · V1: {BRAND.v1} · V2: {BRAND.v2} · V3: {BRAND.v3} · V4: {BRAND.v4}</span>
      </footer>
    </div>
  )
}

// ── Filter bar — local section component ──────────────────────

function FilterBar({ search, onSearchChange, category, onCategoryChange }: {
  search: string
  onSearchChange: (v: string) => void
  category: string
  onCategoryChange: (v: string) => void
}) {
  return (
    <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center' }}>
      <input
        type="text"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        placeholder="Search patterns..."
        style={{
          padding: '6px 12px', background: BRAND.bgCard,
          border: `1px solid ${BRAND.v4}66`, borderRadius: '6px',
          color: BRAND.base, fontSize: '13px', outline: 'none', width: '200px',
        }}
      />
      <div style={{ display: 'flex', gap: '4px' }}>
        {[{ id: 'all' as const, name: 'All' }, ...CATEGORIES].map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            style={{
              padding: '4px 10px', fontSize: '11px', borderRadius: '4px',
              border: 'none', cursor: 'pointer',
              background: category === cat.id ? BRAND.v3 : `${BRAND.v4}44`,
              color: category === cat.id ? BRAND.bg : BRAND.v1,
              fontWeight: category === cat.id ? 600 : 400,
            }}
          >
            {cat.name} ({cat.id === 'all' ? PATTERNS.length : PATTERNS.filter(p => p.category === cat.id).length})
          </button>
        ))}
      </div>
    </div>
  )
}
