import { Link } from "react-router-dom"
import AnimatedSection from "@/components/ui/AnimatedSection"
import StaggerContainer from "@/components/ui/StaggerContainer"
import StaggerItem from "@/components/ui/StaggerItem"
import ProjectCard from "@/components/ui/ProjectCard"
import { projects } from "@/data/projects"

function ProjectsSection() {
  const highlightedProjects = projects.slice(0, 6)

  return (
    <AnimatedSection>
      <section className="relative border-t border-border py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-foreground/[0.03] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
            Proyek Pilihan
          </p>

          <h2 className="mt-4 text-center text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
            Karya hunian yang terasa tenang, relevan, dan manusiawi.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            Kurasi proyek dengan fokus pada proporsi ruang, kualitas cahaya,
            dan kenyamanan hidup sehari-hari.
          </p>

          <StaggerContainer>
            <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {highlightedProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard
                    title={project.title}
                    image={project.image}
                    location={project.location}
                    year={project.year}
                    variant="immersive"
                  />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="text-sm font-medium text-foreground transition-opacity hover:opacity-70"
            >
              Lihat semua proyek {"->"}
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

export default ProjectsSection
