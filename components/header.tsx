'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

/**
 * Header Component - Portfolio Navigation
 * 
 * Design philosophy:
 * - Simple over clever
 * - Leverage existing design system
 * - Accessibility without over-engineering
 * - Performance through simplicity, not micro-optimizations
 */

// Navigation configuration - simple but extensible
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Essential accessibility - escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Logo - uses design system with brand accent */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-foreground hover:text-[var(--portfolio-blue)] transition-colors"
        >
          Ethan Cohen
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* CTA Button - properly integrated with design system */}
          <Button 
            asChild 
            className="font-semibold shadow-sm hover:shadow-md transition-all"
            style={{ 
              backgroundColor: 'var(--portfolio-honey)',
              color: '#333333'
            }}
          >
            <Link href="/projects">View Work</Link>
          </Button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="p-2 text-foreground hover:text-[var(--portfolio-blue)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - smooth animation with CSS */}
      <div 
        className={`md:hidden overflow-hidden border-t bg-background transition-all duration-200 ease-out ${
          mobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-muted-foreground hover:text-foreground font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          <Button 
            asChild 
            className="w-full font-semibold"
            style={{ 
              backgroundColor: 'var(--portfolio-honey)',
              color: '#333333'
            }}
          >
            <Link href="/projects" onClick={() => setMobileMenuOpen(false)}>
              View Work
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}