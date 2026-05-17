/**
 * Toast - Notification toast component
 *
 * Colors sourced from token system (tv() + color-mix())
 */

import { forwardRef, useEffect, useCallback, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import type { Variant, WithClassName } from '../utils/types'
import { variantBorderColor, variantIconColor, variantIconMap } from './Toast.icons'

export interface ToastProps extends WithClassName {
  /** Toast ID */
  id: string
  /** Toast title */
  title?: ReactNode
  /** Toast message */
  message: ReactNode
  /** Toast variant */
  variant?: Variant
  /** Icon override */
  icon?: ReactNode
  /** Auto dismiss timeout (ms) */
  duration?: number
  /** Dismiss callback */
  onDismiss?: (id: string) => void
  /** Show close button */
  closable?: boolean
  /** Position in stack */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      id,
      title,
      message,
      variant = 'info',
      icon,
      duration = 5000,
      onDismiss,
      closable = true,
      className,
    },
    ref
  ) => {
    const handleDismiss = useCallback(() => {
      onDismiss?.(id)
    }, [id, onDismiss])

    useEffect(() => {
      if (duration > 0) {
        const timer = setTimeout(handleDismiss, duration)
        return () => clearTimeout(timer)
      }
    }, [duration, handleDismiss])

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'pointer-events-auto w-full max-w-sm overflow-hidden rounded-[var(--zai-radius-lg)] border shadow-[var(--zai-shadow-lg)]',
          'animate-slide-in-right',
          className
        )}
        style={{
          borderColor: variantBorderColor[variant],
          backgroundColor: tv('GLASS_BG'),
        }}
      >
        <div className="flex items-start gap-[var(--zai-space-element-md)] p-[var(--zai-space-card-md)]">
          <div className="flex-shrink-0" style={{ color: variantIconColor[variant] }}>
            {icon ?? variantIconMap[variant]}
          </div>
          <div className="flex-1 pt-0.5">
            {title && (
              <p className="text-sm font-medium" style={{ color: tv('COLOR_TEXT_PRIMARY') }}>{title}</p>
            )}
            <p className={cn('text-sm', title && 'mt-[var(--zai-space-element-xs)]')} style={{ color: tv('COLOR_TEXT_PRIMARY') }}>
              {message}
            </p>
          </div>
          {closable && (
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 transition-colors"
              style={{ color: tv('COLOR_TEXT_SECONDARY') }}
              onMouseEnter={(e) => { e.currentTarget.style.color = tv('COLOR_TEXT_PRIMARY') }}
              onMouseLeave={(e) => { e.currentTarget.style.color = tv('COLOR_TEXT_SECONDARY') }}
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>
    )
  }
)

Toast.displayName = 'Toast'

export default Toast
