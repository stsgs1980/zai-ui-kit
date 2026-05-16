/**
 * useSelection — Generic selection + modal + clipboard hook
 * Manages item selection, modal open/close, and copy-to-clipboard
 */

import { useState, useCallback } from 'react'

export interface UseSelectionOptions<T> {
  /** Function to get the code/text to copy from selected item */
  getCopyText?: (item: T) => string
  /** Duration in ms to show "copied" state (default: 2000) */
  copiedDuration?: number
}

export function useSelection<T>({
  getCopyText,
  copiedDuration = 2000,
}: UseSelectionOptions<T> = {}) {
  const [selected, setSelected] = useState<T | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const select = useCallback((item: T) => {
    setSelected(item)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setTimeout(() => setSelected(null), 200)
  }, [])

  const copyItem = useCallback(async (item: T, id?: string) => {
    if (!getCopyText) return
    try {
      await navigator.clipboard.writeText(getCopyText(item))
      setCopiedId(id ?? String(Date.now()))
      setTimeout(() => setCopiedId(null), copiedDuration)
    } catch {
      // clipboard fallback — do nothing
    }
  }, [getCopyText, copiedDuration])

  return {
    selected,
    isModalOpen,
    copiedId,
    select,
    closeModal,
    copyItem,
  }
}
