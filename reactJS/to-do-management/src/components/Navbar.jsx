import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"#1f1f1f"}}>
        <div><Link to="/">To Do List</Link></div>
        <div><Link to="/tasks">Tasks by API</Link></div>
    </div>
  )
}

export default Navbar
