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
        c1: '#4dffd6',
        c2: '#18b0e8',
        c3: '#0f5fad',
        ink: '#071828',
        muted: '#4a6080',
        border: '#cce4f5',
        off: '#f0f8ff',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-grad': 'linear-gradient(135deg, #4dffd6 0%, #18b0e8 45%, #0f5fad 100%)',
      },
      borderRadius: {
        '2xl': '16px',
      },
    },
  },
  plugins: [],
}
export default config
