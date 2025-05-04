/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        hand: ['Caveat', 'cursive'],
        cursive: ['Satisfy', 'cursive']
      },
      colors: {
        primary: "#A8221B",    // Rouge
        secondary: "#FDEEE3",  // Beige
        tertiary: "#3A302A",   // Brun foncé
        amber: "#D9A566",      // Ambrée
        dark: "#222222",       // Noir
        cream: "#F5F0E1"       // Crème
      },
      opacity: {
        '15': '0.15',
      },
      backgroundImage: {
        'slate-texture': "url('/images/slate-texture.jpg')",
        'wood-grain': "url('/images/wood-background.jpg')",
      }
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
}