import React from 'react'
import './Navbar.css'
import logo from '../Img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo' />
      <ul className='nav-menu'>
        <Link to="/signup"><li>signup</li></Link>
        <Link to="/signin"><li>signin</li></Link>
        <Link to="/profile"><li>profile</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
