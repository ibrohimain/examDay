import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
import Shoop from './components/shoop/Shoop'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login/Login'
import ShoopingCard from './page/ShoopingCard/ShoopingCard'
import Home from './page/Home/Home'
import ProductsTotal from './components/ShoopingCard/ProducTotal/ProductsTotal'
import Checkout from './components/shoop/Checkout/Checkout'

const App = () => {
  return (
    <div className='max-w-[1500px] w-[1500px] mx-auto'>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shoop' element={<Shoop />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shooppingcard' element={<ShoopingCard />} />
        <Route path='/productstotal' element={<ProductsTotal />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
