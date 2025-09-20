import React from 'react'

const Card = ({ imgLink, title, genre}) => {
  return (
    <div className='border rounded-lg shadow-lg'>
        <img className='rounded-t-lg' src={imgLink} alt="" />
        <div className='p-4'>
            <h1 className='font-bold-500'>{title}</h1>
            <p className='teat-gray-500'>{genre}</p>

            <button className='block mt-4 rounded-full bg-blue-500 text-white px-6 py-2'>
                Book Now

            </button>
        </div>
      
    </div>
  )
}

export default Card;