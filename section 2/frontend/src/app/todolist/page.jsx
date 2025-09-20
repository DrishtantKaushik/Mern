'use client'
import { Trash2 } from 'lucide-react';
import React, {useEffect, useState } from 'react'

  

const TodoList = () => {
    // let count = 0;

    // const [count, setCount] = useState(0);

    const [tasklist, setTaskList] = useState([
        // {text: 'doodh lao' , completed: false},
        // {text: 'dahi lao' , completed: false},
        // {text: 'dhaniya lao' , completed: false}
    ]);

    const addNewTask = (e) => {
      if(!e.target.value.trim()) return;
      if(e.code === 'Enter'){
        console.log(e.target.value);

        
        const newTask = { text: e.target.value, completed: false, addedAt: new Date() };
        
        setTaskList([ newTask, ...tasklist ]);

        e.target.value ='';
        
      }

    }

    const deleteTask = (index) =>{
      const temp = tasklist;
      temp.splice(index, 1);
      setTaskList([...temp]);
    }

    return (
     <div className='min-h-screen bg-gray-100 '>
        <h1 className="text-center font-bold text-3xl">
          ToDo List

        </h1>
        <div className="container mx-auto bg-white shadow rounded-lg"> 
          <div className='p-5'>
            <input onKeyDown={addNewTask} type="text" className='w-full p-3 border-2 rounded-md' />
          </div>
          <div className='border-t-1 p-5 bg-white'>
            {/* <p className='text-gray-300 font-bold text-center'>No Todo to show here😊</p> */}

            {tasklist.map((task, index) => { 
              return <div key={index} className=' p-4 mb-5 shadow-md rounded-md text-blue-700 flex justify-between items-center'>

               <div className='flex gap-3 '>
                <input type="checkbox"  
                checked={task.completed}
                onChange={(e) => {
                  const temp = tasklist;
                  temp[index].completed = e.target.checked;
                  console.log(e.target.checked);
                  console.log(temp);
                  setTaskList([...temp])

                   }}
                />
                <p className={`font-bold ${task.completed && 'line-through'}`}>{task.text}</p>

               </div>
                <p className='font-bold'>⏰
                {task.addedAt.toLocaleDateString()}
               {' '}
               {task.addedAt.toLocaleTimeString()}
                </p>

               { 
               task.completed ?(
                <p className='bg-green-700 text-white  px-2 rounded-full'>Completed</p>

               ) : (
                <p className='bg-yellow-600 text-white px-2 rounded-full'>Pending</p>

               )
              }
                <button  onClick={() => { deleteTask(index) }} className='bg-red-500 text-white p-2 rounded-md'>
                  <Trash2 />
                  </button>
              </div>
             })}

        </div>
        </div>
         

       {/* <h1 classname='text-4xl'>{count}</h1>
        
        <button onClick={()=> {
          setCount((count+1); 
          return count + 1;
        }};

        setTimeout(() => {
          
        }, timeout);

          className='border p-3'> Add Count</button>*/}
      
    </div>
  )
}

export default TodoList;
