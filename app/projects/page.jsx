import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"

export default function ProjectsPage() {
  const projects = [
    
    {
      type: "featured",
      title: "Weather Page",
      description: "A website made with Flask and Tailwind CSS to see the current weather status with Open Weather Map API.",
      tech: ["HTML", "Python", "Tailwind CSS", "Flask"],
      image: "/enescakmak.github.io/weather.png",
      github: "https://github.com/enesscakmak/weather-app",
      demo: "https://enesscakmak.github.io/enescakmak.github.io/weather/templates/",
    },
    {
      type: "featured",
      title: "Movie Recommendation App",
      description: "Movie Recommendation App using Collaborative Filtering and cosine similarity for recommending movies that suits the user's taste by getting ratings from user.",
      tech: ["Java", "Python", "CSS", "Pandas"],
      image: "/enescakmak.github.io/movie-recommendation-app.png",
      github: "https://github.com/enesscakmak/movie-recommendation-java",
    },
    {
      type: "featured",
      title: "Multiplayer Bomberman Variation Game",
      description: "Multiplayer game based on Bomberman. Made with Unity and PUN2.",
      tech: ["C#", "Unity"],
      image: "/enescakmak.github.io/bomberman.png",
      github: "https://github.com/enesscakmak/online-bomberman-variation",
    },
    {
      type: "standard",
      title: "To-Do Page and App",
      description: "To-Do app made with Python Tkinter and website made using Flask, SQL and Bootstrap.",
      tech: ["HTML", "Bootstrap", "JavaScript", "Python", "Flask", "SQL"],
      github: "https://github.com/enesscakmak/to-do",
    },
    {
      type: "standard",
      title: "Library Page",
      description: "A library website created with HTML, CSS, and JavaScript. It's designed to help you manage a collection of books with titles, authors, and ratings.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "SQLite"],
      github: "https://github.com/enesscakmak/library-website",
    },
  ]

  const featuredProjects = projects.filter(project => project.type === "featured")
  const standardProjects = projects.filter(project => project.type === "standard")

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="fixed inset-0 -z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <Sidebar />
      <main className="flex-1 relative z-10">
        <div className="container px-8 py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8">
              <div>
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl mb-4 text-zinc-900 dark:text-zinc-50">Projects</h1>
                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">
                  A collection of projects I've worked on. These range from web applications to open-source contributions.
                </p>
              </div>

              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <Card 
                    key={index} 
                    className="bg-white/80 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700
                      transition-all duration-300 hover:scale-[1.05] hover:shadow-xl"
                  >
                    <div className="grid md:grid-cols-[1.2fr,2fr] gap-6">
                      {project.image && (
                        <div className="relative p-6 flex items-center justify-center">
                          <div className="w-[300px] h-[200px] relative rounded-xl overflow-hidden">
                            <Image 
                              src={project.image} 
                              alt={project.title} 
                              fill
                              className="rounded-xl object-cover transition-transform duration-300 hover:scale-125"
                              priority
                            />
                          </div>
                        </div>
                      )}
                      <div className={`p-6 ${!project.image && 'md:col-span-2'}`}>
                        <div className="inline-block">
                          <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-50 transition-all duration-300 hover:scale-105 transform-gpu origin-center">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 transition-all duration-300 hover:text-zinc-900 dark:hover:text-zinc-50">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, index) => (
                            <span 
                              key={index}
                              className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full
                                transition-all duration-300 hover:scale-125"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          {project.github && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              asChild
                              className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300
                                hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-transform duration-300 hover:scale-110"
                            >
                              <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button 
                              size="sm" 
                              asChild
                              className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 
                                text-zinc-50 dark:text-zinc-900 transition-transform duration-300 hover:scale-110"
                            >
                              <a 
                                href={project.demo} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 