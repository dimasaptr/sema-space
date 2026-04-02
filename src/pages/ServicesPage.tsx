import { useEffect } from "react"
import { Link } from "react-router-dom"
import Container from "@/layouts/Container"
import AnimatedSection from "@/components/ui/AnimatedSection"

import service1 from "@/assets/services/service-01.jpg"
import service2 from "@/assets/services/service-02.jpg"
import service3 from "@/assets/services/service-03.jpg"
import service4 from "@/assets/services/service-04.jpg"

function ServicesPage() {
    useEffect(() => {
        document.title = "Layanan - SEMA Space"
    }, [])

    return (
        <main>
            {/* Intro */}
            <section className="border-b border-border py-24 md:py-32">
                <Container>
                    <AnimatedSection>
                        <div className="mx-auto max-w-3xl">
                            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                                Layanan Desain untuk Hunian yang Lebih Terarah
                            </h1>

                            <p className="mt-6 leading-relaxed text-muted-foreground md:text-base">
                                SEMA menyediakan layanan perancangan arsitektur hunian dengan fokus
                                pada efisiensi ruang, kualitas cahaya alami, dan kenyamanan hidup
                                sehari-hari agar keputusan desain terasa lebih jelas sejak awal.
                            </p>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Services */}
            <section className="border-b border-border py-24 md:py-28">
                <Container>
                    <AnimatedSection>
                        <div className="mb-16 max-w-3xl">
                            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                                Layanan Utama
                            </h2>

                            <p className="mt-4 leading-relaxed text-muted-foreground md:text-base">
                                Setiap layanan dirancang untuk membantu Anda mengambil keputusan yang
                                tepat, dari tahap konsep hingga arahan implementasi.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="mx-auto max-w-6xl space-y-24">
                        {/* Service 01 */}
                        <AnimatedSection>
                            <div className="grid items-center gap-14 md:grid-cols-2">
                                <div>
                                    <div className="text-sm text-muted-foreground">01</div>

                                    <h3 className="mt-4 text-xl font-medium text-foreground">
                                        Architectural Design
                                    </h3>

                                    <p className="mt-4 leading-relaxed text-muted-foreground">
                                        Perancangan arsitektur hunian dari tahap konsep hingga
                                        pengembangan desain untuk memastikan ruang bekerja efisien,
                                        terang alami, dan relevan untuk pola hidup penghuninya.
                                    </p>
                                </div>

                                <img
                                    src={service1}
                                    alt="Architectural Design"
                                    loading="lazy"
                                    className="h-105 w-full object-cover transition duration-700 hover:scale-[1.02]"
                                />
                            </div>
                        </AnimatedSection>

                        {/* Service 02 */}
                        <AnimatedSection>
                            <div className="grid items-center gap-14 md:grid-cols-2">
                                <img
                                    src={service2}
                                    alt="Interior Design"
                                    loading="lazy"
                                    className="h-105 w-full object-cover transition duration-700 hover:scale-[1.02]"
                                />

                                <div>
                                    <div className="text-sm text-muted-foreground">02</div>

                                    <h3 className="mt-4 text-xl font-medium text-foreground">
                                        Interior Design
                                    </h3>

                                    <p className="mt-4 leading-relaxed text-muted-foreground">
                                        Pengembangan interior yang menekankan suasana ruang,
                                        pemilihan material, dan komposisi elemen agar rumah terasa
                                        nyaman, rapi, dan konsisten dengan karakter penghuninya.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Service 03 */}
                        <AnimatedSection>
                            <div className="grid items-center gap-14 md:grid-cols-2">
                                <div>
                                    <div className="text-sm text-muted-foreground">03</div>

                                    <h3 className="mt-4 text-xl font-medium text-foreground">
                                        Spatial Planning
                                    </h3>

                                    <p className="mt-4 leading-relaxed text-muted-foreground">
                                        Studi tata ruang untuk menghasilkan layout yang lebih efisien,
                                        alur sirkulasi yang jelas, dan pengalaman tinggal yang lebih
                                        nyaman dalam penggunaan sehari-hari.
                                    </p>
                                </div>

                                <img
                                    src={service3}
                                    alt="Spatial Planning"
                                    loading="lazy"
                                    className="h-105 w-full object-cover transition duration-700 hover:scale-[1.02]"
                                />
                            </div>
                        </AnimatedSection>

                        {/* Service 04 */}
                        <AnimatedSection>
                            <div className="grid items-center gap-14 md:grid-cols-2">
                                <img
                                    src={service4}
                                    alt="Architectural Consultation"
                                    loading="lazy"
                                    className="h-105 w-full object-cover transition duration-700 hover:scale-[1.02]"
                                />

                                <div>
                                    <div className="text-sm text-muted-foreground">04</div>

                                    <h3 className="mt-4 text-xl font-medium text-foreground">
                                        Architectural Consultation
                                    </h3>

                                    <p className="mt-4 leading-relaxed text-muted-foreground">
                                        Sesi konsultasi untuk memetakan potensi lahan, prioritas
                                        kebutuhan ruang, dan arah desain yang paling masuk akal
                                        sebelum proyek berjalan lebih jauh.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Design Process */}
            <section className="border-b border-border py-24 md:py-28">
                <Container>
                    <AnimatedSection>
                        <div className="mx-auto max-w-3xl">
                            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                                Proses Desain
                            </h2>

                            <div className="mt-14 space-y-12">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 shrink-0 text-3xl font-semibold text-foreground">01</div>

                                    <div>
                                        <h3 className="text-sm font-medium text-foreground">Konsultasi Awal</h3>

                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Diskusi awal untuk memahami kebutuhan penghuni,
                                            kondisi lahan, serta tujuan utama proyek.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-14 shrink-0 text-3xl font-semibold text-foreground">02</div>

                                    <div>
                                        <h3 className="text-sm font-medium text-foreground">Studi Tapak & Ruang</h3>

                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Analisis orientasi matahari, sirkulasi udara,
                                            serta potensi ruang yang dimiliki oleh lahan.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-14 shrink-0 text-3xl font-semibold text-foreground">03</div>

                                    <div>
                                        <h3 className="text-sm font-medium text-foreground">Pengembangan Konsep</h3>

                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Pengembangan konsep desain yang mengintegrasikan
                                            kebutuhan ruang dengan pendekatan arsitektur SEMA.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-14 shrink-0 text-3xl font-semibold text-foreground">04</div>

                                    <div>
                                        <h3 className="text-sm font-medium text-foreground">Pengembangan Desain</h3>

                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Penyempurnaan desain melalui pengembangan layout,
                                            material, serta detail arsitektur.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-14 shrink-0 text-3xl font-semibold text-foreground">05</div>

                                    <div>
                                        <h3 className="text-sm font-medium text-foreground">Dokumentasi Konstruksi</h3>

                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Penyusunan gambar kerja dan dokumen teknis
                                            sebagai panduan dalam proses konstruksi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-28">
                <Container>
                    <AnimatedSection>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                                Siap Memulai Proyek Anda?
                            </h2>

                            <p className="mt-4 leading-relaxed text-muted-foreground md:text-base">
                                Ceritakan kebutuhan ruang Anda, dan kami bantu menyusun arah
                                desain yang jelas, realistis, dan nyaman untuk ditinggali.
                            </p>

                            <Link
                                to="/contact"
                                className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-medium text-foreground transition hover:bg-foreground/5"
                            >
                                Diskusikan Proyek Anda
                            </Link>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </main>
    )
}

export default ServicesPage
