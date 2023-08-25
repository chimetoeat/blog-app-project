import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(res => {
            if (res.data === "Success") {
                window.location.href = "/"
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='container'>
        <div className='form'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='field'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
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