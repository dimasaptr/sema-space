import { useState } from "react"
import { Quote } from "lucide-react"
import Container from "@/layouts/Container"
import AnimatedSection from "@/components/ui/AnimatedSection"

const testimonials = [
    {
        name: "Michael Tan",
        role: "Pemilik Rumah",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote:
            "Bekerja dengan SEMA membuat rumah kami terasa lebih lega dan tenang. Setiap ruang punya fungsi jelas, tanpa terasa kaku.",
    },
    {
        name: "Sarah Wijaya",
        role: "Klien Residensial",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote:
            "Pendekatan desainnya sederhana tapi sangat terukur. Kami merasa keputusan desain yang diambil selalu relevan dengan cara kami tinggal.",
    },
    {
        name: "Daniel Hartono",
        role: "Klien Residensial",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        quote:
            "SEMA membantu kami menyusun ruang yang rapi, terang, dan nyaman untuk jangka panjang. Prosesnya komunikatif dan jelas.",
    },
    {
        name: "Angela Kusuma",
        role: "Pemilik Rumah",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        quote:
            "Ruang yang tadinya terasa sempit sekarang jadi lebih bernapas. Penataan sirkulasi dan pencahayaan benar-benar terasa dampaknya.",
    },
]

export default function TestimonialsSection() {
    const [expanded, setExpanded] = useState(false)

    const visibleTestimonials = expanded
        ? testimonials
        : testimonials.slice(0, 3)

    return (
        <section className="border-t border-border bg-[#F1EFE7] py-24 dark:bg-[#111111]">
            <Container>
                <AnimatedSection>
                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
                            Testimoni
                        </p>

                        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                            Cerita klien setelah ruangnya dibangun dengan lebih terarah.
                        </h2>

                        <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                            Pengalaman klien yang merasakan langsung perubahan kualitas ruang,
                            kenyamanan, dan alur hidup sehari-hari.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="relative">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {visibleTestimonials.map((item, index) => (
                            <AnimatedSection key={index}>
                                <div className="relative flex h-full flex-col rounded-2xl border border-border bg-background/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                                    <Quote className="absolute right-6 top-6 h-10 w-10 opacity-10" />

                                    <p className="grow text-sm leading-relaxed text-muted-foreground md:text-base">
                                        "{item.quote}"
                                    </p>

                                    <div className="mt-8 flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            loading="lazy"
                                            className="h-10 w-10 rounded-full border border-border object-cover"
                                        />

                                        <div>
                                            <p className="font-medium text-foreground">{item.name}</p>

                                            <p className="text-xs uppercase tracking-[0.08em] text-foreground/60">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {!expanded && testimonials.length > 3 && (
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[#F1EFE7] to-transparent dark:from-[#111111]" />
                    )}
                </div>

                {testimonials.length > 3 && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-sm font-medium text-foreground transition hover:opacity-70"
                        >
                            {expanded ? "Tampilkan lebih sedikit" : "Lihat testimoni lainnya"}
                        </button>
                    </div>
                )}
            </Container>
        </section>
    )
}

