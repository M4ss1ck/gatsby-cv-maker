import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

interface Props {
  theme: string
  toggleTheme: (theme: string) => void
}

const darkToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }:Props) => (
        <div className="relative m-auto">
          <input
            type="checkbox"
            id="toggle"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
            className="peer appearance-none cursor-pointer border border-blue-500 rounded-full checked:border-blue-500 w-12 h-7"
          />
          <span className="peer-checked:left-6 peer-checked:bg-blue-500 transition-all duration-500 pointer-events-none w-5 h-5 block absolute top-1 left-1 rounded-full bg-blue-500"></span>
          {/* <label htmlFor="toggle"></label> */}
        </div>
      )}
    </ThemeToggler>
  )
}

export default darkToggle
