import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

function Register() {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {username, email, password})
        .then(res => navigate('/login'))
        .catch(err => console.log(err))
    }


  return (
    <div className='container'>
        <div className='form'>
            <h2>Sign Up</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor="name">Username:</label>
                    <input type="text" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className='field'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='field'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
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