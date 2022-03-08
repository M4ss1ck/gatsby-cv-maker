import React from "react"
import { graphql } from "gatsby"
import { useTranslation, useI18next, Trans } from "gatsby-plugin-react-i18next"
import Footer from "../components/Footer"
import Seo from "../components/Seo"
import Language from "../components/Language"
import DarkToggle from "../components/DarkToggle"

export default function Error404() {
  const { t } = useTranslation()
  const { language } = useI18next()
  return (
    <>
      <Seo lang={language} title={t("Error 404")} />
      <main className="container mx-auto flex flex-col items-center justify-center h-screen w-full lg:text-2xl text-primario dark:text-gray-400 dark:bg-black font-montserrat">
        <DarkToggle />
        <Language />
        <h1 className="font-bold text-lg lg:text-6xl my-auto">
          <Trans>Ups</Trans>
        </h1>
        <p className="">
          <Trans>
            La página solicitada no existe
          </Trans>
        </p>
        <p>
          <Trans>La recomendación es ir a crear tu CV</Trans>
        </p>
        <button className="border-2 border-blue-700 text-blue-700 font-bold p-4 hover:text-gray-300 hover:bg-blue-700 rounded-xl px-4 my-12">
          <a href="/">
            <Trans>Crear CV</Trans>
          </a>
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