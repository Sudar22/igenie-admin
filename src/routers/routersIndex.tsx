import { Navigate, useRoutes } from "react-router-dom";
import ProductEditIndex from "../components/ishop/products/collections/productEdit/productEditIndex";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import Home from "../pages/home";
import Orders from "../pages/orders";
import Products from "../pages/products";
import Customers from "../pages/customers";
import Analystics from "../pages/analystics";
import Marketing from "../pages/marketing";
import RouterBreadcrumbs from "../layouts/dashboard/nav/navBreadcrumbs";



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
        { path: "products", element: <Products/> },
        { path: "customer", element: <Customers/> },
        { path: "analytics", element: <Analystics/> },
        { path: "marketing", element: <Marketing/> },
      ],
    }
  ])




  return (
    <div>{routes}</div>
  )
}
