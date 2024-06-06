import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import { Data } from "../../../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";


const ProductRelated = () => {
    const navigate = useNavigate()



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


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className='w-[85%] h-500 mx-auto mt-[50px]'>
            <div className='border-b border-green-100'>
                <h2 className='text-[20px] font-semibold text-green-600'>Related Products</h2>
            </div>
            <div className="slider-container gap-2 mt-[10px]">
                <Slider {...settings}>
                    {Data.map((item, index) => (
                        <div key={index} className="w-[250px] h-[280px]">
                            <div className="relative group w-[90%] h-[200px] mx-auto cursor-pointer">
                                <img src={item.image_url} alt="" className="w-full h-full" />
                                <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                    <div className="text-white text-2xl flex space-x-4 absolute top-[85%]">
                                        <FaShoppingCart className="cursor-pointer " onClick={() => handleAddToCart(item)} />
                                        <FaSearch className="cursor-pointer" onClick={() => navigate(`/shoop/${item.id}`)} />
                                        <FaHeart className="cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[90%] mx-auto">
                                <h2 className="text-[18px] text-[#464545] mt-[15px]">{item.common_name}</h2>
                                <span className="font-semibold text-green-500">${item.price}.00</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default ProductRelated;
