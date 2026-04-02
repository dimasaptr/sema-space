import AnimatedSection from "@/components/ui/AnimatedSection"

const approachItems = [
    {
        title: "Memahami Kebutuhan",
        description:
            "Kami memetakan gaya hidup, prioritas ruang, dan konteks lahan sebelum masuk ke keputusan bentuk.",
    },
    {
        title: "Menyusun Strategi Ruang",
        description:
            "Konsep ruang disusun agar sirkulasi, cahaya alami, dan fungsi harian bekerja dengan jelas.",
    },
    {
        title: "Mengawal Realisasi",
        description:
            "Rancangan diterjemahkan ke tahap implementasi dengan detail yang buildable dan terukur.",
    },
]

function DesignApproachSection() {
    return (
        <AnimatedSection>
            <section className="border-t border-border py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <p className="text-center text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
                        Pendekatan Desain
                    </p>

                    <h2 className="mt-4 text-center text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                        Proses yang tenang, jelas, dan fokus pada kualitas hidup.
                    </h2>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {approachItems.map((item, index) => (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-border bg-background/70 p-6"
                            >
                                <p className="text-xs font-medium uppercase tracking-[0.12em] text-foreground/50">
                                    0{index + 1}
                                </p>

                                <h3 className="mt-3 text-lg font-semibold text-foreground">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default DesignApproachSection

