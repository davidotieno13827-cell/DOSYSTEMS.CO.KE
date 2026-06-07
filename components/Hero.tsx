'use client'

import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Main Heading */}
                <motion.div variants={itemVariants} className="mb-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="gradient-text">AI/ML Solutions</span>
                        <br />
                        & Web Development
                    </h1>
                </motion.div>

                {/* Subheading */}
                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                    Transform your business with cutting-edge AI/ML projects, professional web development, and expert consulting services
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                    >
                        Start Your Project
                    </motion.a>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary"
                    >
                        View My Work
                    </motion.a>
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center"
                >
                    <FaArrowDown className="text-electric-blue text-2xl" />
                </motion.div>
            </div>
        </motion.section>
    )
}
