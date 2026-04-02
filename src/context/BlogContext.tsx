import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import type { Blog } from "@/types/blog"
import { BlogContext } from "./blog-context"
import {
  createArticle,
  deleteArticle,
  getArticles,
  updateArticle,
  type BackendlessArticle,
} from "@/lib/articles-api"

type BlogWithObjectId = Blog & {
  backendlessObjectId: string
}

function mapBackendToBlog(item: BackendlessArticle): BlogWithObjectId {
  return {
    id: parseInt(item.objectId.slice(-6), 16),
    backendlessObjectId: item.objectId,
    title: item.title ?? "",
    slug: item.slug ?? "",
    excerpt: item.excerpt ?? "",
    content: item.content ? item.content.split("\n") : [],
    coverImage: item.coverImage ?? "",
    authorId: 1,
    authorName: item.authorName ?? "SEMA Team",
    publishedAt: item.publishedAt ?? "",
    readTime: "5 min read",
    isSeed: false,
    isArchived: item.status === "archived",
    isPinned: item.featured ?? false,
    views: item.views ?? 0,
  }
}

export function BlogProvider({ children }: { children: ReactNode }) {
  const [blogList, setBlogList] = useState<BlogWithObjectId[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchArticles = async () => {
    try {
      setIsLoading(true)
      const data = await getArticles()
      return data.map(mapBackendToBlog)
    } catch (error) {
      console.error("❌ Failed to load articles:", error)
      return []
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let isMounted = true

    const load = async () => {
      const mapped = await fetchArticles()
      if (isMounted) setBlogList(mapped)
    }

    void load()

    return () => {
      isMounted = false
    }
  }, [])

  const refresh = async () => {
    const mapped = await fetchArticles()
    setBlogList(mapped)
  }

  const addBlog = async (newBlog: Blog) => {
    await createArticle({
      title: newBlog.title,
      slug: newBlog.slug,
      excerpt: newBlog.excerpt,
      content: newBlog.content.join("\n"),
      coverImage: newBlog.coverImage,
      authorName: newBlog.authorName,
    })
    await refresh()
  }

  const deleteBlog = async (id: number) => {
    const target = blogList.find((b) => b.id === id)
    if (!target) return
    await deleteArticle(target.backendlessObjectId)
    await refresh()
  }

  const toggleArchive = async (id: number) => {
    const target = blogList.find((b) => b.id === id)
    if (!target) return
    await updateArticle(target.backendlessObjectId, {
      status: target.isArchived ? "published" : "archived",
    })
    await refresh()
  }

  const incrementViews = async (id: number) => {
    const target = blogList.find((b) => b.id === id)
    if (!target) return

    await updateArticle(target.backendlessObjectId, {
      views: (target.views ?? 0) + 1,
    })

    setBlogList((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, views: (b.views ?? 0) + 1 } : b
      )
    )
  }

  const updateBlog = async (updatedBlog: Blog) => {
    const target = blogList.find((b) => b.id === updatedBlog.id)
    if (!target) return

    await updateArticle(target.backendlessObjectId, {
      title: updatedBlog.title,
      slug: updatedBlog.slug,
      excerpt: updatedBlog.excerpt,
      content: updatedBlog.content.join("\n"),
      coverImage: updatedBlog.coverImage,
      authorName: updatedBlog.authorName,
      status: updatedBlog.isArchived ? "archived" : "published",
      views: updatedBlog.views ?? 0,
    })

    await refresh()
  }

  const popularIds = [...blogList]
    .filter((b) => !b.isArchived)
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, 3)
    .map((b) => b.id)

  return (
    <BlogContext.Provider
      value={{
        blogList,
        addBlog,
        deleteBlog,
        toggleArchive,
        incrementViews,
        updateBlog,
        popularIds,
        isLoading,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}