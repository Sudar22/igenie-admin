import React, { useState, useEffect } from 'react';
import AllCategories from './allCategories';
import { CategoryType } from './categoryType';

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        const categoriesFromStorage = localStorage.getItem("categories");
        if (categoriesFromStorage) {
            try {
                const parsedCategories: CategoryType[] = JSON.parse(categoriesFromStorage);
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
            <AllCategories/>
        </div>
    );
};

export default Categories;
