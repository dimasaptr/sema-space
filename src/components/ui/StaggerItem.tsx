import { motion, Variants } from "framer-motion"

type StaggerItemProps = {
    children: React.ReactNode
}

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        ease: "easeOut"
        }
    }
}

function StaggerItem({ children }: StaggerItemProps) {
    return (
        <motion.div variants={itemVariants}>
        {children}
        </motion.div>
    )
}

export default StaggerItem