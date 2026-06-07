'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-dark-bg">
            <Navigation />
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}
