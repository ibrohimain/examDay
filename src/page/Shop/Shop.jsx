import React from 'react'
import ProductRelated from '../../components/shoop/RelatedProducts/ProductReleted'
import gif from './shop_img/giphy-unscreen.gif'

const Shop = () => {
  return (
    <div className='w-[100%] mx-auto '>
      <div className='w-[100%] h-[500px] flex items-center justify-center '>
        <img src={gif} alt="" className='w-[550px]' />
      </div>
      <ProductRelated />
    </div>
  )
}

export default Shop
