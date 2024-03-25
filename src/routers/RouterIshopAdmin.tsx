import { Navigate, useRoutes } from "react-router-dom";
import ProductEditIndex from "../components/ishop@Admin/products/collections/productEdit/productEditIndex";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import Analytics from "../pages/analytics";
import Customers from "../pages/customers";
import Home from "../pages/home";
import Marketing from "../pages/marketing";
// import Orders from "../pages/orders";
import ProductPage from "../pages/products";
import Collections from "../pages/products/collections";
import GiftCards from "../pages/products/giftCards";
import Inventory from "../pages/products/inventory";
import PurchaseOrders from "../pages/products/purchaseOrders";
import Tranfers from "../pages/products/tranfers";
import AddCollection from "../sections/@Dashboard/collection/addCollection";
import { AddProduct } from "../sections/@Dashboard/products";
import { SellerProfile } from "../pages/profile/profile";
import { EditProfile } from "../pages/profile/editProfile";
import Orders from "../pages/orders/orders";
import EditProduct from "../sections/@Dashboard/products/editProduct";

export default function RouterIshopAdmin() {
  const routes = useRoutes([
    {
      path: "/productsedit",
      element: <ProductEditIndex />,
    },

    {
      path: "/dashboard",
      element: <DashboardLayout />,

      children: [
        {
          element: <Navigate to="/dashboard/home" />,
          index: true,
        },
        { path: "home", element: <Home /> },
        { path: "orders", element: <Orders /> },
        { path: "products", element: <ProductPage /> },
        { path: "products/collections", element: <Collections /> },
        { path: "products/inventory", element: <Inventory /> },
        { path: "products/purchase/orders", element: <PurchaseOrders /> },
        { path: "products/transfers", element: <Tranfers /> },
        { path: "products/giftcards", element: <GiftCards /> },
        { path: "products/addproduct", element: <AddProduct /> },
        { path: "products/editproduct", element: <EditProduct /> },
        {
          path: "products/collections/addcollection",
          element: <AddCollection />,
        },
        

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
