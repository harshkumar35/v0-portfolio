"use client"

import { useEffect, useState } from "react"

export function FallbackBackground() {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number; duration: number }>
  >([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-900/20 to-pink-900/20">
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-500/5 to-purple-500/5 animate-pulse" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/10 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-500/10 rounded-full animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-pink-500/5 rounded-full animate-pulse" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise" />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
    </div>
  )
}
