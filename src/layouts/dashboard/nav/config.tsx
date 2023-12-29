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
