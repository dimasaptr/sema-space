import { Link } from "react-router-dom"

type BlogCardProps = {
    id: number
    title: string
    excerpt: string
    image: string
    date: string
}

function BlogCard({ id, title, excerpt, image, date }: BlogCardProps) {
    return (
        <Link to={`/blog/${id}`} className="group block">

        <article>

            <div className="aspect-4/3 overflow-hidden bg-card">

            <img
                src={`${image}?auto=format&fit=crop&w=900&q=80`}
                alt={title}
                width={900}
                height={675}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />

            </div>

            <div className="mt-5">

            <p className="text-xs tracking-wide text-muted-foreground">
                {date}
            </p>

            <h3 className="mt-2 text-lg font-medium text-foreground leading-snug group-hover:underline">
                {title}
            </h3>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {excerpt}
            </p>

            </div>

        </article>

        </Link>
    )
}

export default BlogCard