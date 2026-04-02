import { Link } from "react-router-dom"
import AnimatedSection from "@/components/ui/AnimatedSection"

function AboutSection() {
    return (
        <AnimatedSection>
            <section className="border-t border-border py-24">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
                        Tentang SEMA
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                        Ruang yang sederhana, jelas, dan terasa nyaman untuk ditinggali.
                    </h2>

                    <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
                        <p>
                            SEMA adalah pendekatan desain arsitektur yang berangkat dari dua
                            gagasan utama: <span className="font-medium text-foreground">Spatial Efficiency</span>
                            {" "}dan <span className="font-medium text-foreground">Ma</span>, konsep
                            interval ruang dalam filosofi Jepang.
                        </p>

                        <p>
                            Pendekatan ini melihat arsitektur bukan sebagai objek visual yang
                            mencolok, tetapi sebagai cara mengatur ruang agar kehidupan
                            sehari-hari terasa lebih nyaman, tenang, dan efisien.
                        </p>

                        <p>
                            Melalui pengaturan dimensi yang presisi, pemanfaatan cahaya alami,
                            serta ventilasi silang, SEMA berusaha menghadirkan ruang yang
                            dapat bernapas dan bekerja secara sederhana namun tepat bagi
                            penghuninya.
                        </p>
                    </div>

                    <div className="mt-10">
                        <Link
                            to="/about"
                            className="text-sm font-medium text-foreground transition hover:opacity-70"
                        >
                            Pelajari lebih lanjut tentang SEMA {"->"}
                        </Link>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default AboutSection
