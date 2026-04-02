import AnimatedSection from "@/components/ui/AnimatedSection"
import StaggerContainer from "@/components/ui/StaggerContainer"
import StaggerItem from "@/components/ui/StaggerItem"

const services = [
    {
        title: "Architectural Design",
        description:
            "Perancangan arsitektur hunian dari tahap konsep hingga pengembangan desain agar ruang efisien, terang alami, dan relevan untuk kebutuhan penghuni.",
        focus: "Konsep + Pengembangan Desain",
    },
    {
        title: "Interior Design",
        description:
            "Pengembangan interior dengan fokus pada suasana ruang, pemilihan material, dan kenyamanan visual yang konsisten dengan karakter hunian.",
        focus: "Atmosfer + Material",
    },
    {
        title: "Spatial Planning",
        description:
            "Studi tata ruang untuk menghasilkan alur sirkulasi yang jelas, fungsi yang tepat guna, dan pengalaman tinggal yang lebih nyaman.",
        focus: "Sirkulasi + Fungsi Ruang",
    },
    {
        title: "Architectural Consultation",
        description:
            "Sesi konsultasi untuk memetakan kebutuhan ruang, potensi lahan, dan arah desain paling rasional sebelum proyek berjalan lebih jauh.",
        focus: "Arah + Keputusan Awal",
    },
]

function ServicesSection() {
    return (
        <AnimatedSection>
            <section className="border-t border-border py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <p className="text-center text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
                        Layanan
                    </p>

                    <h2 className="mt-4 text-center text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                        Layanan desain untuk kebutuhan hunian yang lebih terarah.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
                        Kami membantu dari tahap awal sampai keputusan desain utama,
                        dengan fokus pada kenyamanan ruang, efisiensi, dan kemudahan realisasi.
                    </p>

                    <StaggerContainer>
                        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2">
                            {services.map((service) => (
                                <StaggerItem key={service.title}>
                                    <div className="flex h-[220px] w-full flex-col gap-4 rounded-2xl border border-border bg-background/70 p-6 transition-colors duration-300 hover:border-foreground/20 md:h-[236px] md:p-7">
                                        <h3 className="text-base font-semibold tracking-tight text-foreground">
                                            {service.title}
                                        </h3>

                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {service.description}
                                        </p>

                                        <div className="mt-auto border-t border-border/60 pt-3">
                                            <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/55">
                                                {service.focus}
                                            </p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default ServicesSection
