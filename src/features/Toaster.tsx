/**
 * Toaster - Provider component (slim orchestrator)
 */

import { useState, useCallback, type ReactNode } from 'react'
import {
  ToasterContext,
  type ToastData,
} from './Toaster.context'
import { ToasterContainer } from './ToasterContainer'

// Re-export convenience types and hooks
export type { ToastData } from './Toaster.context'
export { useToaster, useToast } from './Toaster.context'
export { ToasterContainer } from './ToasterContainer'
export type { ToasterContainerProps } from './ToasterContainer'

// Provider props
export interface ToasterProviderProps {
  children: ReactNode
  maxToasts?: number
}

// Provider component
export function ToasterProvider({
  children,
  maxToasts = 5,
}: ToasterProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const addToast = useCallback(
    (toast: Omit<ToastData, 'id' | 'createdAt'>) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`
      const newToast: ToastData = {
        ...toast,
        id,
        createdAt: Date.now(),
      }

      setToasts((prev) => {
        const updated = [...prev, newToast]
        return updated.slice(-maxToasts)
      })

      return id
    },
    [maxToasts]
  )

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const clearToasts = useCallback(() => {
    setToasts([])
  }, [])

  return (
    <ToasterContext.Provider
      value={{ toasts, addToast, dismissToast, clearToasts }}
    >
      {children}
      <ToasterContainer toasts={toasts} onDismiss={dismissToast} />
    </ToasterContext.Provider>
  )
}

export default ToasterProvider
