import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

const Language = () => {
  const { languages, language, originalPath } = useI18next()
  return (
    <div className="flex flex-row items-center justify-center m-auto">
      <svg
        className="w-6 h-6"
        width="36px"
        height="36px"
        viewBox="0 0 36 36"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>language-line</title>
        <path
          d="M30,3H14v5h2V5h14c0.6,0,1,0.4,1,1v11c0,0.6-0.4,1-1,1H17v7h-5.3L8,27.9V25H5c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h13v-2H5
		c-1.7,0-3,1.3-3,3v11c0,1.7,1.3,3,3,3h1v5.1l6.3-5.1H19v-7h11c1.7,0,3-1.3,3-3V6C33,4.3,31.7,3,30,3z"
        ></path>
        <path d="M6.2,22.9h2.4l0.6-1.6h3.1l0.6,1.6h2.4L11.9,14H9.5L6.2,22.9z M10.7,16.5l1,3.1h-2L10.7,16.5z"></path>
        <path
          d="M20,17c1.1,0,2.6-0.3,4-1c1.4,0.7,3,1,4,1v-2c0,0-1,0-2.1-0.4c1.2-1.2,2.1-3,2.1-5.6V8h-3V6h-2v2h-3v2h5.9
		c-0.2,1.8-1,2.9-1.9,3.6c-0.6-0.5-1.2-1.2-1.6-2.1h-2.1c0.4,1.3,1,2.3,1.8,3.1C21.1,15,20.2,15,20,15V17z"
        ></path>
        <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
      </svg>
      <ul className="languages">
        {languages.map(lng => (
          <li
            key={lng}
            className={
              language === lng
                ? "text-center text-sm lg:text-lg py-4 font-montserrat cursor-pointer outline outline-primario outline-1 text-primario inline-flex items-center px-2 pt-2 pb-2 font-medium leading-5 transition duration-250 ease-in-out mx-2 rounded-lg"
                : "text-center text-sm lg:text-lg py-4 font-montserrat cursor-pointer border-transparent text-primario text-opacity-60 hover:text-primario hover:outline-secundario focus:text-secundario focus:outline-grey-600 inline-flex items-center px-1 pt-2 pb-2 border-b-4 font-medium leading-5 focus:outline-none transition duration-250 ease-in-out mx-2 rounded-lg"
            }
          >
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Language
