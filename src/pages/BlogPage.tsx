import { useEffect, useMemo, useState } from "react"
import type { MouseEvent } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import Container from "@/layouts/Container"
import BlogActionModal from "@/components/blog/BlogActionModal"
import { useBlog } from "@/hooks/useBlog"
import { useAuth } from "@/hooks/useAuth"

const POSTS_PER_PAGE = 6

function BlogPage() {
  const { blogList, deleteBlog, toggleArchive, isLoading } = useBlog()
  const { currentUser, isLoggedIn, isAdmin } = useAuth()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [archiveId, setArchiveId] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(() => {
    const pageFromQuery = Number(searchParams.get("page") ?? "1")
    return Number.isFinite(pageFromQuery) && pageFromQuery > 0 ? pageFromQuery : 1
  })

  const visibleBlogs = useMemo(
    () => blogList.filter((blog) => !blog.isArchived),
    [blogList]
  )

  const popularBlogs = useMemo(
    () =>
      [...visibleBlogs]
        .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
        .slice(0, 3),
    [visibleBlogs]
  )

  const popularSet = useMemo(
    () => new Set(popularBlogs.map((blog) => blog.id)),
    [popularBlogs]
  )

  const latestBlogs = useMemo(
    () =>
      visibleBlogs
        .filter((blog) => !popularSet.has(blog.id))
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        ),
    [visibleBlogs, popularSet]
  )

  const totalPages = Math.max(1, Math.ceil(latestBlogs.length / POSTS_PER_PAGE))
  const safeCurrentPage =
    currentPage > totalPages ? totalPages : currentPage < 1 ? 1 : currentPage

  useEffect(() => {
    setCurrentPage((prev) => {
      const pageFromQuery = Number(searchParams.get("page") ?? "1")

      if (!Number.isFinite(pageFromQuery) || pageFromQuery < 1) {
        return 1
      }

      return pageFromQuery
    })
  }, [searchParams])

  useEffect(() => {
    const nextParams = new URLSearchParams(searchParams)

    if (safeCurrentPage <= 1) {
      nextParams.delete("page")
    } else {
      nextParams.set("page", String(safeCurrentPage))
    }

    if (nextParams.toString() !== searchParams.toString()) {
      setSearchParams(nextParams, { replace: true })
    }
  }, [safeCurrentPage, searchParams, setSearchParams])

  const paginatedLatestBlogs = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    return latestBlogs.slice(startIndex, endIndex)
  }, [latestBlogs, safeCurrentPage])

  const blogToDelete = blogList.find((blog) => blog.id === deleteId)
  const blogToArchive = blogList.find((blog) => blog.id === archiveId)

  const handleDelete = async () => {
    if (deleteId === null) return
    await deleteBlog(deleteId)
    setDeleteId(null)
  }

  const handleToggleArchive = async () => {
    if (archiveId === null) return
    await toggleArchive(archiveId)
    setArchiveId(null)
  }

  const canDeleteBlog = (authorId: number) => {
    if (!currentUser) return false
    return currentUser.role === "admin" || currentUser.id === authorId
  }

  const canArchiveBlog = () => isAdmin

  const handleOpenArchiveModal = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation()
    setArchiveId(id)
  }

  const handleOpenDeleteModal = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation()
    setDeleteId(id)
  }

  const formatPublishedDate = (value: string) => {
    const date = new Date(value)

    if (Number.isNaN(date.getTime())) {
      return "Tanggal belum tersedia"
    }

    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date)
  }

  const renderBlogCard = (blog: (typeof blogList)[number], isPopular = false) => (
    <article
      key={blog.id}
      role="link"
      tabIndex={0}
      onClick={() => navigate(`/blog/${blog.slug}${safeCurrentPage > 1 ? `?page=${safeCurrentPage}` : ""}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          navigate(`/blog/${blog.slug}${safeCurrentPage > 1 ? `?page=${safeCurrentPage}` : ""}`)
        }
      }}
      aria-label={`Buka artikel ${blog.title}`}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[28px] border border-zinc-200/70 bg-white/70 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {isPopular && (
          <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-[0.16em] text-zinc-900">
            Populer
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="space-y-3">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {formatPublishedDate(blog.publishedAt)} • {blog.readTime}
          </p>

          <p className="text-[11px] italic text-zinc-500 dark:text-zinc-400">
            dibuat oleh {blog.authorName}
          </p>

          <p className="text-xs text-zinc-500">{blog.views ?? 0} dilihat</p>

          <h3 className="line-clamp-2 text-2xl font-semibold leading-snug text-zinc-900 dark:text-white">
            <Link
              to={`/blog/${blog.slug}${safeCurrentPage > 1 ? `?page=${safeCurrentPage}` : ""}`}
              className="transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              {blog.title}
            </Link>
          </h3>

          <p className="line-clamp-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {blog.excerpt}
          </p>
        </div>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link
              to={`/blog/${blog.slug}${safeCurrentPage > 1 ? `?page=${safeCurrentPage}` : ""}`}
              className="font-medium text-zinc-900 transition hover:text-zinc-700 dark:text-white dark:hover:text-[#F1EFE7]"
            >
              Baca selengkapnya
            </Link>

            {(canArchiveBlog() || canDeleteBlog(blog.authorId)) && (
              <>
                {canArchiveBlog() && (
                  <button
                    type="button"
                    onClick={(e) => handleOpenArchiveModal(e, blog.id)}
                    className="text-amber-500 transition hover:text-amber-400"
                  >
                    {blog.isArchived ? "Pulihkan" : "Arsipkan"}
                  </button>
                )}

                {canDeleteBlog(blog.authorId) && (
                  <button
                    type="button"
                    onClick={(e) => handleOpenDeleteModal(e, blog.id)}
                    className="text-red-500 transition hover:text-red-400"
                  >
                    Hapus
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  )

  return (
    <>
      <section className="pb-24 pt-32 text-zinc-900 transition-colors dark:text-white">
        <Container>
          <div className="mb-16 max-w-2xl space-y-6">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Wawasan ruang, rumah, dan cara hidup yang lebih tenang.
            </h1>

            <p className="max-w-xl text-sm leading-8 text-zinc-600 md:text-base dark:text-zinc-400">
              Kumpulan artikel, pemikiran, dan pendekatan desain dari sudut
              pandang ruang tinggal yang lebih tenang, efisien, dan relevan.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {isLoggedIn && (
                <>
                  <Link
                    to="/blog/create"
                    className="inline-flex rounded-full border border-zinc-300 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:border-white/15 dark:bg-white dark:text-black"
                  >
                    Tulis Artikel
                  </Link>

                  {isAdmin && (
                    <Link
                      to="/blog/archive"
                      className="inline-flex rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:border-white/25 dark:hover:bg-white/5"
                    >
                      Arsip
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>

          {popularBlogs.length > 0 && !isLoading && (
            <div className="mb-24 space-y-10">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-500">
                  Sorotan
                </p>
                <h2 className="text-3xl font-semibold">Artikel Terpopuler</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {popularBlogs.map((blog) => renderBlogCard(blog, true))}
              </div>
            </div>
          )}

          <div className="space-y-10">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-500">
                Terbaru
              </p>
              <h2 className="text-3xl font-semibold">Artikel Terbaru</h2>
            </div>

            {isLoading ? (
              <div className="rounded-[28px] border border-zinc-200 bg-white/70 p-10 text-center text-zinc-500 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
                Memuat artikel...
              </div>
            ) : paginatedLatestBlogs.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {paginatedLatestBlogs.map((blog) => renderBlogCard(blog))}
              </div>
            ) : (
              <div className="rounded-[28px] border border-zinc-200 bg-white/70 p-10 text-center text-zinc-500 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
                Belum ada artikel terbaru.
              </div>
            )}

            {!isLoading && totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={safeCurrentPage === 1}
                  className="rounded-full border border-zinc-300 px-5 py-2 text-sm text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 disabled:opacity-40 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/20 dark:hover:text-white"
                >
                  Sebelumnya
                </button>

                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1
                  const isActive = page === safeCurrentPage

                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`h-11 w-11 rounded-full border text-sm font-medium transition ${
                        isActive
                          ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-black"
                          : "border-zinc-300 text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/20 dark:hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  )
                })}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={safeCurrentPage === totalPages}
                  className="rounded-full border border-zinc-300 px-5 py-2 text-sm text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 disabled:opacity-40 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/20 dark:hover:text-white"
                >
                  Berikutnya
                </button>
              </div>
            )}
          </div>
        </Container>
      </section>

      <BlogActionModal
        isOpen={deleteId !== null}
        title="Hapus artikel ini?"
        description={
          blogToDelete
            ? `Artikel "${blogToDelete.title}" akan dihapus permanen.`
            : "Artikel ini akan dihapus permanen."
        }
        confirmLabel="Ya, Hapus"
        confirmVariant="danger"
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          void handleDelete()
        }}
      />

      <BlogActionModal
        isOpen={archiveId !== null}
        title={blogToArchive?.isArchived ? "Pulihkan artikel ini?" : "Arsipkan artikel ini?"}
        description={
          blogToArchive?.isArchived
            ? "Artikel akan dikembalikan ke halaman blog utama."
            : "Artikel akan disembunyikan dari halaman blog utama."
        }
        confirmLabel={blogToArchive?.isArchived ? "Ya, Pulihkan" : "Ya, Arsipkan"}
        confirmVariant="warning"
        onCancel={() => setArchiveId(null)}
        onConfirm={() => {
          void handleToggleArchive()
        }}
      />
    </>
  )
}

export default BlogPage
