import React from 'react'
import { ThemeProvider as UIThemeProvider } from '@zealous/ui'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <UIThemeProvider>
      {children}
    </UIThemeProvider>
  )
}
