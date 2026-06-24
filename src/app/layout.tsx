import type { Metadata } from "next"
import { Fredoka, Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
})

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: {
    default: "Jinx Pet Hub — Pet Education & Care",
    template: "%s | Jinx Pet Hub",
  },
  description:
    "Your friendly guide to cats, hamsters, guinea pigs, and rabbits. Breeds, care guides, and the adventures of Jinx the hamster.",
  metadataBase: new URL("https://jinxpethub.wiki"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} h-full`}>
      <body className="font-sans antialiased min-h-full flex flex-col bg-canvas text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
