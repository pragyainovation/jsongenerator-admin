/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './constant/**/*.{js,ts,jsx,tsx,mdx}',
    './icon/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)', // Use CSS variable
        secondary: 'var(--secondary)', // Use CSS variable
        light: 'var(--light)', // Use CSS variable
        ligthGreen: 'var(--ligthGreen)',
        errorBackground: 'var(--error-background)', // Use CSS variable
        warnBackground: 'var(--warn-background)', // Use CSS variable
        infoBackground: 'var(--info-background)', // Use CSS variable
        black: 'var(--black)', // Use CSS variable
        gray1: 'var(--gray-1)', // Use CSS variable
        gray2: 'var(--gray-2)', // Use CSS variable
        gray3: 'var(--gray-3)', // Use CSS variable
        gray4: 'var(--gray-4)', // Use CSS variable
        gray5: 'var(--gray-5)', // Use CSS variable
      },
      fontFamily: {
        sans: ['"Inria Sans"', 'sans-serif'], // Set as default sans font if desired
      },
    },
  },
  plugins: [],
};
