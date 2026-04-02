import { createContext } from "react"
import type { Blog } from "@/types/blog"

export type BlogContextType = {
    blogList: Blog[]
    addBlog: (newBlog: Blog) => Promise<void>
    deleteBlog: (id: number) => Promise<void>
    toggleArchive: (id: number) => Promise<void>
    incrementViews: (id: number) => Promise<void>
    updateBlog: (updatedBlog: Blog) => Promise<void>
    popularIds: number[]
    isLoading: boolean
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined)