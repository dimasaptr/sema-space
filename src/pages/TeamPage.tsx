import { useEffect } from "react"
import Container from "@/layouts/Container"
import TeamSection from "@/components/sections/TeamSection"
import { team } from "@/data/team"

export default function TeamPage() {
    useEffect(() => {
        document.title = "Team - SEMA Space"
    }, [])

    const uniqueRoles = new Set(team.map((member) => member.role)).size

    return (
        <main>
            {/* Intro */}
            <section className="border-b border-border py-24 md:py-28">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                            Tim di Balik Kualitas Ruang SEMA
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                            Perpaduan tim desain dan teknis yang bekerja kolaboratif untuk
                            menghasilkan keputusan ruang yang lebih jelas, terukur, dan nyaman
                            ditinggali dalam jangka panjang.
                        </p>

                        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-center">
                                <p className="text-2xl font-semibold tracking-tight text-foreground">
                                    {team.length}+
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-foreground/55">
                                    Tim Aktif
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-center">
                                <p className="text-2xl font-semibold tracking-tight text-foreground">
                                    {uniqueRoles}
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-foreground/55">
                                    Peran Spesialis
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-center">
                                <p className="text-2xl font-semibold tracking-tight text-foreground">
                                    Menyeluruh
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-foreground/55">
                                    Alur Kerja Desain
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <TeamSection />
        </main>
    )
}
