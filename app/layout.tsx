import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Analytics } from "@vercel/analytics/next"


// const inter = Inter({ subsets: ["latin"] })

const productSans = localFont({
  src: [
    {
      path: "../public/fonts/Product Sans Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Product Sans Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Product Sans Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Product Sans Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-productsans",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Women Techmakers - Empowering Women in Tech",
  description: "Join our community of women in technology. Learn, grow, and make an impact together.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={productSans.variable}>
        <ScrollToTop />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
