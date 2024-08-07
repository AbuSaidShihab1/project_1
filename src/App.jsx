import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import Header from './components/navbar/Header'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Productdesc from './pages/Productdesc'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/:id" element={<Productdesc/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App