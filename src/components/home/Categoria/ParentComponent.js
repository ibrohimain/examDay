import React, { useState } from 'react';
import AllPlants from './AllPlants';

const ParentComponent = () => {
    const [productsTotal, setProductsTotal] = useState([]);

    const addToCart = (product) => {
        setProductsTotal([...productsTotal, product]);
    };

    // Example data
    const currentItems = [
        { id: 1, image_url: 'image1.jpg', common_name: 'Plant 1', price: 20 },
        { id: 2, image_url: 'image2.jpg', common_name: 'Plant 2', price: 25 },
        // more items...
    ];

    const currentPage = 1;
    const totalPages = 5;

    const handleNext = () => {
        // handle next page logic
    };

    const handlePrevious = () => {
        // handle previous page logic
    };

    const renderPagination = () => {
        // render pagination logic
    };

    return (
        <AllPlants
            currentItems={currentItems}
            currentPage={currentPage}
            totalPages={totalPages}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            renderPagination={renderPagination}
            addToCart={addToCart}
        />
    );
};

export default ParentComponent;
