"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader2, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ContactSection() {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSplineLoaded, setIsSplineLoaded] = useState(false)
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false)

  useEffect(() => {
    // Check if we should attempt to load Spline (only on client-side)
    if (typeof window === "undefined") return

    const isDesktop = window.innerWidth >= 1024
    const hasGoodConnection = !navigator.connection || (navigator.connection as any).effectiveType === "4g"

    setShouldLoadSpline(isDesktop && hasGoodConnection)
  }, [])

  useEffect(() => {
    if (!shouldLoadSpline || typeof window === "undefined") return

    // Load the Spline viewer script if not already loaded
    if (!document.querySelector('script[src*="spline-viewer"]')) {
      const script = document.createElement("script")
      script.type = "module"
      script.src = "https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"

      script.onload = () => {
        setIsSplineLoaded(true)
      }

      document.head.appendChild(script)
    } else {
      setIsSplineLoaded(true)
    }
  }, [shouldLoadSpline])

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("Sending....")

    const formData = new FormData(event.target as HTMLFormElement)
    formData.append("access_key", "bb90fdb7-a06e-4f64-a537-0f34f6e6ba16")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult("Form Submitted Successfully")
        ;(event.target as HTMLFormElement).reset()
        setTimeout(() => setResult(""), 5000)
      } else {
        console.log("Error", data)
        setResult(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setResult("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harshku612810@gmail.com",
      href: "mailto:harshku612810@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6261345283",
      href: "tel:+916261345283",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/harshkumar35",
      href: "https://github.com/harshkumar35",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/harshk251103",
      href: "https://www.linkedin.com/in/harshk251103/",
    },
  ]

  const getResultIcon = () => {
    if (isSubmitting) return <Loader2 className="h-4 w-4 animate-spin" />
    if (result.includes("Successfully")) return <CheckCircle className="h-4 w-4 text-green-500" />
    if (result && !result.includes("Sending")) return <AlertCircle className="h-4 w-4 text-red-500" />
    return null
  }

  const getResultColor = () => {
    if (result.includes("Successfully")) return "text-green-400"
    if (result && !result.includes("Sending") && !isSubmitting) return "text-red-400"
    return "text-blue-400"
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        </div>

        {/* Spline 3D Scene */}
        {shouldLoadSpline && isSplineLoaded && (
          <div className="spline-container">
            {/* @ts-ignore - Custom element */}
            <spline-viewer
              url="https://prod.spline.design/C8-EtXQIWfr0ttP1/scene.splinecode"
              events-target="global"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
              }}
            />
          </div>
        )}

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Let's Connect</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                Whether you're looking for a developer, have a project in mind, or just want to connect, I'd love to
                hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg glass-card hover:bg-white/10 transition-colors group"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
                      <info.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{info.label}</p>
                      <p className="text-sm text-gray-400">{info.value}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-card border-white/20 hover:bg-white/10 text-white bg-transparent"
                  asChild
                >
                  <Link href="#resume">View Resumes</Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-card border-white/20 hover:bg-white/10 text-white bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/harshkumar35" target="_blank">
                    View GitHub
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-strong border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                  <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
                  <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        disabled={isSubmitting}
                        className="glass border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50 h-10 sm:h-11"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                        className="glass border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50 h-10 sm:h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                      Phone (Optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      disabled={isSubmitting}
                      className="glass border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-300">
                      Company/Organization (Optional)
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      disabled={isSubmitting}
                      className="glass border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, job opportunity, or just say hello!"
                      disabled={isSubmitting}
                      className="glass border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50 resize-none"
                    />
                  </div>

                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 p-3 rounded-lg glass ${getResultColor()}`}
                    >
                      {getResultIcon()}
                      <span className="text-sm font-medium">{result}</span>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20"
                    disabled={isSubmitting}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </div>
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    Your information is secure and will only be used to respond to your message.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
