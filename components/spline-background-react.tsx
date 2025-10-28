"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { FallbackBackground } from "./fallback-background"

// Dynamically import Spline with correct path
const Spline = dynamic(() => import("@splinetool/react-spline").then((mod) => ({ default: mod.Spline })), {
  ssr: false,
  loading: () => <FallbackBackground />,
})

export function SplineBackgroundReact() {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = (error: any) => {
    console.error("Spline loading error:", error)
    setHasError(true)
  }

  if (hasError) {
    return <FallbackBackground />
  }

  return (
    <div className="fixed inset-0 z-0">
      {/* Show fallback until Spline loads */}
      {!isLoaded && <FallbackBackground />}

      <div
        className={`spline-container transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Spline
          scene="https://prod.spline.design/C8-EtXQIWfr0ttP1/scene.splinecode"
          onLoad={handleLoad}
          onError={handleError}
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
