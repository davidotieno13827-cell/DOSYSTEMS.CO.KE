'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/davidotieno13827-cell', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/david-otieno-b0b660343', label: 'LinkedIn' },
        { icon: FaTwitter, href: 'https://twitter.com/_missing_donor', label: 'Twitter' },
        { icon: FaInstagram, href: 'https://www.instagram.com/_dav.e0/', label: 'Instagram' },
        { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=100067929454892', label: 'Facebook' },
    ]

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-electric-blue/20 bg-dark-card/50 backdrop-blur-md"
        >
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-neon-purple rounded-lg flex items-center justify-center font-bold text-xl">
                                DO
                            </div>
                            <span className="font-bold text-xl gradient-text">DOsystems</span>
                        </div>
                        <p className="text-gray-400">Transforming ideas into reality with AI/ML and modern web solutions.</p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-electric-blue transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-bold text-white mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#services" className="hover:text-electric-blue transition-colors">AI/ML Solutions</a></li>
                            <li><a href="#services" className="hover:text-electric-blue transition-colors">Web Development</a></li>
                            <li><a href="#services" className="hover:text-electric-blue transition-colors">Consulting</a></li>
                            <li><a href="#services" className="hover:text-electric-blue transition-colors">Data Analytics</a></li>
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-bold text-white mb-4">Follow Me</h4>
                        <div className="flex flex-wrap gap-3 mb-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-blue/30 bg-dark-card hover:bg-electric-blue/10 text-gray-200 hover:text-electric-blue transition-colors duration-300 shadow-sm"
                                    title={social.label}
                                >
                                    <social.icon className="text-lg" />
                                    <span className="text-sm font-medium">{social.label}</span>
                                </motion.a>
                            ))}
                        </div>
                        <a
                            href="mailto:DOsystems13827@gmail.com"
                            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-electric-blue text-dark-bg font-semibold hover:bg-neon-purple transition-colors duration-300 shadow-lg"
                        >
                            <FaEnvelope className="text-base" />
                            Email Me
                        </a>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-t border-electric-blue/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
                >
                    <p>&copy; {currentYear} DOsystems. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-electric-blue transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-electric-blue transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-electric-blue transition-colors">Sitemap</a>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    )
}
