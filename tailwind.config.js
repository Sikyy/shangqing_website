/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
      },
    },
  },
  safelist: [
    'md:grid-cols-2',
    'md:grid-cols-3',
    'sm:px-6',
    'lg:px-8',
    {
      pattern: /^(sm|md|lg|xl):p.*-\d+$/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /^grid-cols-\d+$/,
      variants: ['md', 'lg'],
    }
  ],
  plugins: [],
} 