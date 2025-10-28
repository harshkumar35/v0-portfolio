"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { FallbackBackground } from "./fallback-background"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": {
        url?: string
        style?: React.CSSProperties
        loading?: string
        "events-target"?: string
      }
    }
  }
}

export function SplineBackgroundWeb() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="spline-viewer"]')) {
      setIsScriptLoaded(true)
      return
    }

    // Load the Spline viewer script
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"

    script.onload = () => {
      setIsScriptLoaded(true)
    }

    script.onerror = () => {
      console.error("Failed to load Spline viewer script")
      setHasError(true)
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup - remove script if component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  if (hasError) {
    return <FallbackBackground />
  }

  if (!isScriptLoaded) {
    return <FallbackBackground />
  }

  return (
    <div className="fixed inset-0 z-0">
      <div className="spline-container">
        <spline-viewer
          url="https://prod.spline.design/C8-EtXQIWfr0ttP1/scene.splinecode"
          events-target="global"
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
          }}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] pointer-events-none" />
    </div>
  )
}
