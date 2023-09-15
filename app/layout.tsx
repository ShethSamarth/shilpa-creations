import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

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
      <body className={font.className}>{children}</body>
    </html>
  )
}
