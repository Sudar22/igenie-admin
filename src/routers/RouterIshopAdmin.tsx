import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ProductEditIndex from "../components/ishop@Admin/products/collections/productEdit/productEditIndex";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import Home from "../pages/home";
import Customers from "../pages/customers";
// import Home from "../pages/home";
import Marketing from "../pages/marketing";
import RouterBreadcrumbs from "../layouts/dashboard/nav/navBreadcrumbs";
import Analytics from "../pages/analytics";

import ProductPage from "../pages/products";
import { AddProduct } from "../sections/@Dashboard/products";
import Login from "../auth/login";
// import Signup from "../auth/signup";
import AddCollection from "../sections/@Dashboard/collection/addCollection";
import { Signup } from "../auth/signup";
import { SellerProfile } from "../pages/profile/profile";
import { EditProfile } from "../pages/profile/editProfile";
import Categories from "../pages/categories/categories";
import Brands from "../pages/Brand/brands";
// import { AddBrand } from "../pages/Brand/addBrand";
import Buyers from "../pages/Buyers";
import AddCategory from "../pages/categories/addCategory";
import AddBrand from "../pages/Brand/addBrand";
// import Signup from "../auth/signup";



export default function RouterIshopAdmin() {



  const routes = useRoutes([
    {
      path: "/productsedit",
      element: <ProductEditIndex />,
    },

    
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    // { path: "/signup", element: <Signup/> },

    // {
    //   path: '/bread',
    //   element: <RouterBreadcrumbs />,
    // },



    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          element: <Navigate to="/dashboard/home" />, index: true,
        },
        { path: "home", element: <Home /> },
        { path: "buyers", element: <Buyers /> },
        { path: "products", element: <ProductPage /> },
        { path: "addcategory", element: <AddCategory   /> }, // Pass the onSave prop
        { path: "addbrand", element: <AddBrand   /> }, // Pass the onSave prop
        { path: "categories", element: <Categories /> }, // Pass an empty array initially
        { path: "brands", element: <Brands /> }, // Pass an empty array initially
        { path: "products/addproduct", element: <AddProduct /> },
        { path: "products/collections/addcollection", element: <AddCollection /> },



        { path: "customer", element: <Customers /> },
        { path: "profile", element: <SellerProfile /> },
        { path: "editprofile", element: <EditProfile /> },
        { path: "analytics", element: <Analytics /> },
        { path: "marketing", element: <Marketing /> },
      ],
    },
  ]);

  return <div>{routes}</div>;
}
