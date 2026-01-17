import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav>
        <div class="navbar">
            <div class="navList"><Link to="/" class="navItem activePage">Home</Link></div>
            <div class="navList"><Link to="/gallery" class="navItem">Gallery</Link></div>
            <div class="navList"><Link to="/contact" class="navItem">Contact Us</Link></div>
            <div class="navList"><a href="/about" class="navItem">About Us</a></div>
        </div>
    </nav>
  )
}

export default Navbar
