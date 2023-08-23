import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='container'>
        <div className='form'>
            <h2>Login</h2>
            <form action="">
                <div className='field'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" />
                </div>
                <div className='field'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" />
                </div>
                <button>Login</button>
            </form>
            <p>Not registered?</p>
            <Link to="/register"><button>Sign Up</button></Link>
        </div>
    </div>
  )
}

export default Login