import { createContext, useContext } from 'react'
// useContext provide theme that could be consume in any component

const theme = {
  LIGHT: {
    primary: "black",
    secondary: "white"
  },
  DARK: {
    primary: "white",
    secondary: "black"
  }
}
// implementation from https://emotion.sh/docs/emotion-theming
// need to access in all required components
// pass value as props or put them in directly? maybe former
let ThemeContext = createContext(theme)
export let ThemeProvider = ThemeContext.Provider
export let useTheme = () => useContext(ThemeContext)
