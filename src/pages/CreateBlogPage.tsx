import { useState } from "react"
import type { FormEvent } from "react"
import { Navigate, useBlocker, useNavigate } from "react-router-dom"
import { flushSync } from "react-dom"
import Container from "@/layouts/Container"
import BlogActionModal from "@/components/blog/BlogActionModal"
import useUnsavedChangesGuard from "@/hooks/useUnsavedChangesGuard"
import { useAuth } from "@/hooks/useAuth"
import { createArticle } from "@/lib/articles-api"

function CreateBlogPage() {
  const navigate = useNavigate()
  const { currentUser, isLoggedIn } = useAuth()

  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [content, setContent] = useState("")
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false)
  const [isPublishing, setIsPublishing] = useState(false)

  const isDirty =
    title.trim() !== "" ||
    excerpt.trim() !== "" ||
    coverImage.trim() !== "" ||
    content.trim() !== ""

  const shouldBlock = isDirty && !isPublishing

  useUnsavedChangesGuard({
    shouldBlock,
  })

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      shouldBlock && currentLocation.pathname !== nextLocation.pathname
  )

  // 🔥 Protect page
  if (!isLoggedIn || !currentUser) {
    return <Navigate to="/auth/login" replace />
  }

  const handlePublish = async () => {
    flushSync(() => {
      setIsPublishing(true)
    })

    if (blocker.state === "blocked") blocker.proceed()

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")

    try {
      await createArticle({
        title,
        slug,
        excerpt,
        content,
        coverImage,
        authorName: currentUser.name,
        authorEmail: currentUser.email,
      })

      navigate("/blog")
    } catch (error) {
      console.error("❌ Failed to create article:", error)
      setIsPublishing(false)
    }
  }

  const handleOpenPublishModal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPublishModalOpen(true)
  }

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Tulis Artikel Baru
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
              Bagikan pemikiran, pendekatan, atau catatan desain ke dalam format
              artikel yang lebih terstruktur.
            </p>
          </div>

          <form onSubmit={handleOpenPublishModal} className="space-y-6">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Judul"
              className="w-full rounded-xl border border-border bg-transparent p-3 text-foreground"
              required
            />

            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Ringkasan"
              className="w-full rounded-xl border border-border bg-transparent p-3 text-foreground"
              required
            />

            <input
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="URL Gambar Sampul"
              className="w-full rounded-xl border border-border bg-transparent p-3 text-foreground"
              required
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Isi artikel..."
              className="w-full rounded-xl border border-border bg-transparent p-3 text-foreground"
              rows={8}
              required
            />

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => navigate("/blog")}
                className="rounded-xl border border-border px-6 py-3 text-foreground transition-colors hover:bg-muted"
              >
                Kembali
              </button>

              <button
                type="submit"
                className="rounded-xl bg-foreground px-6 py-3 text-background transition-opacity hover:opacity-90"
              >
                Publikasikan
              </button>
            </div>
          </form>
        </div>
      </Container>

      <BlogActionModal
        isOpen={isPublishModalOpen}
        title="Publikasikan artikel ini?"
        description="Artikel akan langsung ditampilkan."
        confirmLabel="Ya, Publikasikan"
        onCancel={() => setIsPublishModalOpen(false)}
        onConfirm={() => {
          setIsPublishModalOpen(false)
          void handlePublish()
        }}
      />

      <BlogActionModal
        isOpen={blocker.state === "blocked"}
        title="Keluar dari halaman ini?"
        description="Perubahan yang belum dipublikasikan akan hilang."
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
  )
}

export default CreateBlogPage
