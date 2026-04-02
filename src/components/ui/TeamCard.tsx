type TeamCardProps = {
    name: string
    role: string
    image: string
    bio: string
}

function TeamCard({ name, role, image, bio }: TeamCardProps) {
    return (
        <div className="group text-center">
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="aspect-3/4 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
            </div>

            <div className="mt-5 px-1">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {name}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                    {role}
                </p>

                <p className="mx-auto mt-3 max-w-60 text-xs leading-relaxed text-muted-foreground">
                    {bio}
                </p>
            </div>
        </div>
    )
}

export default TeamCard
