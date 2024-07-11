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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
        content: '1110px',
      },
      fontSize: {
        h1: ['3rem', '3rem'],
        h2: ['2.5rem', '3rem'],
        h3: ['1.25rem', '1.625rem'],
        body: ['1rem', '1.625rem'],
        'mobile-menu': ['1.5rem', '1,5625'],
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
