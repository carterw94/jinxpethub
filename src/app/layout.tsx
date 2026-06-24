import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Sans, Space_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Jinx Pet Hub — Pet Education & Care",
    template: "%s | Jinx Pet Hub",
  },
  description:
    "Your friendly guide to cats, hamsters, guinea pigs, and rabbits. Learn about breeds, care, and history — plus follow Jinx the hamster on our blog.",
  metadataBase: new URL("https://jinxpethub.wiki"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${spaceMono.variable} h-full`}
    >
      <body className="font-sans antialiased min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
