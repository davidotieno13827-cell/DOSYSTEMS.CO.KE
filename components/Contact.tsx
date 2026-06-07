'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    const contactInfo = [
        {
            icon: FaPhone,
            title: 'Phone',
            details: [
                { label: '+254 746 432 933', href: 'tel:+254746432933' },
                { label: '+254 753 695 331', href: 'tel:+254753695331' },
            ],
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            details: [
                { label: 'DOsystems13827@gmail.com', href: 'mailto:DOsystems13827@gmail.com' },
            ],
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Company',
            details: [
                { label: 'DOsystems.co.ke', href: 'https://dosystems.co.ke' },
                { label: 'Kenya', href: 'https://www.google.com/maps/search/Kenya' },
            ],
        },
    ]

    return (
        <motion.section
            id="contact"
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
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to start your project? Contact me today and let's create something amazing together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-dark-card border border-electric-blue/20 rounded-xl p-8 text-center hover:border-electric-blue/50 transition-all"
                        >
                            <info.icon className="text-4xl text-electric-blue mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                            <div className="space-y-2">
                                {info.details.map((detail, idx) => (
                                    <a
                                        key={idx}
                                        href={detail.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-electric-blue transition-colors block"
                                    >
                                        {detail.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto bg-dark-card border border-electric-blue/20 rounded-xl p-8 hover:border-electric-blue/50 transition-all"
                >
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <div className="text-5xl mb-4">✓</div>
                            <h3 className="text-2xl font-bold text-electric-blue mb-2">Message Sent!</h3>
                            <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon!</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-dark-bg border border-electric-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-dark-bg border border-electric-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark-bg border border-electric-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue transition-colors"
                                    placeholder="Project Subject"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full bg-dark-bg border border-electric-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full btn-primary"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </motion.section>
    )
}
