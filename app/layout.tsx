import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohamed Ali Farag Qandil - Frontend Developer",
  description:
    "Junior Frontend Developer specializing in React.js, Next.js, and modern web technologies. Building fast, accessible, and responsive web applications.",
  keywords: "Frontend Developer, React.js, Next.js, TypeScript, JavaScript, Web Development, Cairo, Egypt",
  authors: [{ name: "Mohamed Ali Farag Qandil" }],
  openGraph: {
    title: "Mohamed Ali Farag Qandil - Frontend Developer",
    description: "Junior Frontend Developer specializing in React.js, Next.js, and modern web technologies.",
    url: "https://mohamedaliqandil.dev",
    siteName: "Mohamed Ali Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ali Farag Qandil - Frontend Developer",
    description: "Junior Frontend Developer specializing in React.js, Next.js, and modern web technologies.",
  },
    generator: 'v0.dev'
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
