import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-black to-blue-800 dark:from-black dark:via-gray-900 dark:to-black text-gray-400 w-full text-center">
      Hecho con <span className="text-blue-700">💙</span> usando Gatsby,
      Tailwind CSS y Netlify{" "}
      <a
        href="https://github.com/M4ss1ck/gatsby-cv-maker"
        className="text-blue-700"
      >
        (Código fuente aquí)
      </a>
    </footer>
  )
}

export default Footer
