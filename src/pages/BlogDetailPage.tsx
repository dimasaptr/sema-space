import { useEffect, useRef, useState } from "react"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import Container from "@/layouts/Container"
import BlogActionModal from "@/components/blog/BlogActionModal"
import SEO from "@/components/SEO"
import { useAuth } from "@/hooks/useAuth"
import { useBlog } from "@/hooks/useBlog"

function BlogDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { blogList, deleteBlog, toggleArchive, incrementViews } = useBlog()
  const { currentUser, isAdmin } = useAuth()

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showArchiveModal, setShowArchiveModal] = useState(false)

  const countedSlugRef = useRef<string | null>(null)
  const pageParam = searchParams.get("page")
  const blogPageHref = pageParam ? `/blog?page=${pageParam}` : "/blog"

  const blog = blogList.find((b) => b.slug === slug)

  useEffect(() => {
    if (!blog) return

    // Supaya views cuma nambah 1x per buka article slug
    if (countedSlugRef.current === blog.slug) return

    incrementViews(blog.id)
    countedSlugRef.current = blog.slug
  }, [blog, incrementViews])

  if (!blog) {
    return (
      <>
        <SEO
          title="Artikel Tidak Ditemukan"
          description="Artikel yang kamu cari tidak tersedia di SEMA Space."
          url="https://sema-space.vercel.app/blog"
        />

        <section className="py-24">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <p className="text-center text-muted-foreground">
                Artikel tidak ditemukan
              </p>

              <Link
                to={blogPageHref}
                className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
              >
                &larr; Kembali ke Blog
              </Link>
            </div>
          </Container>
        </section>
      </>
    )
  }

  const canDelete =
    currentUser &&
    (currentUser.role === "admin" ||
      (blog.authorId === currentUser.id && !blog.isSeed))

  const canArchive =
    currentUser && currentUser.role === "admin"

  const canEdit =
    currentUser && (isAdmin || blog.authorId === currentUser.id)

  const handleDelete = () => {
    deleteBlog(blog.id)
    setShowDeleteModal(false)
    navigate(blogPageHref)
  }

  const handleToggleArchive = () => {
    toggleArchive(blog.id)
    setShowArchiveModal(false)
    navigate(blogPageHref)
  }

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.excerpt}
        keywords={`blog arsitektur, ${blog.title}, desain rumah, sema space`}
        url={`https://sema-space.vercel.app/blog/${blog.slug}`}
      />

      <BlogActionModal
        isOpen={showDeleteModal}
        title="Hapus artikel ini?"
        description="Artikel yang dihapus tidak dapat dikembalikan."
        confirmLabel="Ya, Hapus"
        confirmVariant="danger"
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />

      <BlogActionModal
        isOpen={showArchiveModal}
        title={blog.isArchived ? "Pulihkan artikel ini?" : "Arsipkan artikel ini?"}
        description={
          blog.isArchived
            ? "Artikel akan dikembalikan ke halaman blog utama."
            : "Artikel akan disembunyikan dari halaman blog utama."
        }
        confirmLabel={blog.isArchived ? "Ya, Pulihkan" : "Ya, Arsipkan"}
        confirmVariant="warning"
        onCancel={() => setShowArchiveModal(false)}
        onConfirm={handleToggleArchive}
      />

      <article className="py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to={blogPageHref}
                className="inline-flex w-fit items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                &larr; Kembali ke Blog
              </Link>

              <div className="flex flex-wrap items-center gap-4">
                {canEdit && (
                  <Link
                    to={`/blog/${blog.slug}/edit`}
                    className="text-sm text-blue-500 transition-opacity hover:opacity-70"
                  >
                    Edit
                  </Link>
                )}

                {canArchive && (
                  <button
                    type="button"
                    onClick={() => setShowArchiveModal(true)}
                    className="text-sm text-amber-500 transition-opacity hover:opacity-70"
                  >
                    {blog.isArchived ? "Pulihkan" : "Arsipkan"}
                  </button>
                )}

                {canDelete && (
                  <button
                    type="button"
                    onClick={() => setShowDeleteModal(true)}
                    className="text-sm text-red-500 transition-opacity hover:opacity-70"
                  >
                    Hapus
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Oleh {blog.authorName} • {blog.publishedAt} • {blog.readTime}
              </p>

              {"views" in blog && typeof blog.views === "number" && (
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {blog.views} dilihat
                </p>
              )}

              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                {blog.title}
              </h1>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {blog.excerpt}
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="h-70 w-full object-cover md:h-105"
              />
            </div>

            <div className="space-y-6 pt-4 text-base leading-8 text-foreground/90">
              {blog.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </article>
    </>
  )
}

export default BlogDetailPage