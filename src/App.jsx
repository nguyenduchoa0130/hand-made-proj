import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import LazyComponent from './core/components/lazy-component';
import AdminLayout from './core/layouts/admin-layout';
import LoadingSpinner from './core/layouts/loading-spinner';
import Home from './pages/home';

const Dashboard = lazy(() => import('./pages/admin/dashboard'));
const Users = lazy(() => import('./pages/admin/users'));
const Carousels = lazy(() => import('./pages/admin/carousels'));
const Coupons = lazy(() => import('./pages/admin/coupons'));
const Orders = lazy(() => import('./pages/admin/orders'));
const Products = lazy(() => import('./pages/admin/products'));

const App = () => {
  const routes = useRoutes([
    {
      path: '',
      element: <Home />,
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          path: '',
          index: true,
          element: <LazyComponent component={<Dashboard />} />,
        },
        {
          path: 'users',
          element: <LazyComponent component={<Users />} />,
        },
        {
          path: 'carousels',
          element: <LazyComponent component={<Carousels />} />,
        },
        {
          path: 'coupons',
          element: <LazyComponent component={<Coupons />} />,
        },
        {
          path: 'orders',
          element: <LazyComponent component={<Orders />} />,
        },
        {
          path: 'products',
          element: <LazyComponent component={<Products />} />,
        },
      ],
    },
  ]);

  return (
    <>
      {routes}
      <LoadingSpinner />
    </>
  );
};

export default App;
