"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Home, User, Code, Briefcase, Award, Mail, Download, Github, Linkedin, FileText } from "lucide-react"
import Link from "next/link"

export function ThinNavigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isHovered, setIsHovered] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Set initial window width after component mounts
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () =>
      window.removeEventListener(
        "resize",

        handleResize,
      )
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: Home, href: "#home" },
    { id: "about", label: "Personal", icon: User, href: "#about" },
    { id: "projects", label: "Projects", icon: Briefcase, href: "#projects" },
    { id: "skills", label: "Skills", icon: Code, href: "#skills" },
    { id: "resume", label: "Resume", icon: FileText, href: "#resume" },
    { id: "certifications", label: "Career", icon: Award, href: "#certifications" },
    { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed left-0 top-0 h-full z-50 flex"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Visible Icon Strip - Responsive sizing */}
      <div className="flex flex-col justify-center py-3 sm:py-4 lg:py-8 space-y-1.5 sm:space-y-2 lg:space-y-4">
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className="relative"
          >
            <Link href={item.href}>
              <motion.div
                className={`glass-strong rounded-lg sm:rounded-xl lg:rounded-2xl p-1.5 sm:p-2 lg:p-3 ml-1.5 sm:ml-2 lg:ml-4 cursor-pointer transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-lg shadow-blue-500/15 scale-105"
                    : "hover:bg-white/8 hover:scale-105"
                }`}
                whileHover={{ scale: 1.08, x: 3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon
                  className={`h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 transition-colors duration-300 ${
                    activeSection === item.id ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`}
                />
              </motion.div>
            </Link>

            {/* Active indicator */}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 sm:w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Expandable Panel - Responsive width */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: windowWidth < 375 ? 200 : windowWidth < 640 ? 220 : windowWidth < 768 ? 240 : 280,
              opacity: 1,
            }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="glass-strong border-r border-white/8 overflow-hidden"
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="p-3 sm:p-4 lg:p-6 h-full flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8"
            >
              {/* Profile Section - Responsive sizing */}
              <motion.div
                className="text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center text-base sm:text-lg lg:text-xl font-bold shadow-lg shadow-blue-500/15">
                  HK
                </div>
                <h3 className="font-semibold text-white text-sm sm:text-base lg:text-lg">Harsh Kumar</h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Full Stack Developer</p>
                <div className="flex justify-center mt-2 sm:mt-3">
                  <span className="px-2 sm:px-3 py-1 bg-green-500/15 text-green-400 rounded-full text-xs font-medium">
                    Available for Work
                  </span>
                </div>
              </motion.div>

              {/* Navigation Items with Labels - Reduced spacing */}
              <div className="space-y-1 sm:space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={`expanded-${item.id}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * index + 0.15 }}
                  >
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-left p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-white shadow-lg shadow-blue-500/8 border border-blue-500/20"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                        onClick={() => setActiveSection(item.id)}
                      >
                        <item.icon className="mr-2 sm:mr-3 lg:mr-4 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                        <span className="font-medium text-xs sm:text-sm lg:text-base">{item.label}</span>
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats - Compact for mobile */}
              <motion.div
                className="glass-card rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                  <div>
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-blue-400">8.0</div>
                    <div className="text-xs text-gray-400">CGPA</div>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-purple-400">3+</div>
                    <div className="text-xs text-gray-400">Certs</div>
                  </div>
                </div>
              </motion.div>

              {/* Social Links - Compact spacing */}
              <motion.div
                className="flex justify-center space-x-2 sm:space-x-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-lg sm:rounded-xl p-2 sm:p-3 glass-card hover:bg-white/8 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="https://github.com/harshkumar35" target="_blank">
                    <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-lg sm:rounded-xl p-2 sm:p-3 glass-card hover:bg-white/8 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/harshk251103/" target="_blank">
                    <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-lg sm:rounded-xl p-2 sm:p-3 glass-card hover:bg-white/8 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="mailto:harshku612810@gmail.com">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Bottom Actions - Compact */}
              <motion.div
                className="space-y-2 sm:space-y-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  className="w-full rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/15 transition-all duration-300 hover:scale-102 text-xs sm:text-sm py-2 sm:py-3"
                  asChild
                >
                  <Link href="#resume">
                    <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    View Resumes
                  </Link>
                </Button>
                <div className="flex justify-center">
                  <ModeToggle />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
