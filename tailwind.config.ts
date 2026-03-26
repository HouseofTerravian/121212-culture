import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#1a1a1a',
          mid: '#2a2a2a',
        },
        brand: {
          red: '#c41e3a',
          'red-dark': '#8b1528',
          gold: '#D4AF37',
          'gold-dim': '#a88c28',
          green: '#2d5f3f',
          tan: '#f4e4c1',
        },
        cat: {
          art: '#c41e3a',
          fashion: '#2d5f3f',
          film: '#8b6914',
          design: '#1a4a7a',
          photography: '#5a3a6a',
        },
        dim: 'rgba(255, 255, 255, 0.65)',
        muted: 'rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
