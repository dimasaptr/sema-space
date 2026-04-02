import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import App from "./App"
import { BlogProvider } from "@/context/BlogContext"
import { AuthProvider } from "@/context/AuthContext"
import { getArticles } from "@/lib/articles-api"
import "./styles/index.css"

getArticles()
  .then((data) => {
    console.log("✅ Articles from Backendless:", data)
  })
  .catch((error) => {
    console.error("❌ Failed to fetch articles:", error)
  })

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)