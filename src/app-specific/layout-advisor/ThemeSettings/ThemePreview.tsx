/**
 * ThemePreview - L2 Molecule
 * Live preview of the current theme settings.
 */

'use client'

import React from 'react'

type FontFamily = 'sans' | 'serif' | 'mono'
type FontSize = 'sm' | 'md' | 'lg'

export interface ThemePreviewProps {
  fontFamily: FontFamily
  fontSize: FontSize
  accentColor: string
}

export function ThemePreview({ fontFamily, fontSize, accentColor }: ThemePreviewProps) {
  return (
    <div className="pt-4 border-t">
      <p className="text-sm text-muted-foreground mb-2">Предпросмотр:</p>
      <div
        className="p-4 rounded border space-y-2"
        style={{
          fontFamily: `var(--font-${fontFamily})`,
          fontSize: fontSize === 'sm' ? '14px' : fontSize === 'lg' ? '18px' : '16px',
        }}
      >
        <p className="font-medium">Заголовок</p>
        <p className="text-muted-foreground">Обычный текст для примера.</p>
        <p style={{ color: accentColor }} className="font-medium">
          Акцентный цвет
        </p>
      </div>
    </div>
  )
}

export default ThemePreview
