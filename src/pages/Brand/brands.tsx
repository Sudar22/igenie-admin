import React, { useState, useEffect } from 'react';
import AllBrands from './allBrand';
import { BrandType } from './brandType';

const Brands: React.FC = () => {
    const [brand, setbrand] = useState<BrandType[]>([]);

    useEffect(() => {
        const brandsFromStorage = localStorage.getItem("brands");
        if (brandsFromStorage) {
            try {
                const parsedBrands: BrandType[] = JSON.parse(brandsFromStorage);
                setbrand(parsedBrands);
            } catch (error) {
                console.error("Error parsing categories from local storage:", error);
            }
        }
    }, []);

    // const handleDeleteCategory = (index: number) => {
    //     const updatedBrand = [...brand];
    //     updatedBrand.splice(index, 1);
    //     setbrand(updatedBrand);
    //     localStorage.setItem("categories", JSON.stringify(updatedBrand));
    // };

    return (
        <div>
            <AllBrands/>
        </div>
    );
};

export default Brands;
