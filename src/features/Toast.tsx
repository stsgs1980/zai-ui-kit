/**
 * Toast - Notification toast component
 *
 * Colors sourced from centralized palette (colors.neutral.*)
 */

import { forwardRef, useEffect, useCallback, type ReactNode } from 'react'
import { cn } from '../utils/cn'
import { colors, rgba } from '../theme/colors'
import type { Variant, WithClassName } from '../utils/types'
import { variantBorderKey, variantIconColor, variantIconMap } from './Toast.icons'

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

    const borderKey = variantBorderKey[variant]

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg border shadow-lg',
          'animate-slide-in-right',
          className
        )}
        style={{
          borderColor: rgba(borderKey, 0.25),
          backgroundColor: colors.background.primaryA90,
        }}
      >
        <div className="flex items-start gap-3 p-4">
          <div className="flex-shrink-0" style={{ color: variantIconColor[variant] }}>
            {icon ?? variantIconMap[variant]}
          </div>
          <div className="flex-1 pt-0.5">
            {title && (
              <p className="text-sm font-medium" style={{ color: colors.text.primary }}>{title}</p>
            )}
            <p className={cn('text-sm', title && 'mt-1')} style={{ color: colors.text.primary }}>
              {message}
            </p>
          </div>
          {closable && (
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 transition-colors"
              style={{ color: colors.text.secondary }}
              onMouseEnter={(e) => { e.currentTarget.style.color = colors.text.primary }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.text.secondary }}
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
