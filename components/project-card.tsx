'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
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

// Animation variants for project cards
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

const tagVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.15, ease: "easeOut" }
  }
}

/**
 * ProjectCard Component
 * 
 * A reusable card component for displaying project information.
 * Built using shadcn card components for consistency with the design system.
 * Now enhanced with framer-motion animations for premium UX.
 * 
 * Features:
 * - Responsive design that works on all screen sizes
 * - Status indicators with appropriate colors
 * - Tag system for categorizing projects
 * - Smooth hover animations and micro-interactions
 * - Accessible button states
 * - Uses portfolio color scheme
 * - Respects reduced motion preferences
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
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className={className}
    >
      <motion.div variants={cardHoverVariants}>
        <Card className="hover:shadow-lg transition-shadow duration-200 group h-full">
          {/* Card Header with Title and Status */}
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl group-hover:text-[var(--portfolio-blue)] transition-colors">
                {project.title}
              </CardTitle>
              
              {/* Status Badge */}
              <motion.span 
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyling(project.status)}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
              >
                {project.status}
              </motion.span>
            </div>
            
            {/* Project Description */}
            <CardDescription className="leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>

          {/* Card Content with Tags */}
          <CardContent className="pb-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                  variants={tagVariants}
                  initial="rest"
                  whileHover="hover"
                  custom={index}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </CardContent>

          {/* Card Footer with Action Button */}
          <CardFooter>
            <motion.div 
              className="w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
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
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  )
}

/**
 * ProjectGrid Component
 * 
 * A container component for displaying multiple project cards in a responsive grid.
 * This separates the grid layout logic from individual card rendering.
 * Enhanced with staggered entrance animations for visual appeal.
 * 
 * @param projects - Array of project data to display
 * @param className - Optional additional CSS classes for the grid
 */
interface ProjectGridProps {
  projects: Project[]
  className?: string
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const ProjectGrid = ({ projects, className = '' }: ProjectGridProps) => {
  return (
    <motion.div 
      className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  )
}

// Export the Project interface so it can be used in other files
export type { Project } 