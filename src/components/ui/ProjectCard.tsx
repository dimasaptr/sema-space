import { Link } from "react-router-dom"

type ProjectCardProps = {
    title: string
    image: string
    location: string
    year: number
    variant?: "default" | "immersive"
}

function ProjectCard({
    title,
    image,
    location,
    year,
    variant = "default",
}: ProjectCardProps) {
    const isImmersive = variant === "immersive"

    return (
        <Link to="/projects" className="group block">
            {isImmersive ? (
                <div className="space-y-3">
                    <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-neutral-900">
                        <img
                            src={image}
                            alt={title}
                            width={800}
                            height={800}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/5" />
                    </div>

                    <div className="px-1 text-left">
                        <h3 className="text-sm font-medium tracking-wide text-foreground sm:text-base">
                            {title}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                            {location} / {year}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="relative aspect-square overflow-hidden bg-neutral-900">
                    <img
                        src={image}
                        alt={title}
                        width={800}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="translate-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
                            <h3 className="text-sm font-medium tracking-wide text-white">
                                {title}
                            </h3>
                            <p className="mt-1 text-xs text-neutral-300">
                                {location} / {year}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </Link>
    )
}

export default ProjectCard
