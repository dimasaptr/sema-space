import { motion } from "framer-motion"

type StaggerContainerProps = {
    children: React.ReactNode
}

const containerVariants = {
    hidden: {},
    show: {
        transition: {
        staggerChildren: 0.15
        }
    }
}

function StaggerContainer({ children }: StaggerContainerProps) {
    return (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        >
        {children}
        </motion.div>
    )
}

export default StaggerContainer