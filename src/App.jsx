import React, { useState } from 'react'
import Welcome from './Pages/Welcome'
import Home from './Pages/Home'
import Navbar from './components/Navigation/Navbar'
import bg from './components/Common/Background'
import Background from './components/Common/Background'

const App = () => {

  const [isHome, setisHome] = useState(false)

  return (
    <div className="relative w-full min-h-[100%] bg-[#fff7ef]">
      <Background />
      <div className=" top-0 left-0 z-[3] bg-red-500 w-full">
      <Home />
      </div>
    </div>
  )
}

export default App