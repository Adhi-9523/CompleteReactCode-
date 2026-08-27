import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>Welcome to Routing</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  )
}
