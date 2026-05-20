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
    },
  },
  plugins: [],
}
export default config
