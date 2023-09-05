import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary-light': 'var(--primary-light-color)',
        secondary: 'var(--secondary-color)',
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        button: 'var(--button-color)',
      },
      textColor: {
        primary: 'var(--primary-color)',
        'primary-light': 'var(--primary-light-color)',
        secondary: 'var(--secondary-color)',
      },
      borderColor: {
        hover: 'var(--hover-color)',
      },
    },
    gridTemplateColumns: {
      main: 'repeat(auto-fill, minmax(23.75rem, 1fr))',
    },
  },
  plugins: [require('rippleui'), require('@tailwindcss/forms')],
};
export default config;
