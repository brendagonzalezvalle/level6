import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
   const {logout} = props
   
  return (
    <div className="navbar">
      <Link to="/profile" className='navbar-title' >Profile</Link>
      <Link to="/public" className='navbar-title'  >Public</Link>
      <button onClick={logout} className='navbar-button'>Logout</button>
    </div>
  )
}