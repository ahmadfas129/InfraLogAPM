import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#632CA6',
        purple: {
          950: '#0B1020',
          900: '#131A2A',
          800: '#1C2640'
        },
        surface: '#131A2A',
        accent: '#3B82F6',
        border: '#2C3956'
      },
      boxShadow: {
        glow: '0 20px 60px rgba(99, 44, 166, 0.18)'
      },
      backgroundImage: {
        gradientHero: 'radial-gradient(circle at top left, rgba(99,44,166,0.24), transparent 36%), radial-gradient(circle at bottom right, rgba(59,130,246,0.18), transparent 30%)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
