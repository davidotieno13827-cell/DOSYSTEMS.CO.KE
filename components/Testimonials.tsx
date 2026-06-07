'use client'

import { motion } from 'framer-motion'

const testimonials = [
    {
        name: 'Amina Mwangi',
        role: 'Founder, Siromish',
        quote: 'David delivered a polished website quickly and helped us increase customer inquiries by 40%. His AI strategy recommendations were practical and effective.',
    },
    {
        name: 'Peter Njuguna',
        role: 'Owner, Dejar Auto Spares',
        quote: 'The e-commerce store looks premium and performs smoothly. We now have a reliable platform that supports our business growth.',
    },
    {
        name: 'Sara Kiptoo',
        role: 'Startup CEO',
        quote: 'The project included both web development and analytics, and the result exceeded expectations. Communication was clear and delivery was fast.',
    },
]

export default function Testimonials() {
    return (
        <motion.section
            id="testimonials"
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
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Trusted by business owners who value quality design, clear communication, and solutions that actually work.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-dark-card border border-electric-blue/20 rounded-3xl p-8 hover:border-electric-blue/50 transition-all"
                        >
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">“{testimonial.quote}”</p>
                            <div>
                                <p className="font-semibold text-white">{testimonial.name}</p>
                                <p className="text-gray-400">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
