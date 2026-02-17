import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coconut: '#F7F4EF',
        sand: '#E9E1D6',
        charcoal: '#121212',
        gold: '#C5A059',
        teal: '#00D4C7',
        coral: '#FF4D2E'
      }
    }
  },
  plugins: []
};

export default config;
