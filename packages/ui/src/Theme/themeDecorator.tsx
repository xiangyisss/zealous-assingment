import { ThemeProvider } from './ThemeProvider'

export function themeDecorator (Story: any) {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
}