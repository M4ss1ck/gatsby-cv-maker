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
      <main className="container flex flex-col items-center justify-center w-full h-screen mx-auto lg:text-2xl text-primario dark:text-gray-400 dark:bg-black font-montserrat">
        <DarkToggle css="relative m-auto" />
        <Language />
        <h1 className="my-auto text-lg font-bold lg:text-6xl">
          <Trans>Ups</Trans>
        </h1>
        <p className="">
          <Trans>La página solicitada no existe</Trans>
        </p>
        <p>
          <Trans>La recomendación es ir a crear tu CV</Trans>
        </p>
        <button className="p-4 px-4 my-12 font-bold text-blue-700 border-2 border-blue-700 hover:text-gray-300 hover:bg-blue-700 rounded-xl">
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
