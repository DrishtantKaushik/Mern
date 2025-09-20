import React from 'react'
import classes from './login.module.css'
const Login = () => {
  return (
    <div className='text-center text-5xl font-bold mt-4'>Login
        <button className='global-btn'>login global button</button>
      <button className= {classes.loginBtn}>login button</button>
    </div>
  )
}

export default Login;