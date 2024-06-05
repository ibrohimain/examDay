import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { FaTrash } from 'react-icons/fa';
import { removeItem, updateQuantity } from '../../../redux/cartSlice';
import ProductRelated from '../../shoop/RelatedProducts/ProductReleted';

const ProductsTotal = () => {
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const shipping = 16.0;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.data);
    const navigate = useNavigate();

    const handleCouponApply = (e) => {
        e.preventDefault();
        if (coupon === "greenShop") {
            setDiscount(0.1);
        } else {
            setDiscount(0);
        }
    };

    const subtotal = cart.reduce((sum, product) => sum + product.totalPrice, 0);
    const total = subtotal - subtotal * discount + shipping;

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem({ id: itemId }));
    };

    const increaseQty = (cartProductId, currentQty) => {
        const newQty = currentQty + 1;
        dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
    };

    const decreaseQty = (cartProductId, currentQty) => {
        const newQty = Math.max(currentQty - 1, 1);
        dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <>
            <div>
                <ul className='w-[85%] h-[50px] mx-auto flex items-center'>
                    <li>Home /</li>
                    <li> <Link to='/shop'>Shop </Link>/</li>
                    <li>Shopping Cart</li>
                </ul>
            </div>
            <div className='w-[85%] flex h-auto mx-auto mt-[30px]'>
                <div className='w-[65%]'>
                    <table className='w-[100%]'>
                        <thead>
                            <tr>
                                <th className='w-[31%] text-left font-normal'>Products</th>
                                <th className='w-[20%] text-left font-normal'>Price</th>
                                <th className='w-[24%] text-left font-normal'>Quantity</th>
                                <th className='w-[22%] text-left font-normal'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className='flex gap-2 items-center'>
                                        <img src={item.image_url} alt="" className='w-[80px] h-[80px]' />
                                        <div className=''>
                                            <h2 className='text-[16px] font-semibold'>{item.common_name}</h2>
                                            <p className='text-[14px] text-[#494949]'>SKU:<span>{item.id}</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span className='text-[17px] font-semibold text-[#626262]'>${item.price}.00</span>
                                    </td>
                                    <td>
                                        <div className='flex items-center gap-3'>
                                            <button
                                                className='w-[30px] h-[30px] rounded-[50%] bg-green-500 text-white text-[10px]'
                                                onClick={() => decreaseQty(item.id, item.quantity)}
                                            >
                                                -
                                            </button>
                                            <span className='text-[#525252] font-semibold'>{item.quantity}</span>
                                            <button
                                                className='w-[30px] h-[30px] rounded-[50%] bg-green-500 text-white text-[10px]'
                                                onClick={() => increaseQty(item.id, item.quantity)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex gap-[70px] items-center'>
                                            <span className='text-green-500 font-semibold'>${item.totalPrice.toFixed(2)}</span>
                                            <IconButton onClick={() => handleRemoveItem(item.id)}>
                                                <FaTrash size={20} height={20} />
                                            </IconButton>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='w-[35%]'>
                    <div className='w-[85%] mx-auto'>
                        <h2 className='text-[20px] font-semibold border-b'>Cart Totals</h2>
                        <form action="" className='mt-[20px]' onSubmit={handleCouponApply}>
                            <label htmlFor="">Coupon Apply</label>
                            <div className='w-[100%] h-[48px] flex rounded-[8px] border-[2px] border-green-500 mt-[10px]'>
                                <input type="text" name="" id="" className='w-[80%] outline-none h-[45px] border rounded-tl-[8px] rounded-bl-[8px] pl-[10px]' placeholder='Enter coupon code here' onChange={(e) => setCoupon(e.target.value)} value={coupon} />
                                <button type="submit" className='w-[21%] h-[100%] bg-green-500 text-white font-semibold rounded-tr-[8px] rounded-br-[8px]'>Apply</button>
                            </div>
                        </form>
                        <ul className='w-[100%] mt-[15px]'>
                            <li className='w-[100%] h-[30px] flex justify-between text-[#585858]'>Subtotal <span className='text-[18px] text-[#292929]'>${subtotal.toFixed(2)}</span></li>
                            <li className='w-[100%] h-[30px] flex justify-between text-[#585858]'>Coupon Discount <span className='text-[18px] text-[#292929]'>${(subtotal * discount).toFixed(2)}</span></li>
                            <li className='w-[100%] h-[30px] flex justify-between text-[#585858]'>Shipping <span className='text-[18px] text-[#292929]'>${shipping.toFixed(2)}</span></li>
                        </ul>
                        <div className='flex justify-between mt-[10px]'>
                            <p className='font-semibold text-[18px]'>Total</p>
                            <span className='text-[18px] text-green-500 font-mediumgit'>${total.toFixed(2)}</span>
                        </div>
                        <button onClick={handleCheckout} className='w-[100%] h-[45px] mt-[20px] rounded bg-green-500 text-white font-semibold'>Proceed To Checkout</button>
                        <p className='text-[18px] text-center text-green-500 mb-[10px] mt-[10px]'>Continue Shopping</p>
                    </div>
                </div>
            </div>
            <ProductRelated/>
        </>
    );
}

export default ProductsTotal;
