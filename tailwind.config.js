/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D6EFD',
        'primary-light': '#E5F1FF',
        dark: '#1C1C1C',
        gray: {
          100: '#F7FAFC',
          200: '#EFF2F4',
          300: '#DEE2E7',
          400: '#BDC4CD',
          500: '#8B96A5',
          600: '#505050',
          800: '#606060',
        },
        badge: {
          bg: '#FFE3E3',
          text: '#EB001B',
        },
        promo: {
          orange: '#F38332',
          teal: '#55BDC3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0px 1px 2px rgba(56, 56, 56, 0.08)',
        md: '0px 4px 16px rgba(17, 17, 17, 0.1)',
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(180deg, rgba(18, 127, 255, 1) 0%, rgba(0, 103, 255, 1) 100%)',
      },
      maxWidth: {
        desktop: '1600px',
      },
    },
  },
  plugins: [],
};
