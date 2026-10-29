import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Mohamed Ali Qandil — Frontend Developer | React & Next.js",
  description:
    "Frontend Developer in Cairo building production web apps with React.js, Next.js, and TypeScript. Open to new opportunities.",
  keywords:
    "Frontend Developer, React.js, Next.js, TypeScript, JavaScript, Web Development, Cairo, Egypt, Hire Frontend Developer, Blue Ribbon",
  authors: [{ name: "Mohamed Ali Farag Qandil" }],
  metadataBase: new URL("https://protofolio-one-virid.vercel.app"),
  openGraph: {
    title: "Mohamed Ali Qandil — Frontend Developer | React & Next.js",
    description:
      "Frontend Developer specializing in React.js, Next.js, and TypeScript. Building production-grade web applications.",
    url: "https://protofolio-one-virid.vercel.app",
    siteName: "Mohamed Ali Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ali Qandil — Frontend Developer | React & Next.js",
    description:
      "Frontend Developer specializing in React.js, Next.js, and TypeScript. Open to new opportunities.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
