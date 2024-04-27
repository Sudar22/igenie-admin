import { Navigate, useRoutes } from "react-router-dom";
import ProductEditIndex from "../components/ishop@Admin/products/collections/productEdit/productEditIndex";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import Customers from "../pages/customers";
import Home from "../pages/home";
// import Home from "../pages/home";
import Analytics from "../pages/analytics";
import Marketing from "../pages/marketing";

import Login from "../auth/login";
import ProductPage from "../pages/products";
import { AddProduct } from "../sections/@Dashboard/products";
// import Signup from "../auth/signup";
import { Signup } from "../auth/signup";
import Brands from "../pages/Brand/brands";
import Categories from "../pages/categories/categories";
import { EditProfile } from "../pages/profile/editProfile";
import { SellerProfile } from "../pages/profile/profile";
import AddCollection from "../sections/@Dashboard/collection/addCollection";
// import { AddBrand } from "../pages/Brand/addBrand";
import AddBrand from "../pages/Brand/addBrand";
import Buyers from "../pages/Buyers";
import AddCategory from "../pages/categories/addCategory";
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
    { path: "/auth/login", element: <Login /> },
    { path: "/auth/signup", element: <Signup /> },
  ]);

  return <div>{routes}</div>;
}
