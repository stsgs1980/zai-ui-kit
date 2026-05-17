/**
 * GlassCard.helpers — Extracted style utilities for GlassCard
 *
 * Contains CSS property builders, variant maps, and style maps
 * so GlassCard.tsx stays under the anti-monolith line limit.
 *
 * Tokens used for glass effects (GLASS_BG, GLASS_BORDER, GLASS_SHADOW).
 * RGB-based rgba() kept with TODO until per-alpha neutral tokens exist.
 */

import { tv } from '../tokens'
import { colors } from '../theme/colors'  // TODO: Remove when neutral RGB / surface alpha tokens are available

export type GlassVariant = 'default' | 'enhanced' | 'panel'

/** Build CSS custom properties for glass variant backgrounds */
export function getGlassCSSProps(variant: GlassVariant): React.CSSProperties {
  const n = colors.neutralRgb  // TODO: Use RGB tokens when available
  const props: React.CSSProperties = {
    '--glass-border': tv('GLASS_BORDER'),
  } as React.CSSProperties

  switch (variant) {
    case 'default':
      return {
        ...props,
        '--glass-bg': tv('GLASS_BG'),
      } as React.CSSProperties
    case 'enhanced':
      return {
        ...props,
        // TODO: Add token for glassA85 background
        '--glass-bg': `rgba(${colors.bgRgb.glass}, 0.85)`,
        // TODO: Add token for enhanced glass shadow
        '--glass-shadow': `inset 0 1px 0 ${colors.surface.whiteA04}, 0 4px 24px ${colors.surface.blackA40}, 0 0 0 1px ${colors.surface.blackA30}`,
      } as React.CSSProperties
    case 'panel':
      return {
        ...props,
        // TODO: Add token for glassA82 background
        '--glass-bg': `rgba(${colors.bgRgb.glass}, 0.82)`,
        // TODO: Add token for panel border (base @ 5%)
        '--glass-border': `rgba(${n.base}, 0.05)`,
        // TODO: Add token for panel glass shadow
        '--glass-shadow': `inset 0 1px 0 ${colors.surface.whiteA03}, 0 8px 32px ${colors.surface.blackA50}`,
      } as React.CSSProperties
  }
}

/** Map glow variant → neutral palette key */
export const glowVariantKey: Record<string, 'base' | 'v1' | 'v2' | 'v3' | 'v4'> = {
  default: 'base',
  amber: 'base',
  green: 'v2',
  red: 'v4',
  blue: 'v1',
  success: 'v2',
  warning: 'v3',
  error: 'v4',
  info: 'v1',
  neutral: 'v3',
}

/** Build CSS custom properties for glow hover effect */
export function getGlowCSSProps(glowVariant: string): React.CSSProperties {
  const k = glowVariantKey[glowVariant]
  // TODO: Use RGB tokens when available
  const rgb = colors.neutralRgb[k]
  return {
    '--glow-border-hover': `rgba(${rgb}, 0.2)`,
    '--glow-shadow-hover': `0 0 20px rgba(${rgb}, ${glowVariant === 'default' || glowVariant === 'amber' ? 0.05 : 0.06})`,
  } as React.CSSProperties
}

export const glassBlurStyles: Record<GlassVariant, string> = {
  default: 'backdrop-blur-[var(--zai-glass-blur)]',
  enhanced: 'backdrop-blur-[var(--zai-glass-blur)] backdrop-saturate-[var(--zai-glass-saturate)]',
  panel: 'backdrop-blur-[24px] backdrop-saturate-[1.3]',   // TODO: Add token for 24px blur and 1.3 saturate
}

export const paddingStyles = {
  none: '',
  sm: 'p-[var(--zai-space-card-sm)]',     // 12px
  md: 'p-4',   // TODO: Add token for 16px padding
  lg: 'p-6',   // TODO: Add token for 24px padding
}
