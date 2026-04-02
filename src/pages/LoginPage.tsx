import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Container from "@/layouts/Container"
import { useAuth } from "@/hooks/useAuth"

function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(email, password)
      navigate("/blog")
    } catch (err) {
      console.error(err)
      setError("Email atau password salah.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-24 text-foreground">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
          <div className="mb-8 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-foreground/45">
              SEMA SPACE
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Login Dashboard
            </h1>
            <p className="mt-3 text-sm leading-7 text-foreground/60">
              Masuk untuk mengelola artikel blog SEMA Space.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground/80"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="contoh@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-2xl border border-white/10 bg-background/70 px-4 text-sm outline-none transition focus:border-foreground/30"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-foreground/80"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 w-full rounded-2xl border border-white/10 bg-background/70 px-4 text-sm outline-none transition focus:border-foreground/30"
                required
              />
            </div>

            {error && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-foreground/70">
            <p className="mb-3 font-medium text-foreground">Akun Demo</p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-foreground">Admin:</span>{" "}
                admin@semaspace.com / 123456
              </p>
              <p>
                <span className="font-semibold text-foreground">Writer:</span>{" "}
                writer@semaspace.com / 123456
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default LoginPage