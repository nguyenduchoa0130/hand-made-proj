import React from 'react';
import { useRoutes } from 'react-router-dom';
import Footer from './core/layouts/footer';
import Header from './core/layouts/header';
import LoadingSpinner from './core/layouts/loading-spinner';
import Home from './pages/home';
import { ConfigProvider } from 'antd';

const App = () => {
  const routes = useRoutes([
    {
      path: '',
      element: <Home />,
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
