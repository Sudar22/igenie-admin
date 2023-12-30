// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name:string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/home',
    icon: icon('ic_home'),
  },
  {
    title: 'Orders',
    path: '/dashboard/orders',
    icon: icon('ic_orders'),
  },
  {
    title: 'Products',
    path: '/dashboard/products',
    icon: icon('ic_product'),
    nestedRoutes: [

      
      {
        title: 'Collections',
        path: '/dashboard/products/collections',
        icon: icon('ic_pending_orders'),
      },
      {
        title: 'Inventory',
        path: '/dashboard/products/inventory',
        icon: icon('ic_completed_orders'),
      },
      {
        title: 'Purchase orders',
        path: '/dashboard/products/purchase/orders',
        icon: icon('ic_completed_orders'),
      },


      {
        title: 'Transfers',
        path: '/dashboard/products/transfers',
        icon: icon('ic_completed_orders'),
      },
      {
        title: 'Gift cards',
        path: '/dashboard/products/giftcards',
        icon: icon('ic_completed_orders'),
      },




    ],
  },
  {
    title: 'Customers',
    path: '/dashboard/customer',
    icon: icon('ic_customers'),
  },
  {
    title: 'Analytics',
    path: '/dashboard/analytics',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Marketing',
    path: '/dashboard/marketing',
    icon: icon('ic_market'),
  },

];

export default navConfig;
