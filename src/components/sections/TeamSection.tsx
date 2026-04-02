import { Link } from "react-router-dom"
import Container from "@/layouts/Container"
import AnimatedSection from "@/components/ui/AnimatedSection"
import StaggerContainer from "@/components/ui/StaggerContainer"
import StaggerItem from "@/components/ui/StaggerItem"
import TeamCard from "@/components/ui/TeamCard"
import { team } from "@/data/team"

const WHATSAPP_LINK =
    "https://wa.me/6281234567890?text=Halo%20SEMA%2C%20saya%20ingin%20diskusi%20proyek%20hunian."

function TeamSection() {
    return (
        <section className="border-t border-border py-24 md:py-28">
            <Container>
                <AnimatedSection>
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
                            Kolaborasi Tim
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                            Tim lintas peran untuk hasil proyek yang lebih matang.
                        </h2>

                        <p className="mt-5 leading-relaxed text-muted-foreground md:text-base">
                            Dari tahap konsep hingga dokumentasi teknis, setiap anggota tim
                            berkontribusi agar desain tetap kuat secara ide dan siap dibangun.
                        </p>
                    </div>
                </AnimatedSection>

                <StaggerContainer>
                    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {team.map((member) => (
                            <StaggerItem key={member.id}>
                                <TeamCard
                                    name={member.name}
                                    role={member.role}
                                    image={member.image}
                                    bio={member.bio}
                                />
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>

                <AnimatedSection>
                    <div className="mt-16 rounded-3xl border border-border bg-background/70 px-6 py-10 text-center md:px-10">
                        <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                            Siap berdiskusi dengan tim SEMA?
                        </h3>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                            Ceritakan kebutuhan proyek Anda, dan tim kami akan membantu
                            menyusun arah desain yang realistis dan terukur.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 sm:w-[210px]"
                            >
                                Konsultasi Proyek
                            </a>

                            <Link
                                to="/projects"
                                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-medium text-foreground transition hover:bg-foreground/5 sm:w-[210px]"
                            >
                                Lihat Proyek
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    )
}

export default TeamSection
