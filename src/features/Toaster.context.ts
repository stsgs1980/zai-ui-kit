/**
 * Toaster - Context, types, and hooks
 */

import { createContext, useContext } from 'react'
import { type ToastProps } from './Toast'

// Toast data type
export interface ToastData extends Omit<ToastProps, 'onDismiss'> {
  createdAt: number
}

// Toaster context type
export interface ToasterContextType {
  toasts: ToastData[]
  addToast: (toast: Omit<ToastData, 'id' | 'createdAt'>) => string
  dismissToast: (id: string) => void
  clearToasts: () => void
}

// Toaster context
export const ToasterContext = createContext<ToasterContextType | null>(null)

// Hook to use toaster
export function useToaster(): ToasterContextType {
  const context = useContext(ToasterContext)
  if (!context) {
    throw new Error('useToaster must be used within a ToasterProvider')
  }
  return context
}

// Convenience hook for common toast types
export function useToast() {
  const { addToast, dismissToast } = useToaster()

  return {
    toast: (message: string, options?: Partial<ToastData>) =>
      addToast({ message, ...options }),
    success: (message: string, options?: Partial<ToastData>) =>
      addToast({ message, variant: 'success', ...options }),
    error: (message: string, options?: Partial<ToastData>) =>
      addToast({ message, variant: 'danger', ...options }),
    warning: (message: string, options?: Partial<ToastData>) =>
      addToast({ message, variant: 'warning', ...options }),
    info: (message: string, options?: Partial<ToastData>) =>
      addToast({ message, variant: 'info', ...options }),
    dismiss: dismissToast,
  }
}
