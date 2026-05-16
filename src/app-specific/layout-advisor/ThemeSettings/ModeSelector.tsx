/**
 * ModeSelector - L1 Atom
 * Light/dark mode toggle buttons.
 */

'use client'

import React from 'react'
import { Label } from '@/components/ui/label'
import { cn } from '../../utils/cn'
import { Sun, Moon, Monitor } from 'lucide-react'

type Mode = 'light' | 'dark'

export interface ModeSelectorProps {
  mode: Mode
  onModeChange: (mode: Mode) => void
}

export function ModeSelector({ mode, onModeChange }: ModeSelectorProps) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        <Monitor className="h-4 w-4" />
        Режим
      </Label>
      <div className="flex gap-2">
        {(['light', 'dark'] as const).map((m) => (
          <button
            key={m}
            onClick={() => onModeChange(m)}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded border transition-all',
              mode === m
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border hover:border-primary/50'
            )}
          >
            {m === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="text-sm">{m === 'light' ? 'Светлая' : 'Тёмная'}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ModeSelector
