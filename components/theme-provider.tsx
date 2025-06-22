'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ComponentProps } from 'react'

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>

/**
 * Theme Provider Component
 * 
 * Wraps next-themes provider with our specific configuration:
 * - Enables system theme detection
 * - Uses 'class' strategy for Tailwind compatibility
 * - Sets up proper theme attributes
 * - Handles SSR correctly
 */
export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
} 