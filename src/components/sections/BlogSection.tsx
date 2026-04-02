import { Link } from "react-router-dom"
import Container from "@/layouts/Container"
import { blogs } from "@/data/blogs"

function BlogSection() {
    const latestBlogs = blogs.slice(0, 3)

    return (
        <section className="border-t border-border py-24">
            <Container>
                <div className="mb-12 space-y-4 text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
                        Jurnal
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                        Catatan dan perspektif tentang kualitas ruang tinggal.
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        Artikel terbaru yang membahas pendekatan desain, keputusan ruang,
                        dan cara berpikir dalam merancang hunian yang lebih tenang.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {latestBlogs.map((blog) => (
                        <article
                            key={blog.id}
                            className="overflow-hidden rounded-3xl border border-border bg-background"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    className="h-56 w-full object-cover"
                                />
                            </div>

                            <div className="space-y-4 p-6">
                                <p className="text-sm text-muted-foreground">
                                    Oleh {blog.authorName} - {blog.publishedAt}
                                </p>

                                <h3 className="text-lg font-semibold leading-snug text-foreground">
                                    {blog.title}
                                </h3>

                                <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                                    {blog.excerpt}
                                </p>

                                <Link
                                    to={`/blog/${blog.slug}`}
                                    className="inline-flex text-sm font-medium text-foreground transition-opacity hover:opacity-70"
                                >
                                    Baca selengkapnya
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-sm font-medium text-foreground transition-opacity hover:opacity-70"
                    >
                        Lihat semua artikel {"->"}
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default BlogSection

