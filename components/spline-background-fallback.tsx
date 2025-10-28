"use client"

import { useState, useEffect } from "react"
import { FallbackBackground } from "./fallback-background"

export function SplineBackgroundFallback() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [shouldAttemptLoad, setShouldAttemptLoad] = useState(false)

  useEffect(() => {
    // Check if we should attempt to load Spline (only on client-side)
    const checkDevice = () => {
      if (typeof window === "undefined") return

      const isDesktop = window.innerWidth >= 1024
      const hasGoodConnection = !navigator.connection || (navigator.connection as any).effectiveType === "4g"

      setShouldAttemptLoad(isDesktop && hasGoodConnection)
    }

    // Delay check to prioritize main content
    const timer = setTimeout(checkDevice, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!shouldAttemptLoad || typeof window === "undefined") return

    // Load the Spline viewer script
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"

    script.onload = () => {
      setIsLoaded(true)
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
  }, [shouldAttemptLoad])

  if (hasError || !shouldAttemptLoad) {
    return <FallbackBackground />
  }

  return (
    <div className="fixed inset-0 z-0">
      {/* Always show fallback until Spline is loaded */}
      {!isLoaded && <FallbackBackground />}

      {isLoaded && (
        <div className="spline-container">
          {/* @ts-ignore - Custom element */}
          <spline-viewer
            url="https://prod.spline.design/C8-EtXQIWfr0ttP1/scene.splinecode"
            events-target="global"
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
            }}
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] pointer-events-none" />
        </div>
      )}
    </div>
  )
}
