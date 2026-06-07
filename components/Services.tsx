'use client'

import { motion } from 'framer-motion'
import { FaBrain, FaRobot, FaChartLine, FaCode, FaLaptop, FaShieldAlt } from 'react-icons/fa'

export default function Services() {
    const services = [
        {
            icon: FaBrain,
            title: 'AI/ML Solutions',
            description: 'Custom machine learning models, predictive analytics, and intelligent automation tailored to your business needs.',
            features: ['Data Analysis', 'Model Development', 'AI Integration'],
        },
        {
            icon: FaRobot,
            title: 'AI Consulting',
            description: 'Strategic guidance on implementing AI/ML solutions in your organization. From planning to execution and optimization.',
            features: ['Strategy Planning', 'Implementation', 'Optimization'],
        },
        {
            icon: FaCode,
            title: 'Web Development',
            description: 'Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
        },
        {
            icon: FaLaptop,
            title: 'Full Stack Development',
            description: 'End-to-end web development services covering frontend, backend, and database architecture.',
            features: ['Frontend Design', 'Backend API', 'Database Design'],
        },
        {
            icon: FaChartLine,
            title: 'Data Analytics',
            description: 'Transform raw data into actionable insights with comprehensive analytics and visualization solutions.',
            features: ['Data Processing', 'Visualization', 'Reporting'],
        },
        {
            icon: FaShieldAlt,
            title: 'Technical Consulting',
            description: 'Expert advice on technology stack selection, architecture design, and best practices for scalable solutions.',
            features: ['Architecture Design', 'Code Review', 'Best Practices'],
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.section
            id="services"
            className="min-h-screen flex items-center py-20 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Services & <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Comprehensive solutions combining AI/ML innovation with professional web development services
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-dark-card border border-electric-blue/20 rounded-xl p-8 hover:border-electric-blue/50 transition-all group card-hover"
                        >
                            {/* Icon */}
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-purple rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <service.icon className="text-5xl text-electric-blue relative z-10 group-hover:text-neon-purple transition-colors" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>

                            {/* Description */}
                            <p className="text-gray-400 mb-6">{service.description}</p>

                            {/* Features */}
                            <div className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center text-sm text-gray-300">
                                        <span className="w-2 h-2 bg-electric-blue rounded-full mr-3"></span>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}
