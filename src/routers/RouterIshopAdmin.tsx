import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ProductEditIndex from "../components/ishop@Admin/products/collections/productEdit/productEditIndex";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import Home from "../pages/home";
import Orders from "../pages/Buyers";
import Customers from "../pages/customers";
import Marketing from "../pages/marketing";
import RouterBreadcrumbs from "../layouts/dashboard/nav/navBreadcrumbs";
import Analytics from "../pages/analytics";
import ProductPage from "../pages/products";
import { AddProduct } from "../sections/@Dashboard/products";
import Login from "../auth/login";
import { Signup } from "../auth/signup";
import AddCollection from "../sections/@Dashboard/collection/addCollection";
import Buyers from "../pages/Buyers";
import { AddCategory } from "../pages/categories/addCategory";
import { AllCategories } from "../pages/categories/allCategories";
import Categories from "../pages/categories/categories";
import { AddBrand } from "../pages/Brand/addBrand";
import Brands from "../pages/Brand/brands";

export default function RouterIshopAdmin() {
  const handleCategorySave = (category: any) => {
    // Implement your logic to save the category
    console.log("Category saved:", category);
  };

  const routes = useRoutes([
    {
      path: "/productsedit",
      element: <ProductEditIndex />,
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/home" />, index: true },
        { path: "home", element: <Home /> },
        { path: "buyers", element: <Buyers /> },
        { path: "products", element: <ProductPage /> },
        { path: "addcategory", element: <AddCategory onSave={handleCategorySave}  /> }, // Pass the onSave prop
        { path: "addbrand", element: <AddBrand onSave={handleCategorySave}  /> }, // Pass the onSave prop
        { path: "categories", element: <Categories /> }, // Pass an empty array initially
        { path: "brands", element: <Brands /> }, // Pass an empty array initially
        { path: "products/addproduct", element: <AddProduct /> },
        { path: "products/collections/addcollection", element: <AddCollection /> },
        { path: "customer", element: <Customers /> },
        { path: "analytics", element: <Analytics /> },
        { path: "marketing", element: <Marketing /> },
      ],
    },
  ]);

  return <div>{routes}</div>;
}
