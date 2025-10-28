"use client"

import { useEffect, useState, useRef } from "react"
import { FallbackBackground } from "./fallback-background"

export function SplineBackground() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const splineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let splineApp: any = null

    const loadSpline = async () => {
      try {
        // Load the Spline runtime
        const { Application } = await import("@splinetool/runtime")

        if (splineRef.current) {
          // Create new Spline application
          splineApp = new Application(splineRef.current)

          // Load the scene from cloud URL
          await splineApp.load("https://prod.spline.design/C8-EtXQIWfr0ttP1/scene.splinecode")

          setIsLoaded(true)
        }
      } catch (error) {
        console.error("Failed to load Spline:", error)
        setHasError(true)
      }
    }

    loadSpline()

    // Cleanup function
    return () => {
      if (splineApp) {
        splineApp.dispose()
      }
    }
  }, [])

  if (hasError) {
    return <FallbackBackground />
  }

  return (
    <div className="fixed inset-0 z-0">
      {!isLoaded && <FallbackBackground />}

      <div
        ref={splineRef}
        className={`spline-container transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] pointer-events-none" />
    </div>
  )
}
