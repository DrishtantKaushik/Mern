import React from 'react'
import classes from './login.module.css'

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <button className={classes.localbtn}>Login Now</button>
            <button className='global-btn' >Click Me</button>

        </div>
    )
}

export default Login;
