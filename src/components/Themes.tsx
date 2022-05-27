import React, { useEffect } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const daisyUIThemes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
]

const Themes: React.FC = () => {
  const { t } = useTranslation()

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme != undefined && theme != "") {
      document.documentElement.setAttribute("data-theme", theme)
    }
  }, [])

  const initialTheme =
    localStorage.getItem("theme") ||
    document.documentElement.getAttribute("data-theme") ||
    "light"
  const [theme, setTheme] = React.useState(initialTheme)

  const handleChange = (theme: string) => {
    setTheme(theme)
    document.documentElement.classList.add("theme-transition")
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
    window.setTimeout(function () {
      document.documentElement.classList.remove("theme-transition")
    }, 1000)
  }

  return (
    <div className="relative flex flex-row items-center justify-center ml-4 mr-auto bg-opacity-100">
      <Listbox value={theme} onChange={handleChange}>
        <div className="relative">
          <Listbox.Label hidden>Select a theme</Listbox.Label>
          <Listbox.Button as={React.Fragment}>
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 46.991 46.99"
              fill="currentColor"
              className="w-6 h-6 cursor-pointer focus:outline-none"
            >
              <g>
                <path d="M22.082,2.61c-3.74,0-7.598,0.592-11.465,1.76C9.503,4.706,6.115,5.73,4.877,9.082c-1.222,3.312,0.536,6.051,1.819,8.052 c0.732,1.142,1.563,2.436,1.563,3.337c0,1.522-2.301,4.68-3.824,6.77c-2.771,3.804-5.914,8.113-3.672,12.523 c2.081,4.092,7.132,4.615,11.299,4.615c18.282,0,34.928-11.048,34.928-23.179C46.99,12.261,37.469,2.61,22.082,2.61z M16.5,34.109 c-0.027,2.194-1.809,3.967-4.01,3.967c-2.217,0-4.014-1.798-4.014-4.015c0-2.219,1.797-4.017,4.014-4.017 c0.682,0,1.314,0.188,1.877,0.486c1.266,0.675,2.137,1.991,2.137,3.526C16.503,34.078,16.5,34.095,16.5,34.109z M17.01,15.082	c-0.848-0.736-1.395-1.809-1.395-3.02c0-2.218,1.798-4.015,4.015-4.015c2.218,0,4.015,1.797,4.015,4.015 c0,0.205-0.031,0.401-0.061,0.599c-0.291,1.931-1.941,3.416-3.954,3.416C18.623,16.077,17.715,15.693,17.01,15.082z M24.63,35.076 c-1.424,0-2.668-0.746-3.381-1.864c-0.396-0.623-0.635-1.357-0.635-2.15c0-2.217,1.799-4.015,4.018-4.015 c1.975,0,3.607,1.431,3.941,3.31c0.041,0.23,0.07,0.466,0.07,0.705C28.644,33.278,26.849,35.076,24.63,35.076z M27.486,13.244	c-0.021-0.171-0.052-0.339-0.052-0.516c0-1.855,1.265-3.401,2.975-3.861c0.333-0.09,0.678-0.153,1.04-0.153	c1.575,0,2.925,0.916,3.582,2.237c0.27,0.538,0.432,1.136,0.432,1.777c0,1.387-0.701,2.609-1.771,3.33	c-0.641,0.433-1.412,0.685-2.242,0.685C29.408,16.743,27.742,15.215,27.486,13.244z M33.74,28.743	c-0.676,0-1.305-0.184-1.863-0.479c-1.271-0.675-2.148-1.996-2.148-3.535c0-2.218,1.797-4.017,4.014-4.017 c1.258,0,2.366,0.59,3.104,1.494c0.562,0.69,0.914,1.562,0.914,2.521C37.755,26.945,35.958,28.743,33.74,28.743z" />
              </g>
            </svg>
          </Listbox.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options
              className="absolute top-0 left-0 block overflow-y-auto h-52"
              tabIndex={0}
            >
              {daisyUIThemes.map(currentTheme => (
                <Listbox.Option
                  key={currentTheme}
                  value={currentTheme}
                  // disabled={currentTheme.value === theme}
                  as={React.Fragment}
                >
                  {({ active, selected }) => (
                    <li
                      data-theme={currentTheme}
                      className={`relative cursor-default flex-nowrap w-full select-none py-2 px-2 flex flex-row items-center justify-end`}
                    >
                      {selected && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-flex w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      {t(currentTheme)}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default Themes
