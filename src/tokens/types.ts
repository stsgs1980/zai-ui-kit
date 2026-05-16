/** Token categories for type-safe skin definitions */

export interface ColorTokens {
  'color-neutral-base': string
  'color-neutral-v1': string
  'color-neutral-v2': string
  'color-neutral-v3': string
  'color-neutral-v4': string
  'color-text-primary': string
  'color-text-secondary': string
  'color-text-muted': string
  'color-text-disabled': string
  'color-text-inverse': string
  'color-bg-primary': string
  'color-bg-secondary': string
  'color-bg-tertiary': string
  'color-bg-card': string
  'color-bg-elevated': string
  'color-bg-surface': string
  'color-bg-overlay': string
  'color-border-default': string
  'color-border-muted': string
  'color-border-subtle': string
  'color-border-focus': string
  'color-status-online': string
  'color-status-offline': string
  'color-status-warning': string
  'color-status-error': string
  'color-status-success': string
  'color-status-info': string
  'color-accent': string
  'color-accent-muted': string
}

export interface SpacingTokens {
  'space-0': string
  'space-1': string
  'space-2': string
  'space-3': string
  'space-5': string
  'space-8': string
  'space-13': string
  'space-21': string
  'space-card-sm': string
  'space-card-md': string
  'space-card-lg': string
  'space-section-sm': string
  'space-section-md': string
  'space-section-lg': string
  'space-element-xs': string
  'space-element-sm': string
  'space-element-md': string
  'space-element-lg': string
}

export interface RadiusTokens {
  'radius-none': string
  'radius-sm': string
  'radius-default': string
  'radius-md': string
  'radius-lg': string
  'radius-xl': string
  'radius-full': string
}

export interface ShadowTokens {
  'shadow-sm': string
  'shadow-default': string
  'shadow-md': string
  'shadow-lg': string
  'shadow-xl': string
  'shadow-glow': string
}

export interface GlassTokens {
  'glass-bg': string
  'glass-border': string
  'glass-shadow': string
  'glass-blur': string
  'glass-saturate': string
  'glass-opacity': string
}

export interface GlowTokens {
  'glow-color': string
  'glow-spread': string
  'glow-opacity': string
  'glow-shadow': string
}

export interface MotionTokens {
  'duration-instant': string
  'duration-fast': string
  'duration-normal': string
  'duration-slow': string
  'easing-default': string
  'easing-in': string
  'easing-out': string
  'easing-in-out': string
  'easing-bounce': string
}

export interface TypographyTokens {
  'font-size-1': string
  'font-size-2': string
  'font-size-3': string
  'font-size-4': string
  'font-size-5': string
  'font-size-6': string
  'font-size-7': string
  'font-weight-normal': string
  'font-weight-medium': string
  'font-weight-semibold': string
  'font-weight-bold': string
  'line-height-tight': string
  'line-height-normal': string
  'line-height-relaxed': string
}

export interface LayoutTokens {
  'phi': string
  'phi-inv': string
  'grid-cols-golden': string
  'grid-cols-fibonacci': string
  'grid-gap': string
  'grid-gap-sm': string
  'grid-gap-lg': string
}

export interface ZIndexTokens {
  'z-dropdown': string
  'z-sticky': string
  'z-fixed': string
  'z-modal': string
  'z-popover': string
  'z-tooltip': string
  'z-toast': string
}

export interface ComponentTokens {
  'progress-height': string
  'progress-radius': string
  'badge-padding-x': string
  'badge-padding-y': string
  'badge-radius': string
  'dot-size': string
  'divider-thickness': string
}

/** Complete skin definition — all token values */
export type SkinTokens = ColorTokens & SpacingTokens & RadiusTokens & ShadowTokens &
  GlassTokens & GlowTokens & MotionTokens & TypographyTokens & LayoutTokens &
  ZIndexTokens & ComponentTokens

/** Partial skin — override only what you need */
export type SkinOverride = Partial<SkinTokens>
