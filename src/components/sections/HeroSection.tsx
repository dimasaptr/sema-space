import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import hero1 from "@/assets/hero/hero-1.png"
import hero2 from "@/assets/hero/hero-2.png"
import hero3 from "@/assets/hero/hero-3.png"
import hero4 from "@/assets/hero/hero-4.png"

const WHATSAPP_LINK =
    "https://wa.me/6281234567890?text=Halo%20SEMA%2C%20saya%20ingin%20konsultasi%20proyek."

function HeroSection() {
    const heroImages = [hero1, hero2, hero3, hero4]
    const slidingImages = [...heroImages, ...heroImages]

    return (
        <section
            className="relative z-0 flex items-center justify-center overflow-hidden text-center"
            style={{ minHeight: "calc(100dvh - 4rem)" }}
        >

        {/* Sliding Background */}
        <div className="absolute inset-0 z-0 hero-bg-slider" aria-hidden="true">
            <div className="hero-bg-track">
                {slidingImages.map((src, index) => (
                    <div key={`${src}-${index}`} className="hero-bg-slide">
                        <img
                            src={src}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                ))}
            </div>
        </div>

        {/* Overlay */}

        <div className="absolute inset-0 z-10 bg-background/55 backdrop-blur-[1px]"></div>

        <div className="relative z-20 mx-auto max-w-3xl px-6">

            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl"
            >
            SE.MA
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 text-xs font-medium uppercase tracking-[0.24em] text-foreground/70"
            >
            Quietly Working on Living
            </motion.p>

            <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg"
            >
            Kami merancang hunian yang terasa tenang, fungsional, dan terukur
            melalui Spatial Efficiency, cahaya alami, dan pendekatan ruang yang
            relevan untuk hidup sehari-hari.
            </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.55,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 sm:w-47.5"
                >
                    Konsultasi Proyek
                </a>

                <Link
                    to="/projects"
                    className="inline-flex h-11 w-full items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-medium text-foreground transition hover:bg-foreground/5 sm:w-47.5"
                >
                    Lihat Proyek
                </Link>
            </motion.div>

        </div>

        </section>
    )
}

export default HeroSection
