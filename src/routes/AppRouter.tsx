import { lazy, Suspense } from "react"
import {
    Outlet,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"
import ScrollToTop from "@/components/ScrollToTop"

const HomePage = lazy(() => import("@/pages/HomePage"))
const AboutPage = lazy(() => import("@/pages/AboutPage"))
const ServicesPage = lazy(() => import("@/pages/ServicesPage"))
const TeamPage = lazy(() => import("@/pages/TeamPage"))
const BlogPage = lazy(() => import("@/pages/BlogPage"))
const ArchivePage = lazy(() => import("@/pages/ArchivePage"))
const CreateBlogPage = lazy(() => import("@/pages/CreateBlogPage"))
const EditBlogPage = lazy(() => import("@/pages/EditBlogPage"))
const BlogDetailPage = lazy(() => import("@/pages/BlogDetailPage"))
const LoginPage = lazy(() => import("@/pages/LoginPage"))
const ContactPage = lazy(() => import("@/pages/ContactPage"))
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"))
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"))

function RootLayout() {
    return (
        <>
            <ScrollToTop />
            <MainLayout>
                <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
                    <Outlet />
                </Suspense>
            </MainLayout>
        </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="team" element={<TeamPage />} />

            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/archive" element={<ArchivePage />} />
            <Route path="blog/create" element={<CreateBlogPage />} />
            <Route path="blog/:slug/edit" element={<EditBlogPage />} />
            <Route path="blog/:slug" element={<BlogDetailPage />} />

            <Route path="auth/login" element={<LoginPage />} />

            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
)

function AppRouter() {
    return <RouterProvider router={router} />
}

export default AppRouter
