import { useEffect, useRef, useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import Container from "@/layouts/Container"
import ThemeToggle from "@/components/ui/ThemeToggle"
import { useAuth } from "@/hooks/useAuth"

const links = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isDesktopAccountOpen, setIsDesktopAccountOpen] = useState(false)
    const [isMobileAccountOpen, setIsMobileAccountOpen] = useState(false)
    const desktopAccountRef = useRef<HTMLDivElement | null>(null)

    const navigate = useNavigate()
    const location = useLocation()
    const { currentUser, isLoggedIn, logout } = useAuth()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const scrollY = window.scrollY

        if (isOpen) {
            document.body.style.position = "fixed"
            document.body.style.top = `-${scrollY}px`
            document.body.style.left = "0"
            document.body.style.right = "0"
            document.body.style.width = "100%"
        } else {
            const y = document.body.style.top
            document.body.style.position = ""
            document.body.style.top = ""
            document.body.style.left = ""
            document.body.style.right = ""
            document.body.style.width = ""
            window.scrollTo(0, parseInt(y || "0", 10) * -1)
        }

        return () => {
            document.body.style.position = ""
            document.body.style.top = ""
            document.body.style.left = ""
            document.body.style.right = ""
            document.body.style.width = ""
        }
    }, [isOpen])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false)
                setIsDesktopAccountOpen(false)
                setIsMobileAccountOpen(false)
            }
        }

        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [])

    useEffect(() => {
        if (!isDesktopAccountOpen) return

        const handleOutsideClick = (event: MouseEvent) => {
            if (!desktopAccountRef.current) return
            if (!desktopAccountRef.current.contains(event.target as Node)) {
                setIsDesktopAccountOpen(false)
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)
        return () => document.removeEventListener("mousedown", handleOutsideClick)
    }, [isDesktopAccountOpen])

    const handleLogout = async () => {
        await logout()
        setIsOpen(false)
        setIsDesktopAccountOpen(false)
        setIsMobileAccountOpen(false)

        const isBlogDetailPage =
            location.pathname.startsWith("/blog/") &&
            !location.pathname.endsWith("/edit")
        const isBlogListingPage = location.pathname === "/blog"
        const shouldReturnToBlog =
            isBlogListingPage ||
            isBlogDetailPage ||
            location.pathname === "/blog/create" ||
            location.pathname === "/blog/archive" ||
            location.pathname.endsWith("/edit")

        if (shouldReturnToBlog) {
            navigate(`/blog${location.search}`, {
                replace: true,
                state: { skipScrollReset: true },
            })
            return
        }

        navigate(location.pathname === "/auth/login" ? "/" : location.pathname, {
            replace: true,
            state: { skipScrollReset: true },
        })
    }

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "border-b border-border bg-background/85 backdrop-blur"
                    : "border-b border-border bg-background"
            }`}
        >
            <Container>
                <div className="relative flex h-16 items-center justify-between md:grid md:grid-cols-[220px_1fr_220px]">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`relative z-60 flex h-6 w-6 items-center justify-center transition-opacity duration-200 md:hidden ${
                                isOpen ? "pointer-events-none opacity-0" : "opacity-100"
                            }`}
                            aria-label="Open menu"
                        >
                            <span className="absolute h-0.5 w-5 -translate-y-1.5 bg-foreground transition-all duration-300" />
                            <span className="absolute h-0.5 w-5 bg-foreground transition-all duration-300" />
                            <span className="absolute h-0.5 w-5 translate-y-1.5 bg-foreground transition-all duration-300" />
                        </button>

                        <NavLink
                            to="/"
                            className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold tracking-wide md:static md:translate-x-0"
                            aria-label="SEMA Space Home"
                        >
                            SE.MA
                        </NavLink>
                    </div>

                    <nav className="hidden items-center justify-center gap-8 text-sm md:flex" aria-label="Main navigation">
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative pb-1 transition-colors duration-200 ${
                                        isActive
                                            ? "text-foreground after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-foreground after:content-['']"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    <div
                        className={`relative z-10 flex items-center justify-end gap-2 transition-opacity duration-200 ${
                            isOpen ? "pointer-events-none opacity-0" : "opacity-100"
                        }`}
                    >
                        <div className="relative hidden md:block" ref={desktopAccountRef}>
                            {isLoggedIn && currentUser ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => setIsDesktopAccountOpen((prev) => !prev)}
                                        className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80 transition hover:bg-muted"
                                    >
                                        {currentUser.name}
                                    </button>

                                    {isDesktopAccountOpen && (
                                        <div className="absolute right-0 mt-2 min-w-[160px] rounded-xl border border-border bg-background p-2 shadow-lg">
                                            <button
                                                type="button"
                                                onClick={handleLogout}
                                                className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
                                            >
                                                Keluar
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <NavLink
                                    to="/auth/login"
                                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground transition hover:bg-muted"
                                >
                                    Login
                                </NavLink>
                            )}
                        </div>

                        <ThemeToggle />
                    </div>
                </div>
            </Container>

            <div
                className={`fixed inset-0 z-55 transition-all duration-300 md:hidden ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
                aria-hidden={!isOpen}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                />

                <div
                    className={`absolute top-0 left-0 flex h-full w-[82%] max-w-sm flex-col border-r border-border bg-background transition-transform duration-300 ease-in-out ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 px-6 pt-6 pb-5 backdrop-blur">
                        <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                            Menu
                        </span>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-2xl leading-none text-foreground/90 transition-colors hover:text-foreground"
                            aria-label="Close menu"
                        >
                            x
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-8">
                        <nav className="flex flex-col gap-8 text-lg">
                            {links.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `relative pl-4 transition-all duration-200 ${
                                            isActive
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span
                                                className={`absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 bg-foreground transition-opacity duration-200 ${
                                                    isActive ? "opacity-100" : "opacity-0"
                                                }`}
                                            />
                                            {link.name}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="mt-10 border-t border-border pt-6">
                            {isLoggedIn && currentUser ? (
                                <div className="space-y-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsMobileAccountOpen((prev) => !prev)}
                                        className="inline-flex w-full items-center justify-between rounded-xl border border-border px-4 py-3 text-left text-sm text-foreground transition hover:bg-muted"
                                    >
                                        <span>{currentUser.name}</span>
                                        <span className="text-foreground/50">{isMobileAccountOpen ? "-" : "+"}</span>
                                    </button>

                                    {isMobileAccountOpen && (
                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                            className="inline-flex rounded-full border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition hover:border-red-400 hover:bg-red-50 dark:border-red-500/30 dark:text-red-400 dark:hover:bg-red-500/10"
                                        >
                                            Keluar
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <NavLink
                                    to="/auth/login"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
                                >
                                    Login
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
