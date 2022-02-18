import React from "react"

const Card = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-center border-2 border-blue-700 rounded-lg px-4 m-2">
      {children}
    </div>
  )
}

export default Card
