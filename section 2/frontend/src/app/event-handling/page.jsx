'use client'
import React from 'react'

const EventHandling = () => {
//          navigator.geolocation.getCurrentPosition((position) => {
//         console.log(position.coords.latitude, position.coords.longitude);
// });
  return (
    <div className='h-screen cursor-none' onMouseMove={(e) => {
        console.log(e.clientX,e.clientY);
        const cursor = document.getElementById('cursor');
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
    }}>

        <img id='cursor'
         className='w-20 absolute -z-1' 
         src="/Plankton.png" alt="" />

      <div className='container mx-auto p-4'>
      <h2 className='text-center mt-5 font-bold text-3xl'>Enevt Handling</h2>

      <button 
       onClick={() => { alert('button was clicked')}}
      className='bolck bg-blue-500 text-white mt-5 p-3 rounded-md'>
        click Event
      </button>

      <input 
      type="text" 
      className='border rounded px-4 py-2 w-full mt-5'
      onChange={(e) => {console.log(e.target.value);
      }}
      
      
      
      />
      <input type="color" className='mt-5'
       onChange={(e) => {
       console.log(e.target.value);
       document.body.style.backgroundColor = e.target.value }}
        />
        <input 
      type="text" 
      className='border rounded px-4 py-2 w-full mt-5'
      onKeyDown={(e) => {console.log(e.code);
      }}/>

      </div>

    </div>


  )
}

export default EventHandling;