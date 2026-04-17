import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohamed Ali Qandil — Frontend Developer | React & Next.js",
  description:
    "Frontend Developer specializing in React.js, Next.js, and TypeScript. Building fast, accessible, and pixel-perfect web applications. Open to new opportunities.",
  keywords: "Frontend Developer, React.js, Next.js, TypeScript, JavaScript, Web Development, Cairo, Egypt, Hire Frontend Developer",
  authors: [{ name: "Mohamed Ali Farag Qandil" }],
  openGraph: {
    title: "Mohamed Ali Qandil — Frontend Developer | React & Next.js",
    description: "Frontend Developer specializing in React.js, Next.js, and TypeScript. Building production-grade web applications.",
    url: "https://mohamedaliqandil.dev",
    siteName: "Mohamed Ali Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ali Qandil — Frontend Developer | React & Next.js",
    description: "Frontend Developer specializing in React.js, Next.js, and TypeScript. Open to new opportunities.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
