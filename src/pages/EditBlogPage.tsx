import { useMemo, useState } from "react"
import type { FormEvent } from "react"
import { Navigate, useBlocker, useNavigate, useParams } from "react-router-dom"
import { flushSync } from "react-dom"
import Container from "@/layouts/Container"
import BlogActionModal from "@/components/blog/BlogActionModal"
import useUnsavedChangesGuard from "@/hooks/useUnsavedChangesGuard"
import { useBlog } from "@/hooks/useBlog"
import { useAuth } from "@/hooks/useAuth"
import type { Blog } from "@/types/blog"

type EditBlogFormProps = {
    blog: Blog
    onSubmitUpdate: (payload: {
        title: string
        excerpt: string
        coverImage: string
        content: string[]
    }) => void
}

function EditBlogForm({ blog, onSubmitUpdate }: EditBlogFormProps) {
    const navigate = useNavigate()
    const [title, setTitle] = useState(blog.title)
    const [excerpt, setExcerpt] = useState(blog.excerpt)
    const [coverImage, setCoverImage] = useState(blog.coverImage)
    const [content, setContent] = useState(blog.content.join("\n"))
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)

    const originalContent = blog.content.join("\n")
    const isDirty =
        title !== blog.title ||
        excerpt !== blog.excerpt ||
        coverImage !== blog.coverImage ||
        content !== originalContent
    const shouldBlock = isDirty && !isUpdating

    useUnsavedChangesGuard({
        shouldBlock,
    })
    const blocker = useBlocker(
        ({ currentLocation, nextLocation }) =>
            shouldBlock && currentLocation.pathname !== nextLocation.pathname
    )

    const handleOpenUpdateModal = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsUpdateModalOpen(true)
    }

    const handleUpdate = () => {
        flushSync(() => {
            setIsUpdating(true)
        })
        if (blocker.state === "blocked") blocker.proceed()

        onSubmitUpdate({
            title,
            excerpt,
            coverImage,
            content: content
                .split("\n")
                .filter((paragraph) => paragraph.trim() !== ""),
        })
    }

    return (
        <>
            <section className="py-24">
                <Container>
                    <div className="mx-auto max-w-3xl space-y-10">
                        <div className="space-y-4 text-center">
                            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                                Edit Artikel
                            </p>

                            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                                Edit Artikel
                            </h1>

                            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
                                Perbarui isi artikel agar tetap relevan, rapi, dan sesuai arah konten
                                SEMA Space.
                            </p>
                        </div>

                        <form onSubmit={handleOpenUpdateModal} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">
                                    Judul Artikel
                                </label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Masukkan judul artikel"
                                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">
                                    Ringkasan Artikel
                                </label>
                                <textarea
                                    value={excerpt}
                                    onChange={(e) => setExcerpt(e.target.value)}
                                    placeholder="Tulis ringkasan singkat artikel"
                                    rows={4}
                                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">
                                    URL Gambar Sampul
                                </label>
                                <input
                                    type="text"
                                    value={coverImage}
                                    onChange={(e) => setCoverImage(e.target.value)}
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">
                                    Isi Artikel
                                </label>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Tulis isi artikel di sini..."
                                    rows={10}
                                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                                    required
                                />
                                <p className="text-xs text-muted-foreground">
                                    Gunakan enter untuk memisahkan paragraf.
                                </p>
                            </div>

                            <div className="flex items-center justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => navigate(`/blog/${blog.slug}`)}
                                    className="rounded-2xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                                >
                                    Kembali
                                </button>

                                <button
                                    type="submit"
                                    className="rounded-2xl bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                                >
                                    Perbarui Artikel
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>

                <BlogActionModal
                    isOpen={isUpdateModalOpen}
                    title="Simpan perubahan artikel ini?"
                    description="Perubahan akan langsung diperbarui di halaman blog."
                    confirmLabel="Ya, Perbarui"
                    confirmVariant="default"
                    onCancel={() => setIsUpdateModalOpen(false)}
                    onConfirm={() => {
                        setIsUpdateModalOpen(false)
                        handleUpdate()
                    }}
                />

                <BlogActionModal
                    isOpen={blocker.state === "blocked"}
                    title="Keluar dari halaman edit?"
                    description="Perubahan yang belum disimpan akan hilang."
                    confirmLabel="Ya, Keluar"
                    confirmVariant="warning"
                    onCancel={() => {
                        if (blocker.state === "blocked") blocker.reset()
                    }}
                    onConfirm={() => {
                        if (blocker.state === "blocked") blocker.proceed()
                    }}
                />
            </section>
        </>
    )
}

function EditBlogPage() {
    const { slug } = useParams()
    const navigate = useNavigate()

    const { blogList, updateBlog } = useBlog()
    const { currentUser, isLoggedIn, isAdmin } = useAuth()

    const blog = useMemo(() => {
        return blogList.find((item) => item.slug === slug)
    }, [blogList, slug])

    const isAuthor = currentUser?.id === blog?.authorId
    const canEdit = isAdmin || isAuthor

    if (!isLoggedIn || !currentUser) {
        return <Navigate to="/auth/login" replace />
    }

    if (!blog) {
        return (
            <section className="py-24">
                <Container>
                    <div className="mx-auto max-w-2xl rounded-[28px] border border-zinc-200 bg-white/70 p-10 text-center text-zinc-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
                        Artikel tidak ditemukan.
                    </div>
                </Container>
            </section>
        )
    }

    if (!canEdit) {
        return <Navigate to="/blog" replace />
    }

    const handleSubmitUpdate = (payload: {
        title: string
        excerpt: string
        coverImage: string
        content: string[]
    }) => {
        const updatedSlug = payload.title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")

        updateBlog({
            ...blog,
            title: payload.title,
            slug: updatedSlug,
            excerpt: payload.excerpt,
            coverImage: payload.coverImage,
            content: payload.content,
        })

        navigate(`/blog/${updatedSlug}`)
    }

    return (
        <EditBlogForm key={blog.id} blog={blog} onSubmitUpdate={handleSubmitUpdate} />
    )
}

export default EditBlogPage
