/**
 * MiniChart.helpers - Size and color maps for MiniChart variants
 */

import { colors } from '../theme/colors'
import type { Variant, SizeSmMdLg } from '../utils/types'

export const sizeHeightMap: Record<SizeSmMdLg, number> = {
  sm: 24,
  md: 40,
  lg: 60,
}

export const variantColorMap: Record<Variant, string> = {
  primary: colors.neutral.base,
  secondary: colors.neutral.v1,
  success: colors.neutral.v2,
  warning: colors.neutral.v3,
  danger: colors.neutral.v4,
  info: colors.neutral.v1,
  neutral: colors.neutral.v3,
}
