"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Home, User, Code, Briefcase, Award, Mail, Menu, X, Download } from "lucide-react"
import Link from "next/link"

export function SpatialNavigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isExpanded, setIsExpanded] = useState(false)

  const navItems = [
    { id: "home", label: "Home", icon: Home, href: "#home" },
    { id: "about", label: "Personal", icon: User, href: "#about" },
    { id: "skills", label: "Skills", icon: Code, href: "#skills" },
    { id: "projects", label: "Projects", icon: Briefcase, href: "#projects" },
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
    <>
      {/* Mobile Menu Toggle */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-6 left-6 z-50 md:hidden glass-card"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Spatial Navigation Sidebar */}
      <AnimatePresence>
        <motion.nav
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: isExpanded || window.innerWidth >= 768 ? 0 : -100,
            opacity: isExpanded || window.innerWidth >= 768 ? 1 : 0,
          }}
          exit={{ x: -100, opacity: 0 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-40 glass-strong rounded-3xl p-4 w-64"
        >
          {/* Profile Section */}
          <motion.div
            className="text-center mb-8 p-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-3 flex items-center justify-center text-2xl font-bold">
              HK
            </div>
            <h3 className="font-semibold text-white">Harsh Kumar</h3>
            <p className="text-xs text-gray-400 mt-1">Full Stack Developer</p>
          </motion.div>

          {/* Navigation Items */}
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-left p-3 rounded-2xl transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-white/10 text-white glow-blue"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => {
                      setActiveSection(item.id)
                      setIsExpanded(false)
                    }}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom Actions */}
          <motion.div
            className="mt-8 space-y-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full rounded-2xl glass-card border-white/20 hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-3 w-3" />
                Resume
              </Link>
            </Button>
            <div className="flex justify-center">
              <ModeToggle />
            </div>
          </motion.div>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Overlay */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  )
}
