import React from 'react'
import Description from './Description/Description'
import ProductReleted from './RelatedProducts/ProductReleted'
import DetailsImg from './DetailsImg/DetailsImg'
import { Link } from 'react-router-dom'

const Shoop = () => {
  return (
    <div className='w-[100%]'>
      <ul className='flex items-center  w-[85%] h-[40px] mx-auto' >
        <li className='font-semibold'> <Link to='/'>Home /</Link></li>
        <li> Shop</li>
      </ul>
      <DetailsImg />
      <Description />
      <ProductReleted />
    </div>
  )
}

export default Shoop
