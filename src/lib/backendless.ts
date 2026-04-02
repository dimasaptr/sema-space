import axios from "axios"

const BASE_URL = import.meta.env.VITE_BACKENDLESS_BASE_URL
const APP_ID = import.meta.env.VITE_BACKENDLESS_APP_ID
const REST_API_KEY = import.meta.env.VITE_BACKENDLESS_REST_API_KEY

export const backendlessApi = axios.create({
    baseURL: `${BASE_URL}/${APP_ID}/${REST_API_KEY}`,
    headers: {
        "Content-Type": "application/json",
    },
})

export const endpoints = {
    articles: "/data/Articles",
    usersRegister: "/users/register",
    usersLogin: "/users/login",
    usersLogout: "/users/logout",
    usersMe: "/users/isvalidusertoken",
}