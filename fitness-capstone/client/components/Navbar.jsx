import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
   const {logout} = props
   
  return (
    <div className="navbar">

      <Link to="/home" style={{padding: 5}} className='navbar-title'> Home </Link>
      <Link to="/list" style={{padding: 5}} className='navbar-title'> Workout List </Link>
      <Link to="/dashboard" style={{padding: 5}} className='navbar-title'> Dashboard </Link>
      <Link to="/community" className='navbar-title' >Community </Link>
      <button onClick={logout} className='navbar-button'>Logout</button>
    </div>
  )
}