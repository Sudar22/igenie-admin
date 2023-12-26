import { useRoutes } from "react-router-dom";
import ProductEditIndex from "../components/ishop/products/collections/productEdit/productEditIndex";



export default function RouterIndex() {

    interface Route {
        path: string;
        element: React.ReactElement;
      }

    const routes :Route[] = [
      {  path: '/productsedit',
        element: <ProductEditIndex/>,}
    ]


    const matchedRoute = useRoutes(routes);
   

  return (
    <div>{matchedRoute}</div>
  )
}
