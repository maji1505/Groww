import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='w-full h-auto'>
  <Navbar/>
  <Main/>
  <Footer/>
  
</div>
  )
}

export default Home