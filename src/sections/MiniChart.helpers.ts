/**
 * MiniChart.helpers - Size and color maps for MiniChart variants
 */

import { tv } from '../tokens'
import type { Variant, SizeSmMdLg } from '../utils/types'

export const sizeHeightMap: Record<SizeSmMdLg, number> = {
  sm: 24,
  md: 40,
  lg: 60,
}

export const variantColorMap: Record<Variant, string> = {
  primary: tv('COLOR_NEUTRAL_BASE'),
  secondary: tv('COLOR_NEUTRAL_V1'),
  success: tv('COLOR_NEUTRAL_V2'),
  warning: tv('COLOR_NEUTRAL_V3'),
  danger: tv('COLOR_NEUTRAL_V4'),
  info: tv('COLOR_NEUTRAL_V1'),
  neutral: tv('COLOR_NEUTRAL_V3'),
}
