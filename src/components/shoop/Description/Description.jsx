import React, { useState } from 'react';

const Description = () => {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='w-[85%] h-[600px] mx-auto mt-[100px]'>
            <div className='w-[100%] h-[50px] border-b flex items-center gap-[20px] font-semibold'>
                <p 
                    className={`cursor-pointer ${activeTab === 'description' ? 'text-black' : 'text-gray-500'}`} 
                    onClick={() => handleTabClick('description')}
                >
                    Product Description
                </p>
                <p 
                    className={`cursor-pointer ${activeTab === 'reviews' ? 'text-black' : 'text-gray-500'}`} 
                    onClick={() => handleTabClick('reviews')}
                >
                    Reviews(19)
                </p>
            </div>
            {activeTab === 'description' && (
                <div className='w-[100%] text-[#535252] font-normal mt-[18px]'>
                    <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                    </p>
                    <p className='mt-[20px]'>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                    <h2 className='mt-[20px] text-[20px] font-semibold text-black'>Living Room</h2>
                    <p className='mt-[10px]'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h2 className='mt-[20px] text-[20px] font-semibold text-black'>Dining Room</h2>
                    <p className='mt-[10px]'>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
                    <h2 className='mt-[20px] text-[20px] font-semibold text-black'>Office</h2>
                    <p className='mt-[10px]'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            )}
            {activeTab === 'reviews' && (
                <div className='w-[100%] text-[#535252] font-normal mt-[18px]'>
                    <p>Reviews content goes here. This can be a list of reviews or a reviews component.</p>
                </div>
            )}
        </div>
    );
};

export default Description;
