import React from 'react';
import { useRoutes } from 'react-router-dom';
import LazyComponent from './core/components/lazy-component';

import AdminLayout from './core/layouts/admin-layout';
import LoadingSpinner from './core/layouts/loading-spinner';
import NonAuth from './core/layouts/non-auth';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import Home from './pages/home';

// Admin
import Carousels from './pages/admin/carousels';
import Coupons from './pages/admin/coupons';
import Dashboard from './pages/admin/dashboard';
import Orders from './pages/admin/orders';
import ProductTypes from './pages/admin/product-types';
import Products from './pages/admin/products';
import Users from './pages/admin/users';

// General
import Detail from './pages/detail';
import Information from './pages/information';
import Intro from './pages/intro';
import MyCart from './pages/my-cart';
import Order from './pages/order';
import OrderPayment from './pages/order-payment';
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
          path: 'quen-mat-khau',
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
          path: 'don-hang-cua-toi',
          element: <LazyComponent component={<Order />} />,
        },
        {
          path: 'gio-hang-cua-hoi',
          element: <LazyComponent component={<MyCart />} />,
        },
        {
          path: 'thanh-toan-don-hang',
          element: <LazyComponent component={<OrderPayment />} />,
        },
        {
          path: 'chi-tiet-san-pham/:id',
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
          path: 'tai-khoan',
          element: <LazyComponent component={<Users />} />,
        },
        {
          path: 'banner',
          element: <LazyComponent component={<Carousels />} />,
        },
        {
          path: 'khuyen-mai',
          element: <LazyComponent component={<Coupons />} />,
        },
        {
          path: 'don-hang',
          element: <LazyComponent component={<Orders />} />,
        },
        {
          path: 'san-pham',
          element: <LazyComponent component={<Products />} />,
        },
        {
          path: 'loai-san-pham',
          element: <LazyComponent component={<ProductTypes />} />,
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
