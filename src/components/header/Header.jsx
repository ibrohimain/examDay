import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/GreenShopLogo-min.png';
import SearchIcon from '../../assets/Search.svg';
import Shop from '../../assets/Shop.png';
import exit from '../../assets/Logout.png';
import Avatar from '@mui/material/Avatar'; // Using MUI Avatar for user icon
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookFill } from 'react-icons/ri';
import { Search } from '@mui/icons-material';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alreadyLoggedInMessage, setAlreadyLoggedInMessage] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const searchInputRef = useRef(null);
  const searchIconRef = useRef(null);
  const navigate = useNavigate();

  // Login state and refs
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null);

  // Register state and refs
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const registerUsernameRef = useRef(null);
  const registerEmailRef = useRef(null);
  const registerPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  useEffect(() => {
    if (isLoggedIn) {
      setShowLoginModal(false); // Hide modal on login
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target) &&
        searchIconRef.current && !searchIconRef.current.contains(event.target)) {
        setShowSearchInput(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Login click handler
  const handleLoginClick = () => {
    let valid = true;
    if (!loginEmail) {
      loginEmailRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      loginEmailRef.current.style.borderColor = '';
    }
    if (!loginPassword) {
      loginPasswordRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      loginPasswordRef.current.style.borderColor = '';
    }

    if (valid) {
      setIsLoggedIn(true); // Set login state to true
      navigate('/login'); // Navigate to Login component
    }
  };

  // Register click handler
  const handleRegisterClick = () => {
    let valid = true;

    if (!registerUsername) {
      registerUsernameRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      registerUsernameRef.current.style.borderColor = '';
    }

    if (!registerEmail) {
      registerEmailRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      registerEmailRef.current.style.borderColor = '';
    }

    if (!registerPassword) {
      registerPasswordRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      registerPasswordRef.current.style.borderColor = '';
    }

    if (!confirmPassword) {
      confirmPasswordRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      confirmPasswordRef.current.style.borderColor = '';
    }

    if (registerPassword && confirmPassword && registerPassword !== confirmPassword) {
      confirmPasswordRef.current.style.borderColor = 'red';
      alert("Passwords do not match");
      valid = false;
    }

    if (valid) {
      // Simulate successful registration
      alert('Successfully registered');
      // Reset the input fields
      setRegisterUsername('');
      setRegisterEmail('');
      setRegisterPassword('');
      setConfirmPassword('');
    }
  };

  // Close modal handler
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowLoginModal(false);
      setAlreadyLoggedInMessage('');
    }
  };

  // Handle opening login modal
  const handleLoginButtonClick = () => {
    if (isLoggedIn) {
      setAlreadyLoggedInMessage('You are already logged in.');
    }
    setShowLoginModal(true);
  };

  // Handle search icon click
  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <>
      <div className='w-[85%] h-[70px] mx-auto flex justify-between items-center border-b'>
        <div className='w-[15%] h-[100%] flex items-center'>
          <Link to='/'>
            <img
              src={logo}
              alt="GREENSHOP_IMG"
              className='w-[160px] h-[40px] cursor-pointer'
            />
          </Link>
        </div>
        <div className='w-[25%] h-[100%] hidden md:flex'>
          <ul className='w-[100%] h-[100%] flex items-center justify-between'>
            <li className='list font-medium text-[gray] text-[17px] cursor-pointer transition duration-150 ease-out md:ease-in hover:text-[black] border-white border-b-[3px] hover:border-green-500'>
              <Link to='/'>Home</Link>
            </li>
            <li className='list font-medium text-[gray] text-[17px] cursor-pointer transition duration-150 ease-out md:ease-in hover:text-[black] border-white border-b-[3px] hover:border-green-500'>
              <Link to='/shoop'>Shop</Link>
            </li>
            <li className='list font-medium text-[gray] text-[17px] cursor-pointer transition duration-150 ease-out md:ease-in hover:text-[black] border-white border-b-[3px] hover:border-green-500'>
              Plant Care
            </li>
            <li className='list font-medium text-[gray] text-[17px] cursor-pointer transition duration-150 ease-out md:ease-in hover:text-[black] border-white border-b-[3px] hover:border-green-500'>
              Blogs
            </li>
          </ul>
        </div>
        <div className='w-[15%] h-[100%] flex justify-end'>
          <ul className='w-[100%] h-[100%] flex justify-between items-center'>
            <li className='cursor-pointer' ref={searchIconRef} onClick={handleSearchIconClick}>
              <img src={SearchIcon} alt="Search" className='w-[25px] h-[25px]' />
            </li>
            {showSearchInput && (
              <li>
                <div ref={searchInputRef} className='w-[550px] absolute left-[35%] top-[1.5%] h-[46px] flex items-center gap-3'>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-[500px] outline-none h-[45px] border rounded px-2"
                  />
                  <Search sx={{ color: "grey", fontSize: "28px", cursor: "pointer" }} />
                </div>
              </li>
            )}
            <li className='cursor-pointer'>
              <Link to='shooppingcard'><img src={Shop} alt="Shop" className='w-[25px] h-[25px]' /></Link>
            </li>
            <li className='cursor-pointer'>
              {isLoggedIn ? (
                <Link to='/login'><Avatar alt="User Avatar" src="/path/to/avatar.jpg" /></Link> // Placeholder for avatar image
              ) : (
                <button
                  onClick={handleLoginButtonClick}
                  className='w-[100px] h-[40px] outline-none rounded-[10px] bg-green-600 flex justify-center items-center gap-3 font-semibold text-white'
                >
                  <img src={exit} alt="Login" className='w-[20px] h-[20px]' />
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
        <div className='md:hidden flex items-center'>
          <button onClick={() => setShowLoginModal(!showLoginModal)}>
            <img src="/path/to/hamburger-icon.png" alt="Menu" className='w-[30px] h-[30px]' />
          </button>
        </div>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="bg-white p-6 rounded-md w-[400px] h-[590px] relative" onClick={(e) => e.stopPropagation()}>
            <ul className='w-[100%] h-[40px] flex items-center justify-center gap-4'>
              <li className={`cursor-pointer ${!showRegister && 'border-b-2 border-green-500'} text-[18px] font-semibold`} onClick={() => setShowRegister(false)}>Login</li>
              <li className={`cursor-pointer ${showRegister && 'border-b-2 border-green-500'} text-[18px] font-semibold`} onClick={() => setShowRegister(true)}>Register</li>
            </ul>

            {alreadyLoggedInMessage && (
              <div className="text-red-500 mt-2 text-center">
                {alreadyLoggedInMessage}
              </div>
            )}

            {!showRegister ? (
              <div className="mt-6">
                <div className='w-[100%] h-[60px]'>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-[100%] h-[45px] outline-none border rounded-[5px] px-2"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    ref={loginEmailRef}
                  />
                </div>
                <div className='w-[100%] h-[60px] mt-2'>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-[100%] h-[45px] outline-none border rounded-[5px] px-2"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    ref={loginPasswordRef}
                  />
                </div>
                <button
                  onClick={handleLoginClick}
                  className="w-[100%] h-[45px] mt-4 bg-green-600 text-white rounded-[5px] font-semibold"
                >
                  Login
                </button>
              </div>
            ) : (
              <div className="mt-6">
                <div className='w-[100%] h-[60px]'>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-[100%] h-[45px] outline-none border rounded-[5px] px-2"
                    value={registerUsername}
                    onChange={(e) => setRegisterUsername(e.target.value)}
                    ref={registerUsernameRef}
                  />
                </div>
                <div className='w-[100%] h-[60px] mt-2'>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-[100%] h-[45px] outline-none border rounded-[5px] px-2"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    ref={registerEmailRef}
                  />
                </div>
                <div className='w-[100%] h-[60px] mt-2'>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-[100%] h-[45px] outline-none border rounded-[5px] px-2"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    ref={registerPasswordRef}
                  />
                </div>
                <div className='w-[100%] h-[60px] mt-2'>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-[100%] h-[45px] outline-none border rounded-[5px] px-2"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    ref={confirmPasswordRef}
                  />
                </div>
                <button
                  onClick={handleRegisterClick}
                  className="w-[100%] h-[45px] mt-4 bg-green-600 text-white rounded-[5px] font-semibold"
                >
                  Register
                </button>
              </div>
            )}

            <div className='mt-4 w-[100%] h-[10px] flex justify-center items-center'>
              <p className='font-semibold text-[gray] text-[18px]'>OR</p>
            </div>
            <div className='mt-4 w-[100%] h-[40px] flex justify-center items-center gap-5'>
              <ul className='w-[100%] mt-[60px]'>
                <li className='w-[100%] h-[45px] border flex justify-center items-center gap-3 text-[grey] font-medium cursor-pointer rounded'><FcGoogle className='text-[35px] cursor-pointer' />Login with Google</li>
                <li className='w-[100%] h-[45px] border flex justify-center items-center gap-3 text-[grey] font-medium mt-[10px] cursor-pointer rounded'><RiFacebookFill className='text-blue-600 text-[35px] cursor-pointer' />Login with Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
