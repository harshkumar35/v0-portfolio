"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Cloud, Brain, Network, GraduationCap, Award } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building end-to-end applications with modern technologies",
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Implementing scalable infrastructure and CI/CD pipelines",
    },
    {
      icon: Brain,
      title: "AI/ML Engineering",
      description: "Developing intelligent solutions and data-driven applications",
    },
    {
      icon: Network,
      title: "Networking",
      description: "CCNA certified with expertise in network architecture",
    },
  ]

  const education = [
    {
      degree: "B.Tech Computer Science",
      institution: "GGITS, Jabalpur (RGPV)",
      year: "2025",
      cgpa: "8.0",
      icon: GraduationCap,
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Kendriya Vidyalaya No. 2",
      year: "2021",
      cgpa: "75%",
      icon: Award,
    },
  ]

  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold dynamic-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">My Journey</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm a passionate Computer Science graduate with a deep fascination for technology and its potential to
                  solve real-world problems. My journey began with curiosity about how software systems work, which led
                  me to explore the entire technology stack from frontend interfaces to cloud infrastructure.
                </p>
                <p>
                  With hands-on experience in Full Stack Development, DevOps practices, Cloud Engineering, and AI/ML
                  implementations, I bring a holistic approach to building robust, scalable solutions. I'm particularly
                  excited about the intersection of AI and cloud technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Problem Solver", "Team Player", "Continuous Learner", "Innovation Driven"].map((trait) => (
                  <span key={trait} className="px-3 py-1 glass text-sm font-medium rounded-full text-blue-300">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Education</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                      <edu.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{edu.degree}</h4>
                      <p className="text-sm text-gray-400">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">{edu.year}</span>
                        <span className="text-sm font-medium text-green-400">{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="perspective-1000"
              >
                <Card className="glass-card border-white/10 h-full hover:shadow-lg transition-all duration-300 tilt-card">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl w-fit mx-auto mb-3 sm:mb-4">
                      <highlight.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2 text-white text-sm sm:text-base">{highlight.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
