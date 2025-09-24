import React from 'react'

const SmallCard = ({children, className, color, colorFace, cost, players, index, ownership}) => {

  return (
    <div className={`bg-gray-600 h-28 w-20 relative ${className} flex flex-col items-center justify-start shadow-[inset_0_0_0_1px_rgba(0,0,0,1)]`}>
      <div>
        <div className='p-1'>{children}</div>
      <div className='text-sm text-medium'>{Array.isArray(cost)?'$'+cost[0]:''}</div>
      </div>
      <div className={`${color} absolute ${colorFace}`}></div>
      <div className={Array.isArray(ownership) && ownership[0]?`bg-red-500 h-4 w-4 absolute bottom-2 left-2`:''}></div>
      {
          players.map((e) => e.position===index?<p className='bg-red-700 h-8 w-8 rounded-full text-center flex items-center justify-center'>{e.name.slice(6,8)}</p>:'')
          
      }
      </div>
  )
}

export default SmallCard
