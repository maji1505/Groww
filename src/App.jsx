import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Invite from './pages/Invite'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=' w-screen h-screen bg-slate-800 '>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/invite' element={<Invite/>}/>
  <Route path='*' element={<Home/>}/>
</Routes>
   </div>
  )
}

export default App
