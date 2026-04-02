import { FormEvent, useEffect, useState } from "react"
import Container from "@/layouts/Container"
import ContactSection from "@/components/sections/ContactSection"

const WHATSAPP_NUMBER = "6281234567890"

function ContactPage() {
    const [leadForm, setLeadForm] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        service: "Architectural Design",
        budget: "",
        message: "",
    })

    useEffect(() => {
        document.title = "Contact - SEMA Space"
    }, [])

    const handleSubmitLead = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!leadForm.name.trim() || !leadForm.phone.trim()) {
            return
        }

        const composedMessage = [
            "Halo SEMA, saya ingin konsultasi proyek.",
            "",
            `Nama: ${leadForm.name.trim()}`,
            `No. HP: ${leadForm.phone.trim()}`,
            `Email: ${leadForm.email.trim() || "-"}`,
            `Lokasi Proyek: ${leadForm.location.trim() || "-"}`,
            `Layanan Utama: ${leadForm.service}`,
            `Estimasi Budget: ${leadForm.budget || "-"}`,
            "",
            "Kebutuhan Singkat:",
            leadForm.message.trim() || "-",
        ].join("\n")

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(composedMessage)}`
        window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    }

    return (
        <main>
            <section className="border-b border-border py-24 md:py-28">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                            Mari Mulai Diskusi Proyek Anda
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                            Ceritakan kebutuhan Anda, dan tim SEMA akan membantu
                            menyusun arah desain yang tenang, terukur, dan realistis
                            untuk diwujudkan.
                        </p>

                        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-center">
                                <p className="text-xs uppercase tracking-[0.16em] text-foreground/55">
                                    Respon Awal
                                </p>
                                <p className="mt-2 text-sm font-medium text-foreground">
                                    Maks. 1x24 Jam
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-center">
                                <p className="text-xs uppercase tracking-[0.16em] text-foreground/55">
                                    Area Layanan
                                </p>
                                <p className="mt-2 text-sm font-medium text-foreground">
                                    Jabodetabek
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-center">
                                <p className="text-xs uppercase tracking-[0.16em] text-foreground/55">
                                    Format Konsultasi
                                </p>
                                <p className="mt-2 text-sm font-medium text-foreground">
                                    Online / Onsite
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="border-b border-border py-20 md:py-24">
                <Container>
                    <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-background/70 p-6 md:p-10">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                                Kirim Brief Singkat Anda
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                                Isi data inti proyek Anda agar tim kami bisa memberi respon awal
                                yang lebih tepat dan terarah.
                            </p>
                        </div>

                        <form className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmitLead}>
                            <label className="space-y-2">
                                <span className="text-xs uppercase tracking-[0.14em] text-foreground/60">Nama</span>
                                <input
                                    type="text"
                                    required
                                    value={leadForm.name}
                                    onChange={(e) => setLeadForm((prev) => ({ ...prev, name: e.target.value }))}
                                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-foreground/35"
                                    placeholder="Nama lengkap"
                                />
                            </label>

                            <label className="space-y-2">
                                <span className="text-xs uppercase tracking-[0.14em] text-foreground/60">No. HP</span>
                                <input
                                    type="tel"
                                    required
                                    value={leadForm.phone}
                                    onChange={(e) => setLeadForm((prev) => ({ ...prev, phone: e.target.value }))}
                                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-foreground/35"
                                    placeholder="08xxxxxxxxxx"
                                />
                            </label>

                            <label className="space-y-2">
                                <span className="text-xs uppercase tracking-[0.14em] text-foreground/60">Email</span>
                                <input
                                    type="email"
                                    value={leadForm.email}
                                    onChange={(e) => setLeadForm((prev) => ({ ...prev, email: e.target.value }))}
                                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-foreground/35"
                                    placeholder="email@contoh.com"
                                />
                            </label>

                            <label className="space-y-2">
                                <span className="text-xs uppercase tracking-[0.14em] text-foreground/60">Lokasi Proyek</span>
                                <input
                                    type="text"
                                    value={leadForm.location}
                                    onChange={(e) => setLeadForm((prev) => ({ ...prev, location: e.target.value }))}
                                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-foreground/35"
                                    placeholder="Contoh: Jakarta Selatan"
                                />
                            </label>

                            <label className="space-y-2">
                                <span className="text-xs uppercase tracking-[0.14em] text-foreground/60">Layanan Utama</span>
                                <select
                                    value={leadForm.service}
                                    onChange={(e) => setLeadForm((prev) => ({ ...prev, service: e.target.value }))}
                                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-foreground/35"
                                >
                                    <option>Architectural Design</option>
                                    <option>Interior Design</option>
                                    <option>Spatial Planning</option>
                                    <option>Architectural Consultation</option>
                                </select>
                            </label>

                            <label className="space-y-2">
                                <span className="text-xs uppercase tracking-[0.14em] text-foreground/60">Estimasi Budget</span>
                                <select
                                    value={leadForm.budget}
                                    onChange={(e) => setLeadForm((prev) => ({ ...prev, budget: e.target.value }))}
                                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-foreground/35"
                                >
                                    <option value="">Pilih kisaran budget</option>
                                    <option>&lt; 500 Juta</option>
                                    <option>500 Juta - 1 Miliar</option>
                                    <option>1 - 2 Miliar</option>
                                    <option>&gt; 2 Miliar</option>
                                </select>
                            </label>

                            <label className="space-y-2 md:col-span-2">
                                <span className="text-xs uppercase tracking-[0.14em] text-foreground/60">Kebutuhan Singkat</span>
                                <textarea
                                    rows={5}
                                    value={leadForm.message}
                                    onChange={(e) => setLeadForm((prev) => ({ ...prev, message: e.target.value }))}
                                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/35"
                                    placeholder="Ceritakan kebutuhan ruang, tipe hunian, dan target waktu proyek Anda."
                                />
                            </label>

                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 sm:w-[240px]"
                                >
                                    Kirim ke WhatsApp
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>

            <section className="border-b border-border py-20 md:py-24">
                <Container>
                    <div className="mx-auto max-w-5xl">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
                                Mengapa SEMA
                            </p>
                            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                                Konsultasi yang memberi arah jelas sejak awal.
                            </h2>
                            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                                Kami bantu Anda memilah prioritas ruang, menghindari keputusan
                                desain yang berulang, dan menyusun langkah proyek yang lebih terukur.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
                            <div className="rounded-2xl border border-border bg-background/70 p-6">
                                <p className="text-xs uppercase tracking-[0.16em] text-foreground/55">
                                    Clarity
                                </p>
                                <h3 className="mt-3 text-base font-semibold text-foreground">
                                    Prioritas Ruang Lebih Jelas
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    Kebutuhan utama dipetakan dulu, sehingga keputusan desain lebih fokus.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-background/70 p-6">
                                <p className="text-xs uppercase tracking-[0.16em] text-foreground/55">
                                    Efficiency
                                </p>
                                <h3 className="mt-3 text-base font-semibold text-foreground">
                                    Waktu dan Budget Lebih Terjaga
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    Arahan awal yang tepat membantu mengurangi revisi yang tidak perlu.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-background/70 p-6">
                                <p className="text-xs uppercase tracking-[0.16em] text-foreground/55">
                                    Comfort
                                </p>
                                <h3 className="mt-3 text-base font-semibold text-foreground">
                                    Hunian Nyaman untuk Jangka Panjang
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    Fokus pada alur ruang, cahaya alami, dan kualitas hidup harian.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="border-b border-border py-20 md:py-24">
                <Container>
                    <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-background/70 px-6 py-10 md:px-10">
                        <div className="text-center">
                            <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
                                Langkah Awal
                            </p>
                            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                                Apa yang Anda dapat di konsultasi pertama?
                            </h2>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="rounded-2xl border border-border p-5">
                                <p className="text-sm font-semibold text-foreground">1. Pemetaan Kebutuhan</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Kami dengarkan konteks lahan, aktivitas, dan target ruang Anda.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border p-5">
                                <p className="text-sm font-semibold text-foreground">2. Arah Solusi Awal</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Anda mendapat rekomendasi pendekatan desain yang paling relevan.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border p-5">
                                <p className="text-sm font-semibold text-foreground">3. Langkah Lanjutan</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Kami bantu susun prioritas agar proyek siap masuk tahap berikutnya.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <ContactSection />
        </main>
    )
}

export default ContactPage
