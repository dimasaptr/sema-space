import { useMemo, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import Container from "@/layouts/Container"
import BlogActionModal from "@/components/blog/BlogActionModal"
import { useBlog } from "@/hooks/useBlog"
import { useAuth } from "@/hooks/useAuth"

function ArchivePage() {
    const { blogList, toggleArchive, deleteBlog } = useBlog()
    const { isAdmin } = useAuth()

    const [archiveId, setArchiveId] = useState<number | null>(null)
    const [deleteId, setDeleteId] = useState<number | null>(null)

    const archivedBlogs = useMemo(() => {
        return [...blogList]
            .filter((blog) => blog.isArchived)
            .sort(
                (a, b) =>
                    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
            )
    }, [blogList])

    const blogToArchive = blogList.find((blog) => blog.id === archiveId)
    const blogToDelete = blogList.find((blog) => blog.id === deleteId)

    const handleToggleArchive = () => {
        if (archiveId === null) return
        toggleArchive(archiveId)
        setArchiveId(null)
    }

    const handleDelete = () => {
        if (deleteId === null) return
        deleteBlog(deleteId)
        setDeleteId(null)
    }

    if (!isAdmin) {
        return <Navigate to="/blog" replace />
    }

    return (
        <>
            <section className="pb-24 pt-32 text-zinc-900 transition-colors dark:text-white">
                <Container>
                    <div className="mb-16 max-w-2xl space-y-6">
                        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                            Artikel yang Diarsipkan
                        </h1>

                        <p className="max-w-xl text-sm leading-8 text-zinc-600 md:text-base dark:text-zinc-400">
                            Artikel yang sudah diarsipkan tidak tampil di halaman
                            blog utama, tetapi masih bisa dipulihkan kapan saja.
                        </p>

                        <Link
                            to="/blog"
                            className="inline-flex rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:border-white/25 dark:hover:bg-white/5"
                        >
                            Kembali ke Blog
                        </Link>
                    </div>

                    {archivedBlogs.length > 0 ? (
                        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            {archivedBlogs.map((blog) => (
                                <article
                                    key={blog.id}
                                    className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-zinc-200/70 bg-white/70 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                                >
                                    <div className="relative aspect-16/10 overflow-hidden">
                                        <img
                                            src={blog.coverImage}
                                            alt={blog.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />

                                        <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-200 backdrop-blur-sm">
                                            Diarsipkan
                                        </span>
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="space-y-3">
                                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                                {blog.publishedAt} - {blog.readTime}
                                            </p>

                                            <p className="text-xs text-zinc-500 dark:text-zinc-500">
                                                {blog.views ?? 0} dilihat
                                            </p>

                                            <h3 className="line-clamp-2 text-2xl font-semibold leading-snug text-zinc-900 dark:text-white">
                                                {blog.title}
                                            </h3>

                                            <p className="line-clamp-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                                                {blog.excerpt}
                                            </p>
                                        </div>

                                        <div className="mt-auto pt-6">
                                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                                <button
                                                    type="button"
                                                    onClick={() => setArchiveId(blog.id)}
                                                    className="font-medium text-emerald-500 transition hover:text-emerald-400"
                                                >
                                                    Pulihkan
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => setDeleteId(blog.id)}
                                                    className="text-red-500 transition hover:text-red-400"
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-[28px] border border-zinc-200 bg-white/70 p-10 text-center text-zinc-500 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
                            Tidak ada artikel di arsip.
                        </div>
                    )}
                </Container>
            </section>

            <BlogActionModal
                isOpen={archiveId !== null}
                title="Kembalikan artikel ini?"
                description={
                    blogToArchive
                        ? `Artikel "${blogToArchive.title}" akan muncul kembali di halaman blog utama.`
                        : "Artikel akan muncul kembali di halaman blog utama."
                }
                confirmLabel="Ya, Pulihkan"
                confirmVariant="warning"
                onCancel={() => setArchiveId(null)}
                onConfirm={handleToggleArchive}
            />

            <BlogActionModal
                isOpen={deleteId !== null}
                title="Hapus artikel ini?"
                description={
                    blogToDelete
                        ? `Artikel "${blogToDelete.title}" akan dihapus permanen.`
                        : "Artikel akan dihapus permanen."
                }
                confirmLabel="Ya, Hapus"
                confirmVariant="danger"
                onCancel={() => setDeleteId(null)}
                onConfirm={handleDelete}
            />
        </>
    )
}

export default ArchivePage
