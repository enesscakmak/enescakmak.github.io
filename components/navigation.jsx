import Link from "next/link"
import { Github, Linkedin, Mail, MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">John Doe</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link className="transition-colors hover:text-foreground/80" href="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-foreground/80" href="/about">
              About
            </Link>
            <Link className="transition-colors hover:text-foreground/80" href="/cv">
              CV
            </Link>
            <Link className="transition-colors hover:text-foreground/80" href="/#projects">
              Projects
            </Link>
            <Link className="transition-colors hover:text-foreground/80" href="/#contact">
              Contact
            </Link>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <Link className="text-lg font-medium hover:text-primary" href="/">
                Home
              </Link>
              <Link className="text-lg font-medium hover:text-primary" href="/about">
                About
              </Link>
              <Link className="text-lg font-medium hover:text-primary" href="/cv">
                CV
              </Link>
              <Link className="text-lg font-medium hover:text-primary" href="/#projects">
                Projects
              </Link>
              <Link className="text-lg font-medium hover:text-primary" href="/#contact">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:john@example.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

