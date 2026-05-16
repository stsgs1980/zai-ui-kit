/** FontSelector - L2 Molecule: font family + size controls */

'use client'

import React from 'react'
import { fontLabels, sizeLabels } from '@/data/layouts'
import { Label } from '@/components/ui/label'
import { cn } from '../../utils/cn'
import { Type } from 'lucide-react'

type FontFamily = 'sans' | 'serif' | 'mono'
type FontSize = 'sm' | 'md' | 'lg'

export interface FontSelectorProps {
  fontFamily: FontFamily
  fontSize: FontSize
  onFontFamilyChange: (family: FontFamily) => void
  onFontSizeChange: (size: FontSize) => void
}

export function FontSelector({
  fontFamily,
  fontSize,
  onFontFamilyChange,
  onFontSizeChange,
}: FontSelectorProps) {
  return (
    <>
      {/* Font Family */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          <Type className="h-4 w-4" />
          Шрифт
        </Label>
        <div className="flex gap-2">
          {(['sans', 'serif', 'mono'] as const).map((family) => (
            <button
              key={family}
              onClick={() => onFontFamilyChange(family)}
              className={cn(
                'flex-1 px-3 py-2 rounded border text-sm transition-all',
                { 'font-sans': family === 'sans', 'font-serif': family === 'serif', 'font-mono': family === 'mono' },
                fontFamily === family
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary/50'
              )}
            >
              {fontLabels[family]}
            </button>
          ))}
        </div>
      </div>

      {/* Font Size */}
      <div className="space-y-2">
        <Label>Размер шрифта</Label>
        <div className="flex gap-2">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <button
              key={size}
              onClick={() => onFontSizeChange(size)}
              className={cn(
                'flex-1 px-4 py-2 rounded border text-sm transition-all',
                fontSize === size
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary/50'
              )}
            >
              {sizeLabels[size]}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default FontSelector
