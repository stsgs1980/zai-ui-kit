/**
 * ToasterContainer - Toast container component
 */

import { cn } from '../utils/cn'
import { Toast } from './Toast'
import { type ToastData } from './Toaster.context'

// Container props
export interface ToasterContainerProps {
  toasts: ToastData[]
  onDismiss: (id: string) => void
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

// Toast container component
export function ToasterContainer({
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
