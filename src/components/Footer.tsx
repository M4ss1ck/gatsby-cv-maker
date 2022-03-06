import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-black to-blue-800 dark:from-black dark:via-gray-900 dark:to-black text-gray-400 w-full text-center">
      <Trans>Hecho con</Trans> <span className="text-blue-700">💙</span>{" "}
      <Trans>usando Gatsby, Tailwind CSS y Netlify</Trans>{" "}
      <a
        href="https://github.com/M4ss1ck/gatsby-cv-maker"
        className="text-blue-700"
      >
        <Trans>(Código fuente aquí)</Trans>
      </a>
    </footer>
  )
}

export default Footer
