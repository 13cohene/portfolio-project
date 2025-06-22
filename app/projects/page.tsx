import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectGrid, type Project } from "@/components/project-card"

export default function Projects() {
  // Project data - in a real app, this would come from a database or API
  // Using the Project interface ensures type safety and consistency
  const projects: Project[] = [
    {
      id: 1,
      title: "EduAnalytics Dashboard",
      description: "A comprehensive data visualization platform that analyzes student learning patterns using psychological principles to identify optimal educational strategies.",
      tags: ["Data Visualization", "Psychology", "React", "D3.js"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Adaptive Learning AI", 
      description: "An intelligent tutoring system that personalizes educational content based on individual learning styles, cognitive load theory, and real-time performance analytics.",
      tags: ["AI/ML", "Education", "Python", "TensorFlow"],
      status: "In Progress"
    },
    {
      id: 3,
      title: "Behavioral Insights Platform",
      description: "A research tool that combines behavioral psychology with big data analytics to understand user engagement patterns and optimize product experiences.",
      tags: ["Behavioral Science", "Data Analytics", "Research"],
      status: "Planning"
    },
    {
      id: 4,
      title: "Learning Path Optimizer",
      description: "An algorithm-driven platform that creates personalized learning journeys by analyzing knowledge gaps and recommending optimal skill-building sequences.",
      tags: ["Algorithms", "Education", "Data Science"],
      status: "In Progress"
    },
    {
      id: 5,
      title: "Cognitive Load Tracker",
      description: "A mobile application that monitors cognitive fatigue through interaction patterns and suggests optimal break times to maximize learning efficiency.",
      tags: ["Mobile", "Psychology", "React Native"],
      status: "Completed"
    },
    {
      id: 6,
      title: "Educational Games Suite",
      description: "A collection of evidence-based educational games that apply gamification principles and spaced repetition to enhance long-term knowledge retention.",
      tags: ["Gamification", "Education", "TypeScript"],
      status: "Planning"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Back to Home Button */}
            <Button variant="ghost" asChild className="mb-8 hover:text-[var(--portfolio-blue)]">
              <Link href="/" className="flex items-center gap-2">
                ← Back to Home
              </Link>
            </Button>
            
            {/* Page Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/70 mx-auto rounded-full mb-6"></div>
            
            {/* Page Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Exploring the intersection of data, technology, psychology, and education through meaningful projects that solve real-world problems
            </p>
          </div>

          {/* Projects Grid using our new ProjectGrid component */}
          <div className="mb-16">
            <ProjectGrid projects={projects} />
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Interested in collaborating?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                I'm always excited to work on projects that sit at the intersection of my interests. 
                Let's build something amazing together that makes a real difference in how people learn and grow.
              </p>
              <Button 
                size="lg" 
                className="shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                style={{ 
                  backgroundColor: 'var(--portfolio-honey)',
                  color: '#333333'
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 