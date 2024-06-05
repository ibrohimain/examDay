import React from 'react'
import { BiUser } from 'react-icons/bi';
import { TfiSupport } from 'react-icons/tfi';
import { AiOutlineDownload } from 'react-icons/ai';
import { PiMessengerLogoLight } from 'react-icons/pi';
import { CiHeart, CiLocationOn, CiShoppingCart } from 'react-icons/ci';
import { Link } from 'react-router-dom'


const Personal_Information = () => {
    return (
        <>
            <h2 className='font-semibold text-[20px] pl-[10px]'>My Account</h2>
            <ul className='w-[90%] mx-auto'>
                <li className='flex items-center font-semibold gap-3 w-[100%] h-[40px] cursor-pointer border-l-[3px] border-[#f7f7f7] text-[#4e4d4d] hover:text-green-600 hover:border-l-[4px] pl-[10px] hover:border-green-600'>
                    <BiUser className='text-[20px]' /> Account Details
                </li>
                <li>
                    <Link to='adress' className='flex items-center font-semibold gap-3 w-[100%] h-[40px] text-[#4e4d4d] cursor-pointer hover:text-green-600 border-l-[4px] border-[#f7f7f7] hover:border-l-[4px] pl-[10px] hover:border-green-600'>
                        <CiLocationOn className='text-[22px]' /> Address
                    </Link>
                </li>
                <li className='flex items-center font-semibold gap-3 w-[100%] h-[40px] text-[#4e4d4d] cursor-pointer hover:text-green-600 border-l-[4px] border-[#f7f7f7] hover:border-l-[4px] pl-[10px] hover:border-green-600'>
                    <CiShoppingCart className='text-[22px]' /> Orders
                </li>
                <li className='flex items-center font-semibold gap-3 w-[100%] h-[40px] text-[#4e4d4d] cursor-pointer hover:text-green-600 border-l-[4px] border-[#f7f7f7] hover:border-l-[4px] pl-[10px] hover:border-green-600'>
                    <CiHeart className='text-[22px]' /> Wishlist
                </li>
                <li className='flex items-center font-semibold gap-3 w-[100%] h-[40px] text-[#4e4d4d] cursor-pointer hover:text-green-600 border-l-[4px] border-[#f7f7f7] hover:border-l-[4px] pl-[10px] hover:border-green-600'>
                    <PiMessengerLogoLight className='text-[20px]' /> Reports
                </li>
                <li className='flex items-center font-semibold gap-3 w-[100%] h-[40px] text-[#4e4d4d] cursor-pointer hover:text-green-600 border-l-[4px] border-[#f7f7f7] hover:border-l-[4px] pl-[10px] hover:border-green-600'>
                    <AiOutlineDownload className='text-[20px]' /> Downloads
                </li>
                <li className='flex items-center font-semibold gap-3 w-[100%] h-[40px] text-[#4e4d4d] cursor-pointer hover:text-green-600 border-l-[4px] border-[#f7f7f7] hover:border-l-[4px] pl-[10px] hover:border-green-600'>
                    <TfiSupport className='text-[20px]' /> Support
                </li>
            </ul>
        </>
    )
}

export default Personal_Information
