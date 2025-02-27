import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { withBasePath } from "@/utils/path"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="fixed inset-0 -z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <Sidebar />
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen">
          <div className="absolute left-0 right-0 top-0 h-96 bg-gradient-to-b from-zinc-50 to-transparent dark:from-zinc-900" />
          <div className="container relative px-4 pt-36 md:px-8">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-6">
                <h1 className="text-xl font-semibold tracking-tight sm:text-xl lg:text-6xl text-zinc-900 dark:text-zinc-50">
                  computer engineer
                </h1>
                <p className="max-w-[60ch] text-base text-zinc-600 dark:text-zinc-400">
                Hi, I'm Enes Çakmak, a frontend developer and Computer Engineering student at Marmara 
                  University in Istanbul. I enjoy building clean and user-friendly web interfaces, 
                  always looking to learn and improve my skills.  
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 
                    text-zinc-50 dark:text-zinc-900"
                >
                  <Link href={withBasePath("/projects")}>
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  asChild
                  className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700
                    text-zinc-900 dark:text-zinc-50"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            <div className="mx-auto max-w-5xl space-y-8 mt-96">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Featured Project</h2>
                <Link href="/projects" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  View All Projects
                </Link>
              </div>
              <FeaturedProject />
            </div>
          </div>
        </section>

         {/* Projects Section */}
        <section id="projects" className="py-24 lg:py-32">
          <div className="container px-4 md:px-8">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="flex items-center justify-between space-y-4">
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50">Other Projects</h2>
                <Link href="/projects" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  View All Projects
                </Link>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">A selection of projects I've worked on</p>
              <div className="grid gap-8 md:grid-cols-2">
                <ProjectCard
                  title="Movie Recommendation App"
                  description="Movie Recommendation App using Collaborative Filtering and cosine similarity for recommending movies that suits the user's taste by getting ratings from user."
                  tags={["Java", "Pandas", "Python", "CSS"]}
                  link="https://github.com/enesscakmak/movie-recommendation-java"
                />
                <ProjectCard
                  title="CV Builder"
                  description="CV Builder made with Java that automatically places the information you provide into templates you choose or create yourself."
                  tags={["Java", "JavaFX", "CSS"]}
                  link="https://github.com/enesscakmak/cv-builder"
                />
                <ProjectCard
                  title="To-Do Page and App"
                  description="To-Do app made with Python Tkinter and website made using Flask, SQL and Bootstrap."
                  tags={["HTML", "Bootstrap", "JavaScript", "Python", "Flask", "SQL"]}
                  link="https://github.com/enesscakmak/to-do"
                />
                <ProjectCard
                  title="Multiplayer Bomberman Variation Game"
                  description="Multiplayer game based on Bomberman. Made with Unity and PUN2. "
                  tags={["C#", "Unity"]}
                  link="https://github.com/enesscakmak/online-bomberman-variation"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="border-t border-zinc-200 dark:border-zinc-700 py-24 lg:py-32">
          <div className="container px-4 md:px-8">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50">About Me</h2>
                <p className="text-zinc-600 dark:text-zinc-400">My background and what I do</p>
              </div>
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    I'm a 3rd grade computer engineering student at Marmara University in Istanbul.
                    I'm interested in web development and machine learning.
                  </p>
                  <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    I am trying to improve my skills in web development and looking for opportunities
                     to work on projects and internship opportunities.
                  </p>
                </div>
                <div className="space-y-8">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">Tools I work with:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "JavaScript",
                      "CSS",
                      "HTML",
                      "Java",
                      "TailwindCSS",
                      "Python",
                      "SQL",
                      "Git",
                    ].map((tech) => (
                      <div key={tech} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <div className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-zinc-200 dark:border-zinc-700 py-24 lg:py-32">
          <div className="container px-4 md:px-8">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50">Get in Touch</h2>
                <p className="text-zinc-600 dark:text-zinc-400">Let's work together</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    I'm always interested in hearing about new projects and internship opportunities. Whether you have a question, offer
                    or just want to say hi, feel free to reach out.
                  </p>
                  <Button 
                    size="lg" 
                    asChild
                    className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 
                      text-zinc-50 dark:text-zinc-900"
                  >
                    <a href="mailto:cakmakkeness@gmail.com">Say Hello</a>
                  </Button>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">You can also find me on these platforms:</p>
                  <div className="flex gap-4">
                    {socialLinks.map((item) => (
                      <Button 
                        key={item.name} 
                        variant="outline" 
                        size="lg" 
                        asChild
                        className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300
                          hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      >
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function FeaturedProject() {
  return (
    <Card className="group relative overflow-hidden border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/50 p-8 
      transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50">Weather Page</h3>
              <Link
                href="https://enesscakmak.github.io/enescakmak.github.io/weather/templates/"
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">View Project</span>
              </Link>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
            A website made with Flask and Tailwind CSS to see the current weather status with Open Weather Map API.            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["HTML", "Python", "TailwindCSS"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="default" asChild>
              <Link 
                href="https://enesscakmak.github.io/enescakmak.github.io/weather/templates/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link 
                href="https://github.com/enesscakmak/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </Link>
            </Button>
          </div>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800">
          <Image
            src="/weather.png"
            alt="Weather app preview"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Card>
  )
}

function ProjectCard({ title, description, tags, link }) {
  return (
    <Card className="group relative overflow-hidden border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/50 p-6 
      transition-all duration-300 hover:scale-[1.05] hover:shadow-xl">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="inline-block">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 
                transition-all duration-300 hover:scale-105 transform-gpu origin-center">
                {title}
              </h3>
            </div>
            <Link
              href={link}
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50
                transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">View Project</span>
            </Link>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 
            transition-all duration-300 hover:text-zinc-900 dark:hover:text-zinc-50">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 
                px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-300
                transition-all duration-300 hover:scale-125"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/enesscakmak",
    icon: () => <ExternalLink />,
  },
  
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/enesscakmak",
    icon: () => <ExternalLink />,
  },
]

