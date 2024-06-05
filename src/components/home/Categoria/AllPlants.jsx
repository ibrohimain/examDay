import React, { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';

const AllPlants = ({ currentItems, currentPage, totalPages, handleNext, handlePrevious, renderPagination }) => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);

    const handleAddToCart = (product) => {
        let totalPrice = qty * product.price;
        const tempProduct = {
            ...product,
            quantity: qty,
            totalPrice,
        };
        dispatch(addToCart(tempProduct));
    };

    return (
        <div>
            <div className='grid grid-rows-3 grid-flow-col gap-4 p-4'>
                {currentItems.map((item, index) => (
                    <div key={index} className='w-[290px] h-[350px] shadow-md p-4'>
                        <div className='relative group w-full h-[250px]'>
                            <img src={item.image_url} alt={item.common_name} className='w-full h-full object-cover' />
                            <div className='overlay absolute cursor-pointer top-0 left-0 w-full h-full bg-[#878787] bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300'>
                                <div className='text-white text-2xl flex space-x-4 absolute top-[82%]'>
                                    <ul className='flex gap-2'>
                                        <li className='rounded bg-[#ededed] flex justify-center items-center w-[40px] h-[40px]'><FaShoppingCart className='text-black' onClick={() => handleAddToCart(item)} /></li>
                                        <li className='rounded bg-[#ededed] flex justify-center items-center w-[40px] h-[40px]'><FaSearch className='text-black' /></li>
                                        <li className='rounded bg-[#ededed] flex justify-center items-center w-[40px] h-[40px]'><FaHeart className='text-black' /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className='mt-2 font-semibold'>{item.common_name}</p>
                        <span className='text-green-600'>${item.price}.00</span>
                    </div>
                ))}
            </div>
            <div className='pagination flex justify-end items-center mt-4'>
                <button onClick={handlePrevious} disabled={currentPage === 1} className='w-[40px] h-[40px] border rounded'>
                    <ChevronLeftIcon />
                </button>
                {renderPagination()}
                <button onClick={handleNext} disabled={currentPage === totalPages} className='w-[40px] h-[40px] border rounded'>
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
};

export default AllPlants;
