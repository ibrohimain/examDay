import React, { useState } from 'react';
import { Button, Slider, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './category.css';
import AllPlants from './AllPlants';
import NevArivals from './NevArivals';
import Sale from './categoria_img/Sale';
import { Data } from '../../../data';

const ITEMS_PER_PAGE = 9;

const Categoria = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState('allPlants');
    const [priceRange, setPriceRange] = useState([39, 1230]);
    const [sortOption, setSortOption] = useState('default');

    const totalItems = Data.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    let currentItems = Data.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNum) => {
        setCurrentPage(pageNum);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const sortItems = (items, option) => {
        if (option === 'name') {
            return [...items].sort((a, b) => a.common_name.localeCompare(b.common_name));
        } else if (option === 'price') {
            return [...items].sort((a, b) => a.price - b.price);
        }
        return items;
    };

    const sortedItems = sortItems(currentItems, sortOption);

    const renderPagination = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <span
                    key={i}
                    className={`pagination-page ${i === currentPage ? 'active' : ''}`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </span>
            );
        }
        return pages;
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'allPlants':
                return (
                    <AllPlants
                        currentItems={sortedItems}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handleNext={handleNext}
                        handlePrevious={handlePrevious}
                        renderPagination={renderPagination}
                    />
                );
            case 'newArrivals':
                return <NevArivals />;
            case 'sale':
                return <Sale />;
            default:
                return null;
        }
    };

    const handleSliderChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const formatPriceText = (value) => `$${value}`;

    return (
        <div className='w-[85%] h-[1300px] border-black mt-[20px] mx-auto flex justify-between'>
            <div className='w-[25%] h-auto'>
                <h2 className='text-[18px] font-bold pl-[5px]'>Categories</h2>
                <ul className='w-[90%] mx-auto '>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>House Plants</p><span>(33)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Potter Plants</p><span>(12)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Seeds</p><span>(65)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Small Plants</p><span>(39)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Big Plants</p><span>(23)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Succulents</p><span>(17)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Terrarimious</p><span>(19)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Gardening</p><span>(13)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Accessories</p><span>(18)</span></li>
                </ul>
                <h2 className='text-[18px] font-bold pl-[5px] mt-[20px]'>Price Range</h2>
                <div className='w-[90%] mx-auto'>
                    <div className='flex justify-between items-center w-[100%] mt-[15px]'>
                        <Slider
                            getAriaLabel={() => 'Price range'}
                            value={priceRange}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={formatPriceText}
                            min={39}
                            max={1230}
                            sx={{ color: "green" }}
                        />
                    </div>
                    <p className='mt-[20px] w-[100%] flex gap-2 items-center font-semibold cursor-pointer'>Price: <span className='text-green-600'>${priceRange[0]} - ${priceRange[1]}</span></p>
                    <Button variant='contained' color='success' sx={{ backgroundColor: "#2d892d", width: "110px", height: "40px", marginTop: "15px" }}>Filter</Button>
                </div>
                <div className='w-[100%] mt-[20px]'>
                    <h2 className='font-bold text-[18px] pl-[5px]'>Size</h2>
                    <ul className='w-[90%] mx-auto'>
                        <li className='flex justify-between items-center w-[100%] h-[40px]'><p>Small</p><span>(0)</span></li>
                        <li className='flex justify-between items-center w-[100%] h-[40px]'><p>Medium</p><span>(0)</span></li>
                        <li className='flex justify-between items-center w-[100%] h-[40px]'><p>Large</p><span>(0)</span></li>
                    </ul>
                </div>
                <div className='w-[90%] h-[350px] mx-auto mt-[10px]'>
                    <div className='superSale w-[100%]'></div>
                </div>
            </div>
            <div className='Cart w-[73%]'>
                <div className='w-[100%] h-[70px] border-b flex items-center justify-between'>
                    <ul className='flex items-center gap-10 font-semibold cursor-pointer'>
                        <li
                            className={`hover:text-green-600 border-b-[3px] ${activeTab === 'allPlants' ? 'border-green-600' : 'border-white'}`}
                            onClick={() => setActiveTab('allPlants')}
                        >
                            All Plants
                        </li>
                        <li
                            className={`hover:text-green-600 border-b-[3px] ${activeTab === 'newArrivals' ? 'border-green-600' : 'border-white'}`}
                            onClick={() => setActiveTab('newArrivals')}
                        >
                            New Arrivals
                        </li>
                        <li
                            className={`hover:text-green-600 border-b-[3px] ${activeTab === 'sale' ? 'border-green-600' : 'border-white'}`}
                            onClick={() => setActiveTab('sale')}
                        >
                            Sale
                        </li>
                    </ul>
                    <div className='flex items-center'>
                        <span>Sort by: </span>
                        <Select
                            value={sortOption}
                            onChange={handleSortChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{ marginLeft: '10px', color: 'black' }}
                        >
                            <MenuItem value="default">Default sorting</MenuItem>
                            <MenuItem value="name">Name</MenuItem>
                            <MenuItem value="price">Price</MenuItem>
                        </Select>
                    </div>
                </div>
                {renderContent()}
            </div>
        </div>
    );
}

export default Categoria;
