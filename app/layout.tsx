import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'DOsystems - AI/ML Solutions & Web Development',
    description: 'Professional AI/ML projects, web development services, and consulting solutions by David Otieno',
    keywords: 'AI, Machine Learning, Web Development, Consulting, Python, Data Science',
    authors: [{ name: 'David Otieno', url: 'https://dosystems.co.ke' }],
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    openGraph: {
        title: 'DOsystems - AI/ML Solutions & Web Development',
        description: 'Professional AI/ML projects, web development services, and consulting solutions by David Otieno',
        siteName: 'DOsystems',
        type: 'website',
        locale: 'en_US',
        url: 'https://davidotieno13827-cell.github.io/DOSYSTEMS.CO.KE/',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body className="bg-dark-bg text-white">
                {children}
            </body>
        </html>
    )
}
