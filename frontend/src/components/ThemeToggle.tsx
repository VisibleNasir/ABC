import { Moon, Sun } from "lucide-react"
import { useTheme } from "../context/useTheme"


const ThemeToggle = () => {
    const {theme , toggleTheme} = useTheme()
  return (
      <button onClick={toggleTheme} className=" border rounded-full bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-white hover:opacity-80">
        {theme === 'light'? <Sun className="p-2 w-8 h-8"/>:<Moon className="p-2 w-8 h-8"/>}
      </button>
  )
}

export default ThemeToggle

