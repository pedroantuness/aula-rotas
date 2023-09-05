import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Menu />
      <Outlet />
      
    </>

  )
}

export default App
