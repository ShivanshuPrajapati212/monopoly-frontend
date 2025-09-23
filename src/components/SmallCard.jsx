import React from 'react'

const SmallCard = ({children, className, color, colorFace, cost}) => {
  let colorBadge
  if(color==="Brown") colorBadge = "bg-amber-900"
  else if(color==="Light Blue") colorBadge = "bg-sky-400"
  else if(color==="Dark Blue") colorBadge = "bg-blue-800"
  else if(color==="Pink") colorBadge = "bg-pink-400"
  else if(color==="Orange") colorBadge = "bg-orange-400"
  else if(color==="Red") colorBadge = "bg-red-400"
  else if(color==="Yellow") colorBadge = "bg-yellow-300"
  else if(color==="Green") colorBadge = "bg-green-500"
  else colorBadge='bg-[#001b36]'
  return (
    <div className={`bg-gray-500 h-28 w-20 relative ${className} flex flex-col items-center justify-center shadow-[inset_0_0_0_1px_rgba(0,0,0,1)]`}>
      <div className='p-1'>{children}</div>
      <div className='p-1 text-sm text-medium'>{Array.isArray(cost)?'$'+cost[0]:''}</div>
      <div className={`${colorBadge} absolute ${colorFace}`}></div>
      </div>
  )
}

export default SmallCard
