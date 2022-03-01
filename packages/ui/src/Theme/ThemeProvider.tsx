import { useState } from 'react'
import { ThemeProvider as NativeThemeProvider } from 'styled-components'

import { defaultTheme } from './theme'

interface ThemeProviderProps {
  theme?: typeof defaultTheme
  children?: any
}

export function ThemeProvider ({
  theme = defaultTheme,
  children
}: ThemeProviderProps) {
  const [selectedTheme, setTheme] = useState(theme)

  return (
    <NativeThemeProvider theme={selectedTheme}>
      {children}
    </NativeThemeProvider>
  )
}
