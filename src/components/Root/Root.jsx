import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'

const Root = () => {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");
  return (
    <main>
      <Navbar cart={cart}/>
      <Outlet context={[cart, setCart, category, setCategory]}/>
    </main>
  )
}

export default Root