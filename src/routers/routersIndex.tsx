import { Navigate, useRoutes } from "react-router-dom";
import ProductEditIndex from "../components/ishop/products/collections/productEdit/productEditIndex";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import Home from "../pages/home";
import Orders from "../pages/orders";
import Customers from "../pages/customers";
import Marketing from "../pages/marketing";
import RouterBreadcrumbs from "../layouts/dashboard/nav/navBreadcrumbs";
import Analytics from "../pages/analytics";
import Collections from "../pages/products/collections";
import Inventory from "../pages/products/inventory";
import PurchaseOrders from "../pages/products/purchaseOrders";
import Tranfers from "../pages/products/tranfers";
import GiftCards from "../pages/products/giftCards";
import ProductPage from "../pages/products";
import { AddProduct } from "../sections/@Dashboard/products";



export default function RouterIndex() {



  const routes = useRoutes([
  
    {

      path: '/productsedit',
      element: <ProductEditIndex />,

    },
    // {
    //   path: '/bread',
    //   element: <RouterBreadcrumbs />,
    // },
    {
      path: '/dashboard',
      element: <DashboardLayout />,

      children: [
        {
          element: <Navigate to="/dashboard/home" />, index: true,
        },
        { path: "home", element: <Home/> },
        { path: "orders", element: <Orders/> },
        { path: "products", element: <ProductPage/> },
        { path: "products/collections", element: <Collections/> },
        { path: "products/inventory", element: <Inventory/> },
        { path: "products/purchase/orders", element: <PurchaseOrders/> },
        { path: "products/transfers", element: <Tranfers/> },
        { path: "products/giftcards", element: <GiftCards/> },
        { path: "products/addproduct", element: <AddProduct/> },
        
        
        
        { path: "customer", element: <Customers/> },
        { path: "analytics", element: <Analytics/> },
        { path: "marketing", element: <Marketing/> },
      ],
    }
  ])




  return (
    <div>{routes}</div>
  )
}
