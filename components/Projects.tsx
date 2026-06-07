'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
    const projects = [
        {
            title: 'Siromish.co.ke',
            description: 'Professional portfolio and services website built with modern responsive design principles.',
            technologies: ['Next.js', 'Tailwind CSS', 'React'],
            link: 'https://siromish.co.ke',
            type: 'Web Development',
        },
        {
            title: 'Dejar Auto Spares.co.ke',
            description: 'E-commerce platform for auto parts with inventory management and secure payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB'],
            link: 'https://dejarautospares.co.ke',
            type: 'Web Development',
        },
        {
            title: 'Predictive Analytics Dashboard',
            description: 'Real-time data analytics dashboard using machine learning for business insights and forecasting.',
            technologies: ['Python', 'Machine Learning', 'Matplotlib'],
            type: 'AI/ML Project',
        },
        {
            title: 'Customer Behavior AI Model',
            description: 'Machine learning model for predicting customer behavior and improving retention strategies.',
            technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
            type: 'AI/ML Project',
        },
        {
            title: 'Automated Data Processing System',
            description: 'Intelligent system for automated data collection, processing, and analysis with AI optimization.',
            technologies: ['Python', 'AI/ML', 'APIs'],
            type: 'AI/ML Project',
        },
        {
            title: 'AI Consulting Services',
            description: 'Provided strategic consulting on AI/ML implementation for various businesses to optimize operations.',
            technologies: ['Consulting', 'Strategy', 'Planning'],
            type: 'Consulting',
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
            id="projects"
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
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Showcase of successful projects spanning AI/ML, web development, and consulting services
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group bg-dark-card border border-electric-blue/20 rounded-xl p-8 hover:border-electric-blue/50 transition-all"
                        >
                            {/* Type Badge */}
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 text-electric-blue rounded-full text-sm font-semibold">
                                    {project.type}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-sm font-medium border border-electric-blue/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            {project.link && (
                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-purple transition-colors"
                                >
                                    View Project <FaExternalLinkAlt />
                                </motion.a>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}
