"use client"

import { useEffect, useState } from "react"
import { SplineBackground } from "./spline-background"
import { SplineBackgroundWeb } from "./spline-background-web"
import { FallbackBackground } from "./fallback-background"

export function SplineBackgroundHybrid() {
  const [method, setMethod] = useState<"runtime" | "web" | "fallback">("runtime")
  const [hasRuntimeError, setHasRuntimeError] = useState(false)
  const [hasWebError, setHasWebError] = useState(false)

  useEffect(() => {
    // Try to detect the best method
    const detectMethod = async () => {
      try {
        // First try to load the runtime
        await import("@splinetool/runtime")
        setMethod("runtime")
      } catch (error) {
        console.log("Runtime not available, trying web component")
        setMethod("web")
      }
    }

    detectMethod()
  }, [])

  // Handle runtime errors
  const handleRuntimeError = () => {
    setHasRuntimeError(true)
    setMethod("web")
  }

  // Handle web component errors
  const handleWebError = () => {
    setHasWebError(true)
    setMethod("fallback")
  }

  if (method === "fallback" || (hasRuntimeError && hasWebError)) {
    return <FallbackBackground />
  }

  if (method === "web" || hasRuntimeError) {
    return <SplineBackgroundWeb />
  }

  return <SplineBackground />
}
