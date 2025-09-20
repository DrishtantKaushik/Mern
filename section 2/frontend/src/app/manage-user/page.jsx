'use client';
import axios from 'axios';
import { CircleUser } from 'lucide-react';
import React, { useEffect, useState} from 'react'


const ManagerUser  =  () => {

    const [userList, setuserList] = useState([ ]);
    
    const fetchUser = async () => {
       const res = await axios.get('http://localhost:5000/user/getall')
       console.log(res.data);
       setuserList(res.data);
       
    };


    useEffect(() => {
        fetchUser();

    }, [])
       return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <div className='container mx-auto'>
         <h1 className='text-2xl font-bold mb-4 text-center'>Manage User</h1>
         {
            userList.Length === 0 ? (
               <p className='text-center'>No user found.</p>
            ): (
               <div className='grid grid-cols-3 gap-4'>
                  {
                     userList.map((user) => {
                        return(
                           <div key={user._id} className=' bg-white p-4 rounded-lg shadow mb-4'>
                                <div>
                                    
                                     <CircleUser size={60} />

                                </div>
                                <div>
                                     <h3 className='font-bold'>{user.name}</h3>
                                     <p>{user.email}</p>
                                     <p>{user.city}</p>
                                  
                                <div className= 'flex gap-4 mt-4 '>
                                <button className='text-white rounded bg-red-500 px-3 py-1'> <Trace2/></button>
                                <button className='text-white rounded bg-blue-500 px-3 py-1'> <SquarePen /></button>
                           </div>
                         </div>
                     </div>
                        )
                     })
                  }
               </div>
            )
         }
      </div>
    </div>
  )
}

export default ManagerUser;