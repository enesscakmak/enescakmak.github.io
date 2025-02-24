import "@/styles/globals.css"
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Enes Çakmak — Developer",
  description: "Software developer that likes clean interfaces.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("antialiased", inter.className)}>{children}</body>
    </html>
  )
}

