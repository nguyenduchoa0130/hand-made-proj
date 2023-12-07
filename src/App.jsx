import React from 'react';
import { useRoutes } from 'react-router-dom';
import LazyComponent from './core/components/lazy-component';

import AdminLayout from './core/layouts/admin-layout';
import LoadingSpinner from './core/layouts/loading-spinner';
import NonAuth from './core/layouts/non-auth';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import ChangePassword from './pages/change-password/ChangePassword';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import Home from './pages/home';

// Admin
import Carousels from './pages/admin/carousels';
import Coupons from './pages/admin/coupons';
import Dashboard from './pages/admin/dashboard';
import Orders from './pages/admin/orders';
import Products from './pages/admin/products';
import Users from './pages/admin/users';

// General
import Detail from './pages/detail';
import Information from './pages/information';
import Intro from './pages/intro';
import Order from './pages/order';
import Store from './pages/store';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <NonAuth />,
      children: [
        {
          path: '',
          index: true,
          element: <Home />,
        },
        {
          path: 'dang-nhap',
          element: <LazyComponent component={<Login />} />,
        },
        {
          path: 'dang-ky',
          element: <LazyComponent component={<Register />} />,
        },
        {
          path: 'thong-tin-ca-nhan',
          element: <LazyComponent component={<Information />} />,
        },
        {
          path: 'forgot-password',
          element: <LazyComponent component={<ForgotPassword />} />,
        },
        {
          path: 'cua-hang',
          element: <LazyComponent component={<Store />} />,
        },
        {
          path: 've-chung-toi',
          element: <LazyComponent component={<Intro />} />,
        },
        {
          path: 'don-hang',
          element: <LazyComponent component={<Order />} />,
        },
        {
          path: 'san-pham/:id',
          element: <LazyComponent component={<Detail />} />,
        },
      ],
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
