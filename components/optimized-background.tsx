"use client"

import { useEffect, useState } from "react"
import { FallbackBackground } from "./fallback-background"

export function OptimizedBackground() {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Only load Spline on desktop and after initial page load
    const checkDevice = () => {
      const isDesktop = window.innerWidth >= 1024
      const hasGoodConnection = navigator.connection ? navigator.connection.effectiveType === "4g" : true

      if (isDesktop && hasGoodConnection) {
        // Delay Spline loading to prioritize main content
        setTimeout(() => setShouldLoadSpline(true), 2000)
      }
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)
    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  if (!shouldLoadSpline || hasError) {
    return <FallbackBackground />
  }

  return (
    <div className="fixed inset-0 z-0">
      <div className="spline-container">
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"
          onError={() => setHasError(true)}
        />
        <spline-viewer
          url="https://prod.spline.design/C8-EtXQIWfr0ttP1/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] pointer-events-none" />
    </div>
  )
}
