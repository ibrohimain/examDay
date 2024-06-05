import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import paypay from './checkout_img/paypay.png';
import mastercard from './checkout_img/mastercard.svg';
import visa from './checkout_img/Visa.png';
import american from './checkout_img/americanexpress-removebg-preview.png';
import vector from './checkout_img/Vector.png'

const Checkout = () => {
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedPrefix, setSelectedPrefix] = useState('+998');
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const shipping = 16.0;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.data);
    const navigate = useNavigate();

    const modalRef = useRef(null);

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

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelectPrefix = (prefix) => {
        setSelectedPrefix(prefix);
        setIsDropdownOpen(false);
    };

    const validateForm = () => {
        const newErrors = {};
        const requiredFields = ['firstName', 'lastName', 'country', 'streetAddress', 'state', 'email', 'city', 'phone', 'zip'];
        requiredFields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = true;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsModalOpen(true);
        }
    };

    const handlePlaceOrder = () => {
        if (validateForm()) {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isModalOpen]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        streetAddress: '',
        state: '',
        email: '',
        city: '',
        phone: '',
        zip: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <ul className='w-[85%] mx-auto flex gap-3'>
                <li>Home /</li>
                <li className='font-semibold'><Link to='/shop'>Shop</Link> /</li>
                <li>Checkout</li>
            </ul>
            <div className='w-[85%] mx-auto flex justify-between'>
                <div className='w-[65%] h-[1000px]'>
                    <div className='text-[20px] font-semibold mt-[20px]'>Billing Address</div>
                    <form onSubmit={handleSubmit} className='flex justify-between w-[100%] h-[100%]'>
                        <div className='w-[49%] h-[100%]'>
                            <label htmlFor="firstName" className={`mt-[15px] block ${errors.firstName ? 'text-red-600' : ''}`}>First Name</label>
                            <input type="text" name="firstName" className={`w-[100%] h-[45px] outline-none border ${errors.firstName ? 'border-red-600' : ''} rounded mt-[5px] pl-[10px]`} value={formData.firstName} onChange={handleInputChange} />
                            <label htmlFor="country" className={`mt-[15px] block ${errors.country ? 'text-red-600' : ''}`}>Country / Region</label>
                            <input type="text" name="country" className={`w-[100%] h-[45px] outline-none border ${errors.country ? 'border-red-600' : ''} rounded mt-[5px] font-semibold pl-[10px]`} value={formData.country} onChange={handleInputChange} placeholder='Select a Country' />
                            <label htmlFor="streetAddress" className={`mt-[15px] block ${errors.streetAddress ? 'text-red-600' : ''}`}>Street Address</label>
                            <input type="text" name="streetAddress" className={`w-[100%] h-[45px] outline-none border ${errors.streetAddress ? 'border-red-600' : ''} rounded mt-[5px] font-semibold pl-[10px]`} value={formData.streetAddress} onChange={handleInputChange} placeholder='House number and street name' />
                            <label htmlFor="state" className={`mt-[15px] block ${errors.state ? 'text-red-600' : ''}`}>State</label>
                            <input type="text" name="state" className={`w-[100%] h-[45px] outline-none border ${errors.state ? 'border-red-600' : ''} rounded mt-[5px] font-semibold pl-[10px]`} value={formData.state} onChange={handleInputChange} placeholder='Select a state' />
                            <label htmlFor="email" className={`mt-[15px] block ${errors.email ? 'text-red-600' : ''}`}>Email address</label>
                            <input type="email" name="email" className={`w-[100%] h-[45px] outline-none border ${errors.email ? 'border-red-600' : ''} rounded mt-[5px] pl-[10px]`} value={formData.email} onChange={handleInputChange} />
                            <div className='flex gap-4 mt-[20px]'>
                                <input type="checkbox" className='rounded-[50%] border-green-500' />
                                <p>Ship to a different address?</p>
                            </div>
                            <label htmlFor="orderNotes" className='block mt-[55px]'>Order notes (optional)</label>
                            <textarea name="orderNotes" className='w-[100%] h-[200px] border mt-[8px] pl-[8px] pt-[2px] outline-none'></textarea>
                        </div>
                        <div className='w-[49%] h-[100%]'>
                            <label htmlFor="lastName" className={`mt-[15px] block ${errors.lastName ? 'text-red-600' : ''}`}>Last Name</label>
                            <input type="text" name="lastName" className={`w-[100%] h-[45px] outline-none border ${errors.lastName ? 'border-red-600' : ''} rounded mt-[5px] pl-[10px]`} value={formData.lastName} onChange={handleInputChange} />
                            <label htmlFor="city" className={`mt-[15px] block ${errors.city ? 'text-red-600' : ''}`}>Town / City</label>
                            <input type="text" name="city" className={`w-[100%] h-[45px] outline-none border ${errors.city ? 'border-red-600' : ''} rounded mt-[5px] font-semibold pl-[10px]`} value={formData.city} onChange={handleInputChange} />
                            <label htmlFor="phone" className={`mt-[15px] block ${errors.phone ? 'text-red-600' : ''}`}>Phone</label>
                            <div className='relative mt-[12px]'>
                                <div className='flex justify-between'>
                                    <div
                                        onClick={toggleDropdown}
                                        className={`w-[19%] h-[40px] border ${errors.phone ? 'border-red-600' : ''} rounded flex items-center justify-center gap-1 cursor-pointer`}
                                    >
                                        <span>{selectedPrefix}</span>
                                        <ArrowDropDownIcon />
                                    </div>
                                    <input type="text" name="phone" className={`w-[80%] pl-[10px] h-[40px] border ${errors.phone ? 'border-red-600' : ''} outline-none rounded`} value={formData.phone} onChange={handleInputChange} />
                                </div>
                                {isDropdownOpen && (
                                    <ul className='absolute top-[50px] left-0 w-[19%] bg-white border rounded shadow-md'>
                                        <li className='px-4 py-2 cursor-pointer hover:bg-gray-200' onClick={() => handleSelectPrefix('+998')}>+998</li>
                                        <li className='px-4 py-2 cursor-pointer hover:bg-gray-200' onClick={() => handleSelectPrefix('+997')}>+997</li>
                                        <li className='px-4 py-2 cursor-pointer hover:bg-gray-200' onClick={() => handleSelectPrefix('+996')}>+996</li>
                                    </ul>
                                )}
                            </div>
                            <label htmlFor="zip" className={`mt-[15px] block ${errors.zip ? 'text-red-600' : ''}`}>Zip</label>
                            <input type="text" name="zip" className={`w-[100%] h-[45px] outline-none border ${errors.zip ? 'border-red-600' : ''} rounded mt-[5px] pl-[10px]`} value={formData.zip} onChange={handleInputChange} />
                        </div>
                    </form>
                </div>
                <div className='w-[33%] h-[1000px]'>
                    <div className='w-[90%] mx-auto'>
                        <h2 className='text-[26px] font-semibold'>Your order</h2>
                        <div className='w-[100%] h-[30px] flex justify-between items-center'>
                            <p>Products</p>
                            <p>Subtotal</p>
                        </div>
                        {cart.map((item) => (
                            <div className='w-[100%] h-[100px] bg-[#fffdfd] flex items-center justify-between' key={item.id}>
                                <img src={item.image_url} alt="" className='w-[70px] h-[70px] border' />
                                <div>
                                    <h3 className='text-[#505050] font-semibold'>Barberton Daisy</h3>
                                    <p className='text-[#656565]'>SKU: {item.sku}</p>
                                </div>
                                <span className='text-[#575757]'>( x {item.quantity})</span>
                                <span className='text-green-500 font-semibold'>${item.totalPrice}</span>
                            </div>
                        ))}
                        <p className='text-end mt-[10px]'>Have a coupon code? <span className='text-green-500'>Click here</span></p>
                        <ul className='w-[100%] mt-[10px] border-b-[1px]'></ul>

                        <ul className='w-[100%] mt-[10px] border-b-[1px]'>
                            <li className='w-[100%] h-[35px] flex justify-between items-center'><p>Subtotal</p><span>${subtotal.toFixed(2)}</span></li>
                            <li className='w-[100%] h-[35px] flex justify-between items-center'><p>Coupon Discount</p><span>(-) ${(subtotal * discount).toFixed(2)}</span></li>
                            <li className='w-[100%] h-[35px] flex justify-between items-center border-b-[1px]'><p>Shipping</p><span>${shipping.toFixed(2)}</span></li>
                            <li className='w-[100%] h-[35px] flex justify-between items-center'><p className='font-semibold'>Total</p><span className='text-green-600 font-semibold'>${total.toFixed(2)}</span></li>
                        </ul>
                        <div>
                            <h2 className='text-[20px] font-semibold mt-[8px]'>Payment Method</h2>
                            <ul className='mt-[10px]'>
                                <li className='flex justify-start shadow items-center gap-3 border-[2px] border-white hover:border-green-500 cursor-pointer'>
                                    <input type="checkbox" />
                                    <img src={paypay} alt="" className='w-[70px] h-[20px]' />
                                    <img src={mastercard} alt="" className='w-[50px] h-[40px]' />
                                    <img src={visa} alt="" className='w-[50px] h-[40px]' />
                                    <img src={american} alt="" className='w-[70px] h-[30px]' />
                                </li>
                                <li className='flex justify-start shadow items-center gap-3 w-[100%] h-[45px] border-[2px] border-white hover:border-green-500 cursor-pointer'>
                                    <input type="checkbox" />
                                    <p>Direct bank transfer</p>
                                </li>
                                <li className='flex justify-start shadow items-center gap-3 w-[100%] h-[45px] border-[2px] border-white hover:border-green-500 cursor-pointer'>
                                    <input type="checkbox" />
                                    <p>Cash on delivery</p>
                                </li>
                            </ul>
                            <button onClick={handlePlaceOrder} className='w-[100%] h-[40px] rounded text-white font-semibold bg-green-600 mt-[10px]'>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ProductRelated /> */}
            {
                isModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <div ref={modalRef} className="bg-[white] p-4 rounded-md w-[480px] h-[630px] border-b-[5px] border-green-600">
                            <div className='w-[100%] h-[130px] border bg-[#f2f1f1] flex flex-col justify-center items-center'>
                                <img src={vector} alt="" className='' />
                                <p className='text-[#4a4949] mt-[10px]'>Your order has been received</p>
                            </div>
                            <ul className='flex justify-between mt-[10px]'>
                                <li className='w-[25%] h-[50px] border-r-[1px]'>
                                    <p className='text-[13px] pl-[10px]'>Order Number</p>
                                    <span className='font-semibold text-[gray] text-[14px] pl-[10px]'>19586687</span>
                                </li>
                                <li className='w-[25%] h-[50px] border-r-[1px]'>
                                    <p className='text-[13px] pl-[10px]'>Date</p>
                                    <span className='font-semibold text-[gray] text-[14px] pl-[10px]'>15 Sep, 2021</span>
                                </li>
                                <li className='w-[25%] h-[50px] border-r-[1px]'>
                                    <p className='text-[13px] pl-[10px]'>Total</p>
                                    <span className='font-semibold text-[gray] text-[14px] pl-[10px]'>2,699.00</span>
                                </li>
                                <li className='w-[25%] h-[50px] '>
                                    <p className='text-[13px] pl-[10px]'>Payment Method</p>
                                    <span className='font-semibold text-[gray] text-[14px] pl-[10px]'>Cash on deliv</span>
                                </li>
                            </ul>
                            <h2 className="text-2xl font-semibold mb-4">Order Detail</h2>
                            <ul className='flex justify-between border-b'>
                                <li className='w-[50%]'>Products</li>
                                <li className='w-[20%]'>Qty</li>
                                <li className='w-[20%]'>Subtotal</li>
                            </ul>
                            <div className='w-[95%] '>
                                {cart.map((item) => (
                                    <div className='w-[100%] h-[100px] bg-[#fffdfd] flex items-center justify-between' key={item.id}>
                                        <div className='flex gap-2 items-center'>
                                            <img src={item.image_url} alt="" className='w-[70px] h-[70px] border' />
                                            <div>
                                                <h3 className='text-[#505050] font-semibold'>{item.common_name}</h3>
                                                <p className='text-[#656565]'>SKU: {item.sku}</p>
                                            </div>
                                        </div>
                                        <span className='text-[#575757]'>( x {item.quantity})</span>
                                        <span className='text-green-500 font-semibold'>${item.totalPrice}</span>
                                    </div>
                                ))}
                            </div>
                            <ul className='border-b w-[90%] mx-auto mb-[10px]'>
                                <li className='flex justify-between items-center'><p className='font-semi10old'>Shiping</p><span>$16.00</span></li>
                                <li className='flex justify-between items-center'><p className='font-semi10old'>Total</p><span classNam10='text-green-500 font-semibold'>$0</span></li>
                            </ul>
                            <div>
                                <p className='text-center text-[14px] text-[gray] mt-[10px]'>Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
                            </div>
                            <div className='w-[100%] flex justify-center mt-[10px]'>
                                <button className='w-[150px] h-[45px] bg-green-500 rounded font-semibold text-white'>Track your order</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Checkout;
