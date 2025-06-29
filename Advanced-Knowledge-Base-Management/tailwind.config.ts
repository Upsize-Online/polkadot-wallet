import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        /* === Cores Oficiais Polkadot === */
        'polkadot-pink': '#E6007A',
        'polkadot-black': '#000000',
        'polkadot-white': '#FFFFFF',
        'polkadot-lime': '#E2FF3F',
        'polkadot-violet': '#6C5CE7',
        'polkadot-cyan': '#17F9FF',
        'polkadot-storm-200': '#D2D2E9',
        'polkadot-storm-400': '#A8A8C9',
        'polkadot-storm-700': '#767691',
        
        /* === Variações e auxiliares === */
        'lime': '#00ff00',
        'violet': '#8b5cf6',
        'black': '#000',
        'polkadot-light-pink': '#FF6B9D',
        'polkadot-dark-bg': '#0A0A0A',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'subtitle': 'var(--subtitle)',
        'footer': 'var(--footer)',
        'admin': 'var(--admin)',
        'subtitle-contrast': 'var(--subtitle-contrast)',
        'polkadot-purple': '#6C5CE7',
        'polkadot-gray': '#747070',
        'polkadot-blue': '#1E90FF',
        'polkadot-green': '#22C55E',
        'polkadot-orange': '#FF9800',
        'polkadot-yellow': '#FFD600',
      },
      fontFamily: {
        sans: ["Unbounded", "Arial", "Helvetica", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'loading': 'loading 1.5s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        loading: {
          '0%': {
            backgroundPosition: '200% 0',
          },
          '100%': {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config 