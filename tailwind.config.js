
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom right, #0f172a, #1e293b)",
      },
    },
  },
  plugins: [],
}
