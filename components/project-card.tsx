'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * Interface defining the structure of a project
 * This ensures type safety and makes it clear what data each project needs
 */
interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  status: 'Completed' | 'In Progress' | 'Planning'
  // Optional fields for future expansion
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
  detailUrl?: string
}

/**
 * Props interface for the ProjectCard component
 * This makes the component reusable and type-safe
 */
interface ProjectCardProps {
  project: Project
  className?: string
}

/**
 * ProjectCard Component
 * 
 * A reusable card component for displaying project information.
 * Built using shadcn card components for consistency with the design system.
 * 
 * Features:
 * - Responsive design that works on all screen sizes
 * - Status indicators with appropriate colors
 * - Tag system for categorizing projects
 * - Hover effects for better interactivity
 * - Accessible button states
 * - Uses portfolio color scheme
 * 
 * @param project - The project data to display
 * @param className - Optional additional CSS classes
 */
export const ProjectCard = ({ project, className = '' }: ProjectCardProps) => {
  /**
   * Function to get the appropriate styling for project status badges
   * This keeps the status styling logic centralized and reusable
   */
  const getStatusStyling = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  /**
   * Function to determine the appropriate button text and action
   * This makes the button behavior clear and consistent
   */
  const getButtonConfig = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return { text: 'View Project', disabled: false }
      case 'In Progress':
        return { text: 'View Progress', disabled: false }
      case 'Planning':
        return { text: 'Coming Soon', disabled: true }
      default:
        return { text: 'View Project', disabled: false }
    }
  }

  const buttonConfig = getButtonConfig(project.status)

  return (
    <Card className={`hover:shadow-lg transition-all duration-200 group ${className}`}>
      {/* Card Header with Title and Status */}
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl group-hover:text-[var(--portfolio-blue)] transition-colors">
            {project.title}
          </CardTitle>
          
          {/* Status Badge */}
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyling(project.status)}`}>
            {project.status}
          </span>
        </div>
        
        {/* Project Description */}
        <CardDescription className="leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      {/* Card Content with Tags */}
      <CardContent className="pb-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      {/* Card Footer with Action Button */}
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full hover:bg-[var(--portfolio-honey)] hover:text-[#333333] hover:border-[var(--portfolio-honey)] transition-all duration-200"
          disabled={buttonConfig.disabled}
          asChild={!buttonConfig.disabled}
        >
          {buttonConfig.disabled ? (
            <span>{buttonConfig.text}</span>
          ) : (
            <Link href={project.detailUrl || `/projects/${project.id}`}>
              {buttonConfig.text}
            </Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

/**
 * ProjectGrid Component
 * 
 * A container component for displaying multiple project cards in a responsive grid.
 * This separates the grid layout logic from individual card rendering.
 * 
 * @param projects - Array of project data to display
 * @param className - Optional additional CSS classes for the grid
 */
interface ProjectGridProps {
  projects: Project[]
  className?: string
}

export const ProjectGrid = ({ projects, className = '' }: ProjectGridProps) => {
  return (
    <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

// Export the Project interface so it can be used in other files
export type { Project } 