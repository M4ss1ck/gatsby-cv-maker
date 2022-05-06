import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

interface Props {
  theme: string
  toggleTheme: (theme: string) => void
}

const darkToggle: React.FC<{ css: string }> = ({ css }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: Props) => (
        <div className={css}>
          <input
            type="checkbox"
            id="toggle"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
            className="w-12 border border-blue-500 rounded-full appearance-none cursor-pointer peer checked:border-blue-500 h-7"
          />
          <span className="absolute block w-5 h-5 transition-all duration-500 bg-blue-500 rounded-full pointer-events-none peer-checked:left-6 peer-checked:bg-blue-500 top-1 left-1"></span>
          {/* <label htmlFor="toggle"></label> */}
        </div>
      )}
    </ThemeToggler>
  )
}

export default darkToggle
