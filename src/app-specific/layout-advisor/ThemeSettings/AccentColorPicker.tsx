/**
 * AccentColorPicker - L1 Atom
 * Color preset dots for accent color selection.
 */

'use client'

import React from 'react'
import { colorPresets } from '@/data/layouts'
import { Label } from '@/components/ui/label'
import { cn } from '../../utils/cn'
import { Palette } from 'lucide-react'

export interface AccentColorPickerProps {
  accentColor: string
  onColorChange: (color: string) => void
}

export function AccentColorPicker({ accentColor, onColorChange }: AccentColorPickerProps) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        <Palette className="h-4 w-4" />
        Акцентный цвет
      </Label>
      <div className="flex flex-wrap gap-2">
        {colorPresets.map((color) => (
          <button
            key={color.value}
            onClick={() => onColorChange(color.value)}
            className={cn(
              'w-8 h-8 rounded-full transition-transform',
              'ring-2 ring-offset-2 ring-offset-background',
              accentColor === color.value ? 'ring-primary scale-110' : 'ring-transparent hover:scale-105'
            )}
            style={{ backgroundColor: color.value }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  )
}

export default AccentColorPicker
