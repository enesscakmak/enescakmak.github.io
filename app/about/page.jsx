import Image from "next/image"
import Link from "next/link"
import { GraduationCap, Briefcase, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="fixed inset-0 -z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <Sidebar />
      <main className="flex-1 relative z-10">
        <div className="container px-8 py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] items-start">
              <div>
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl mb-4 text-zinc-900 dark:text-zinc-50">About Me</h1>
                <p className="text-base text-zinc-700 dark:text-zinc-400 mb-4">
                  I'm a 23 year old computer science student at Marmara University in Istanbul. 
                  I'm interested in web development and machine learning. 
                  

                </p>
                <p className="text-base text-zinc-700 dark:text-zinc-400 mb-6">
                I'm trying to improve my skills in web development and looking for opportunities 
                  to work on projects and internship opportunities so i can improve my skills and get experience.
                </p>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    asChild
                    className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 
                      text-zinc-50 dark:text-zinc-900"
                  >
                    <Link href="/cv">View CV</Link>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    asChild
                    className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300
                      hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <Link href="mailto:cakmakkeness@gmail.com" target="_blank" rel="noopener noreferrer">Get in Touch</Link>
                  </Button>
                </div>
              </div>
              {/* <div className="relative aspect-square">
                <Image src="/placeholder.svg" alt="Profile" fill className="object-cover rounded-lg" priority />
              </div> */}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="bg-white/80 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <CardHeader className="pb-2">
                  <GraduationCap className="w-6 h-6 mb-2 text-zinc-900 dark:text-zinc-50" />
                  <CardTitle className="text-lg text-zinc-900 dark:text-zinc-50">Education</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">BSc in Computer Engineering</h3>
                    <p className="text-xs text-zinc-700 dark:text-zinc-400">Marmara University</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-500">2022 - Present</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <CardHeader className="pb-2">
                  <Briefcase className="w-6 h-6 mb-2 text-zinc-900 dark:text-zinc-50" />
                  <CardTitle className="text-lg text-zinc-900 dark:text-zinc-50">Experience</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">IT Intern</h3>
                    <p className="text-xs text-zinc-700 dark:text-zinc-400">Türk Telekom</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-500">09/2018 - 06/2019</p>
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="bg-white/80 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <CardHeader className="pb-2">
                  <Award className="w-6 h-6 mb-2 text-zinc-900 dark:text-zinc-50" />
                  <CardTitle className="text-lg text-zinc-900 dark:text-zinc-50">Achievements</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">Hackathon Winner</h3>
                    <p className="text-xs text-zinc-700 dark:text-zinc-400">University Tech Festival</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-500">2023</p>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

