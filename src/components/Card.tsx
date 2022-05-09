import React from "react"

const Card: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-center w-3/4 px-4 m-2 border-2 rounded-lg border-primario">
      {children}
    </div>
  )
}

export default Card
