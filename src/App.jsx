import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import LazyComponent from './core/components/lazy-component';

import AdminLayout from './core/layouts/admin-layout';
import LoadingSpinner from './core/layouts/loading-spinner';
import NonAuth from './core/layouts/non-auth';
import Home from './pages/home';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import ChangePassword from './pages/change-password/ChangePassword';
import ForgotPassword from './pages/forgot-password/ForgotPassword';

// Admin
const Dashboard = lazy(() => import('./pages/admin/dashboard'));
const Users = lazy(() => import('./pages/admin/users'));
const Carousels = lazy(() => import('./pages/admin/carousels'));
const Coupons = lazy(() => import('./pages/admin/coupons'));
const Orders = lazy(() => import('./pages/admin/orders'));
const Products = lazy(() => import('./pages/admin/products'));

// General
const Store = lazy(() => import('./pages/store'));
const Intro = lazy(() => import('./pages/intro'));
const Order = lazy(() => import('./pages/order'));
const Detail = lazy(() => import('./pages/detail'));
const Information = lazy(() => import('./pages/information'));

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
          path: 'login',
          element: <LazyComponent component={<Login />} />,
        },
        {
          path: 'register',
          element: <LazyComponent component={<Register />} />,
        },
        {
          path: 'information',
          element: <LazyComponent component={<Information />} />,
        },
        {
          path: 'change-password',
          element: <LazyComponent component={<ChangePassword />} />,
        },
        {
          path: 'forgot-password',
          element: <LazyComponent component={<ForgotPassword />} />,
        },
        {
          path: 'store',
          element: <LazyComponent component={<Store />} />,
        },
        {
          path: 'intro',
          element: <LazyComponent component={<Intro />} />,
        },
        {
          path: 'order',
          element: <LazyComponent component={<Order />} />,
        },
        {
          path: 'detail/:id',
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
