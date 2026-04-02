import { useContext } from "react"
import { BlogContext } from "@/context/blog-context"

export function useBlog() {
  const context = useContext(BlogContext)

  if (!context) {
    throw new Error("useBlog must be used within BlogProvider")
  }

  return context
}