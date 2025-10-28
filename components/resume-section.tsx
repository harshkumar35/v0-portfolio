"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Brain, Code, Cloud, Settings } from "lucide-react"
import Link from "next/link"

export function ResumeSection() {
  const [activeResume, setActiveResume] = useState("sde")

  const resumeTypes = [
    {
      id: "sde",
      title: "Software Development Engineer",
      subtitle: "Full Stack Development",
      description:
        "Comprehensive resume highlighting full-stack development skills, web technologies, and software engineering experience.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "Node.js", "TypeScript", "Next.js", "MongoDB", "PostgreSQL"],
      downloadUrl: "/resumes/harsh-kumar-sde-resume.pdf",
      highlights: [
        "Full Stack Web Development",
        "Modern JavaScript Frameworks",
        "Database Design & Management",
        "API Development & Integration",
      ],
    },
    {
      id: "devops",
      title: "DevOps Engineer",
      subtitle: "Infrastructure & Automation",
      description:
        "DevOps-focused resume emphasizing CI/CD, containerization, infrastructure automation, and cloud operations.",
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "GitLab CI"],
      downloadUrl: "/resumes/harsh-kumar-devops-resume.pdf",
      highlights: [
        "CI/CD Pipeline Development",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging",
      ],
    },
    {
      id: "aiml",
      title: "AI/ML Engineer",
      subtitle: "Artificial Intelligence & Machine Learning",
      description:
        "Specialized resume focusing on AI/ML projects, data science skills, and machine learning implementations.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
      downloadUrl: "/resumes/harsh-kumar-aiml-resume.pdf",
      highlights: [
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks",
        "Data Analysis & Visualization",
        "AI Model Development",
      ],
    },
    {
      id: "cloud",
      title: "Cloud Engineer",
      subtitle: "Cloud Architecture & Solutions",
      description:
        "Cloud-specialized resume showcasing AWS expertise, cloud architecture, and scalable cloud solutions.",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: ["AWS", "Azure", "GCP", "CloudFormation", "Lambda", "S3"],
      downloadUrl: "/resumes/harsh-kumar-cloud-resume.pdf",
      highlights: [
        "Cloud Architecture Design",
        "Serverless Computing",
        "Cloud Security & Compliance",
        "Cost Optimization",
      ],
    },
  ]

  const currentResume = resumeTypes.find((resume) => resume.id === activeResume) || resumeTypes[0]

  return (
    <section id="resume" className="py-20 px-8 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Specialized Resumes
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tailored resumes for different roles and specializations, highlighting relevant skills and experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Type Selector */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Choose Resume Type</h3>
              {resumeTypes.map((resume, index) => (
                <motion.div
                  key={resume.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start p-4 rounded-xl transition-all duration-300 ${
                      activeResume === resume.id
                        ? `bg-gradient-to-r ${resume.color} text-white shadow-lg`
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setActiveResume(resume.id)}
                  >
                    <resume.icon className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">{resume.title}</div>
                      <div className="text-xs opacity-80">{resume.subtitle}</div>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Resume Preview */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeResume}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass-card border-white/10 overflow-hidden">
                  <CardContent className="p-8">
                    {/* Resume Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-r ${currentResume.color} rounded-2xl`}>
                          <currentResume.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{currentResume.title}</h3>
                          <p className="text-blue-400">{currentResume.subtitle}</p>
                        </div>
                      </div>
                      <Button
                        className={`bg-gradient-to-r ${currentResume.color} hover:opacity-90 rounded-xl shadow-lg`}
                        asChild
                      >
                        <Link href={currentResume.downloadUrl} target="_blank">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Link>
                      </Button>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{currentResume.description}</p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Highlights</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {currentResume.highlights.map((highlight, index) => (
                          <motion.div
                            key={highlight}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center gap-3 glass rounded-xl p-3"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${currentResume.color} rounded-full`} />
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Featured Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentResume.skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className={`bg-gradient-to-r ${currentResume.color} text-white border-0`}
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Resume Preview */}
                    <div className="mt-8 p-4 glass rounded-xl">
                      <div className="flex items-center gap-2 mb-4">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-400 text-sm">Resume Preview</span>
                      </div>
                      <div className="bg-white/5 rounded-lg p-6 border border-white/10 max-h-96 overflow-y-auto">
                        {/* Resume Content Based on Selected Type */}
                        {activeResume === "devops" && (
                          <div className="space-y-4 text-sm">
                            <div className="text-center border-b border-white/10 pb-4">
                              <h1 className="text-lg font-bold text-white">Harsh Kumar</h1>
                              <p className="text-gray-300">harshku612810@gmail.com • +91 6261345283</p>
                              <p className="text-gray-400">LinkedIn • GitHub • LeetCode</p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Summary</h2>
                              <p className="text-gray-300 text-xs leading-relaxed">
                                DevOps Engineer with strong foundation in Linux, AWS, containers, CI/CD, and
                                observability. Experienced in automating cloud infrastructure using Terraform and
                                monitoring production-grade systems.
                              </p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Technical Skills</h2>
                              <div className="text-xs text-gray-300 space-y-1">
                                <p>
                                  <span className="text-blue-400">Languages:</span> Python, Bash, Go, Shell, JavaScript
                                </p>
                                <p>
                                  <span className="text-blue-400">Cloud Platforms:</span> AWS (ECS, EC2, RDS, Lambda),
                                  Oracle Cloud, GCP
                                </p>
                                <p>
                                  <span className="text-blue-400">Containerization:</span> Docker, Kubernetes, ECS
                                  Fargate, Helm
                                </p>
                                <p>
                                  <span className="text-blue-400">IaC / Automation:</span> Terraform, Ansible,
                                  CloudFormation
                                </p>
                                <p>
                                  <span className="text-blue-400">CI/CD & GitOps:</span> GitHub Actions, Jenkins,
                                  ArgoCD, AWS CodePipeline
                                </p>
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Key Projects</h2>
                              <div className="space-y-2 text-xs">
                                <div>
                                  <h3 className="font-medium text-gray-200">
                                    Prefect Worker on AWS ECS (IaC + Secrets)
                                  </h3>
                                  <p className="text-gray-400">
                                    Automated ECS Fargate infra using Terraform with VPC, Subnets, IAM, and ECS services
                                  </p>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-200">Cloud Monitoring System</h3>
                                  <p className="text-gray-400">
                                    Built Flask-based system to monitor DB and system metrics via cron-style health
                                    checks
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Certifications</h2>
                              <p className="text-xs text-gray-300">
                                AWS Cloud Practitioner • Oracle OCI Gen AI • Cisco Networking • GitHub Foundations
                              </p>
                            </div>
                          </div>
                        )}

                        {activeResume === "sde" && (
                          <div className="space-y-4 text-sm">
                            <div className="text-center border-b border-white/10 pb-4">
                              <h1 className="text-lg font-bold text-white">Harsh Kumar</h1>
                              <p className="text-gray-300">harshku612810@gmail.com • +91 6261345283</p>
                              <p className="text-gray-400">LinkedIn • GitHub • LeetCode</p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Summary</h2>
                              <p className="text-gray-300 text-xs leading-relaxed">
                                Computer Science graduate specializing in distributed systems and cloud-native
                                solutions. Proven expertise in building scalable AWS applications and developing
                                fault-tolerant systems.
                              </p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Technical Skills</h2>
                              <div className="text-xs text-gray-300 space-y-1">
                                <p>
                                  <span className="text-blue-400">Cloud:</span> AWS (EC2, S3, RDS, Lambda, DynamoDB,
                                  IAM), Azure, OCI
                                </p>
                                <p>
                                  <span className="text-blue-400">Languages:</span> Python, JavaScript, C++, TypeScript,
                                  Java
                                </p>
                                <p>
                                  <span className="text-blue-400">Frameworks:</span> React, Node.js, Next.js, Flask,
                                  REST APIs
                                </p>
                                <p>
                                  <span className="text-blue-400">Databases:</span> MongoDB, AWS RDS, DynamoDB, MySQL,
                                  Firebase
                                </p>
                                <p>
                                  <span className="text-blue-400">DevOps:</span> Docker, GitHub Actions, Jenkins, CI/CD
                                </p>
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Key Projects</h2>
                              <div className="space-y-2 text-xs">
                                <div>
                                  <h3 className="font-medium text-gray-200">
                                    LegalSathi - AI-Powered LegalTech Platform
                                  </h3>
                                  <p className="text-gray-400">
                                    AI-powered platform handling 5K+ daily queries with automated document generation
                                  </p>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-200">Cloud-Native Monitoring System</h3>
                                  <p className="text-gray-400">
                                    Automated system/database health checks improving operational efficiency by 60%
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Education</h2>
                              <p className="text-xs text-gray-300">
                                B.Tech, Computer Science & Business Systems - GGITS, Jabalpur (CGPA: 8.0/10)
                              </p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Achievements</h2>
                              <div className="text-xs text-gray-300 space-y-1">
                                <p>• Patent Holder: Smart Cap #387924-001 (IoT innovation)</p>
                                <p>• TCS CodeVita Season 12 - Global Rank 2100 (Top 1%)</p>
                                <p>• Lakshya Award 2025: "Best Student of the College"</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {(activeResume === "aiml" || activeResume === "cloud") && (
                          <div className="space-y-4 text-sm">
                            <div className="text-center border-b border-white/10 pb-4">
                              <h1 className="text-lg font-bold text-white">Harsh Kumar</h1>
                              <p className="text-gray-300">harshku612810@gmail.com • +91 6261345283</p>
                              <p className="text-gray-400">LinkedIn • GitHub • LeetCode</p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Summary</h2>
                              <p className="text-gray-300 text-xs leading-relaxed">
                                {activeResume === "aiml"
                                  ? "AI/ML Engineer with expertise in machine learning algorithms, deep learning, and data analysis. Experience in building intelligent systems and predictive models."
                                  : "Cloud Engineer specializing in AWS architecture, serverless computing, and scalable cloud solutions. Expert in cloud security and cost optimization."}
                              </p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Technical Skills</h2>
                              <div className="text-xs text-gray-300 space-y-1">
                                {activeResume === "aiml" ? (
                                  <>
                                    <p>
                                      <span className="text-blue-400">Languages:</span> Python, R, SQL, JavaScript
                                    </p>
                                    <p>
                                      <span className="text-blue-400">ML/AI:</span> TensorFlow, PyTorch, Scikit-learn,
                                      Pandas, NumPy
                                    </p>
                                    <p>
                                      <span className="text-blue-400">Data:</span> Data Analysis, Visualization,
                                      Statistical Modeling
                                    </p>
                                    <p>
                                      <span className="text-blue-400">Cloud:</span> AWS SageMaker, Google AI Platform,
                                      Azure ML
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <p>
                                      <span className="text-blue-400">Cloud Platforms:</span> AWS, Azure, Google Cloud
                                      Platform
                                    </p>
                                    <p>
                                      <span className="text-blue-400">Services:</span> EC2, S3, Lambda, RDS, DynamoDB,
                                      CloudFormation
                                    </p>
                                    <p>
                                      <span className="text-blue-400">Architecture:</span> Serverless, Microservices,
                                      Event-Driven
                                    </p>
                                    <p>
                                      <span className="text-blue-400">Security:</span> IAM, VPC, Security Groups,
                                      Compliance
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Relevant Experience</h2>
                              <div className="text-xs text-gray-300">
                                <p>Cloud Security Intern - Cisco Systems (Jul 2024 – Sep 2024)</p>
                                <p>Full Stack & DevOps Engineer Intern - DesignSphere Labs (Nov 2024 – Feb 2025)</p>
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Certifications</h2>
                              <p className="text-xs text-gray-300">
                                {activeResume === "aiml"
                                  ? "Oracle OCI Generative AI • AWS Cloud Practitioner • GitHub Foundations"
                                  : "AWS Cloud Practitioner • Oracle OCI • Cisco CCNA • GitHub Foundations"}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
