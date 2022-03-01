import { ThemeProvider } from './ThemeProvider'
import { defaultTheme } from './theme';

export function themeDecorator (Story: any) {
  const theme: typeof defaultTheme = {
    ...defaultTheme,
  }

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}