import React from 'react'
import Home from './Home'
import Navbar from './components/Navbar/Navbar'

function Layout() {
  return (
    <div className='container'>
      <Navbar/>
      <Home />
      
    </div>
  )
}

export default Layout
