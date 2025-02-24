import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { Github, Linkedin } from "lucide-react"

export default function ContactPage() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/enesscakmak",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/enesscakmak",
      icon: Linkedin,
    },
  ]

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="fixed inset-0 -z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <Sidebar />
      <main className="flex-1 relative z-10">
        <div className="container px-8 py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8">
              <div>
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl mb-4 text-zinc-900 dark:text-zinc-50">Contact</h1>
                <p className="text-base text-zinc-700 dark:text-zinc-400 mb-6">
                  I am looking for internship opportunities especially in the front end field. I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
                </p>
              </div>

              <Card className="bg-white/80 dark:bg-zinc-800/50 p-6 border-zinc-200 dark:border-zinc-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-50">Get in Touch</h2>
                    <p className="text-base text-zinc-700 dark:text-zinc-400 mb-4">
                      The fastest way to reach me is via email.
                    </p>
                    <Button 
                      size="sm" 
                      asChild
                      className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 
                        text-zinc-50 dark:text-zinc-900 transition-transform duration-300 hover:scale-110"
                    >
                      <a href="mailto:cakmakkeness@gmail.com" target="_blank" rel="noopener noreferrer">Send Email</a>
                    </Button>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-50">Social Links</h2>
                    <p className="text-base text-zinc-700 dark:text-zinc-400 mb-4">
                      You can also find me on these platforms:
                    </p>
                    <div className="flex gap-3">
                      {socialLinks.map((item) => (
                        <Button 
                          key={item.name} 
                          size="sm" 
                          variant="outline" 
                          asChild
                          className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300
                            hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-transform duration-300 hover:scale-110"
                        >
                          <a 
                            href={item.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.name}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/80 dark:bg-zinc-800/50 p-6 border-zinc-200 dark:border-zinc-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-50">Location</h2>
                  <p className="text-base text-zinc-700 dark:text-zinc-400">
                    Based in Istanbul, Turkey
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                    Available for remote work and local opportunities
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 