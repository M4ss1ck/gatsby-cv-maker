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

  let initialTheme = ""

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme != undefined && theme != "") {
      document.documentElement.setAttribute("data-theme", theme)
      initialTheme = theme
    } else {
      initialTheme =
        document.documentElement.getAttribute("data-theme") || "light"
    }
  }, [])

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
    <div className="relative flex flex-row items-center justify-center mx-auto bg-opacity-100">
      <Listbox value={theme} onChange={handleChange}>
        <div className="relative text-primary">
          <Listbox.Label hidden>Select a theme</Listbox.Label>
          <Listbox.Button as={React.Fragment}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 cursor-pointer focus:outline-none"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clipRule="evenodd"
              />
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
              className="absolute top-0 left-0 block overflow-y-auto h-72 scrollbar-thin scrollbar-thumb-current scrollbar-track-transparent rounded-lg"
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
                      {t(currentTheme)}{" "}
                      <span className="p-1 m-1 ml-2 rounded-full bg-primary"></span>
                      <span className="p-1 m-1 rounded-full bg-secondary"></span>
                      <span className="p-1 m-1 rounded-full bg-accent"></span>
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
