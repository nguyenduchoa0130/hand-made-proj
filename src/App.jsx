import React from 'react';
import { useRoutes } from 'react-router-dom';
import Footer from './core/layouts/footer';
import Header from './core/layouts/header';
import LoadingSpinner from './core/layouts/loading-spinner';
import Home from './pages/home';
import { ConfigProvider } from 'antd';
import Store from './pages/store';
import Intro from './pages/intro';

const App = () => {
  const routes = useRoutes([
    {
      path: '',
      element: <Home />,
    },
    {
      path: '/store',
      element: <Store />,
    },
    {
      path: '/intro',
      element: <Intro />,
    },
  ]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#74ABFA',
        },
      }}
    >
      <Header />
      <main>{routes}</main>
      <Footer />
      <LoadingSpinner />
    </ConfigProvider>
  );
};

export default App;
