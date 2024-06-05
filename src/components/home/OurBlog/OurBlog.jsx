// Ousrblog.js
import React from 'react';
import { ourData } from './our';
import EastIcon from '@mui/icons-material/East';


const Ousrblog = () => {
    return (
        <div className='w-[85%] mx-auto mt-[80px]'>
            <h2 className='text-[36px] font-semibold text-[#2c2c2c] text-center '>Our Blog Post</h2>
            <p className='text-[#636262] text-center'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            <div className='w-[100%] flex justify-between items-center mt-[40px]'>
                {ourData.map((item, index) => (
                    <div key={index} className='w-[300px] h-[420px] bg-[#fcfafa]'>
                        <img src={item.img_url} alt="" className='w-[100%]' />
                        <div className='w-[95%] mx-auto mt-[10px]'>
                            <p className='text-green-500 font-semibold text-[17px]'>{item.common_date}</p>
                            <h2 className='text-[26px] font-bold text-[#3d3c3c] w-[250px]'>{item.name}</h2>
                            <p className='text-[#a9a7a7] font-semibold text-[17px]'>{item.common_info}</p>
                            <button className='flex items-center  text-[#3d3d3d] font-semibold gap-2 w-[120px] h-[40px]'>Read More <EastIcon /></button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ousrblog;
