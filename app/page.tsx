import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSectionOptimized } from "@/components/projects-section-optimized"
import { SkillsSection } from "@/components/skills-section"
import { ResumeSection } from "@/components/resume-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <ProjectsSectionOptimized />
      <SkillsSection />
      <ResumeSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  )
}
