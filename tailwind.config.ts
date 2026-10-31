import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gma: {
          50: '#edfdfd',
          100: '#d7f8f7',
          200: '#b3f0ef',
          300: '#70dfdf',
          400: '#2ec5c7',
          500: '#19a7b3',
          600: '#137f8d',
          700: '#136370',
          800: '#134f60',
          900: '#123f52'
        }
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
} satisfies Config;
