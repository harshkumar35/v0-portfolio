"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface IframePreviewProps {
  src: string
  title: string
  onClose: () => void
}

export default function IframePreview({ src, title, onClose }: IframePreviewProps) {
  return (
    <div className="relative w-full h-full">
      <iframe
        src={src}
        className="w-full h-full border-0 rounded-xl"
        title={`${title} Full Preview`}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
      />

      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 rounded-full p-2"
        onClick={onClose}
      >
        <X className="h-3 w-3 text-white" />
      </Button>
    </div>
  )
}
