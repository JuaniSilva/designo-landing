import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': 'url("/images/home/desktop/bg-pattern-hero-home.svg")',
      },
      backgroundPosition: {
        'hero-pattern-position': 'left -4px center',
      },
      colors: {
        'primary-peach': '#E7816B',
        'primary-black': '#1D1C1E',
        'primary-white': '#FFFFFF',
        'secondary-peach-light': '#FFAD9B',
        'secondary-dark-grey': '#333136',
        'secondary-light-grey': '#F1F3F5',
      },
      fontFamily: {
        jost: ['var(--font-jost)', ...fontFamily.sans],
      },
      spacing: {
        30: '7.5rem',
        content: '1110px',
      },
      fontSize: {
        h1: ['3rem', '3rem'],
        'h1-mobile': ['2rem', '2.25rem'],
        h2: ['2.5rem', '3rem'],
        'h2-mobile': ['1.75rem', '2.25rem'], // '1.75rem', '2rem
        h3: ['1.25rem', '1.625rem'],
        h4: ['0,9375rem', '1.375rem'],
        body: ['1rem', '1.625rem'],
        'body-mobile': ['0.9375rem', '1.5625rem'],
        'mobile-menu': ['1.5rem', '1,5625rem'],
      },
      letterSpacing: {
        '2px': '2px',
        '5px': '5px',
      },
    },
  },
  plugins: [],
};
export default config;
