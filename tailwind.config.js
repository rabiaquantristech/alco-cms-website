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
        primary: {
          DEFAULT: '#1B507C',
          dark: "#071C43",
          medium: "#142756",
          light: "#25507D",
        },

        secondary: {
          DEFAULT: '#F9B81E',
          dark: "#F09623",
          medium: "#FB8B21",
          light: "#F9B81E",
        },

        neutral: {
          light: "#FCF9EF",
          medium: "#C9C7C1",
          dark: "#ADB0B5",
        },
        white: '#FFFFFF',
        black: '#000000',
      },
      backgroundImage: {
        // "hero-slide-1": "linear-gradient(90.5deg, #000000 -3.72%, rgba(0,0,0,0) 104.47%), url('/assets/hero_slide1.webp')",
        "image-alco-center": "url('@/assets/background/image-alco-center.webp')",
        "dark-primary": "url('@/assets/background/dark-primary.webp')",
        "medium-primary": "url('@/assets/background/medium-primary.webp')",
        "light-neutral": "url('@/assets/background/light-neutral.webp')",
        "medium-neutral": "url('@/assets/background/medium-neutral.webp')",
        "gradient-dark-primary-to-light": "url('@/assets/background/gradient-dark-primary-to-light.webp')",
        "gradient-secondary-primary": "linear-gradient(104.77deg, #346B96 3.46%, #C6CA8D 101.88%)"
      },
    },
  },
  plugins: [],
};