import { backendlessApi, endpoints } from "./backendless"

export type BackendlessLoginResponse = {
    objectId: string
    name?: string
    email: string
    role?: "admin" | "writer" | "user"
    "user-token"?: string
}

export async function loginUser(email: string, password: string) {
    const response = await backendlessApi.post<BackendlessLoginResponse>(
        endpoints.usersLogin,
        { login: email, password }
    )

    return response.data
}

export async function logoutUser(userToken: string) {
    const response = await backendlessApi.get(endpoints.usersLogout, {
        headers: {
        "user-token": userToken,
        },
    })

    return response.data
}
