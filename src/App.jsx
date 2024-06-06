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
import Shop from './page/Shop/Shop'
import Blogs from './page/Blogss/Blogs'
import PlantCare from './page/PlantCare/PlantCare'

const App = () => {
  return (
    <div className='max-w-[1500px] w-[1500px] mx-auto'>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shoop/:id' element={<Shoop />} />
        <Route path='/plantcare' element={<PlantCare />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blogs' element={<Blogs />} />
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
