/**
 * CodeBlock — Code display with copy button
 * L2 molecule: Composes L1 elements, no own state
 */

import { forwardRef } from 'react'
import { cn } from '../utils/cn'
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
        className={cn('relative overflow-hidden bg-white border border-[#CCCCCC]', className)}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-[#E6E6E6] border-b border-[#CCCCCC]">
          <span className="text-[9px] text-[#878992] font-mono uppercase tracking-[0.2em]">
            &lt;{language}/&gt;
          </span>
          {onCopy && (
            <button
              onClick={onCopy}
              className="flex items-center gap-1 text-[10px] font-mono text-[#878992] hover:text-[#5C6070] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-[#10b981]" />
                  <span className="text-[#10b981]">COPIED</span>
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
        <pre className="p-3 text-[11px] text-[#5C6070] font-mono leading-relaxed overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    )
  }
)

CodeBlock.displayName = 'CodeBlock'
export default CodeBlock
