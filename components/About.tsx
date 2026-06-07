'use client'

import { motion } from 'framer-motion'
import { FaPython, FaCode, FaBrain, FaLaptop, FaChartLine } from 'react-icons/fa'

export default function About() {
    const skills = [
        { icon: FaBrain, label: 'AI/ML Engineering', color: 'text-electric-blue' },
        { icon: FaPython, label: 'Python Development', color: 'text-neon-purple' },
        { icon: FaCode, label: 'Full Stack Web', color: 'text-neon-pink' },
        { icon: FaLaptop, label: 'Cloud & Backend', color: 'text-electric-blue' },
        { icon: FaChartLine, label: 'Data Analytics', color: 'text-neon-purple' },
    ]

    return (
        <motion.section
            id="about"
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
                        About <span className="gradient-text">David Otieno</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Project Manager | AI/ML Enthusiast | Full Stack Developer</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I help businesses launch high-impact websites and AI-powered solutions with a focus on speed, reliability, and measurable growth.
                            I have delivered professional sites like <strong>siromish.co.ke</strong> and <strong>dejarautospares.co.ke</strong>.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I combine web development with AI/ML strategy to improve conversions, automate workflows, and reduce manual effort for busy teams.
                            My work is built to look premium and perform effectively.
                        </p>
                        <div className="grid gap-3 mt-6 text-gray-300 text-lg leading-relaxed">
                            <p>• Designed websites that improve user trust and lead generation.</p>
                            <p>• Built AI models and analytics tools to help businesses make smarter decisions.</p>
                            <p>• Delivered responsive solutions with fast load times and strong UX.</p>
                        </div>
                    </motion.div>

                    {/* Right Side - Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-dark-card border border-electric-blue/20 rounded-xl p-6 text-center hover:border-electric-blue/50 transition-all"
                            >
                                <skill.icon className={`text-4xl mb-3 mx-auto ${skill.color}`} />
                                <p className="font-semibold text-white">{skill.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 border border-electric-blue/30 rounded-xl p-8 text-center"
                >
                    <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                    <div className="space-y-2 text-gray-300">
                        <p>📧 <strong>Email:</strong> DOsystems13827@gmail.com</p>
                        <p>📱 <strong>Phone:</strong> +254 746 432 933 | +254 753 695 331</p>
                        <p>🏢 <strong>Company:</strong> DOsystems.co.ke</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
