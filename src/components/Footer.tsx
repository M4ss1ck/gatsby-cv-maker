import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"

const Footer = () => {
  return (
    <footer className="w-full text-center bg-gradient-to-r from-primario via-black to-primario text-secundario">
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
