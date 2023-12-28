// component
import SvgColor from '../../../svg-color';

// ----------------------------------------------------------------------

const icon = (name:string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Orders',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Products',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Customers',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Analytics',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Marketing',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
