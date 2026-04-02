import { useEffect } from "react"

import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ServicesSection from "@/components/sections/ServicesSection"
import BrandMarqueeSection from "@/components/sections/BrandMarqueeSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import DesignApproachSection from "@/components/sections/DesignApproachSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import BlogSection from "@/components/sections/BlogSection"
import ContactSection from "@/components/sections/ContactSection"

function HomePage() {

    useEffect(() => {
        document.title = "SEMA Space — Spatial Architecture Studio"
    }, [])

    return (
        <>
        {/* 1 Hero */}
        <HeroSection />

        {/* 2 Company Overview */}
        <AboutSection />

        {/* 3 Services */}
        <ServicesSection />

        {/* 4 Featured Projects */}
        <ProjectsSection />

        {/* 5 Design Approach */}
        <DesignApproachSection />

        {/* 6 Testimonials */}
        <TestimonialsSection />

        {/* 7 Brand / Material References */}
        <BrandMarqueeSection />

        {/* 8 Blog Preview */}
        <BlogSection />

        {/* 9 Contact */}
        <ContactSection />
        </>
    )
}

export default HomePage
