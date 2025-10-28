"use client"

import { useState, lazy, Suspense, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Sparkles, Zap, Shield, Brain, Rocket, Code2, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"

// Lazy load the iframe preview component
const LazyIframePreview = lazy(() => import("./iframe-preview"))

export function ProjectsSectionOptimized() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [previewProject, setPreviewProject] = useState<number | null>(null)
  const [loadedPreviews, setLoadedPreviews] = useState<Set<number>>(new Set())
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on mobile after component mounts
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const projects = [
    {
      id: 1,
      title: "LegalSathi",
      subtitle: "AI-Powered LegalTech Platform",
      description:
        "Revolutionary AI platform democratizing legal assistance through intelligent document analysis and automated legal advice.",
      problem: "Legal services are expensive and inaccessible to many people",
      solution: "Built an AI-powered platform that provides affordable legal assistance",
      impact: "Reduced legal consultation costs by 70% for users",
      techStack: ["React.js", "Next.js", "Supabase", "Redis", "AI/ML", "Tailwind"],
      liveDemo: "https://v0-legalsathi.vercel.app/",
      github: "https://github.com/harshkumar35/legalsathi",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
      image: "/placeholder.svg?height=200&width=350&text=LegalSathi+AI+Platform",
    },
    {
      id: 2,
      title: "Cloud Monitoring System",
      subtitle: "Full CI/CD with Docker & K8s",
      description:
        "Comprehensive cloud infrastructure monitoring solution with automated alerts and real-time dashboards.",
      problem: "Lack of real-time visibility into cloud infrastructure health",
      solution: "Developed a monitoring system with automated alerts and dashboards",
      impact: "Improved system uptime by 99.9% and reduced incident response time by 60%",
      techStack: ["Docker", "Kubernetes", "Prometheus", "Grafana", "AWS", "CI/CD"],
      liveDemo: null,
      github: "https://github.com/harshkumar35/Cloud-Native-Monitoring-Application",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500",
      image: "/placeholder.svg?height=200&width=350&text=Cloud+Monitoring+Dashboard",
    },
    {
      id: 3,
      title: "Prefect ECS Deployment",
      subtitle: "Terraform + AWS Infrastructure",
      description:
        "Automated deployment system for Prefect workflow orchestration on AWS ECS using Terraform for infrastructure as code.",
      problem: "Manual deployment processes were time-consuming and error-prone",
      solution: "Automated the entire deployment pipeline using Terraform and AWS ECS",
      impact: "Reduced deployment time from hours to minutes with zero-downtime deployments",
      techStack: ["Terraform", "AWS ECS", "Prefect", "Python", "Docker", "IAC"],
      liveDemo: null,
      github: "https://github.com/harshkumar35/prefect-ecs-worker",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      image: "/placeholder.svg?height=200&width=350&text=Prefect+ECS+Architecture",
    },
    {
      id: 4,
      title: "NGINX Reverse Proxy",
      subtitle: "Golang + Python Microservices",
      description:
        "High-performance reverse proxy system with Golang and Python microservices, containerized with Docker.",
      problem: "Need for efficient load balancing and secure API gateway",
      solution: "Built a custom reverse proxy with advanced routing and security features",
      impact: "Improved API response times by 40% and enhanced security posture",
      techStack: ["Golang", "Python", "NGINX", "Docker", "Microservices", "Redis"],
      liveDemo: null,
      github: "https://github.com/harshkumar35/Project-submission",
      icon: Sparkles,
      gradient: "from-orange-500 to-red-500",
      image: "/placeholder.svg?height=200&width=350&text=NGINX+Proxy+System",
    },
  ]

  const handlePreviewLoad = (projectId: number) => {
    setLoadedPreviews((prev) => new Set([...prev, projectId]))
  }

  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stylish Project Header - Reduced flashy effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 relative"
        >
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
          </div>

          {/* Subtle Floating Icons - Reduced animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -top-4 -left-4 text-blue-400/20"
          >
            <Code2 size={isMobile ? 16 : 20} />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -top-2 -right-8 text-purple-400/20"
          >
            <Rocket size={isMobile ? 14 : 16} />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Featured
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            {/* Simple Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: isMobile ? "60px" : "100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2"
            >
              A showcase of my best work across{" "}
              <span className="text-blue-400 font-semibold">Full Stack Development</span>,{" "}
              <span className="text-purple-400 font-semibold">DevOps</span>,{" "}
              <span className="text-pink-400 font-semibold">Cloud Engineering</span>, and{" "}
              <span className="text-cyan-400 font-semibold">AI/ML</span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Optimized Project Grid - Reduced gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="perspective-1000"
            >
              <Card className="glass-card border-white/10 overflow-hidden h-full transform-3d transition-all duration-300 hover:scale-105">
                {/* Optimized Project Header */}
                <div className="relative overflow-hidden h-24 sm:h-32 lg:h-40">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15 z-10`} />

                  {/* Static Image Preview */}
                  <div className="relative w-full h-full">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Live Demo Button */}
                    {project.liveDemo && (
                      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 flex items-center gap-1 glass-strong rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1 z-30">
                        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-white font-medium">LIVE</span>
                      </div>
                    )}

                    {/* Preview Button */}
                    {project.liveDemo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-1 sm:top-2 right-1 sm:right-2 glass-strong rounded-full p-1 sm:p-1.5 z-30 hover:bg-white/20"
                        onClick={() => {
                          setPreviewProject(previewProject === project.id ? null : project.id)
                          if (!loadedPreviews.has(project.id)) {
                            handlePreviewLoad(project.id)
                          }
                        }}
                      >
                        <Eye className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </Button>
                    )}
                  </div>

                  {/* Floating Icon */}
                  <motion.div
                    animate={hoveredProject === project.id ? { scale: 1.05, y: -2 } : { scale: 1, y: 0 }}
                    className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 glass-strong rounded-lg sm:rounded-xl p-1 sm:p-2 z-30"
                  >
                    <project.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </motion.div>
                </div>

                <CardContent className="p-2 sm:p-3 lg:p-4 space-y-1.5 sm:space-y-2 lg:space-y-3">
                  {/* Compact Title and Actions */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-0.5 sm:mb-1 truncate">
                        {project.title}
                      </h3>
                      <p className="text-xs text-blue-400 truncate">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-0.5 sm:gap-1 ml-1 sm:ml-2">
                      {project.liveDemo && (
                        <Button variant="ghost" size="sm" className="p-0.5 sm:p-1 rounded-lg" asChild>
                          <Link href={project.liveDemo} target="_blank">
                            <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          </Link>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="p-0.5 sm:p-1 rounded-lg" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>

                  {/* Compact Tech Stack */}
                  <div className="flex flex-wrap gap-0.5 sm:gap-1">
                    {project.techStack.slice(0, isMobile ? 2 : 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs px-1 sm:px-1.5 lg:px-2 py-0.5 border-white/20 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > (isMobile ? 2 : 3) && (
                      <Badge
                        variant="outline"
                        className="text-xs px-1 sm:px-1.5 lg:px-2 py-0.5 border-white/20 text-gray-300"
                      >
                        +{project.techStack.length - (isMobile ? 2 : 3)}
                      </Badge>
                    )}
                  </div>

                  {/* Lazy-loaded Live Preview */}
                  <AnimatePresence>
                    {previewProject === project.id && project.liveDemo && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "200px" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden rounded-lg border border-white/20 bg-white"
                      >
                        <Suspense
                          fallback={
                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                            </div>
                          }
                        >
                          <LazyIframePreview
                            src={project.liveDemo}
                            title={project.title}
                            onClose={() => setPreviewProject(null)}
                          />
                        </Suspense>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover Details */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="glass-card rounded-lg p-2 sm:p-3 space-y-1 sm:space-y-2 text-xs">
                          <div>
                            <span className="font-semibold text-green-400">Impact:</span>
                            <p className="text-gray-400 mt-1">{project.impact}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stylish View All Projects Button - Reduced flashy effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-6 sm:mt-8 lg:mt-12"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 shadow-lg shadow-blue-500/20 transition-all duration-300"
              asChild
            >
              <Link href="https://github.com/harshkumar35" target="_blank">
                {/* Content */}
                <div className="relative flex items-center gap-2 sm:gap-3">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-6 transition-transform duration-300" />
                  <span className="font-semibold text-sm sm:text-base lg:text-lg">View All Projects</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
