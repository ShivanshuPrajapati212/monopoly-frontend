import React from 'react'

const SmallCard = ({children, className}) => {
  return (
    <div className={`bg-gray-500 h-28 w-20 border-2 border-black ${className}`}>{children}</div>
  )
}

export default SmallCard
