import { useCallback, useMemo, useState, type ReactNode } from "react"
import type { User } from "@/types/user"
import { AuthContext } from "@/context/auth-context"
import { loginUser, logoutUser } from "@/lib/auth-api"
import { authUsers } from "@/data/authUser"

const AUTH_STORAGE_KEY = "sema-space-auth-user"
const TOKEN_STORAGE_KEY = "sema-space-auth-token"

function getBackendRole(rawRole?: string): User["role"] | null {
  return rawRole === "admin" || rawRole === "writer" ? rawRole : null
}

function getStoredUser(): User | null {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY)
    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw) as Partial<User> & { role?: string }

    if (
      typeof parsed.id !== "number" ||
      typeof parsed.email !== "string" ||
      typeof parsed.name !== "string"
    ) {
      return null
    }

    const role = getBackendRole(parsed.role)

    if (!role) {
      return null
    }

    return {
      id: resolveUserId(parsed.email, parsed.id),
      email: parsed.email,
      name: parsed.name,
      role,
    }
  } catch {
    return null
  }
}

function getStoredToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_STORAGE_KEY)
  } catch {
    return null
  }
}

function resolveUserId(email: string, fallbackId?: number): number {
  const matchedUser = authUsers.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  )

  if (matchedUser) {
    return matchedUser.id
  }

  return fallbackId ?? 1
}

function clearAuthStorage() {
  localStorage.removeItem(AUTH_STORAGE_KEY)
  localStorage.removeItem(TOKEN_STORAGE_KEY)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(() => getStoredUser())
  const [userToken, setUserToken] = useState<string | null>(() => getStoredToken())

  const login = useCallback(async (email: string, password: string) => {
    try {
      if (userToken) {
        try {
          await logoutUser(userToken)
        } catch (error) {
          console.warn("Previous session cleanup failed:", error)
        }
      }

      clearAuthStorage()
      setCurrentUser(null)
      setUserToken(null)

      const data = await loginUser(email, password)
      const role = getBackendRole(data.role)

      if (!role || !data.name?.trim()) {
        throw new Error("Backendless user is missing a valid name or role")
      }

      const mappedUser: User = {
        id: resolveUserId(data.email, parseInt(data.objectId.slice(-6), 16)),
        name: data.name,
        email: data.email,
        role,
      }

      const token = data["user-token"] ?? null

      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(mappedUser))

      if (token) {
        localStorage.setItem(TOKEN_STORAGE_KEY, token)
      } else {
        localStorage.removeItem(TOKEN_STORAGE_KEY)
      }

      setCurrentUser(mappedUser)
      setUserToken(token)

      return true
    } catch (error) {
      clearAuthStorage()
      setCurrentUser(null)
      setUserToken(null)
      console.error("Login failed:", error)
      return false
    }
  }, [userToken])

  const logout = useCallback(async () => {
    try {
      if (userToken) {
        await logoutUser(userToken)
      }
    } catch (error) {
      console.error("Logout failed:", error)
    } finally {
      clearAuthStorage()
      setCurrentUser(null)
      setUserToken(null)
    }
  }, [userToken])

  const isLoggedIn = !!currentUser && !!userToken

  const value = useMemo(
    () => ({
      currentUser,
      isLoggedIn,
      isAdmin: isLoggedIn && currentUser?.role === "admin",
      userToken,
      login,
      logout,
    }),
    [currentUser, isLoggedIn, userToken, login, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
