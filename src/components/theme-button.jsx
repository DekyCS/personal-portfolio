import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from '@/components/theme-provider'

export function ThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="ghost" className="cursor-pointer" size="icon" onClick={toggleTheme}>
      {theme === 'light' ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </Button>
  )
}