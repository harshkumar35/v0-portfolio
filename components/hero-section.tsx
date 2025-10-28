"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-2000 content-with-nav"
    >
      {/* Content Container - Reduced spacing for mobile */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Floating Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Main Hero Card */}
          <motion.div
            initial={{ opacity: 0, z: -100, rotateX: 15 }}
            animate={{ opacity: 1, z: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-strong rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 transform-3d animate-float order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <span className="text-xs sm:text-sm text-blue-400 font-medium">Full Stack Developer Portfolio</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                <span className="dynamic-text">Harsh</span>{" "}
                <span className="dynamic-text" style={{ animationDelay: "2s" }}>
                  Kumar
                </span>
              </h1>

              <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 lg:mb-8">
                <p className="text-base sm:text-lg lg:text-xl dynamic-text" style={{ animationDelay: "1s" }}>
                  Computer Science Graduate
                </p>
                <p className="text-xs sm:text-sm lg:text-lg text-gray-400">AI/ML • DevOps • Cloud • SRE • Networking</p>
              </div>

              <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Passionate about building scalable applications, implementing robust cloud infrastructure, and exploring
                the frontiers of AI/ML technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="magnetic-button bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/20 text-sm sm:text-base"
                  onClick={scrollToAbout}
                >
                  Explore My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="magnetic-button glass-card border-white/20 hover:bg-white/10 rounded-xl sm:rounded-2xl bg-transparent text-sm sm:text-base"
                  asChild
                >
                  <Link href="/resume.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Info Cards - Reduced spacing */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 order-1 lg:order-2">
            {/* Quick Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 tilt-card"
            >
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400">8.0</div>
                  <div className="text-xs text-gray-400">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400">3+</div>
                  <div className="text-xs text-gray-400">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">2100</div>
                  <div className="text-xs text-gray-400">CodeVita Rank</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400">4+</div>
                  <div className="text-xs text-gray-400">Major Projects</div>
                </div>
              </div>
            </motion.div>

            {/* Current Focus Card */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 tilt-card"
            >
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                Currently Working On
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm text-gray-300">LegalSathi AI Platform</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm text-gray-300">Cloud Monitoring System</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm text-gray-300">DevOps Automation</span>
                </div>
              </div>
            </motion.div>

            {/* Patent Card */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 tilt-card"
            >
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                Patent Holder
              </h3>
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full" />
                  <span className="text-xs sm:text-sm text-gray-300">Smart Cap Design Patent</span>
                </div>
                <p className="text-xs text-gray-400">Patent #387924-001</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Subtle Floating Elements - Reduced intensity */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-2 h-2 sm:w-4 sm:h-4 bg-blue-400/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 left-1/3 w-3 h-3 sm:w-6 sm:h-6 bg-purple-400/15 rounded-full blur-sm"
        />
      </div>
    </section>
  )
}
