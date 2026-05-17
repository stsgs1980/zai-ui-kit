/**
 * useFilter — Generic filter/search hook
 * Manages category filtering and text search state
 */

import { useState, useMemo, useCallback } from 'react'

export interface UseFilterOptions<T> {
  /** Full dataset to filter */
  items: T[]
  /** Filter function for category */
  categoryFilter?: (item: T, categoryId: string) => boolean
  /** Filter function for search query */
  searchFilter?: (item: T, query: string) => boolean
  /** Initial category (default: 'all') */
  initialCategory?: string
}

export function useFilter<T>({
  items,
  categoryFilter,
  searchFilter,
  initialCategory = 'all',
}: UseFilterOptions<T>) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    let result = items

    if (activeCategory !== 'all' && categoryFilter) {
      result = result.filter(item => categoryFilter(item, activeCategory))
    }

    if (searchQuery.trim() && searchFilter) {
      const q = searchQuery.toLowerCase()
      result = result.filter(item => searchFilter(item, q))
    }

    return result
  }, [items, activeCategory, searchQuery, categoryFilter, searchFilter])

  const clearFilter = useCallback(() => {
    setActiveCategory('all')
    setSearchQuery('')
  }, [])

  return {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filtered,
    clearFilter,
    total: items.length,
    filteredCount: filtered.length,
  }
}
