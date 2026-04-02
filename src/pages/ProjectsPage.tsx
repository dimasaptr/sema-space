import { useEffect } from "react"
import { Link } from "react-router-dom"
import ProjectCard from "@/components/ui/ProjectCard"
import Container from "@/layouts/Container"
import { projects } from "@/data/projects"

const WHATSAPP_LINK =
    "https://wa.me/6281234567890?text=Halo%20SEMA%2C%20saya%20ingin%20diskusi%20proyek%20hunian."

function ProjectsPage() {
    useEffect(() => {
        document.title = "Projects - SEMA Space"
    }, [])

    const locationCount = new Set(projects.map((project) => project.location)).size
    const latestYear = Math.max(...projects.map((project) => project.year))

    return (
        <section className="py-24 md:py-28">
            <Container>
                <h1 className="text-center text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                    Portofolio hunian yang dirancang untuk hidup yang lebih tenang.
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
                    Setiap proyek dikembangkan dengan fokus pada efisiensi ruang,
                    pencahayaan alami, dan keputusan desain yang terukur agar
                    hasilnya terasa nyaman ditinggali dalam jangka panjang.
                </p>

                <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-center">
                        <p className="text-2xl font-semibold tracking-tight text-foreground">
                            {projects.length}+
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/55">
                            Proyek Terkurasi
                        </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-center">
                        <p className="text-2xl font-semibold tracking-tight text-foreground">
                            {locationCount}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/55">
                            Kota Penanganan
                        </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-center">
                        <p className="text-2xl font-semibold tracking-tight text-foreground">
                            {latestYear}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/55">
                            Proyek Terbaru
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            image={project.image}
                            location={project.location}
                            year={project.year}
                            variant="immersive"
                        />
                    ))}
                </div>

                <div className="mt-16 rounded-3xl border border-border bg-background/70 px-6 py-10 text-center md:px-10">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                        Ingin proyek Anda jadi bagian karya berikutnya?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        Ceritakan kebutuhan ruang Anda. Kami bantu menyusun arah
                        desain yang realistis, terukur, dan sesuai gaya hidup Anda.
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
                            to="/services"
                            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-medium text-foreground transition hover:bg-foreground/5 sm:w-[210px]"
                        >
                            Lihat Layanan
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProjectsPage
