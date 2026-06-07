'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-electric-blue/20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-neon-purple rounded-lg flex items-center justify-center font-bold text-xl">
                            DO
                        </div>
                        <span className="font-bold text-xl gradient-text">DOsystems</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                whileHover={{ color: '#00d4ff' }}
                                className="text-gray-300 hover:text-electric-blue transition-colors duration-300"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            className="btn-primary"
                        >
                            Get Started
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-electric-blue"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden pb-4 border-t border-electric-blue/20"
                    >
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="block px-4 py-2 text-gray-300 hover:text-electric-blue transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="px-4 py-2">
                            <a href="#contact" className="btn-primary block text-center">
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    )
}
