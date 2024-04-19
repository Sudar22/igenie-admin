import React, { useState, useEffect } from 'react';
import AllCategories, { AllBrand } from './allBrand';

interface Category {
    name: string;
    alias: string;
    parentCategory: string;
    image: string;
    enable: boolean;
    // Add more properties as needed
}

const Brands: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const categoriesFromStorage = localStorage.getItem("categories");
        if (categoriesFromStorage) {
            try {
                const parsedCategories: Category[] = JSON.parse(categoriesFromStorage);
                setCategories(parsedCategories);
            } catch (error) {
                console.error("Error parsing categories from local storage:", error);
            }
        }
    }, []);

    const handleDeleteCategory = (index: number) => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
        localStorage.setItem("categories", JSON.stringify(updatedCategories));
    };

    return (
        <div>
            <AllBrand categories={categories} onDeleteCategory={handleDeleteCategory}/>
        </div>
    );
};

export default Brands;
