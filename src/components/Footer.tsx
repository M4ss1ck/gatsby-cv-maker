import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-16 text-center bg-gradient-to-r from-primary via-transparent to-primary text-secondary">
      <Trans>Hecho con</Trans> <span aria-label="heart" className="mx-2">💙</span>{" "}
      <Trans>usando Gatsby, Tailwind CSS y Netlify</Trans>{" "}
      <a
        href="https://github.com/M4ss1ck/gatsby-cv-maker"
        className="ml-2 text-accent"
      >
        <Trans>(Código fuente aquí)</Trans>
      </a>
    </footer>
  )
}

export default Footer
