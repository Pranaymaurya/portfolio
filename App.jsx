import { useState } from 'react'
import './App.css'
import Navbar from './navbar/navbar'
import { BrowserRouter, Outlet } from 'react-router-dom'
import Main from './main/main'
import { motion } from 'framer-motion'
import Cover from './cover/cover'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{opacity:0}}>
    
    <Navbar/>
    <Outlet/>
    </motion.div>

    </>
  )
}

export default App
