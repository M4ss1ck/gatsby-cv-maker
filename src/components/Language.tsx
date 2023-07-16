import React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"

const Language = () => {
  const { languages, language, changeLanguage } = useI18next()
  return (
    <div className="flex flex-row justify-center items-center m-auto">
      <ul className="languages">
        {languages.map(lng => (
          <li
            key={lng}
            className={
              language === lng
                ? "py-4 font-montserrat px-2 pt-2 pb-2 mx-1 btn btn-primary btn-square"
                : "py-4 font-montserrat px-2 pt-2 pb-2 mx-1 btn btn-primary btn-outline btn-square"
            }
          >
            <button onClick={e => {
              e.preventDefault()
              changeLanguage(lng)
            }}>
              {lng}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Language
