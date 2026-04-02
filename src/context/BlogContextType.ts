import type { Blog } from "@/types/blog"

export type BlogContextType = {
  blogList: Blog[]
  isLoading: boolean
  addBlog: (newBlog: Blog) => Promise<void>
  deleteBlog: (id: number) => Promise<void>
  toggleArchive: (id: number) => Promise<void>
  incrementViews: (id: number) => Promise<void>
  updateBlog: (updatedBlog: Blog) => Promise<void>
  popularIds: number[]
}
