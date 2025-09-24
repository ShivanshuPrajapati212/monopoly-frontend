import React from 'react'

const BigCard = ({children, color, players, index}) => {
  return (
    <div className={`${color} w-28 h-28 border-2 border-black`}>
        {children}
        {
          players.map((e) => e.position===index?<p key={e.name}>{e.name}</p>:'')
        }
    </div>
  )
}

export default BigCard
