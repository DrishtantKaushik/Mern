
import React from 'react'

const Card = ( {title,discription}) => {
  return (
    <div className='p-10 border-2 border-black w-1/3 bg-orange-400' > 
        <h2 className='text-2xl'>{title}</h2>
        <p>{discription}</p>
    </div>
  )
}

export default Card