"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      description:
        "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"],
      logo: "/placeholder.svg?height=60&width=60&text=AWS",
    },
    {
      title: "Oracle Generative AI Professional",
      issuer: "Oracle",
      date: "2024",
      description:
        "Comprehensive knowledge of generative AI technologies, implementation strategies, and Oracle AI services.",
      skills: ["Generative AI", "Machine Learning", "Oracle Cloud", "AI Ethics"],
      logo: "/placeholder.svg?height=60&width=60&text=Oracle",
    },
    {
      title: "CCNA (Cisco Certified Network Associate)",
      issuer: "Cisco",
      date: "2023",
      description: "Networking fundamentals, IP connectivity, IP services, security fundamentals, and automation.",
      skills: ["Networking", "Routing & Switching", "Network Security", "Troubleshooting"],
      logo: "/placeholder.svg?height=60&width=60&text=Cisco",
    },
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      date: "2024",
      description: "Fundamental knowledge of GitHub platform, version control, collaboration, and project management.",
      skills: ["Git", "Version Control", "Collaboration", "Project Management"],
      logo: "/placeholder.svg?height=60&width=60&text=GitHub",
    },
  ]

  const achievements = [
    {
      title: "TCS CodeVita Global Rank 2100",
      description: "Achieved global rank 2100 out of 300,000+ participants in TCS CodeVita programming contest",
      year: "2024",
    },
  ]

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and competitive programming achievements that validate my expertise
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 bg-primary/10 rounded-full w-fit">
                    <img
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.issuer} logo`}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{cert.title}</CardTitle>
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    {cert.date}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground text-center">{cert.description}</p>

                  <div className="flex flex-wrap gap-1 justify-center">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Competitive Programming</h3>
          <div className="max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-yellow-500/10 rounded-full">
                        <Award className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{achievement.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{achievement.description}</p>
                        <Badge variant="outline">{achievement.year}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
