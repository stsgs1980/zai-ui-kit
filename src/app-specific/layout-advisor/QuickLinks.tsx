/**
 * QuickLinks - L2 Section (Molecule)
 * Displays a set of quick reference links.
 * Composes L1 atoms, no own state.
 */

import { BookOpen, ExternalLink } from 'lucide-react'

export interface QuickLinkItem {
  label: string
  url: string
}

export interface QuickLinksProps {
  /** Compact mode for inline display */
  compact?: boolean
  /** Links to display (defaults to CSS learning resources) */
  links?: QuickLinkItem[]
  /** Section label */
  label?: string
}

const defaultLinks: QuickLinkItem[] = [
  { label: 'Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
  { label: 'Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' },
  { label: 'Tailwind', url: 'https://tailwindcss.com/docs/responsive-design' },
]

export function QuickLinks({ compact, links = defaultLinks, label = 'Ресурсы' }: QuickLinksProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
        <BookOpen className="h-3 w-3" />
        <span>{label}:</span>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            {link.label} <ExternalLink className="h-2.5 w-2.5 inline" />
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className="mt-6 pt-4 border-t">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <BookOpen className="h-4 w-4" />
        <span>{label}:</span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-xs">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-muted/50 rounded hover:bg-muted transition-colors text-center"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default QuickLinks
