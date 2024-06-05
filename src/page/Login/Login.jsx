import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { TfiSupport } from 'react-icons/tfi';
import { AiOutlineDownload } from 'react-icons/ai';
import { PiMessengerLogoLight } from 'react-icons/pi';
import { CiHeart, CiLocationOn, CiShoppingCart } from 'react-icons/ci';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import images from './login_img/imges.png';
import UserAdress from '../../components/Login/Adress/UserAdress';

const Login = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPrefix, setSelectedPrefix] = useState('+998');
  const [imagePreview, setImagePreview] = useState(images);
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('accountDetails');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectPrefix = (prefix) => {
    setSelectedPrefix(prefix);
    setIsDropdownOpen(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateFields = () => {
    const newErrors = {};
    const requiredFields = ['firstName', 'email', 'username', 'lastName', 'phone', 'currentPassword', 'newPassword', 'confirmNewPassword'];
    requiredFields.forEach(field => {
      if (!document.getElementById(field).value) {
        newErrors[field] = 'This field is required';
      }
    });
    if (imagePreview === images) {
      newErrors['photo'] = 'This field is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveChanges = (event) => {
    event.preventDefault();
    if (validateFields()) {
      // Handle form submission if all fields are valid
      console.log('Form submitted');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'accountDetails':
        return (
          <div className='w-[73%] h-[1000px]'>
            <div className='flex justify-between'>
              <div className='w-[48%] h-auto'>
                <h2 className='text-[20px] font-semibold text-[#4a4a4a]'>Personal Information</h2>
                <form className='mt-[15px]'>
                  <label htmlFor="firstName" className={`mt-[20px] font-semibold ${errors.firstName ? 'text-red-600' : 'text-[#4a4a4a]'}`}>First Name</label>
                  <input type="text" id="firstName" className={`w-[100%] outline-none pl-[10px] h-[40px] rounded border mt-[10px] ${errors.firstName ? 'border-red-600' : ''}`} />
                  <label htmlFor="email" className={`mt-[25px] block font-semibold ${errors.email ? 'text-red-600' : 'text-[#4a4a4a]'}`}>Email address</label>
                  <input type="text" id="email" className={`w-[100%] outline-none pl-[10px] h-[40px] rounded border mt-[10px] ${errors.email ? 'border-red-600' : ''}`} />
                  <label htmlFor="username" className={`mt-[25px] block font-semibold ${errors.username ? 'text-red-600' : 'text-[#4a4a4a]'}`}>Username</label>
                  <input type="text" id="username" className={`w-[100%] h-[40px] outline-none pl-[10px] rounded border mt-[10px] ${errors.username ? 'border-red-600' : ''}`} />
                </form>
              </div>
              <div className='w-[49%] h-auto'>
                <div>
                  <form className='mt-[34px]'>
                    <label htmlFor="lastName" className={`pt-[10px] block font-semibold ${errors.lastName ? 'text-red-600' : 'text-[#4a4a4a]'}`}>Last Name</label>
                    <input type="text" id="lastName" className={`w-[100%] outline-none pl-[10px] h-[40px] border rounded mt-[10px] ${errors.lastName ? 'border-red-600' : ''}`} />
                    <label htmlFor="phone" className={`pt-[23.7px] block font-semibold ${errors.phone ? 'text-red-600' : 'text-[#4a4a4a]'}`}>Phone Number</label>
                    <div className='relative mt-[12px]'>

                      <div className='flex justify-between'>
                        <div
                          onClick={toggleDropdown}
                          className='w-[19%] h-[40px] border rounded flex items-center justify-center gap-1 cursor-pointer'
                        >
                          <span>{selectedPrefix}</span>
                          <KeyboardArrowDownIcon />
                        </div>
                        <input type="text" id="phone" className={`w-[80%] pl-[10px] h-[40px] border outline-none rounded ${errors.phone ? 'border-red-600' : ''}`} />
                      </div>
                      {isDropdownOpen && (
                        <ul className='absolute top-[50px] left-0 w-[19%] bg-white border rounded shadow-md'>
                          <li className='px-4 py-2 cursor-pointer hover:bg-gray-200' onClick={() => handleSelectPrefix('+998')}>+998</li>
                          <li className='px-4 py-2 cursor-pointer hover:bg-gray-200' onClick={() => handleSelectPrefix('+997')}>+997</li>
                          <li className='px-4 py-2 cursor-pointer hover:bg-gray-200' onClick={() => handleSelectPrefix('+996')}>+996</li>
                        </ul>
                      )}
                    </div>
                    <div>
                      <label htmlFor="photo" className={`block mt-[23px] font-semibold ${errors.photo ? 'text-red-600' : 'text-[#4a4a4a]'}`}>Photo</label>
                      <div className='flex gap-5 mt-[12px] cursor-pointer'>
                        <div className='w-[45px] h-[45px] rounded-[50%] border flex items-center justify-center cursor-pointer bg-[#e4e3e3]'>
                          <label htmlFor="imageUpload" className='cursor-pointer'>
                            <img src={imagePreview} alt="" className='rounded-[50%] w-full h-full' />
                          </label>
                          <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className='hidden'
                          />
                        </div>
                        <div className='flex items-center'>
                          <div className='w-[100px] h-[40px] bg-green-600 text-white font-semibold flex items-center justify-center rounded'>Change</div>
                          <div className='font-semibold w-[100px] h-[40px] flex items-center justify-center'>Remove</div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='w-[48%] mt-[40px]'>
              <form>
                <h2 className='text-[20px] font-semibold'>Password change</h2>
                <label htmlFor="currentPassword" className={`mt-[10px] block ${errors.currentPassword ? 'text-red-600' : 'text-[#4a4a4a]'}`}>Current password</label>
                <input type="password" id="currentPassword" className={`w-[100%] mt-[7px] outline-none pl-[10px] h-[40px] border rounded ${errors.currentPassword ? 'border-red-600' : ''}`} />
                <label htmlFor="newPassword" className={`mt-[25px] block ${errors.newPassword ? 'text-red-600' : 'text-[#4a4a4a]'}`}>New password</label>
                <input type="password" id="newPassword" className={`w-[100%] mt-[7px] outline-none pl-[10px] h-[40px] border rounded ${errors.newPassword ? 'border-red-600' : ''}`} />
                <label htmlFor="confirmNewPassword" className={`mt-[25px] block ${errors.confirmNewPassword ? 'text-red-600' : 'text-[#4a4a4a]'}`}>Confirm new password</label>
                <input type="password" id="confirmNewPassword" className={`w-[100%] mt-[7px] outline-none pl-[10px] h-[40px] border rounded ${errors.confirmNewPassword ? 'border-red-600' : ''}`} />
              </form>

              <button onClick={handleSaveChanges} className='w-[120px] h-[40px] bg-green-700 rounded font-semibold text-white mt-[40px]'>Save Change</button>
            </div>
          </div>
        );
      case 'address':
        return <div><UserAdress/></div>;
      case 'orders':
        return <div>Orders Content</div>;
      case 'wishlist':
        return <div>Wishlist Content</div>;
      case 'reports':
        return <div>Reports Content</div>;
      case 'downloads':
        return <div>Downloads Content</div>;
      case 'support':
        return <div>Support Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className='w-[85%] mx-auto flex justify-between'>
      <div className='w-[25%] h-[1000px] bg-[#f7f7f7]'>
        <h2 className='font-semibold text-[20px] pl-[10px]'>My Account</h2>
        <ul className='w-[90%] mx-auto'>
          <li onClick={() => setActiveTab('accountDetails')} className={`flex items-center font-semibold gap-3 w-[100%] h-[40px] cursor-pointer border-l-[3px] hover:text-green-600 hover:border-l-[3px] pl-[10px] hover:border-green-600`}>
            <BiUser className='text-[20px]' /> Account Details
          </li>
          <li onClick={() => setActiveTab('address')} className={`flex items-center font-semibold gap-3 w-[100%] h-[40px] cursor-pointer border-l-[3px] $ hover:text-green-600 hover:border-l-[3px] pl-[10px] hover:border-green-600`}>
            <CiLocationOn className='text-[22px]' /> Address
          </li>
          <li onClick={() => setActiveTab('orders')} className={`flex items-center font-semibold gap-3 w-[100%] h-[40px] cursor-pointer border-l-[3px]  hover:text-green-600 hover:border-l-[3px] pl-[10px] hover:border-green-600`}>
            <CiShoppingCart className='text-[22px]' /> Orders
          </li>
          <li onClick={() => setActiveTab('wishlist')} className={`flex items-center font-semibold gap-3 w-[100%] h-[40px] cursor-pointer border-l-[3px] hover:text-green-600 hover:border-l-[3px] pl-[10px] hover:border-green-600`}>
            <CiHeart className='text-[22px]' /> Wishlist
          </li>
          <li onClick={() => setActiveTab('reports')} className={`flex items-center font-semibold gap-3 w-[100%] h-[40px] cursor-pointer border-l-[3px]  hover:text-green-600 hover:border-l-[3px] pl-[10px] hover:border-green-600`}>
            <PiMessengerLogoLight className='text-[20px]' /> Reports
          </li>
          <li onClick={() => setActiveTab('downloads')} className={`flex items-center font-semibold gap-3 w-[100%] h-[40px] cursor-pointer border-l-[3px]  hover:text-green-600 hover:border-l-[3px] pl-[10px] hover:border-green-600`}>
            <AiOutlineDownload className='text-[20px]' /> Downloads
          </li>
          <li onClick={() => setActiveTab('support')} className={`flex items-center font-semibold gap-3 w-[100%] h-[40px] cursor-pointer border-l-[3px]  hover:text-green-600 hover:border-l-[3px] pl-[10px] hover:border-green-600`}>
            <TfiSupport className='text-[20px]' /> Support
          </li>
        </ul>
      </div>
      <div className='w-[73%] h-[1000px]'>
        {renderContent()}
      </div>
    </div>
  );
};

export default Login;
