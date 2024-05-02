import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'

const Root = () => {
  const [cart, setCart] = useState([]);
  return (
    <main>
      <Navbar cart={cart}/>
      <Outlet context={[cart, setCart]}/>
    </main>
  )
}

export default Root