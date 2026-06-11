import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D0982A',
          light: '#E8C9A0',
          dark: '#B8935F',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          dark: '#E8E0D0',
        },
        forest: {
          DEFAULT: '#2C4A3A',
          dark: '#1E3329',
        },
        navy: {
          DEFAULT: '#2B2D42',
          dark: '#1A1B2E',
        },
      },
      fontFamily: {
        serif: ['var(--font-nuosu-sil)', 'Nuosu SIL', 'Georgia', 'serif'],
        sans: ['var(--font-nunito-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.8s ease-out forwards',
        fadeInRight: 'fadeInRight 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
export default config
