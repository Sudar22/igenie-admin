import { Navigate, useRoutes } from "react-router-dom";
import MarketPlace from "../pages/Ishop@Client/market/marketPlace";


export default function RouterIshopClient() {


    const routes = useRoutes([

        {

            path: '/marketplace',
            element: <MarketPlace />,
      
          },
    ]);
  return (
   <>{routes}</>
  )
}
