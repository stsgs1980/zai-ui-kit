/**
 * Toaster - Toast container and context provider
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { cn } from '../../utils/cn'
import { Toast, type ToastProps } from './Toast'

// Toast data type
export interface ToastData extends Omit<ToastProps, 'onDismiss'> {
  createdAt: number
}

// Toaster context
interface ToasterContextType {
  toasts: ToastData[]
  addToast: (toast: Omit<ToastData, 'id' | 'createdAt'>) => string
  dismissToast: (id: string) => void
  clearToasts: () => void
}

const ToasterContext = createContext<ToasterContextType | null>(null)

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

// Container props
interface ToasterContainerProps {
  toasts: ToastData[]
  onDismiss: (id: string) => void
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

// Toast container component
function ToasterContainer({
  toasts,
  onDismiss,
  position = 'bottom-right',
}: ToasterContainerProps) {
  if (toasts.length === 0) return null

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  }

  return (
    <div
      aria-live="polite"
      aria-label="Notifications"
      className={cn(
        'pointer-events-none fixed z-[1080] flex flex-col gap-2',
        positionClasses[position]
      )}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onDismiss={onDismiss} />
      ))}
    </div>
  )
}

// Named export for container
export { ToasterContainer }

export default ToasterProvider
