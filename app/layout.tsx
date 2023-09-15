import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"

const font = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shilpa Creations",
  description: "Shilpa Creations - Bridal & Party Specialist",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "overflow-x-hidden")}>
        {children}
      </body>
    </html>
  )
}
