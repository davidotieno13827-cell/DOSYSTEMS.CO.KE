/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'dark-bg': '#0a0e27',
                'dark-card': '#1a1f3a',
                'electric-blue': '#00d4ff',
                'neon-purple': '#8b5cf6',
                'neon-pink': '#ff006e',
                'accent-cyan': '#00f0ff',
            },
            gradients: {
                'glow': 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #ff006e 100%)',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
