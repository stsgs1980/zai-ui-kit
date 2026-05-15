/**
 * ZAI UI Kit - Theme System
 * Export all theme-related utilities and values
 */

export * from './colors'
export * from './spacing'
export * from './animations'

// Re-export default objects
export { default as colors } from './colors'
export { default as spacing } from './spacing'
export { default as animations } from './animations'

// Theme configuration type
export interface ThemeConfig {
  colors: typeof import('./colors').colors
  spacing: typeof import('./spacing').spacing
  radius: typeof import('./spacing').radius
  shadows: typeof import('./spacing').shadows
  animations: typeof import('./animations').animationPresets
}

// Default theme
export const theme: ThemeConfig = {
  colors: await import('./colors').then(m => m.colors),
  spacing: await import('./spacing').then(m => m.spacing),
  radius: await import('./spacing').then(m => m.radius),
  shadows: await import('./spacing').then(m => m.shadows),
  animations: await import('./animations').then(m => m.animationPresets),
}
