import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { userContext } from './App'

function Navbar() {
  const user = useContext(userContext)
  return (
    <div className='navbar-header'>
        <div><h3>Blog App</h3></div>
        <div>
            <a href="" className='link'>Home</a>
            <a href="" className='link'>Create</a>
            <a href="" className='link'>Contact</a>
        </div>
        {
          user.username ?
          <div>
            <input type="button" value="Logout"/>
          </div>
          :
          <div><h5><Link to="/register" className="link">Register/Login</Link></h5></div>
        }
    </div>
    
  )
}

export default Navbar