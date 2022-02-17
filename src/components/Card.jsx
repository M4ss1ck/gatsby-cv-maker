import React from "react"

const Card = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-center border border-primario rounded-lg px-4 m-2">
      {children}
    </div>
  )
}

export default Card
