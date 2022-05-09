import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

interface Props {
  theme: string
  toggleTheme: (theme: string) => void
}

const themes = ["light", "dark", "pink"]

const darkToggle: React.FC = () => {
  return (
    <ThemeToggler>
      {({ toggleTheme }: Props) => (
        // <div className={css}>
        //   <input
        //     type="checkbox"
        //     id="toggle"
        //     onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
        //     checked={theme === "dark"}
        //     className="w-12 border border-blue-500 rounded-full appearance-none cursor-pointer peer checked:border-blue-500 h-7"
        //   />
        //   <span className="absolute block w-5 h-5 transition-all duration-500 bg-blue-500 rounded-full pointer-events-none peer-checked:left-6 peer-checked:bg-blue-500 top-1 left-1"></span>
        //   {/* <label htmlFor="toggle"></label> */}
        // </div>
        <div className="flex flex-row items-center justify-center">
          {themes.map((t: string) => (
            <button
              id={"toggle " + t}
              onClick={() => toggleTheme(t)}
              className="px-2 mx-2 my-12 text-blue-700 border border-blue-700 hover:text-gray-300 hover:bg-blue-700 rounded-xl"
            >
              {t}
            </button>
          ))}
        </div>
      )}
    </ThemeToggler>
  )
}

export default darkToggle
