import React from 'react'

const Card = ({ title, description }) => {
    return (
        <div className='p-20 bg-amber-200 w-2xl border-2 mb-5'>
            <h1 className='text-3xl'>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Card;