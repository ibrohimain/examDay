import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

const UserAddress = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedPrefix, setSelectedPrefix] = useState('+998');
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        firstName: '',
        country: '',
        streetAddress: '',
        state: '',
        email: '',
        lastName: '',
        townCity: '',
        address2: '',
        zip: '',
        phone: ''
    });

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelectPrefix = (prefix) => {
        setSelectedPrefix(prefix);
        setIsDropdownOpen(false);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSaveAddress = () => {
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field] && field !== 'address2') {
                newErrors[field] = true;
            }
        });
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert('Sizning manzilingiz saqlandi');
        }
    };

    return (
        <>
            <div className='w-[100%] h-[1000px]'>
                <div>
                    <h2 className='text-[20px] font-semibold'>Billing Address</h2>
                    <p className='text-[#393838]'>The following addresses will be used on the checkout page by default.</p>
                </div>
                <form action="" className='flex'>
                    <div className='w-[50%] h-[100%] p-4'>
                        <label htmlFor="firstName" className={`${errors.firstName ? 'text-red-600' : ''}`}>First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            className={`w-full mb-4 mt-[6px] p-2 border rounded outline-none ${errors.firstName ? 'border-red-600' : ''}`}
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="country" className={`${errors.country ? 'text-red-600' : ''}`}>Country/Region</label>
                        <input
                            type="text"
                            id="country"
                            className={`w-full mb-4 mt-[6px] p-2 border rounded outline-none ${errors.country ? 'border-red-600' : ''}`}
                            value={formData.country}
                            onChange={handleInputChange}
                            placeholder='Select a country / region'
                        />

                        <label htmlFor="streetAddress" className={`${errors.streetAddress ? 'text-red-600' : ''}`}>Street Address</label>
                        <input
                            type="text"
                            id="streetAddress"
                            className={`w-full mb-4 mt-[6px] p-2 border rounded outline-none ${errors.streetAddress ? 'border-red-600' : ''}`}
                            value={formData.streetAddress}
                            onChange={handleInputChange}
                            placeholder='House number and street name'
                        />

                        <label htmlFor="state" className={`${errors.state ? 'text-red-600' : ''}`}>State</label>
                        <input
                            type="text"
                            id="state"
                            className={`w-full mb-4 mt-[6px] p-2 border rounded outline-none ${errors.state ? 'border-red-600' : ''}`}
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder='Select a state'
                        />

                        <label htmlFor="email" className={`${errors.email ? 'text-red-600' : ''}`}>Email Address</label>
                        <input
                            type="text"
                            id="email"
                            className={`w-full mb-4 mt-[6px] p-2 border rounded outline-none ${errors.email ? 'border-red-600' : ''}`}
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='w-[50%] h-[100%] p-4'>
                        <label htmlFor="lastName" className={`${errors.lastName ? 'text-red-600' : ''}`}>Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            className={`w-full mb-4 mt-[6px] p-2 border rounded outline-none ${errors.lastName ? 'border-red-600' : ''}`}
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="townCity" className={`${errors.townCity ? 'text-red-600' : ''}`}>Town/City</label>
                        <input
                            type="text"
                            id="townCity"
                            className={`w-full mb-4 mt-[6px] p-2 border rounded outline-none ${errors.townCity ? 'border-red-600' : ''}`}
                            value={formData.townCity}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="address2" className='text-white'>0</label>
                        <input
                            type="text"
                            id="address2"
                            className='w-full mb-4 mt-[6px] p-2 border rounded outline-none'
                            value={formData.address2}
                            onChange={handleInputChange}
                            placeholder='Apartment, suite, unit, etc. (optional)'
                        />

                        <label htmlFor="zip" className={`${errors.zip ? 'text-red-600' : ''}`}>Zip</label>
                        <input
                            type="text"
                            id="zip"
                            className={`w-full mb-4 mt-[6px] p-2 border rounded outline-none ${errors.zip ? 'border-red-600' : ''}`}
                            value={formData.zip}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="phone" className={`block font-semibold ${errors.phone ? 'text-red-600' : 'text-[#4a4a4a]'}`}>Phone Number</label>
                        <div className='relative mt-[6px]'>
                            <div className='flex justify-between'>
                                <div
                                    onClick={toggleDropdown}
                                    className='w-[19%] h-[40px] border rounded flex items-center justify-center gap-1 cursor-pointer'
                                >
                                    <span>{selectedPrefix}</span>
                                    <KeyboardArrowDownIcon />
                                </div>
                                <input
                                    type="text"
                                    id="phone"
                                    className={`w-[80%] pl-[10px] h-[40px] border outline-none rounded ${errors.phone ? 'border-red-600' : ''}`}
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {isDropdownOpen && (
                                <ul className='absolute top-[50px] left-0 w-[19%] bg-white border rounded shadow-md'>
                                    <li className='px-4 py-2 cursor-pointer hover:bg-gray-200' onClick={() => handleSelectPrefix('+998')}>+998</li>
                                    <li className='px-4 py-2 cursor-pointer hover:bg-gray-200' onClick={() => handleSelectPrefix('+997')}>+997</li>
                                    <li className='px-4 py-2 cursor-pointer hover:bg-gray-200' onClick={() => handleSelectPrefix('+996')}>+996</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </form>
                <div>
                    <button
                        type="button"
                        className='w-[120px] h-[45px] rounded font-semibold text-white bg-green-500'
                        onClick={handleSaveAddress}
                    >
                        Save Address
                    </button>
                </div>
            </div>
        </>
    );
}

export default UserAddress;
