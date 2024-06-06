import React, { useState } from 'react';
import logo from './Details_img/image_12-removebg-preview.png';
import logoi from './Details_img/product-20-320x320 1.png';
import Rating from '@mui/material/Rating';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Add, Email, Facebook, LinkedIn, Remove, Twitter } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { Data } from '../../../data';

const DetailsImg = () => {

  const { id } = useParams();
  console.log(id);

  const product = Data.find((item) => item.id == id);
  if (!product) {
    return <p>Product not found</p>;
  }
  console.log(product);





  const [value, setValue] = useState(0);
  const [logos, setLogos] = useState([logoi, logo, logo, logo]);
  const [size, setSize] = useState('x');
  const [quantity, setQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const handleClick = (index) => {
    const newLogos = [...logos];
    const temp = newLogos[0];
    newLogos[0] = newLogos[index];
    newLogos[index] = temp;
    setLogos(newLogos);
  };

  const handleSizeClick = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleQuantityChange = (operation) => {
    if (operation === 'increase') {
      setQuantity(quantity + 1);
    } else if (operation === 'decrease' && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <div className="w-[85%] mx-auto p-4 flex">
      <div className="w-[50%] flex">
        <div className="w-[25%]">
          <ul className="w-[100%] h-full">
            {logos.map((item, index) => (
              <li key={index} className="w-[120px] h-[120px] mt-[10px] bg-[#f0efef] flex items-center justify-center cursor-pointer" onClick={() => handleClick(index)}>
                <img src={product.image_url} alt="" className='w-[60px] h-[60px]' />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[75%] flex items-center justify-center cursor-pointer">
          <img src={product.image_url} alt="" className={`w-[350px] h-[350px]`} />
        </div>
      </div>
      <div className="w-[50%] p-4">
        <h2 className="text-xl mb-2 cursor-pointer">{product.common_name}</h2>
        <div className="flex items-center mb-2 justify-between">
          <span className="text-lg mr-2 text-green-600 text-[18px] font-semibold cursor-pointer">${product.price}</span>
          <div className='flex gap-2 items-center cursor-pointer'>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              size="large"
              sx={{ fontSize: "18px" }}
            />
            <p>19 Customer Review</p>
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-[18px] font-semibold cursor-pointer">Short Description</h3>
          <p className="mb-4 text-[gray] cursor-pointer">{product.scientific_name}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="" className="mr-2 text-[18px] font-semibold cursor-pointer">Size:</label>
          <ul className="flex gap-2 mt-[4px]">
            {['x', 'xl', '2xl', '4xl'].map(s => (
              <li key={s} className={`w-[35px] rounded-[50%] flex items-center justify-center text-gray-500 h-[35px] border-green-500 border-[1px] font-medium cursor-pointer ${size === s ? 'bg-green-200' : ''}`} onClick={() => handleSizeClick(s)}>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 mb-4">
          <div className="flex gap-2 items-center cursor-pointer">
            <button onClick={() => handleQuantityChange('decrease')} className="w-[35px] h-[35px] rounded-[50%] bg-green-500 text-white"><Remove /></button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange('increase')} className="w-[35px] h-[35px] rounded-[50%] bg-green-500 text-white"><Add /></button>
          </div>
          <button className="w-[130px] h-[45px] flex items-center justify-center rounded border-[3px] border-green-500 font-semibold text-white text-lg bg-green-500 cursor-pointer">Buy Now</button>
          <button onClick={handleAddToCart} className="w-[130px] text-lg h-[45px] flex items-center justify-center rounded border-[3px] border-green-500 cursor-pointer">Add To Cart</button>
          <button className="w-[45px] h-[45px] flex items-center justify-center rounded border-[3px] border-green-500 cursor-pointer"><FaHeart className="text-lg" /></button>
        </div>
        <ul>
          <li className='text-[#616161] cursor-pointer'>SKU: 1995751877966</li>
          <li className='text-[#616161] mt-[5px] cursor-pointer'>Categories: Potter Plants</li>
          <li className='text-[#616161] mt-[5px] cursor-pointer'>Tags: Home Garden Plantsli</li>
          <li className='flex gap-2 text-[#5a5a5a] mt-[5px] font-medium cursor-pointer'>Share this products: <Facebook /><Twitter /><LinkedIn /><Email /></li>
        </ul>
      </div>

      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl mb-4">Shopping Cart</h2>
            <div className="flex items-center">
              <FaShoppingCart className="text-2xl" />
              <span className="ml-2">Shopping cartga o'tishni hohlaysizmi...</span>
            </div>
            <button onClick={closeCart} className="mt-4 p-2 bg-green-500 text-white rounded"><Link to='/productstotal'>xa</Link></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsImg;
