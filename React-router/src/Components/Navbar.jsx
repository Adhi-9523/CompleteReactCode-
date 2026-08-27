import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      {/* <a href='#'>Link</a> */}
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/about">About</Link>
      <br></br>
      <Link to="/contact">Contact</Link>
    </div>
  )
}
