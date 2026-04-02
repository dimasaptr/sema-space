import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-6xl font-semibold tracking-tight">
            404
        </h1>

        <p className="mt-6 text-muted-foreground max-w-md">
            The page you are looking for does not exist or may have been moved.
        </p>

        <Link
            to="/"
            className="
            mt-8 inline-flex items-center gap-2
            text-sm px-6 py-3 rounded-md
            border border-black text-black bg-white
            dark:border-white dark:text-white dark:bg-black
            hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black
            transition-colors duration-300
            "
        >
            Back to Home →
        </Link>

        </section>
    )
}

export default NotFoundPage