import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

const Language = () => {
  const { languages, language, originalPath } = useI18next()
  return (
    <>
      <ul className="languages">
        {languages.map(lng => (
          <li
            key={lng}
            className={
              language === lng
                ? "text-center text-sm lg:text-lg py-4 font-montserrat cursor-pointer outline outline-secundario outline-1 text-gray-900 dark:text-secundario  inline-flex items-center px-2 pt-2 pb-2 font-medium leading-5 transition duration-250 ease-in-out mx-2 rounded-lg"
                : "text-center text-sm lg:text-lg py-4 font-montserrat cursor-pointer border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:outline-grey-600 focus:text-gray-600 focus:outline-grey-600 inline-flex items-center px-1 pt-2 pb-2 border-b-4 font-medium leading-5 focus:outline-none transition duration-250 ease-in-out mx-2 rounded-lg"
            }
          >
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Language
