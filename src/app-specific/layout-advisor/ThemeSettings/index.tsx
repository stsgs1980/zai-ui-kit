/**
 * ThemeSettings - L3 Feature (Organism)
 * Theme customization panel composing mode, color, font, and preview sub-components.
 * Has own state via useAppStore.
 */

'use client'

import React from 'react'
import { useAppStore } from '@/store/useAppStore'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Palette } from 'lucide-react'
import { ModeSelector } from './ModeSelector'
import { AccentColorPicker } from './AccentColorPicker'
import { FontSelector } from './FontSelector'
import { ThemePreview } from './ThemePreview'

export function ThemeSettings() {
  const { theme, setTheme } = useAppStore()

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Palette className="h-5 w-5" />
          Тема
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <ModeSelector
          mode={theme.mode}
          onModeChange={(mode) => setTheme({ mode })}
        />
        <AccentColorPicker
          accentColor={theme.accentColor}
          onColorChange={(accentColor) => setTheme({ accentColor })}
        />
        <FontSelector
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSize}
          onFontFamilyChange={(fontFamily) => setTheme({ fontFamily })}
          onFontSizeChange={(fontSize) => setTheme({ fontSize })}
        />
        <ThemePreview
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSize}
          accentColor={theme.accentColor}
        />
      </CardContent>
    </Card>
  )
}

export default ThemeSettings
