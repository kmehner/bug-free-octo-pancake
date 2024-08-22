import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import ShoppingCart from './views/ShoppingCart'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/cart' element={<ShoppingCart/>} />
    </Routes>
  )
}

export default App