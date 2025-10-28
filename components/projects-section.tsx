"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Sparkles, Zap, Shield, Brain, Maximize2, Rocket, Code2, Layers } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [previewProject, setPreviewProject] = useState<number | null>(null)

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
      liveDemo: "https://monitoring.harshkumar.dev",
      github: "https://github.com/harshkumar35/cloud-monitoring",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500",
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
      github: "https://github.com/harshkumar35/prefect-ecs-terraform",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
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
      github: "https://github.com/harshkumar35/nginx-reverse-proxy",
      icon: Sparkles,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stylish Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -top-4 -left-4 text-blue-400/30"
          >
            <Code2 size={24} />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -top-2 -right-8 text-purple-400/30"
          >
            <Rocket size={20} />
          </motion.div>
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-8 right-4 text-pink-400/30"
          >
            <Layers size={18} />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Featured
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>

              {/* Decorative Elements */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
              <motion.div
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              />
            </h2>

            {/* Animated Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full relative"
            >
              <motion.div
                animate={{ x: [-20, 20, -20] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-0 left-0 w-6 h-1 bg-white/50 rounded-full blur-sm"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              A showcase of my best work across{" "}
              <span className="text-blue-400 font-semibold">Full Stack Development</span>,{" "}
              <span className="text-purple-400 font-semibold">DevOps</span>,{" "}
              <span className="text-pink-400 font-semibold">Cloud Engineering</span>, and{" "}
              <span className="text-cyan-400 font-semibold">AI/ML</span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Smaller Project Grid */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="perspective-1000"
            >
              <Card className="glass-card border-white/10 overflow-hidden h-full transform-3d transition-all duration-500 hover:scale-105 tilt-card">
                {/* Compact Project Header */}
                <div className="relative overflow-hidden h-40">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`} />

                  {/* Live Website Preview */}
                  {project.liveDemo ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={project.liveDemo}
                        className="w-full h-full border-0 bg-white"
                        title={`${project.title} Preview`}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        style={{
                          transform: "scale(0.7)",
                          transformOrigin: "top left",
                          width: "142.86%",
                          height: "142.86%",
                        }}
                      />

                      <div
                        className="absolute inset-0 bg-transparent cursor-pointer z-20"
                        onClick={() => window.open(project.liveDemo, "_blank")}
                      />

                      {/* Live indicator */}
                      <div className="absolute top-2 left-2 flex items-center gap-1 glass-strong rounded-full px-2 py-1 z-30">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-white font-medium">LIVE</span>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 glass-strong rounded-full p-1.5 z-30 hover:bg-white/20"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.liveDemo, "_blank")
                        }}
                      >
                        <Maximize2 className="h-3 w-3 text-white" />
                      </Button>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <project.icon className="h-12 w-12 text-white/50" />
                    </div>
                  )}

                  {/* Floating Icon */}
                  <motion.div
                    animate={
                      hoveredProject === project.id ? { scale: 1.1, rotate: 5, y: -3 } : { scale: 1, rotate: 0, y: 0 }
                    }
                    className="absolute bottom-2 right-2 glass-strong rounded-xl p-2 z-30"
                  >
                    <project.icon className="h-4 w-4 text-white" />
                  </motion.div>
                </div>

                <CardContent className="p-4 space-y-3">
                  {/* Compact Title and Actions */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-1 truncate">{project.title}</h3>
                      <p className="text-xs text-blue-400 truncate">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-1 ml-2">
                      {project.liveDemo && (
                        <Button variant="ghost" size="sm" className="p-1.5 rounded-lg" asChild>
                          <Link href={project.liveDemo} target="_blank">
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="p-1.5 rounded-lg" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">{project.description}</p>

                  {/* Compact Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5 border-white/20 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-0.5 border-white/20 text-gray-300">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Hover Details */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="glass-card rounded-xl p-3 space-y-2 text-xs">
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

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="magnetic-button glass-card border-white/20 hover:bg-white/10 rounded-2xl bg-transparent group"
            asChild
          >
            <Link href="https://github.com/harshkumar35" target="_blank">
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
