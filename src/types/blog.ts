export type Blog = {
    id: number
    title: string
    slug: string
    excerpt: string
    content: string[]
    coverImage: string
    authorId: number
    authorName: string
    publishedAt: string
    readTime: string
    isSeed?: boolean
    isArchived?: boolean
    isPinned?: boolean
    views?: number
}