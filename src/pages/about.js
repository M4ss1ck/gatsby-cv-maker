import React from "react"
import { graphql } from "gatsby"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import Footer from "../components/Footer"
import Seo from "../components/Seo"

export default function About() {
  const { t } = useTranslation()
  const { language } = useI18next()
  return (
    <>
      <Seo lang={language} title={t("about")} />
      <main className="container mx-auto flex flex-col items-center justify-center h-screen w-full lg:text-2xl">
        <div>Botón de modo oscuro aquí</div>
        <h1 className="font-bold text-lg lg:text-6xl my-auto">Bienvenido</h1>
        <p className="font-montserrat">
          Aquí puedes crear un maravilloso CV que te ayudará a conseguir tu
          próximo empleo
        </p>
        <button className="border border-primario rounded-xl px-4 my-12">
          <a href="/">Crear CV</a>
        </button>
      </main>
      <Footer />
    </>
  )
}
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
