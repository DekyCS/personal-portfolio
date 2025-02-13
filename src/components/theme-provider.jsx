import { createContext, useContext, useEffect, useState } from "react"

const initialState = {
  theme: "light",
  toggleTheme: () => null,
}

const ThemeProviderContext = createContext(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    // Temporarily disable transitions
    root.classList.add('disable-transitions')
    
    // Remove existing themes
    root.classList.remove("light", "dark")
    
    // Add new theme
    root.classList.add(theme)
    
    // Re-enable transitions after theme change
    setTimeout(() => {
      root.classList.remove('disable-transitions')
    }, 0)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    localStorage.setItem(storageKey, newTheme)
    setTheme(newTheme)
  }

  const value = {
    theme,
    toggleTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}