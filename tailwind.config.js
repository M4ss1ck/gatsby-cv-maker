//@ts-check
module.exports = {
  //important: true,
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25vh",
      "1/2": "50vh",
      "3/4": "75vh",
      full: "100vh",
    },
    fontFamily: {
      montserrat: ["Montserrat, sans-serif"],
    },
  },
  plugins: [require("daisyui")],
}
