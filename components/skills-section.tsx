"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Globe, Server, Cloud, Terminal, Database, ChevronRight, Sparkles, Zap } from "lucide-react"

export function SkillsSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const skillCategories = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "Python", level: 90, icon: "🐍" },
        { name: "C++", level: 90, icon: "💻" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "Go", level: 75, icon: "🐹" },
        { name: "Shell/Bash", level: 85, icon: "🐚" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "Vue.js", level: 75, icon: "💚" },
        { name: "Sass/SCSS", level: 80, icon: "🎨" },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: Server,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Flask", level: 85, icon: "🌶️" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: "REST APIs", level: 92, icon: "🔗" },
        { name: "GraphQL", level: 70, icon: "📊" },
        { name: "Microservices", level: 80, icon: "🔧" },
      ],
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-sky-500 to-blue-500",
      skills: [
        { name: "AWS", level: 85, icon: "☁️" },
        { name: "Vercel", level: 90, icon: "▲" },
        { name: "Supabase", level: 85, icon: "⚡" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "Azure", level: 70, icon: "🌐" },
        { name: "GCP", level: 65, icon: "🌈" },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Tools",
      icon: Terminal,
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Docker", level: 90, icon: "🐳" },
        { name: "Kubernetes", level: 85, icon: "☸️" },
        { name: "CI/CD", level: 85, icon: "🔄" },
        { name: "Terraform", level: 80, icon: "🏗️" },
        { name: "NGINX", level: 80, icon: "🌐" },
        { name: "Git/GitHub", level: 95, icon: "🐙" },
      ],
    },
    {
      id: "database",
      title: "Databases & Storage",
      icon: Database,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "Redis", level: 75, icon: "🔴" },
        { name: "MySQL", level: 78, icon: "🐬" },
        { name: "DynamoDB", level: 70, icon: "⚡" },
        { name: "SQLite", level: 85, icon: "💎" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-8 sm:py-12 lg:py-20 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Background Elements - No flashy effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-full" />
          <p className="text-xs sm:text-sm lg:text-lg text-gray-400 max-w-2xl mx-auto px-2">
            Comprehensive technical expertise across modern development stack
          </p>
        </motion.div>

        {/* Compact Skills Grid - Reduced gaps for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="glass-card border-white/10 overflow-hidden h-full group cursor-pointer">
                <CardContent className="p-3 sm:p-4 lg:p-6 relative">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className={`p-1.5 sm:p-2 lg:p-3 bg-gradient-to-r ${category.color} rounded-lg sm:rounded-xl`}
                      >
                        <category.icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm lg:text-lg font-bold text-white leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs text-gray-400">{category.skills.length} technologies</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                      className="p-1 sm:p-2 rounded-lg hover:bg-white/10"
                    >
                      <motion.div
                        animate={{ rotate: expandedCategory === category.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                      </motion.div>
                    </Button>
                  </div>

                  {/* Auto-scrolling Skills Preview - Reduced animation intensity */}
                  <div className="h-12 sm:h-16 lg:h-20 overflow-hidden relative rounded-lg bg-black/20">
                    <motion.div
                      className="flex flex-col space-y-1 sm:space-y-2 absolute"
                      animate={{
                        y: expandedCategory === category.id ? 0 : [-10, -(category.skills.length * 30 + 10), -10],
                      }}
                      transition={{
                        duration: expandedCategory === category.id ? 0 : category.skills.length * 3,
                        repeat: expandedCategory === category.id ? 0 : Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      {[...category.skills, ...category.skills].map((skill, skillIndex) => (
                        <div
                          key={`${skill.name}-${skillIndex}`}
                          className="flex items-center gap-2 px-2 sm:px-3 py-1 text-xs sm:text-sm"
                        >
                          <span className="text-sm sm:text-base lg:text-lg">{skill.icon}</span>
                          <span className="text-gray-300 font-medium truncate flex-1">{skill.name}</span>
                          <span className="text-gray-500 text-xs">{skill.level}%</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Expanded Skills List */}
                  <AnimatePresence>
                    {expandedCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 overflow-hidden"
                      >
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: skillIndex * 0.03 }}
                            className="flex items-center justify-between p-2 sm:p-3 glass rounded-lg"
                          >
                            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                              <span className="text-base sm:text-lg lg:text-xl">{skill.icon}</span>
                              <span className="text-xs sm:text-sm lg:text-base font-medium text-white truncate">
                                {skill.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <div className="w-8 sm:w-12 lg:w-16 h-1 sm:h-1.5 bg-white/20 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 0.8, delay: skillIndex * 0.05 }}
                                />
                              </div>
                              <span className="text-xs text-gray-400 w-6 sm:w-8 text-right">{skill.level}%</span>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Subtle Hover Effect - No flashy lights */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-3 transition-opacity duration-300 rounded-lg pointer-events-none`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats - Reduced spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-6"
        >
          {[
            { label: "Languages", count: "7+", icon: Code2, color: "from-blue-500 to-cyan-500" },
            { label: "Frameworks", count: "15+", icon: Sparkles, color: "from-green-500 to-emerald-500" },
            { label: "Cloud Tools", count: "12+", icon: Cloud, color: "from-sky-500 to-blue-500" },
            { label: "Experience", count: "3+", icon: Zap, color: "from-orange-500 to-red-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="glass-card border-white/10 p-2 sm:p-3 lg:p-4 hover:scale-105 transition-transform duration-300">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r ${stat.color} rounded-lg sm:rounded-xl mx-auto mb-1 sm:mb-2 flex items-center justify-center`}
                >
                  <stat.icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div className="text-sm sm:text-lg lg:text-2xl font-bold text-white mb-1">{stat.count}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
