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
    // extend: {
    //   maxWidth: {
    //     pantalla: "100vw",
    //   },
    //   colors: {
    //     primario: "#1D4ED8",
    //     secundario: "#049e2a",
    //     terciario: "#a72772",
    //   },
    // },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            primario: "#1D4ED8",
            fondo: "#049e2a",
          },
        },
      },
      themes: [
        {
          name: "dark",
          extend: {
            colors: {
              primario: "#9CA3AF",
              fondo: "#000000",
            },
          },
        },
        {
          name: "pink",
          extend: {
            colors: {
              primario: "#a72772",
              fondo: "#049e2a",
            },
          },
        },
      ],
    }),
  ],
}
