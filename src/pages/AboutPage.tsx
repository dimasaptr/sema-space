import { useEffect } from "react"
import { Link } from "react-router-dom"
import Container from "@/layouts/Container"
import AnimatedSection from "@/components/ui/AnimatedSection"
import TeamCard from "@/components/ui/TeamCard"
import { team } from "@/data/team"

import arch1 from "@/assets/about/architecture-01.jpg"
import arch2 from "@/assets/about/architecture-02.jpg"

function AboutPage() {
    useEffect(() => {
        document.title = "Tentang - SEMA Space"
    }, [])

    const previewTeam = team.filter((member) =>
        ["Kenji Sato", "Adrian Wijaya", "Sarah Wijaya"].includes(member.name)
    )

    return (
        <main>
            {/* Intro */}
            <section className="border-b border-border py-24 md:py-32">
                <Container>
                    <AnimatedSection>
                        <div className="mx-auto max-w-3xl px-1 sm:px-0">
                            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                                Tentang SEMA
                            </h1>

                            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground md:mt-10 md:space-y-6">
                                <p>
                                    SEMA adalah studio arsitektur hunian yang berangkat dari gagasan{" "}
                                    <span className="font-medium text-foreground">Spatial Efficiency</span>{" "}
                                    dan konsep <span className="font-medium text-foreground">Ma</span>{" "}
                                    dalam filosofi Jepang. Kami memandang ruang sebagai hubungan
                                    antara fungsi, jeda, dan pengalaman hidup sehari-hari.
                                </p>

                                <p>
                                    Bagi kami, arsitektur bukan soal tampil mencolok. Arsitektur
                                    adalah cara menyusun ruang agar aktivitas keluarga terasa lebih
                                    nyaman, efisien, dan tenang dalam jangka panjang.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Company History */}
            <section className="border-b border-border py-24 md:py-28">
                <Container>
                    <AnimatedSection>
                        <div className="mx-auto max-w-3xl">
                            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                                Perjalanan SEMA
                            </h2>

                            <p className="mt-6 leading-relaxed text-muted-foreground">
                                SEMA berangkat dari ketertarikan untuk memahami bagaimana ruang
                                dapat mempengaruhi kualitas kehidupan sehari-hari. Dalam banyak
                                konteks hunian di kota-kota Indonesia, keterbatasan lahan sering
                                kali menghasilkan ruang yang tidak efisien, kurang terang, dan
                                terputus dari lingkungannya.
                            </p>

                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Dari proses tersebut lahir gagasan{" "}
                                <span className="font-medium text-foreground">SEMA</span>, yang
                                menggabungkan prinsip{" "}
                                <span className="font-medium text-foreground">Spatial Efficiency</span>{" "}
                                dengan konsep <span className="font-medium text-foreground">Ma</span>{" "}
                                dalam filosofi Jepang - sebuah pemahaman tentang jeda dan hubungan
                                antar ruang.
                            </p>

                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Seiring waktu, SEMA berkembang menjadi fondasi cara berpikir dalam
                                merancang arsitektur hunian yang efisien, terang secara alami,
                                dan responsif terhadap iklim tropis.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Milestones */}
                    <AnimatedSection>
                        <div className="mx-auto mt-16 max-w-2xl md:mt-20">
                            <h3 className="text-lg font-medium tracking-tight text-foreground">
                                Milestone
                            </h3>

                            <div className="mt-10 space-y-10 md:space-y-12">
                                <div className="flex items-start gap-6">
                                    <div className="w-20 shrink-0 text-3xl font-semibold text-foreground md:text-4xl">
                                        2024
                                    </div>

                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        Pengembangan awal konsep SEMA sebagai pendekatan desain yang
                                        berfokus pada efisiensi ruang dan kualitas pengalaman ruang.
                                    </p>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-20 shrink-0 text-3xl font-semibold text-foreground md:text-4xl">
                                        2025
                                    </div>

                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        Eksplorasi pendekatan SEMA melalui studi dan pengembangan
                                        desain hunian yang responsif terhadap iklim tropis.
                                    </p>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-20 shrink-0 text-3xl font-semibold text-foreground md:text-4xl">
                                        2026
                                    </div>

                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        SEMA mulai dikembangkan sebagai fondasi praktik arsitektur
                                        dan identitas studio yang berfokus pada kualitas ruang
                                        dan kehidupan sehari-hari.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Architecture Image */}
            <section className="py-16 md:py-24">
                <AnimatedSection>
                    <img
                        src={arch1}
                        alt="SEMA Architecture"
                        loading="lazy"
                        decoding="async"
                        width="1600"
                        height="1000"
                        className="h-auto w-full object-contain"
                    />
                </AnimatedSection>
            </section>

            {/* Culture */}
            <section className="border-b border-border py-24 md:py-28">
                <Container>
                    <AnimatedSection>
                        <div className="mx-auto max-w-3xl">
                            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                                Cara Kerja Studio
                            </h2>

                            <p className="mt-6 leading-relaxed text-muted-foreground">
                                Budaya kerja di SEMA berangkat dari pendekatan yang tenang dan
                                rasional terhadap arsitektur. Proses desain tidak diarahkan
                                untuk menghasilkan bentuk yang mencolok, melainkan untuk
                                menemukan pengaturan ruang yang paling tepat bagi kehidupan
                                sehari-hari penggunanya.
                            </p>

                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Setiap proyek dikembangkan melalui proses yang teliti: memahami
                                kebutuhan penghuni, kondisi lahan, serta bagaimana cahaya,
                                udara, dan material dapat bekerja bersama membentuk kualitas
                                ruang. Pendekatan ini mendorong desain yang efisien, jelas
                                secara fungsi, dan tidak berlebihan dalam bentuk maupun detail.
                            </p>

                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Di dalam praktiknya, SEMA menjaga lingkungan kerja yang terbuka
                                terhadap eksplorasi ide dan kolaborasi lintas disiplin. Dengan
                                cara ini, setiap proyek diperlakukan sebagai kesempatan untuk
                                terus mempelajari bagaimana arsitektur dapat bekerja secara
                                sederhana namun bermakna bagi kehidupan penggunanya.
                            </p>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Second Image */}
            <section className="py-16 md:py-24">
                <AnimatedSection>
                    <img
                        src={arch2}
                        alt="Architecture Detail"
                        loading="lazy"
                        decoding="async"
                        width="1600"
                        height="1000"
                        className="h-auto w-full object-contain"
                    />
                </AnimatedSection>
            </section>

            {/* Team Preview */}
            <section className="py-24 md:py-28">
                <Container>
                    <AnimatedSection>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                                Tim di Balik SEMA
                            </h2>

                            <p className="mt-4 text-muted-foreground">
                                Tim kecil dengan pendekatan kolaboratif untuk merancang
                                hunian yang relevan, terukur, dan nyaman ditinggali.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-12">
                        {previewTeam.map((member, index) => (
                            <div key={member.id} className={index === 1 ? "md:mt-16" : ""}>
                                <TeamCard
                                    name={member.name}
                                    role={member.role}
                                    image={member.image}
                                    bio={member.bio}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 text-center md:mt-16">
                        <Link
                            to="/team"
                            className="text-sm font-medium text-foreground transition-opacity hover:opacity-70"
                        >
                            Lihat Semua Tim -&gt;
                        </Link>
                    </div>
                </Container>
            </section>
        </main>
    )
}

export default AboutPage
