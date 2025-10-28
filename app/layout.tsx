import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThinNavigation } from "@/components/thin-navigation"
import { SplineBackgroundFallback } from "@/components/spline-background-fallback"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Harsh Kumar - Full Stack Developer & Cloud Engineer",
  description:
    "Computer Science Graduate specializing in Full Stack Development, AI/ML, DevOps, Cloud Engineering, and Networking. AWS Certified with expertise in React, Node.js, Docker, Kubernetes.",
  keywords:
    "Full Stack Developer, DevOps Engineer, Cloud Engineer, AI/ML, React, Node.js, AWS, Docker, Kubernetes, CCNA",
  authors: [{ name: "Harsh Kumar" }],
  openGraph: {
    title: "Harsh Kumar - Full Stack Developer & Cloud Engineer",
    description:
      "Computer Science Graduate specializing in Full Stack Development, AI/ML, DevOps, Cloud Engineering, and Networking.",
    url: "https://harshkumar.dev",
    siteName: "Harsh Kumar Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harsh Kumar - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Kumar - Full Stack Developer & Cloud Engineer",
    description:
      "Computer Science Graduate specializing in Full Stack Development, AI/ML, DevOps, Cloud Engineering, and Networking.",
    images: ["/og-image.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} ${inter.variable} bg-black overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen relative">
            {/* Spline 3D Background with Fallback */}
            <SplineBackgroundFallback />

            <ThinNavigation />
            <main className="relative z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
