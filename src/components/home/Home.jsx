import React from 'react'
import HomeCarousel from './Carousel/Carousel'
import Categoria from './Categoria/Categoria'
import FindComponent from './findCard/FindCard'
import Ousrblog from './OurBlog/OurBlog'

const Homes = () => {
  return (
    <div className='w-[100%]'>
      <HomeCarousel />
      <Categoria />
      <FindComponent/>
      <Ousrblog/>
    </div>
  )
}

export default Homes
