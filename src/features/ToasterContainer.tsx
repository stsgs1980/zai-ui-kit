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
    'top-right': 'top-[var(--zai-space-card-sm)] right-[var(--zai-space-card-sm)]',
    'top-left': 'top-[var(--zai-space-card-sm)] left-[var(--zai-space-card-sm)]',
    'bottom-right': 'bottom-[var(--zai-space-card-sm)] right-[var(--zai-space-card-sm)]',
    'bottom-left': 'bottom-[var(--zai-space-card-sm)] left-[var(--zai-space-card-sm)]',
  }

  return (
    <div
      aria-live="polite"
      aria-label="Notifications"
      className={cn(
        'pointer-events-none fixed z-[var(--zai-z-toast)] flex flex-col gap-[var(--zai-space-element-sm)]',
        positionClasses[position]
      )}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onDismiss={onDismiss} />
      ))}
    </div>
  )
}
