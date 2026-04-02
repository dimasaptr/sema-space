import { Link } from "react-router-dom"
import Container from "@/layouts/Container"

function Footer() {
    return (
        <footer className="mt-24 border-t border-white/10 bg-foreground text-background dark:border-black/10 dark:bg-[#F1EFE7] dark:text-[#111111]">
            <Container>
                <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
                    <div className="space-y-3">
                        <Link
                            to="/"
                            className="inline-flex text-lg font-semibold tracking-wide text-background transition-opacity hover:opacity-75 dark:text-[#111111]"
                            aria-label="SEMA Space Home"
                        >
                            SE.MA
                        </Link>

                        <p className="max-w-sm text-sm leading-relaxed text-background/82 dark:text-[#111111]/78">
                            Studio arsitektur hunian dengan pendekatan ruang yang tenang,
                            terukur, dan relevan untuk kehidupan sehari-hari.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-background/70 dark:text-[#111111]/68">
                            Navigasi
                        </p>

                        <div className="flex flex-col gap-2 text-sm">
                            <Link
                                to="/about"
                                className="text-background/82 transition hover:text-background dark:text-[#111111]/78 dark:hover:text-[#111111]"
                            >
                                About
                            </Link>
                            <Link
                                to="/services"
                                className="text-background/82 transition hover:text-background dark:text-[#111111]/78 dark:hover:text-[#111111]"
                            >
                                Services
                            </Link>
                            <Link
                                to="/projects"
                                className="text-background/82 transition hover:text-background dark:text-[#111111]/78 dark:hover:text-[#111111]"
                            >
                                Projects
                            </Link>
                            <Link
                                to="/contact"
                                className="text-background/82 transition hover:text-background dark:text-[#111111]/78 dark:hover:text-[#111111]"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-background/70 dark:text-[#111111]/68">
                            Kontak
                        </p>

                        <div className="space-y-2 text-sm text-background/82 dark:text-[#111111]/78">
                            <p>Jabodetabek, Indonesia</p>
                            <a
                                href="mailto:studio@sema.space"
                                className="text-background/82 transition hover:text-background dark:text-[#111111]/78 dark:hover:text-[#111111]"
                            >
                                studio@sema.space
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-white/12 py-5 text-xs text-background/72 dark:border-black/10 dark:text-[#111111]/66 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} SEMA Space. All rights reserved.</p>
                    <p>quietly working on living.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
