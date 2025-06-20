import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A detailed description of your first project showcasing your skills in data analysis and user psychology.",
      tags: ["Data", "Psychology", "React"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Project Two", 
      description: "An educational technology platform that bridges learning gaps through personalized experiences.",
      tags: ["Education", "Technology", "AI"],
      status: "In Progress"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A data visualization tool that helps users understand complex psychological patterns in learning.",
      tags: ["Data Viz", "Psychology", "Education"],
      status: "Planning"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/" className="flex items-center gap-2">
                ← Back to Home
              </Link>
            </Button>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/70 mx-auto rounded-full mb-6"></div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Exploring the intersection of data, technology, psychology, and education through meaningful projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  disabled={project.status === 'Planning'}
                >
                  {project.status === 'Planning' ? 'Coming Soon' : 'View Project'}
                </Button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Interested in collaborating?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to work on projects that sit at the intersection of my interests. 
                Let's build something amazing together.
              </p>
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 