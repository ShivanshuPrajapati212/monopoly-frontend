import React from 'react'

const BigCard = ({children}) => {
  return (
    <div className='bg-red-400 w-28 h-28 border-2 border-black'>
        {children}
    </div>
  )
}

export default BigCard
