/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/App.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-desktop': "url('./src/assets/images/pattern-bg-desktop.png')",
        'pattern-mobile': "url('./src/assets/images/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
}
