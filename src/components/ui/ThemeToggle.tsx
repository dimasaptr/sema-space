import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

function ThemeToggle() {
    const [dark, setDark] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme === "dark"
    })

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [dark])

    return (
        <button
            type="button"
            onClick={() => setDark((prev) => !prev)}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground/80 transition hover:bg-muted"
        >
            {dark ? <Sun size={16} strokeWidth={1.8} /> : <Moon size={16} strokeWidth={1.8} />}
        </button>
    )
}

export default ThemeToggle
