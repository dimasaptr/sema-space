import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

type MainLayoutProps = {
    children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="site-shell min-h-screen flex flex-col text-foreground">

        <Navbar />

        <main className="flex-1">
            {children}
        </main>

        <Footer />

        </div>
    )
}

export default MainLayout
