/**
 * Catalog hooks — stateful logic, no JSX
 */

import { useState, useMemo } from 'react'
import { PATTERNS, type LayoutCategory } from '../data/layout-data'

export type Tab = 'patterns' | 'atoms' | 'registry'

export function useCatalogFilters() {
  const [tab, setTab] = useState<Tab>('patterns')
  const [category, setCategory] = useState<LayoutCategory | 'all'>('all')
  const [search, setSearch] = useState('')
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return PATTERNS.filter(p => {
      if (category !== 'all' && p.category !== category) return false
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.id.includes(search.toLowerCase())) return false
      return true
    })
  }, [category, search])

  const togglePattern = (id: string) => {
    setSelectedPattern(prev => prev === id ? null : id)
  }

  return {
    tab, setTab,
    category, setCategory,
    search, setSearch,
    selectedPattern, togglePattern,
    filtered,
  }
}
