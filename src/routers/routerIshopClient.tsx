import { Navigate, useRoutes } from "react-router-dom";


export default function RouterIshopClient() {


    const routes = useRoutes([

        {

            // path: '/productsedit',
            // element: <ProductEditIndex />,
      
          },
    ]);
  return (
   <>{routes}</>
  )
}
