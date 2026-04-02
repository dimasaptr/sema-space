import { backendlessApi, endpoints } from "./backendless"

export type BackendlessArticle = {
    objectId: string
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage: string
    authorName: string
    authorEmail?: string
    category: string
    tags: string
    status: "published" | "draft" | "archived"
    featured: boolean
    views: number
    publishedAt: string
    created?: string
    updated?: string
}

export async function getArticles() {
    const pageSize = 100
    let offset = 0
    const allArticles: BackendlessArticle[] = []

    while (true) {
        const response = await backendlessApi.get<BackendlessArticle[]>(endpoints.articles, {
            params: {
                pageSize,
                offset,
            },
        })

        const batch = response.data
        allArticles.push(...batch)

        if (batch.length < pageSize) {
            break
        }

        offset += pageSize
    }

    return allArticles
}

export async function createArticle(data: {
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage: string
    authorName: string
    authorEmail?: string
    }) {
    const response = await backendlessApi.post(endpoints.articles, {
        ...data,
        category: "general",
        tags: "",
        status: "published",
        featured: false,
        views: 0,
        publishedAt: new Date().toISOString(),
    })

    return response.data
}

export async function updateArticle(
    objectId: string,
    data: Partial<BackendlessArticle>
) {
    const response = await backendlessApi.put(`${endpoints.articles}/${objectId}`, data)
    return response.data
}

export async function deleteArticle(objectId: string) {
    const response = await backendlessApi.delete(`${endpoints.articles}/${objectId}`)
    return response.data
}
