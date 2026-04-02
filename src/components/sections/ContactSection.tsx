import { Link } from "react-router-dom"
import AnimatedSection from "@/components/ui/AnimatedSection"

const WHATSAPP_LINK =
    "https://wa.me/6281234567890?text=Halo%20SEMA%2C%20saya%20ingin%20konsultasi%20proyek."

function ContactSection() {
    return (
        <AnimatedSection>
            <section className="border-t border-border py-24">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
                        Konsultasi
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                        Punya rencana renovasi atau bangun rumah?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        Ceritakan kebutuhan ruang Anda. Kami bantu menyusun arah desain
                        yang jelas, realistis, dan nyaman untuk ditinggali.
                    </p>

                    <p className="mt-5 text-xs uppercase tracking-[0.14em] text-foreground/60 md:text-sm">
                        Area layanan: Jabodetabek dan kota besar Indonesia
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 sm:w-[190px]"
                        >
                            Konsultasi Proyek
                        </a>

                        <Link
                            to="/projects"
                            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-medium text-foreground transition hover:bg-foreground/5 sm:w-[190px]"
                        >
                            Lihat Proyek
                        </Link>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default ContactSection
