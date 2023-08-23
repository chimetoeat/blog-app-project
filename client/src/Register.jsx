import React from 'react'
import { Link } from 'react-router-dom'


function Register() {
  return (
    <div className='container'>
        <div className='form'>
            <h2>Sign Up</h2>
            <form action="">
                <div className='field'>
                    <label htmlFor="name">Username:</label>
                    <input type="text" />
                </div>
                <div className='field'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" />
                </div>
                <div className='field'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" />
                </div>
                <button>Sign up</button>
            </form>
            <p>If you are not registered</p>
            <Link to="/login"><button>Login</button></Link>
        </div>
    </div>
  )
}

export default Register