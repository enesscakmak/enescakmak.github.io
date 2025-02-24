"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Mail, Menu } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { withBasePath } from "@/utils/path"

const navigation = [
  { name: "Projects", href: withBasePath("/projects") },
  { name: "About", href: withBasePath("/about") },
  { name: "Contact", href: withBasePath("/contact") },
  { name: "CV", href: withBasePath("/cv") },
]

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/enesscakmak",
    icon: Github,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/enesscakmak",
    icon: Linkedin,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "Email",
    href: "mailto:cakmakkeness@gmail.com",
    icon: Mail,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "Theme",
    href: "#",
    icon: ({ className }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        ></path>
      </svg>
    ),
    onClick: () => {
      const isDark = document.documentElement.classList.toggle('dark')
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    },
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme)
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])

  return (
    <>
      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="fixed left-4 top-4 z-40 md:hidden text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] p-0 border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
          <div className="flex h-full flex-col justify-between p-6">
            <nav className="space-y-6">
              <Link
                href={withBasePath("/")}
                className="block text-lg font-medium tracking-tight hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                enes çakmak
              </Link>
              <div className="space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center text-base text-muted-foreground transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-zinc-900 transition-transform duration-150 ease-in-out group-hover:scale-x-100 dark:bg-zinc-100" />
                    </span>
                  </Link>
                ))}
              </div>
            </nav>
            <div className="space-y-4">
              <div className="flex gap-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    className="group rounded-lg p-2 text-muted-foreground transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                    onClick={item.onClick}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">© 2025 Enes Çakmak. All rights reserved.</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="fixed hidden h-screen md:block">
        <div className="flex h-full w-[240px] flex-col justify-between border-r border-zinc-200 bg-white/80 p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
          <nav className="space-y-6">
            <Link
              href={withBasePath("/")}
              className="block text-lg font-medium tracking-tight hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              enes çakmak
            </Link>
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center text-base text-muted-foreground transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-zinc-900 transition-transform duration-150 ease-in-out group-hover:scale-x-100 dark:bg-zinc-100" />
                  </span>
                </Link>
              ))}
            </div>
          </nav>
          <div className="space-y-4">
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className="group rounded-lg p-2 text-muted-foreground transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  onClick={item.onClick}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Enes Çakmak. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="hidden w-[240px] md:block" />
    </>
  )
}

