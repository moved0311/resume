/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      content: {
        link: 'url("./assets/link.svg")',
      },
    },
  },
  plugins: [],
}

