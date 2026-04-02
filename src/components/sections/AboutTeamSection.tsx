import { Link } from "react-router-dom"
import AnimatedSection from "@/components/ui/AnimatedSection"
import TeamCard from "@/components/ui/TeamCard"
import { team } from "@/data/team"

function AboutTeamSection() {

    const previewTeam = team.filter(member =>
        ["Kenji Sato", "Adrian Wijaya", "Sarah Wijaya"].includes(member.name)
    )

    return (
        <AnimatedSection>
        <section className="py-24 border-t border-border">

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">

            <h2 className="text-2xl font-semibold">
                Meet the Team
            </h2>

            <p className="mt-4 text-muted-foreground">
                A small group of designers and collaborators working together
                to shape thoughtful architectural spaces.
            </p>

            </div>

            {/* Team Preview */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-4xl mx-auto">

            {previewTeam.map(member => (
                <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                />
            ))}

            </div>

            {/* CTA */}
            <div className="mt-16 text-center">

            <Link
                to="/team"
                className="text-sm font-medium text-foreground hover:opacity-70 transition"
            >
                View All Team →
            </Link>

            </div>

        </section>
        </AnimatedSection>
    )
}

export default AboutTeamSection