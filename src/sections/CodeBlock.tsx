/**
 * CodeBlock — Code display with copy button
 * L2 molecule: Composes L1 elements, no own state
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { tv } from '../tokens'
import { Copy, Check } from 'lucide-react'

export interface CodeBlockProps {
  /** Code content to display */
  code: string
  /** Language label for the header */
  language?: string
  /** Whether the code has been copied */
  copied?: boolean
  /** Copy button click handler */
  onCopy?: () => void
  /** Additional class names */
  className?: string
}

export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ code, language = 'CSS', copied, onCopy, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-hidden border',
          className
        )}
        style={{
          backgroundColor: tv('COLOR_BG_PRIMARY'),
          borderColor: tv('COLOR_BORDER_MUTED'),
        }}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-[var(--zai-space-3)] py-[var(--zai-space-1)] border-b"
          style={{
            backgroundColor: tv('COLOR_BG_SECONDARY'),
            borderColor: tv('COLOR_BORDER_MUTED'),
          }}
        >
          <span
            className="text-[9px] font-mono uppercase tracking-[0.2em]"
            style={{ color: tv('COLOR_TEXT_MUTED') }}
          >
            &lt;{language}/&gt;
          </span>
          {onCopy && (
            <button
              onClick={onCopy}
              className="flex items-center gap-[var(--zai-space-element-xs)] text-[10px] font-mono transition-colors"
              style={{ color: tv('COLOR_TEXT_MUTED') }}
              onMouseEnter={(e) => { e.currentTarget.style.color = tv('COLOR_TEXT_SECONDARY') }}
              onMouseLeave={(e) => { e.currentTarget.style.color = tv('COLOR_TEXT_MUTED') }}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" style={{ color: '#10b981' }} />
                  {/* TODO: TOKEN-SEC — #10b981 (success green) has no token; COLOR_STATUS_SUCCESS is neutral in this skin */}
                  <span style={{ color: '#10b981' }}>COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>COPY</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Code content */}
        <pre
          className="p-[var(--zai-space-3)] text-[11px] font-mono leading-relaxed overflow-x-auto"
          style={{ color: tv('COLOR_TEXT_SECONDARY') }}
        >
          <code>{code}</code>
        </pre>
      </div>
    )
  }
)

CodeBlock.displayName = 'CodeBlock'
export default CodeBlock
