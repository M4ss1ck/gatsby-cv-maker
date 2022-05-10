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
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            primario: "#1D4ED8",
            secundario: "rgb(209 213 219)",
            fondo: "white",
          },
        },
      },
      themes: [
        {
          name: "dark",
          extend: {
            colors: {
              primario: "#1D4ED8",
              fondo: "#000000",
              secundario: "rgb(209 213 219)",
            },
          },
        },
        {
          name: "pink",
          extend: {
            colors: {
              primario: "#a72772",
              fondo: "white",
              secundario: "rgb(209 213 219)",
            },
          },
        },
        {
          name: "classic",
          extend: {
            colors: {
              primario: "black",
              fondo: "white",
              secundario: "gray.400",
            },
          },
        },
      ],
    }),
  ],
}
