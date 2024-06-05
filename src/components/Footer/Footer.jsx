import { FaFacebookF } from 'react-icons/fa';
import { Instagram, Twitter, YouTube } from '@mui/icons-material';
import { LiaLinkedinIn } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { } from '../../redux/footerData';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import message from './footer_img/Message.png'
import mastercard from './footer_img/mastercard.svg'
import visa from './footer_img/Visa.png'
import americanExpress from './footer_img/americanexpress-removebg-preview.png'
import paypay from './footer_img/paypay.png'
import logo from '../../assets/GreenShopLogo-min.png'
import './footer.css'
import { footerData } from '../../redux/footerData';

const Footer = () => {
    return (
        <div className='w-[85%] h-[650px]  mx-auto mt-[80px] bg-[#f7f7f7] '>
            <div className='xl:w-full xl:flex lg:flex md:flex sm:flex flex'>
                {footerData.map((item, index) => (
                    <div key={index} className='w-[22%] h-[100%]  flex items-center justify-center'>
                        <div className='w-[270px] h-[300px] relative border-r-[2px]'>
                            <img src={item.img_url} alt="" className='ml-[20px] h-[100px] w-[90px] mt-[5px]' />
                            <div className='absolute bgSize top-[8%] left-[4%]'></div>
                            <h2 className='font-semibold text-[17px] mt-[15px]'>{item.common_name}</h2>
                            <p className='text-[#636262] w-[80%] mt-[5px]'>{item.common_info}</p>
                        </div>
                    </div>
                ))

                }

                <div className='w-[34%] h-[100%] '>
                    <h2 className='text-[22px] font-semibold mt-[26px]'>Would you like to join newsletters?</h2>
                    <div className='w-[90%] h-[45px] flex rounded-[8px] mt-[10px] mb-[12px]'>
                        <input type="text" name="" id="" placeholder='enter your email address...' className='w-[80%] h-[100%] pl-[10px] outline-none rounded-bl-[8px] rounded-tl-[8px] shadow' />
                        <div className='w-[20%] h-[100%] cursor-pointer bg-green-600 flex items-center justify-center text-white font-semibold text-[18px] rounded-tr-[8px] rounded-br-[8px]'>Join</div>
                    </div>
                    <p className='text-[#898888] font-normal w-[90%]'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                </div>
            </div>
            <div className='w-[100%] h-[15%] bg-[rgba(227,253,229,0.4)]'>
                <ul className='w-[75%] h-[100%] flex items-center justify-between ml-[20px]'>
                    <li>
                        <Link to='/'>
                            <img src={logo} alt="" className='cursor-pointer' />
                        </Link>
                    </li>
                    <li className='cursor-pointer flex items-center gap-2'><FmdGoodIcon className='text-green-500' /><p className='w-[210px] text-[#343333]'>70 West Buckingham Ave.Farmingdale, NY 11735</p></li>
                    <li className='cursor-pointer flex items-center gap-2'><img src={message} alt="" className='w-[25px] h-[25px]' /><p className='font-normal text-[#343333]'>contact@greenshop.com</p></li>
                    <li className='cursor-pointer flex gap-2'><PhoneIcon className='text-green-500' /><p className='font-normal text-[#343333]'>+88 01911 717 490</p></li>
                </ul>
            </div>
            <div className='w-[100%] h-[45%] flex items-center'>
                <div className='w-[95%] h-[90%] flex justify-between items-center mx-auto'>
                    <ul className='cursor-pointer w-[22%] h-[100%]'>
                        <h2 className='text-[22px] font-semibold text-[#414141]'>My Account</h2>
                        <li className='mt-[15px] '>My Account</li>
                        <li className='mt-[15px] '>Our stores</li>
                        <li className='mt-[15px] '>Contact us</li>
                        <li className='mt-[15px] '>Career</li>
                        <li className='mt-[15px] '>Specials</li>
                    </ul>
                    <ul className='cursor-pointer w-[22%] h-[100%]'>
                        <h2 className='text-[22px] font-semibold text-[#414141]'>Help & Guide</h2>
                        <li className='mt-[15px] '>Help Center</li>
                        <li className='mt-[15px] '>How To Buy</li>
                        <li className='mt-[15px] '>Shipping & Delivery</li>
                        <li className='mt-[15px] '>Product Policy</li>
                        <li className='mt-[15px] '>How To Return</li>
                    </ul>
                    <ul className='cursor-pointer w-[22%] h-[100%] '>
                        <h2 className='text-[22px] font-semibold text-[#414141]'>Categories</h2>
                        <li className='mt-[15px] '>House Plants</li>
                        <li className='mt-[15px] '>Potter Plants</li>
                        <li className='mt-[15px] '>Seeds</li>
                        <li className='mt-[15px] '>Small Plants</li>
                        <li className='mt-[15px] '>Acessories</li>
                    </ul>
                    <div className='w-[34%] h-[100%]'>
                        <h2 className='text-[24px] font-semibold'>Social Media</h2>
                        <ul className='flex gap-2 cursor-pointer w-[240px] text-[#3f3f3f] mt-[20px]'>
                            <li className='w-[35px] h-[35px] border rounded flex items-center justify-center'><Instagram className='text-[#94c794]' /></li>
                            <li className='w-[35px] h-[35px] border rounded flex items-center justify-center'><Twitter className='text-[#94c794]' /></li>
                            <li className='w-[35px] h-[35px] border rounded flex items-center justify-center'><LiaLinkedinIn className='text-[#94c794]' /></li>
                            <li className='w-[35px] h-[35px] border rounded flex items-center justify-center'><YouTube className='text-[#94c794]' /></li>
                            <li className='w-[35px] h-[35px] border rounded flex items-center justify-center'><FaFacebookF className='text-[#94c794]' /></li>
                        </ul>
                        <h2 className='text-[24px] font-semibold text-[#3f3f3f] mt-[20px]'>We accept</h2>
                        <ul className='flex items-center gap-3 mt-[10px]'>
                            <li><img src={paypay} alt="" className='w-[70px] cursor-pointer' /></li>
                            <li><img src={mastercard} alt="" className='w-[40px] cursor-pointer' /></li>
                            <li><img src={visa} alt="" className='w-[60px] cursor-pointer' /></li>
                            <li><img src={americanExpress} alt="" className='w-[60px] cursor-pointer' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
