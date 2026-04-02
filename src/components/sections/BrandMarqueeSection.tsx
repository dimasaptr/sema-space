import Container from "@/layouts/Container"

const brands = [
  { name: "AICA", logo: "/brands/aica.png" },
  { name: "American Standard", logo: "/brands/american-standard.png", logoClass: "scale-90" },
  { name: "Jotun", logo: "/brands/jotun.png" },
  { name: "Roman", logo: "/brands/roman.png" },
  { name: "Dekson", logo: "/brands/dekson.png" },
  { name: "Modena", logo: "/brands/modena.png" },
  { name: "Nippon Paint", logo: "/brands/nippon-paint.png" },
  { name: "Niro Granite", logo: "/brands/niro-granite.png", logoClass: "scale-90" },
  { name: "Panasonic", logo: "/brands/panasonic.png" },
  { name: "Philips", logo: "/brands/philips.png" },
  { name: "Rinnai", logo: "/brands/rinnai.png" },
  { name: "Schneider Electric", logo: "/brands/schneider-electric.png", logoClass: "scale-90" },
  { name: "Sika", logo: "/brands/sika.png" },
  { name: "TACO", logo: "/brands/taco.png" },
  { name: "TOTO", logo: "/brands/toto.png" },
  { name: "YKK AP", logo: "/brands/ykk.png" },
]

export default function BrandMarqueeSection() {
  return (
    <section className="overflow-hidden border-t border-border bg-[#F1EFE7] py-14 md:py-16 dark:bg-[#111111]">
      <Container>
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
            Referensi Material
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
            Brand material yang sering kami gunakan
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Pemilihan material kami arahkan agar buildable, tahan pakai,
            dan selaras dengan kualitas ruang yang ingin dicapai.
          </p>
        </div>
      </Container>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-6 md:gap-8">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex h-18.5 w-42 shrink-0 items-center justify-center rounded-2xl bg-black/[0.035] px-4 py-3 dark:bg-white/10"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className={`max-h-8 w-full object-contain md:max-h-9 ${
                  brand.name === "Modena" || brand.name === "Panasonic"
                    ? "dark:brightness-0 dark:invert"
                    : ""
                } ${brand.logoClass ?? ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
