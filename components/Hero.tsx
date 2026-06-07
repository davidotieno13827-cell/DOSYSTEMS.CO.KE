'use client'

import { motion } from 'framer-motion'
import { FaArrowDown, FaStar } from 'react-icons/fa'

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    const floatingVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: 'easeOut' },
        },
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
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl"
                    animate={{
                        y: [0, 30, 0],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl"
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Trust Badge */}
                <motion.div variants={floatingVariants} className="mb-6 flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-electric-blue text-sm" />
                        ))}
                    </div>
                    <span className="text-gray-400 text-sm">Trusted by 10+ businesses</span>
                </motion.div>

                {/* Main Heading */}
                <motion.div variants={itemVariants} className="mb-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="gradient-text">AI-first Web Experiences</span>
                        <br />
                        <motion.span
                            className="text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            for Growth-Driven Businesses
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Subheading */}
                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                    Empower your brand with intelligent web products, AI-powered automation, and strategic consulting that converts visitors into customers.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary shadow-lg shadow-electric-blue/20"
                    >
                        Book a Free Strategy Call
                    </motion.a>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, borderColor: '#00d4ff' }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary shadow-lg"
                    >
                        See Case Studies
                    </motion.a>
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex justify-center"
                >
                    <FaArrowDown className="text-electric-blue text-2xl" />
                </motion.div>
            </div>
        </motion.section>
    )
}
