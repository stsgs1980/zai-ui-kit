/**
 * GlassCard.helpers — Extracted style utilities for GlassCard
 *
 * Contains CSS property builders, variant maps, and style maps
 * so GlassCard.tsx stays under the anti-monolith line limit.
 */

import { colors } from '../theme/colors'
import type { Variant } from '../utils/types'

export type GlassVariant = 'default' | 'enhanced' | 'panel'

/** Build CSS custom properties for glass variant backgrounds */
export function getGlassCSSProps(variant: GlassVariant): React.CSSProperties {
  const n = colors.neutralRgb
  const props: React.CSSProperties = {
    '--glass-border': `rgba(${n.base}, 0.06)`,
  } as React.CSSProperties

  switch (variant) {
    case 'default':
      return {
        ...props,
        '--glass-bg': colors.background.glassA80,
      } as React.CSSProperties
    case 'enhanced':
      return {
        ...props,
        '--glass-bg': colors.background.glassA85,
        '--glass-shadow': `inset 0 1px 0 ${colors.surface.whiteA04}, 0 4px 24px ${colors.surface.blackA40}, 0 0 0 1px ${colors.surface.blackA30}`,
      } as React.CSSProperties
    case 'panel':
      return {
        ...props,
        '--glass-bg': colors.background.glassA82,
        '--glass-border': `rgba(${n.base}, 0.05)`,
        '--glass-shadow': `inset 0 1px 0 ${colors.surface.whiteA03}, 0 8px 32px ${colors.surface.blackA50}`,
      } as React.CSSProperties
  }
}

/** Map glow variant → neutral palette key */
export const glowVariantKey: Record<Variant, 'base' | 'v1' | 'v2' | 'v3' | 'v4'> = {
  default: 'base',   // #E6E6E6
  amber: 'base',     // #E6E6E6
  green: 'v2',       // #BFBFBF
  red: 'v4',         // #5C6070
  blue: 'v1',        // #CCCCCC
  success: 'v2',     // #BFBFBF
  warning: 'v3',     // #878992
  error: 'v4',       // #5C6070
  info: 'v1',        // #CCCCCC
  neutral: 'v3',     // #878992
}

/** Build CSS custom properties for glow hover effect */
export function getGlowCSSProps(glowVariant: Variant): React.CSSProperties {
  const k = glowVariantKey[glowVariant]
  const rgb = colors.neutralRgb[k]
  return {
    '--glow-border-hover': `rgba(${rgb}, 0.2)`,
    '--glow-shadow-hover': `0 0 20px rgba(${rgb}, ${glowVariant === 'default' || glowVariant === 'amber' ? 0.05 : 0.06})`,
  } as React.CSSProperties
}

export const glassBlurStyles: Record<GlassVariant, string> = {
  default: 'backdrop-blur-xl',
  enhanced: 'backdrop-blur-[20px] backdrop-saturate-[1.2]',
  panel: 'backdrop-blur-[24px] backdrop-saturate-[1.3]',
}

export const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
}
