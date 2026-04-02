export type UserRole = "admin" | "writer"

export type User = {
    id: number
    name: string
    email: string
    role: UserRole
}
