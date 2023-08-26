/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#60DCBC',
              foreground: '#000000',
            },
            focus: '#60DCBC',
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#60DCBC',
              foreground: '#FFFFFF',
            },
            focus: '#60DCBC',
          },
        },
      },
    }),
  ],
};
