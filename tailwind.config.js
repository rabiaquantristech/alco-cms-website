/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#1B507C',
        secondary: '#F9B81E',
        accent: '#00BFFF',
        white: '#FFFFFF',
        black: '#000000',
      },
      backgroundImage: {
        // "hero-slide-1": "linear-gradient(90.5deg, #000000 -3.72%, rgba(0,0,0,0) 104.47%), url('/assets/hero_slide1.webp')",
        // "hero-slide-2": "linear-gradient(90.5deg, #000000 -3.72%, rgba(0,0,0,0) 104.47%), url('/assets/hero_slide2.webp')",
        // "hero-slide-3": "linear-gradient(90.5deg, #000000 -3.72%, rgba(0,0,0,0) 104.47%), url('/assets/hero_slide3.webp')",
        "dark-primary": "url('@/assets/background/dark-primary.webp')",
        // "light-primary": "url('/assets/hero_slide2.webp')",
        // "light": "url('/assets/hero_slide3.webp')",
        // "light-grey": "url('/assets/hero_slide3.webp')",
        // "banner-pattern": "url('/assets/banner_pattern.svg')",
      },
    },
  },
  plugins: [],
};