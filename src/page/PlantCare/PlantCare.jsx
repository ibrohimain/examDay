import React from 'react'
import ProductRelated from '../../components/shoop/RelatedProducts/ProductReleted'
import imageNot from './plant_img/imageNot-removebg-preview.png'

const PlantCare = () => {
  return (
    <div>
        <div className='w-[85%] h-[500px] border mx-auto flex items-center justify-center'>
            <img src={imageNot} alt="" className='w-[550px] h-[450px]' />
        </div>
      <ProductRelated/>
    </div>
  )
}

export default PlantCare
