import type { Config } from 'tailwindcss';

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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        md: '0.375rem',
      },
      colors: {
        'theme-second': '#fab3a9',
        'theme-third': '#9fb8d4',
        'theme-main': '#eff876',
        'theme-lowlight': '#a3a3a3',
        'theme-background': '#1d1d1d',
        'theme-second-background': '#1d1d20',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
export default config;
