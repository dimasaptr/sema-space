import kenji from "@/assets/team/kenji-sato.jpg"
import daniel from "@/assets/team/daniel-hartono.jpg"
import maya from "@/assets/team/maya-tanaka.jpg"
import rizky from "@/assets/team/rizky-pratama.jpg"
import angela from "@/assets/team/angela-kusuma.jpg"
import kevin from "@/assets/team/kevin-lee.jpg"
import adrian from "@/assets/team/adrian-wijaya.jpg"
import farhan from "@/assets/team/farhan-putra.jpg"
import jonathan from "@/assets/team/jonathan-lee.jpg"
import sarah from "@/assets/team/sarah-wijaya.jpg"

export type Team = {
    id: number
    name: string
    role: string
    image: string
    bio: string
}

export const team: Team[] = [
    {
        id: 1,
        name: "Kenji Sato",
        role: "Arsitek Utama",
        image: kenji,
        bio: "Memimpin studio dengan fokus pada efisiensi ruang dan pengalaman arsitektur yang tenang.",
    },
    {
        id: 2,
        name: "Daniel Hartono",
        role: "Arsitek Proyek",
        image: daniel,
        bio: "Memimpin proyek hunian dari tahap konsep hingga pengembangan desain secara menyeluruh.",
    },
    {
        id: 3,
        name: "Maya Tanaka",
        role: "Arsitek Proyek",
        image: maya,
        bio: "Mengembangkan komposisi ruang minimal yang terinspirasi dari prinsip arsitektur Jepang.",
    },
    {
        id: 4,
        name: "Rizky Pratama",
        role: "Desainer Arsitektur",
        image: rizky,
        bio: "Mengembangkan konsep ruang dan diagram arsitektur pada tahap awal perancangan.",
    },
    {
        id: 5,
        name: "Angela Kusuma",
        role: "Desainer Arsitektur",
        image: angela,
        bio: "Berfokus pada suasana interior serta eksplorasi material yang selaras dengan karakter hunian.",
    },
    {
        id: 6,
        name: "Kevin Lee",
        role: "Desainer Arsitektur",
        image: kevin,
        bio: "Menangani pengembangan konsep desain dan studi visualisasi arsitektur.",
    },
    {
        id: 7,
        name: "Adrian Wijaya",
        role: "Arsitek Teknis",
        image: adrian,
        bio: "Memastikan presisi teknis melalui dokumentasi konstruksi dan pengembangan detail.",
    },
    {
        id: 8,
        name: "Farhan Putra",
        role: "Arsitek Teknis",
        image: farhan,
        bio: "Menjembatani konsep desain dengan kelayakan konstruksi dan koordinasi teknis lapangan.",
    },
    {
        id: 9,
        name: "Jonathan Lee",
        role: "Spesialis Visualisasi 3D",
        image: jonathan,
        bio: "Menciptakan narasi visual untuk menyampaikan atmosfer ruang dan arah desain secara jelas.",
    },
    {
        id: 10,
        name: "Sarah Wijaya",
        role: "Konsultan / Client Lead",
        image: sarah,
        bio: "Mengelola komunikasi antara tim studio dan klien sepanjang proses proyek.",
    },
]
