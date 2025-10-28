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
      }
    }
  }
}

export function SplineBackgroundAlternative() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.37/build/spline-viewer.js"
    script.onload = () => setIsLoaded(true)
    script.onerror = () => setHasError(true)

    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  if (hasError || !isLoaded) {
    return <FallbackBackground />
  }

  return (
    <div className="fixed inset-0 z-0">
      <div className="spline-container">
        <spline-viewer
          url="https://prod.spline.design/C8-EtXQIWfr0ttP1/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
          }}
          loading="lazy"
        />
      </div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] pointer-events-none" />
    </div>
  )
}
