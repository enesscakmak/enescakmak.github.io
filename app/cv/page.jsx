import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"

export default function CVPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="fixed inset-0 -z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <Sidebar />
      <main className="flex-1 relative z-10">
        <div className="container px-8 py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl text-zinc-900 dark:text-zinc-50">Curriculum Vitae</h1>
              <Button 
                asChild
                className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 
                  text-zinc-50 dark:text-zinc-900 transition-all duration-300 hover:scale-105"
              >
                <Link href="/john-doe-cv.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Education</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 transition-all duration-300 hover:scale-[1.01]">
                    <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">BSc in Computer Engineering</h3>
                    <p className="text-zinc-700 dark:text-zinc-400">Marmara University</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-500">2022 - Present</p>
                    <ul className="list-disc list-inside mt-2 text-sm text-zinc-700 dark:text-zinc-400">
                      {/* <li>GPA: 3.8/4.0</li>
                      <li>Relevant coursework: Data Structures, Algorithms, Web Development</li>
                       */}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Experience</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 transition-all duration-300 hover:scale-[1.01]">
                    <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">IT Intern</h3>
                    <p className="text-zinc-700 dark:text-zinc-400">Türk Telekom</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-500">09/2018 - 06/2019</p>
                    <ul className="list-disc list-inside mt-2 text-sm text-zinc-700 dark:text-zinc-400">
                      <li>Maintained and updated the computer systems of the companys accounting and human resources departments.</li>
                    </ul>
                  </div>

  
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Skills</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="transition-all duration-300 hover:scale-[1.01]">
                    <h3 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">Programming Languages</h3>
                    <ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-400">
                      <li>JavaScript</li>
                      <li>Python</li>
                      <li>Java</li>
                      <li>HTML5 & CSS3</li>
                      <li>SQL</li>
                    </ul>
                  </div>
                  <div className="transition-all duration-300 hover:scale-[1.01]">
                    <h3 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">Technologies</h3>
                    <ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-400">
                      <li>Tailwind CSS</li>
                      <li>Git</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* <section>
                <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Certifications</h2>
                <div className="space-y-2">
                  <div className="transition-all duration-300 hover:scale-[1.01]">
                    <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">Versiyon Kontrolleri: Git ve GitHub</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-500">BTK Akademi</p>
                  </div>
                  
                </div>
              </section> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

