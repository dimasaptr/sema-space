import { createContext } from "react"
import type { User } from "@/types/user"

export type AuthContextType = {
    currentUser: User | null
    isLoggedIn: boolean
    isAdmin: boolean
    userToken: string | null
    login: (email: string, password: string) => Promise<boolean>
    logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)