import type { User } from "@/types/user"

export interface AuthCredential extends User {
    password: string
}

export const authUsers: AuthCredential[] = [
    {
        id: 1,
        name: "SEMA Admin",
        email: "admin@semaspace.com",
        password: "123456",
        role: "admin",
    },
    {
        id: 2,
        name: "SEMA Writer",
        email: "writer@semaspace.com",
        password: "123456",
        role: "writer",
    },
]
