/**
 * PreviewArea - L3 Feature (Organism)
 * Live layout preview with fullscreen dialog mode.
 * Has own state via useAppStore + useState.
 */

'use client'

import React, { useState } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '../utils/cn'
import { Eye, Maximize2, Minimize2 } from 'lucide-react'
import { LayoutPreview } from '../sections/LayoutPreview'

export function PreviewArea() {
  const { selectedLayout, theme } = useAppStore()
  const [fullscreen, setFullscreen] = useState(false)

  const fontClass = {
    sans: 'font-sans',
    serif: 'font-serif',
    mono: 'font-mono',
  }[theme.fontFamily]

  return (
    <>
      <Card className="h-full flex flex-col">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Eye className="h-5 w-5" />
              Предпросмотр
            </CardTitle>
            {selectedLayout && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground font-normal hidden sm:block">
                  {selectedLayout.name}
                </span>
                <Button variant="outline" size="sm" onClick={() => setFullscreen(true)} className="gap-1.5">
                  <Maximize2 className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">На весь экран</span>
                </Button>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className={cn('flex-1 pb-4', fontClass)}>
          <LayoutPreview structure={selectedLayout?.structure} />
        </CardContent>

        {selectedLayout && (
          <div className="px-6 pb-4">
            <div className="p-3 bg-muted/50 rounded text-xs space-y-1">
              <p className="font-medium">CSS Grid:</p>
              <code className="text-muted-foreground block font-mono text-[11px]">
                {selectedLayout.techNotes}
              </code>
            </div>
          </div>
        )}
      </Card>

      {/* Fullscreen Dialog */}
      <Dialog open={fullscreen} onOpenChange={setFullscreen}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[95vh] max-h-[95vh] p-0 gap-0">
          <DialogHeader className="p-4 pb-2 border-b flex flex-row items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              {selectedLayout?.name}
            </DialogTitle>
            <Button variant="outline" size="sm" onClick={() => setFullscreen(false)} className="gap-1.5">
              <Minimize2 className="h-3.5 w-3.5" />
              Свернуть
            </Button>
          </DialogHeader>

          <div className={cn('flex-1 p-6', fontClass)}>
            <LayoutPreview structure={selectedLayout?.structure} fullscreen />
          </div>

          {selectedLayout && (
            <div className="px-6 pb-4 border-t pt-4">
              <div className="p-4 bg-muted/50 rounded text-sm">
                <p className="font-medium mb-1">CSS Grid код:</p>
                <code className="text-xs text-muted-foreground block bg-muted p-3 rounded font-mono">
                  {selectedLayout.techNotes}
                </code>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PreviewArea
